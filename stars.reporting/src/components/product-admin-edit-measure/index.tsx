import { MeasureType, Threshold, fetchMeasureData, postMeasureData, updateMeasureData } from '@/redux/measure';
import { AppDispatch } from '@/redux/store.type';
import { Option } from '@/utils/common/common.type';
import { extractDefaultValueForLookupType, getMeasureThreshold } from '@/utils/common/helper';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclButton, AclModal, useAclSnackbar } from '@acl/ui';
import { SelectChangeEvent } from '@mui/material';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductAdminMeasureForm from '../product-admin-measure-form';
import { MEASURE_BOX_STYLE, MEASURE_CLOSE_BUTTON_STYLE } from './product-admin-edit-measure-constant';
import ProductAdmineditMeasureStyles from './product-admin-edit-measure.module.css';
import { ProductAdminEditMeasureProps } from './product-admin-measure.type';

const ProductAdminEditMeasure = (props: ProductAdminEditMeasureProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const lookup = useAppSelector((state) => state.lookup);
  const { enqueueSnackbar } = useAclSnackbar();
  const [updatedMeasure, setUpdatedMeasure] = useState<MeasureType | null>({
    measureId: 0,
    measureCode: '',
    measureName: '',
    categoryName: '',
    abbriviation: '',
    measureYear: '',
    weightCategoryId: 0,
    correlation: 0,
    weighingCategoryId: 0,
    startDataFrame: '',
    endDataFrame: '',
    lookupMapping: [],
    measureThreshold: [
      {
        thresholdId: 0,
        measureId: 0,
        starRating: '1 star',
        thresholdValue: 0,
        OrganizationType: '',
      },
      {
        thresholdId: 0,
        measureId: 0,
        starRating: '2 star',
        thresholdValue: 0,
        OrganizationType: '',
      },
      {
        thresholdId: 0,
        measureId: 0,
        starRating: '3 star',
        thresholdValue: 0,
        OrganizationType: '',
      },
      {
        thresholdId: 0,
        measureId: 0,
        starRating: '4 star',
        thresholdValue: 0,
        OrganizationType: '',
      },
      {
        thresholdId: 0,
        measureId: 0,
        starRating: '5 star',
        thresholdValue: 0,
        OrganizationType: '',
      },
    ],
  });
  const categoryValues = lookup.data?.categoryLookup ?? [];
  const subcategoryValues = lookup.data?.subcategoryLookup ?? [];
  const reportingRequirementsValues = lookup.data?.reportingRequirementsLookup ?? [];
  const measureTypeValues = lookup.data?.measureTypeLookup ?? [];
  const domainTypeValues = lookup.data?.domainTypelookup ?? [];
  const weighingCategoryValues = lookup.data?.weighingCategoryLookup ?? [];
  const generalTrendValues = lookup.data?.generalTrendLookup ?? [];
  const defaultValues = {
    category: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          categoryValues,
          false,
          'MeasureCategory',
        ) as Option)
      : undefined,
    subcategory: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          subcategoryValues,
          false,
          'SubMeasureCategory',
        ) as Option)
      : undefined,
    weighingCategory: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          weighingCategoryValues,
          false,
          'WeighingCategory',
        ) as Option)
      : undefined,
    domainType: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          domainTypeValues,
          false,
          'DomainType',
        ) as Option)
      : undefined,
    measureType: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          measureTypeValues,
          false,
          'MeasureType',
        ) as Option)
      : undefined,
    generalTrend: props.measure?.lookupMapping
      ? (extractDefaultValueForLookupType(
          props.measure?.lookupMapping,
          generalTrendValues,
          false,
          'GeneralTrend',
        ) as Option)
      : undefined,
  };
  const defaultFieldValues = {
    category: defaultValues?.category?.id ?? 0,
    subcategory: defaultValues?.subcategory?.id ?? 0,
    weighingCategory: defaultValues?.weighingCategory?.id ?? 0,
    domainType: defaultValues?.domainType?.id ?? 0,
    measureType: defaultValues?.measureType?.id ?? 0,
    generalTrend: defaultValues?.generalTrend?.id ?? 0,
  };
  const reportingRequirements = extractDefaultValueForLookupType(
    props.measure?.lookupMapping ?? [],
    reportingRequirementsValues,
    true,
    'ReportingRequirements',
  ) as Option[] | undefined;
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | number | undefined | null }>(
    defaultFieldValues,
  );
  const [selectedMultiple, setSelectedMultiple] = useState<{
    [key: string]: string | number | string[] | number[];
  }>({
    reportingRequirements: reportingRequirements ? reportingRequirements?.map((item: Option) => item.id) : [],
  });

  const handleSave = async () => {
    if (updatedMeasure) {
      try {
        await dispatch(postMeasureData(updatedMeasure)).unwrap();
        props.onClose();
        await dispatch(fetchMeasureData({ measureYear: 2024 })).unwrap();
        enqueueSnackbar(<div>Measure created successfully</div>, { variant: 'success' });
      } catch (error) {
        console.error('Failed to save measure data:', error);
        enqueueSnackbar(
          <div>
            Failed to save measure data.
            <br />
            Please fill the required details with proper values.
          </div>,
          { variant: 'error', autoHideDuration: 3000 },
        );
      }
    }
  };

  const handleUpdate = async () => {
    if (updatedMeasure) {
      try {
        await dispatch(updateMeasureData(updatedMeasure)).unwrap();
        props.onClose();
        await dispatch(fetchMeasureData({ measureYear: 2024 })).unwrap();
        enqueueSnackbar(<div>Measure updated successfully</div>, { variant: 'success' });
      } catch (error) {
        console.error('Failed to save measure data:', error);
        enqueueSnackbar(
          <div>
            Failed to update measure data.
            <br />
            Please fill the required details with proper values.
          </div>,
          { variant: 'error', autoHideDuration: 3000 },
        );
      }
    }
  };

  const handleInputChange = (field: keyof MeasureType, value: string | number | undefined) => {
    if (value === undefined) return;
    const measureChange = {
      ...updatedMeasure,
      [field]: value,
    };
    setUpdatedMeasure(measureChange as MeasureType);
  };

  const handleInputDateChange = (field: keyof MeasureType, value: Date | null) => {
    if (value === null) return;
    const measureDate = format(value, 'yyyy-MM-dd');
    let measureChange = {
      ...updatedMeasure,
      [field]: measureDate,
    };

    if (field == 'startDataFrame') {
      measureChange = {
        ...measureChange,
        ['measureYear']: measureDate,
      };
    }

    setUpdatedMeasure(measureChange as MeasureType);
  };

  const handleLookupMappingChange = (value: string | number, prevValue: number | string | undefined | null) => {
    let measureChange = { ...updatedMeasure };
    const filteredLookupMapping =
      updatedMeasure?.lookupMapping?.filter((mapping) => mapping.lookupId != prevValue) || [];
    const existingMapping = filteredLookupMapping.find((mapping) => mapping.lookupId === value);

    if (!existingMapping) {
      filteredLookupMapping.push({
        lookupMappingId: 0,
        lookupId: typeof value == 'number' ? value : parseInt(value),
        measureId: updatedMeasure?.measureId ?? 0,
      });
    }

    measureChange = {
      ...measureChange,
      lookupMapping: filteredLookupMapping,
    };

    setUpdatedMeasure(measureChange as MeasureType);
  };

  const handleDropdownChange = (field: string, value: SelectChangeEvent<string | string[]>) => {
    const prevValue = selectedValues[field];
    const selectedString = JSON.stringify(value.target.value);
    const selectedObject = JSON.parse(selectedString);
    const newValue = typeof selectedObject == 'object' ? (selectedObject.id as string) : 0;
    handleLookupMappingChange(newValue, prevValue);
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
  };

  const handleDropdownChangeMultiple = (field: string, event: SelectChangeEvent<string | string[]>) => {
    const newValue = event.target.value;
    const prevValue = selectedMultiple[field];
    let measureChange = { ...updatedMeasure };
    const newValues = Array.isArray(newValue) ? newValue : [newValue];
    const prevValues = Array.isArray(prevValue) ? prevValue : [prevValue];
    const filteredLookupMapping =
      updatedMeasure?.lookupMapping?.filter((mapping) => !prevValues.includes(mapping.lookupId)) || [];
    const selectedIds: string[] = [];
    newValues.forEach((value) => {
      const existingMapping = filteredLookupMapping.find(
        (mapping) => mapping.lookupId == parseInt(JSON.parse(JSON.stringify(value)).id),
      );
      const lookupId = JSON.stringify(value);
      selectedIds.push(JSON.parse(lookupId).id);

      if (!existingMapping) {
        filteredLookupMapping.push({
          lookupMappingId: 0,
          lookupId: parseInt(JSON.parse(lookupId).id),
          measureId: updatedMeasure?.measureId ?? 0,
        });
      }
    });
    measureChange = {
      ...measureChange,
      lookupMapping: filteredLookupMapping,
    };

    setUpdatedMeasure(measureChange as MeasureType);

    setSelectedMultiple((prevValues) => ({
      ...prevValues,
      [field]: selectedIds,
    }));
  };

  const handleThresholdChange = (
    index: number,
    field: keyof MeasureType['measureThreshold'][number],
    value: string | number,
  ) => {
    const updatedThresholds = updatedMeasure?.measureThreshold?.map((threshold, i) =>
      i === index ? { ...threshold, [field]: value } : threshold,
    );
    const measureChange = {
      ...updatedMeasure,
      measureThreshold: updatedThresholds,
    };

    setUpdatedMeasure(measureChange as MeasureType);
  };

  useEffect(() => {
    if (props.measure) {
      let updatedMeasure = { ...props.measure } as MeasureType;
      const measureThresholds = getMeasureThreshold(props.measure?.measureThreshold);
      const thresholds = measureThresholds.map(([starRating, thresholdValue]) => ({
        thresholdId: 0,
        measureId: props.measure?.measureId,
        starRating,
        thresholdValue,
        OrganizationType: '',
      }));
      updatedMeasure = {
        ...updatedMeasure,
        measureThreshold: thresholds as Threshold[],
      };
      setUpdatedMeasure(updatedMeasure as MeasureType);
    }
  }, [props.measure]);

  return (
    <>
      <AclModal
        className={ProductAdmineditMeasureStyles['modal-wrapper']}
        openModal={props.isOpen}
        toggleOpenModal={props.onClose}
        modalDisplayStyle={MEASURE_BOX_STYLE}
        closeIconPosition={MEASURE_CLOSE_BUTTON_STYLE}
      >
        <div className={ProductAdmineditMeasureStyles['text-wrapper']}>
          <div>
            <h3>{props.isEdit ? 'Edit' : 'Add'} Measure</h3>
          </div>
          <ProductAdminMeasureForm
            measure={props.measure}
            readonly={false}
            defaultLookupValues={defaultValues}
            reportingRequirements={reportingRequirements}
            handleInputChange={handleInputChange}
            handleInputDateChange={handleInputDateChange}
            handleDropdownChange={handleDropdownChange}
            handleDropdownChangeMultiple={handleDropdownChangeMultiple}
            handleThresholdChange={handleThresholdChange}
          />
        </div>
        <div className={ProductAdmineditMeasureStyles['button-wrapper']}>
          <AclButton variant="contained" onClick={() => (props.isEdit ? handleUpdate() : handleSave())}>
            {props.isEdit ? 'Update' : 'Save'}
          </AclButton>
          <AclButton variant="outlined" onClick={() => props.onClose()}>
            Cancel
          </AclButton>
        </div>
      </AclModal>
    </>
  );
};

export default ProductAdminEditMeasure;
