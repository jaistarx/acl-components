import ChevronDownIcon from '@/assets/images/chevron-down.svg';
import DeleteOutlineIcon from '@/assets/images/delete-outline.svg';
import { AclAccordion, AclAccordionDetails, AclAccordionSummary, AclIcon, AclIconButton, Option } from '@acl/ui';
import React from 'react';
import ProductAdminMeasureStyles from './product-admin-measure.module.css';
import { ProductAdminMeasureProps } from './product-admin-measure.type';
import ProductAdminMeasureForm from '../product-admin-measure-form';
import MeasureEditIcon from '@/assets/images/edit-icon.svg';
import { extractDefaultValueForLookupType } from '@/utils/common/helper';
import useAppSelector from '@/utils/hooks/app-selector';

const ProductAdminMeasure = (props: ProductAdminMeasureProps) => {
  const lookup = useAppSelector((state) => state.lookup);
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
  const reportingRequirements = extractDefaultValueForLookupType(
    props.measure?.lookupMapping,
    reportingRequirementsValues,
    true,
    'ReportingRequirements',
  ) as Option[] | undefined;
  return (
    <>
      <AclAccordion disableGutters expanded={props.expanded} onChange={props.onChange}>
        <AclAccordionSummary
          aria-controls={props.measure.measureId + '-panel-content'}
          id={props.measure.measureId + '-panel-header'}
        >
          <div className={ProductAdminMeasureStyles['accordion-summary']}>
            <div
              className={ProductAdminMeasureStyles['accordion-summary-name']}
            >{`${props.measure.measureCode} : ${props.measure.measureName}`}</div>
            <div className={ProductAdminMeasureStyles['accordion-summary-icon-wrapper']}>
              <AclIconButton
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  props.onEditClick();
                }}
              >
                <AclIcon src={MeasureEditIcon} />
              </AclIconButton>
              <AclIconButton
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
              >
                <AclIcon src={DeleteOutlineIcon} />
              </AclIconButton>
              <AclIcon
                src={ChevronDownIcon}
                className={`${ProductAdminMeasureStyles['accordion-summary-icon']} ${
                  props.expanded ? ProductAdminMeasureStyles['accordion-summary-icon-expanded'] : ''
                }`}
              />
            </div>
          </div>
        </AclAccordionSummary>
        <AclAccordionDetails className={ProductAdminMeasureStyles['accordion-summary-details']}>
          <ProductAdminMeasureForm
            measure={props.measure}
            readonly={props.readOnly}
            defaultLookupValues={defaultValues}
            reportingRequirements={reportingRequirements}
          />
        </AclAccordionDetails>
      </AclAccordion>
    </>
  );
};

export default ProductAdminMeasure;
