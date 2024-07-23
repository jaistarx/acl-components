import { DrawerProps } from "@mui/material";

export declare type IAclDrawerPassedProps = DrawerProps & {
  "open-width"?: string;
  "close-width"?: string;
  "icon-component"?: string | number;
  "icon-position"?: string | number;
};

export declare type IAclDrawerProps = DrawerProps & {
  children?: React.ReactNode;
  isOpen?: (event: boolean | undefined) => void;
  toggleDrawer?: boolean;
  handleToggleDrawer?: (event: boolean) => void;
  openWidth?: string;
  closeWidth?: string;
  iconComponent?: React.ReactNode;
  iconPosition?: IAclDrawerIconPosition;
};

export declare type IAclDrawerIconPosition = {
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
};
