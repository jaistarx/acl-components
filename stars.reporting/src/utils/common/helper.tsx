import BcbsmIcon from '@/assets/images/bcbsm-Logo-icon.svg';
import CsvIcon from '@/assets/images/csv-icon.svg';
import ExcelIcon from '@/assets/images/excel-icon.svg';
import PdfIcon from '@/assets/images/pdf-icon.svg';
import TxtIcon from '@/assets/images/txt-icon.svg';
import { FileProcessingData } from '@/redux/file';
import { ClientRoles, UserState } from '@/redux/user';
import { UnparsedUser } from './common.type';

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

export const extractMonthAndYearFromFileName = (fileName: string) => {
  const regexFormats = [
    /\((\w{3} \d{1,2} \d{4})\)/, // Matches (MMM d YYYY)
    /(\d{4}_\d{2})/, // Matches YYYY_MM
    /(\d{4})/, // Matches YYYY
  ];

  for (const regex of regexFormats) {
    const match = fileName.match(regex);

    if (match) {
      return match[1];
    }
  }

  return '';
};
