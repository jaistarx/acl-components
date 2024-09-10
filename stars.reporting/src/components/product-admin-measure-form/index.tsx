import { LookupItem } from '@/redux/lookup';
import { MeasureType } from '@/redux/measure';
import { getMeasureThreshold } from '@/utils/common/helper';
import useAppSelector from '@/utils/hooks/app-selector';
import AclDatePicker from '@acl/ui/components/aclDatepicker/aclDatepicker';
import AclDropdownV2 from '@acl/ui/components/aclDropdownV2';
import AclInput from '@acl/ui/components/aclInput';
import { SelectChangeEvent } from '@mui/material';
import { parseISO } from 'date-fns';
import React, { useState } from 'react';
import LookupActionModal from '../product-admin/lookup-action-modal';
import ProductAdminMeasureFormStyles from './product-admin-measure-form.module.css';
import { ProductAdminMeasureFormProps, ProductAdminModalValues } from './product-admin-measure-form.type';

const ProductAdminMeasureForm = (props: ProductAdminMeasureFormProps) => {
  const lookup = useAppSelector((state) => state.lookup);
  const [modalValues, setModalValues] = useState<ProductAdminModalValues>({
    modalName: '',
    lookupName: '',
    lookupValue: '',
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const categoryValues = lookup.data?.categoryLookup ?? [];
  const subcategoryValues = lookup.data?.subcategoryLookup ?? [];
  const reportingRequirementsValues = lookup.data?.reportingRequirementsLookup ?? [];
  const measureTypeValues = lookup.data?.measureTypeLookup ?? [];
  const domainTypeValues = lookup.data?.domainTypelookup ?? [];
  const weighingCategoryValues = lookup.data?.weighingCategoryLookup ?? [];
  const generalTrendValues = lookup.data?.generalTrendLookup ?? [];
  const { measure, readonly } = props;
  const defaultLookupValues = props.defaultLookupValues;
  const reportingRequirements = props.reportingRequirements;
  const initialWeight = measure?.weightValue ?? '0';
  const [weight, setWeight] = useState<string>(initialWeight);

  const handleInputChange = (field: keyof MeasureType, value: string | number | undefined) => {
    if (props.handleInputChange) {
      props.handleInputChange(field, value);
    }
  };

  const handleInputDateChange = (field: keyof MeasureType, value: Date | null) => {
    if (props.handleInputDateChange) {
      props.handleInputDateChange(field, value);
    }
  };

  const handleDropdownChange = (field: string, value: SelectChangeEvent<string | string[]>) => {
    if (props.handleDropdownChange) {
      if (field == 'weighingCategory') {
        const selectedString = JSON.stringify(value.target.value);
        const selectedObject = JSON.parse(selectedString);
        const weighingCategory = typeof selectedObject == 'object' ? (selectedObject.value as string) : '';
        const weightValue = weighingCategory.split('-')[1]?.trim() || '0';
        setWeight(weightValue);
      }

      props.handleDropdownChange(field, value);
    }
  };

  const handleDropdownChangeMultiple = (field: string, event: SelectChangeEvent<string | string[]>) => {
    if (props.handleDropdownChangeMultiple) {
      props.handleDropdownChangeMultiple(field, event);
    }
  };

  const handleThresholdChange = (
    index: number,
    field: keyof MeasureType['measureThreshold'][number],
    value: string | number,
  ) => {
    if (props.handleThresholdChange) {
      props.handleThresholdChange(index, field, value);
    }
  };

  const handleOptionsAction = (
    action: 'edit' | 'delete' | 'add',
    lookupName: string,
    lookupValue?: string,
    originalValues?: LookupItem,
  ) => {
    switch (action) {
      case 'add':
        setModalValues({ modalName: 'Add', lookupName, lookupValue, originalValues });
        break;
      case 'edit':
        setModalValues({ modalName: 'Edit', lookupName, lookupValue, originalValues });
        break;
    }

    setOpenModal(true);
  };

  return (
    <>
      <div className={ProductAdminMeasureFormStyles['accordion-details-single-block-wrapper']}>
        <div
          className={`${ProductAdminMeasureFormStyles['accordion-details-single-block']} ${ProductAdminMeasureFormStyles['accordion-details-single-block-first-level']}`}
        >
          <span>Code</span>
          <AclInput
            name="measureCode"
            className={ProductAdminMeasureFormStyles['measure-input']}
            size="small"
            defaultValue={measure?.measureCode}
            inputProps={{ readOnly: readonly }}
            onChange={(e) => handleInputChange('measureCode', e.target.value)}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Category</span>
          <AclDropdownV2
            options={readonly ? (defaultLookupValues?.category ? [defaultLookupValues.category] : []) : categoryValues}
            multiple={false}
            defaultValue={defaultLookupValues?.category}
            onClickOptionsAction={handleOptionsAction}
            onChange={(value) => handleDropdownChange('category', value)}
            label="Category"
            name="category"
            size="small"
            readOnly={readonly}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Sub-Category</span>
          <AclDropdownV2
            name="subcategory"
            options={subcategoryValues}
            onClickOptionsAction={handleOptionsAction}
            label="Sub-Category"
            defaultValue={defaultLookupValues?.subcategory}
            onChange={(value) => handleDropdownChange('subcategory', value)}
            size="small"
            readOnly={readonly}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Name</span>
          <AclInput
            size="small"
            defaultValue={measure?.measureName}
            inputProps={{ readOnly: readonly }}
            onChange={(e) => handleInputChange('measureName', e.target.value)}
          />
        </div>
        <div
          className={`${ProductAdminMeasureFormStyles['accordion-details-single-block']} ${ProductAdminMeasureFormStyles['accordion-details-single-block-first-level']}`}
        >
          <span>Abbreviation</span>
          <AclInput
            className={ProductAdminMeasureFormStyles['measure-input']}
            size="small"
            defaultValue={measure?.abbriviation}
            inputProps={{ readOnly: readonly }}
            onChange={(e) => handleInputChange('abbriviation', e.target.value)}
          />
        </div>
        <div
          className={`${ProductAdminMeasureFormStyles['accordion-details-single-block']} ${ProductAdminMeasureFormStyles['accordion-details-single-block-first-level']}`}
        >
          <span>Correlation</span>
          <AclInput
            className={ProductAdminMeasureFormStyles['measure-input']}
            size="small"
            defaultValue={measure?.correlation}
            inputProps={{ readOnly: readonly }}
            onChange={(e) => handleInputChange('correlation', e.target.value)}
          />
        </div>

        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Thresholds</span>
          <div className={ProductAdminMeasureFormStyles['accordion-details-threshold-block']}>
            {getMeasureThreshold(measure?.measureThreshold)?.map(([starRating, thresholdValue], index) => (
              <div key={index} className={ProductAdminMeasureFormStyles['threshold-row']}>
                <label>{starRating}</label>
                <AclInput
                  name={`threshold-${index}`}
                  className={ProductAdminMeasureFormStyles['threshold-input']}
                  size="small"
                  defaultValue={thresholdValue}
                  onChange={(e) => handleThresholdChange(index, 'thresholdValue', e.target.value)}
                />
                %
              </div>
            ))}
          </div>
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Weighing Category</span>
          <AclDropdownV2
            name="weighingCategory"
            options={weighingCategoryValues}
            defaultValue={defaultLookupValues?.weighingCategory}
            onClickOptionsAction={handleOptionsAction}
            label="weighing category"
            size="small"
            readOnly={readonly}
            onChange={(value) => handleDropdownChange('weighingCategory', value)}
          />
        </div>
        <div
          className={`${ProductAdminMeasureFormStyles['accordion-details-single-block']} ${ProductAdminMeasureFormStyles['accordion-details-single-block-first-level']}`}
        >
          <span>Weight{' (1 - 3)'}</span>
          <AclInput size="small" value={weight} inputProps={{ readOnly: readonly }} />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Reporting Requirements</span>
          <AclDropdownV2
            name="reportingRequirements"
            options={reportingRequirementsValues}
            defaultValue={reportingRequirements}
            onClickOptionsAction={handleOptionsAction}
            onChange={(value) => handleDropdownChangeMultiple('reportingRequirement', value)}
            label="Reporting Requirements"
            size="small"
            readOnly={readonly}
            multiple={true}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Measure Type</span>
          <AclDropdownV2
            name="measureType"
            options={measureTypeValues}
            defaultValue={defaultLookupValues?.measureType}
            onClickOptionsAction={handleOptionsAction}
            onChange={(value) => handleDropdownChange('measureType', value)}
            label="Measure Type"
            size="small"
            readOnly={readonly}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Domain Type</span>
          <AclDropdownV2
            name="domainType"
            options={domainTypeValues}
            defaultValue={defaultLookupValues?.domainType}
            onClickOptionsAction={handleOptionsAction}
            onChange={(value) => handleDropdownChange('domainType', value)}
            label="Domain Type"
            size="small"
            readOnly={readonly}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>General Trend</span>
          <AclDropdownV2
            name="generalTrend"
            options={generalTrendValues}
            multiple={false}
            defaultValue={defaultLookupValues?.generalTrend}
            onClickOptionsAction={handleOptionsAction}
            label="general trend"
            size="small"
            readOnly={readonly}
            onChange={(value) => handleDropdownChange('generalTrend', value)}
          />
        </div>
        <div className={ProductAdminMeasureFormStyles['accordion-details-single-block']}>
          <span>Data Time Frame</span>
          <div className={ProductAdminMeasureFormStyles['accordion-details-date-block']}>
            <div className={ProductAdminMeasureFormStyles['accordion-details-date-row']}>
              <label>Start date</label>
              <AclDatePicker
                name="startDataFrame"
                className={ProductAdminMeasureFormStyles['measure-date-picker']}
                readOnly={readonly}
                onAccept={(date: Date | null) => handleInputDateChange('startDataFrame', date)}
                value={measure?.startDataFrame ? parseISO(measure.startDataFrame) : null}
              />
            </div>
            <div className={ProductAdminMeasureFormStyles['accordion-details-date-row']}>
              <label>End date</label>
              <AclDatePicker
                className={ProductAdminMeasureFormStyles['measure-date-picker']}
                readOnly={readonly}
                onAccept={(date: Date | null) => handleInputDateChange('endDataFrame', date)}
                value={measure?.endDataFrame ? parseISO(measure.endDataFrame) : null}
              />
            </div>
          </div>
        </div>
      </div>
      <LookupActionModal openModal={openModal} setOpenModal={setOpenModal} {...modalValues} />
    </>
  );
};

export default ProductAdminMeasureForm;
