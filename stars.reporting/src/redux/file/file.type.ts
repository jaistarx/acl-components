import { SerializedError } from '@reduxjs/toolkit';

export type FileState = {
  data: { fileProcessing: FileProcessingData[] | []; uploadedFiles: UploadedFilesData[] | [] };
  loading: boolean;
  error: SerializedError | null;
};

export type GetFileProcessingParam = { measureDate: string };

export type GetUploadedFilesParam = GetFileProcessingParam;

export type FileProcessingData = {
  fileProcessingId: number;
  fileName: string | null;
  uploadDate: string | null;
  fileSize: number | null;
  measureDate: string | null;
  fileType:
    | 'Part C Cutpoints'
    | 'Part D Cutpoints'
    | 'Disenrollment'
    | 'Domain Stars'
    | 'Measure Data'
    | 'Measure Star'
    | 'CAI'
    | 'Summary Rating'
    | 'High Performing Contracts'
    | 'Low Performing Contracts'
    | 'Blue Plans'
    | 'Monthly Enrollment'
    | 'Monthly CPSC Contract Info'
    | 'Monthly CPSC Enrollment'
    | 'Monthly SCC PDP Enrollment'
    | 'Monthly SCC MA Enrollment'
    | null;
  fileStatus: 'Uploaded' | 'Processing' | 'Completed' | 'Error' | 'Yet to Upload' | null;
  fileExtension: 'csv' | 'svg' | 'pdf' | 'txt' | 'excel' | null;
  errorCode: string | null;
  errorDescription: string | null;
  errorStatus: string | null;
  fileFrequency: 'Yearly' | 'Monthly' | null;
  createdBy: string | null;
  createdOn: string | null;
  updatedBy: string | null;
  updatedOn: string | null;
};

export type UploadedFilesData = {
  fileId: number;
  requirements: string | null;
  originalFileName: string | null;
  fileName: string | null;
  fileType:
    | 'PartCCutpoints'
    | 'PartDCutpoints'
    | 'Disenrollment'
    | 'DomainStars'
    | 'MeasureData'
    | 'MeasureStar'
    | 'CAI'
    | 'SummaryRating'
    | 'HighPerformingContracts'
    | 'LowPerformingContracts'
    | 'BluePlans'
    | 'MonthlyEnrollment'
    | 'MonthlyCPSCContractInfo'
    | 'MonthlyCPSCEnrollment'
    | 'MonthlySCCPDPEnrollment'
    | 'MonthlySCCMAEnrollment'
    | null;
  fileFrequency: 'Yearly' | 'Monthly' | null;
  categoryType: string | null;
  fileExtension: 'csv' | 'svg' | 'pdf' | 'txt' | 'excel' | null;
  measureDate: string | null;
  uploadDate: string | null;
  fileSize: string | null;
  createdBy: string | null;
  createdOn: string | null;
  updatedBy: string | null;
  updatedOn: string | null;
  actions: null;
};
