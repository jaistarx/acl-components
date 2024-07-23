import { MenuListItem } from '@/components/sidemenu/sidemenu.type';

export const MENU_LIST: MenuListItem[] = [
  {
    groupName: 'Admin Screens',
    options: [
      { name: 'Product Admin', navigateTo: 'product-admin' },
      { name: 'LookUp Admin', navigateTo: 'lookup-master' },
      { name: 'View Files', navigateTo: 'view-files' },
    ],
    roles: ['ProjectAdministrator', 'SupportUser'],
  },
  {
    groupName: 'Plan Market Analysis Reports',
    options: [{ name: 'Report 1', navigateTo: 'report-1' }],
    roles: ['ReportViewer', 'DataOperatingAnalyst', 'SupportUser'],
  },
  {
    groupName: 'Others',
    options: [{ name: 'File Upload', navigateTo: 'file-upload' }],
    roles: ['DataOperatingAnalyst', 'ProjectAdministrator', 'SupportUser'],
  },
];
