import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Manrope", "Helvetica", "Arial", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ACL Storybook',
  // TODO: change to advantasure url
  // brandUrl: "https://example.com",
  brandImage: '/static/images/UST_HealthProof_logo.svg',
  brandTarget: '_self',

  // // NOTE: Use custom styling if needed
  // colorPrimary: '#3A10E5',
  // colorSecondary: '#585C6D',

  // // UI
  // appBg: '#ffffff',
  // appContentBg: '#ffffff',
  // appPreviewBg: '#ffffff',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#ffffff',

  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#ffffff',

  // // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});
