import BcbsmIcon from '@/assets/images/bcbsm-Logo-icon.svg';
import CsvIcon from '@/assets/images/csv-icon.svg';
import ExcelIcon from '@/assets/images/excel-icon.svg';
import PdfIcon from '@/assets/images/pdf-icon.svg';
import TxtIcon from '@/assets/images/txt-icon.svg';
import {
  FormattedMeasureThreshold,
  MeasureThreshold,
} from '@/components/product-admin-measure-form/product-admin-measure-form.type';
import { FileProcessingData } from '@/redux/file';
import { LookupItem } from '@/redux/lookup';
import { LookupMapping } from '@/redux/measure';
import store from '@/redux/store';
import { ClientRoles, UserState } from '@/redux/user';
import AclThemeProvider from '@acl/ui/common/aclThemeProvider/aclThemeProvider';
import AclSnackbarProvider from '@acl/ui/providers/aclSnackbarProvider';
import { ThemeProvider } from '@mui/material';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Option, UnparsedUser } from './common.type';

export const getClientRoles = (rolesList: string[]): ClientRoles => {
  const clientsMap: { [key: string]: string[] } = {};

  rolesList.forEach((role) => {
    const [client, roleName] = role.split(':').map((eachPart: string) => eachPart.trim());

    if (!client) return;

    if (!clientsMap[client]) {
      clientsMap[client] = [];
    }

    clientsMap[client].push(roleName);
  });

  return clientsMap;
};

export const createUser = (user: UnparsedUser): UserState => {
  return {
    userEmail: user.email,
    firstName: user.given_name,
    lastName: user.family_name,
    userName: user.name,
    clientRoles: getClientRoles(user.group),
    isAuthenticated: true,
  };
};

export const getIconFromClient = (name: string) => {
  switch (name) {
    case 'BCBSM':
      return BcbsmIcon;
    default:
      return null;
  }
};

export const getIconFromFileType = (name: FileProcessingData['fileExtension']) => {
  switch (name?.trim()) {
    case 'csv':
      return CsvIcon;
    case 'excel':
      return ExcelIcon;
    case 'pdf':
      return PdfIcon;
    case 'txt':
      return TxtIcon;
    default:
      return null;
  }
};

// Function to convert camel case or Pascal case to readable format
export const formatKey = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
};

export const convertFileNameFormatToRegex = (format: string) => {
  const regex = format
    .replace(/dd/g, '\\d{1,2}')
    .replace(/d/g, '\\d{1,2}')
    .replace(/YYYY/g, '\\d{4}')
    .replace(/MMM/g, '[A-Za-z]{3}')
    .replace(/MM/g, '\\d{2}')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

  return new RegExp(`^${regex}$`);
};

export const extractDateFromFileName = (fileName: string): Date | null => {
  const regexFormats = [
    { regex: /\((\w{3} \d{1,2} \d{4})\)/, format: 'MMM d YYYY' }, // Matches (MMM d YYYY)
    { regex: /(\d{4}_\d{2})/, format: 'YYYY_MM' }, // Matches YYYY_MM
    { regex: /(\d{4})/, format: 'YYYY' }, // Matches YYYY
  ];

  for (const { regex, format } of regexFormats) {
    const match = fileName.match(regex);

    if (match) {
      const dateStr = match[1];

      switch (format) {
        case 'MMM d YYYY':
          // (MMM d YYYY) => "Jan 1 2020"
          return new Date(dateStr);
        case 'YYYY_MM':
          // YYYY_MM => "2020_01"
          const [year, month] = dateStr.split('_').map(Number);
          return new Date(year, month - 1); // month is 0-indexed in Date
        case 'YYYY':
          // YYYY => "2020"
          return new Date(Number(dateStr), 0); // January of the given year
        default:
          return null;
      }
    }
  }

  return null;
};

export const convertBytes = (bytes: number): string => {
  const KB = 1024;
  const MB = KB * 1024;

  if (bytes < MB) {
    return `${(bytes / KB).toFixed(2)} KB`;
  } else {
    return `${(bytes / MB).toFixed(2)} MB`;
  }
};

export const getValuesByType = (data: LookupItem[], type: string) => {
  return data
    .filter((item: LookupItem) => item.lookupType.trim() === type)
    .map((item: LookupItem) => ({
      id: item.lookupId.toString(),
      value: item.lookupValue ?? '',
      originalValues: item,
    }));
};

export const getValuesByTypeWithValue = (data: LookupItem[], type: string) => {
  return data
    .filter((item: LookupItem) => item.lookupType.trim() === type)
    .map((item: LookupItem) => ({
      id: item.lookupId.toString(),
      value: item.lookupName ? `${item.lookupName}-${item.lookupValue ?? ''}` : (item.lookupValue ?? ''),
      originalValues: item,
    }));
};

export const renderTestingComponent = (
  component: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={AclThemeProvider}>
        <AclSnackbarProvider>
          <BrowserRouter>{component ?? <></>}</BrowserRouter>
        </AclSnackbarProvider>
      </ThemeProvider>
    </Provider>,
    options,
  );
};

// Function to find lookupId(s) based on lookupType
export const findLookupIds = (
  lookupMapping: LookupMapping[] | [],
  lookupType: string,
  multiple: boolean,
): string | string[] | undefined => {
  if (multiple) {
    return lookupMapping
      ?.filter((mapping) => mapping?.lookupType?.trim() === lookupType)
      .map((mapping) => mapping?.lookupId?.toString());
  } else {
    const lookupId = lookupMapping?.find((mapping) => mapping?.lookupType?.trim() === lookupType)?.lookupId;
    return lookupId ? lookupId.toString() : undefined;
  }
};

export const extractDefaultValueForLookupType = (
  lookupMapping: LookupMapping[] | [],
  options: Option[],
  multiple: boolean,
  lookupType: string,
): Option | Option[] | undefined => {
  if (multiple) {
    const lookupIds = findLookupIds(lookupMapping ?? [], lookupType, true) as string[];
    const filteredOptions = lookupIds.length > 0 ? options.filter((option) => lookupIds.includes(option.id)) : [];
    return filteredOptions.length > 0 ? filteredOptions : [];
  } else {
    const lookupId = findLookupIds(lookupMapping ?? [], lookupType, false) as string;
    const matchedOption = lookupId ? options.find((option) => lookupId === option.id) : undefined;
    return matchedOption;
  }
};

export const getMeasureThreshold = (thresholdData?: MeasureThreshold[]) => {
  const defaultThresholdMapping: FormattedMeasureThreshold = {
    '1 star': 0,
    '2 star': 0,
    '3 star': 0,
    '4 star': 0,
    '5 star': 0,
  };
  thresholdData?.forEach((threshold: MeasureThreshold) => {
    defaultThresholdMapping[threshold.starRating] = threshold.thresholdValue;
  });

  return Object.entries(defaultThresholdMapping);
};
