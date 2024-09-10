export type ProductAdminEditMeasureProps = {
  isOpen: boolean;
  onClose: () => void;
  isEdit: boolean;
  measure: {
    measureId: number;
    measureCode: string;
    measureName: string;
    categoryName: string;
    abbriviation: string;
    measureYear: string;
    weightCategoryId: number;
    correlation: number;
    weighingCategoryId: number;
    startDataFrame: string;
    endDataFrame: string;
    lookupMapping: {
      lookupMappingId: number;
      lookupId: number;
      measureId: number;
    }[];
    measureThreshold: {
      thresholdId: number;
      measureId: number;
      starRating: string;
      thresholdValue: number;
      OrganizationType: string;
    }[];
  } | null;
};
