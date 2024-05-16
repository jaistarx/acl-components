export declare type IDictionary<T> = {
  [key: string]: T;
};

export declare type IColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

export declare type IAclColorPalette = {
  mainTeal: string;
  backgroundPageGray: string;
  backgroundPageWhite: string;
  strokeFocusedGray: string;
  strokeProgressTeal: string;
  textPageTitleTeal: string;
  textPageDescriptionBlack: string;
  textTableHeaderGray: string;
  textWhite: string;
  disableGray: string;
  statusProgress: string;
  statusFocused: string;
};

export declare type IAclRootProperty = {
  "--main-teal"?: string;
  "--bg-gray"?: string;
  "--bg-white"?: string;
  "--stroke-gray"?: string;
  "--stroke-teal"?: string;
  "--text-teal"?: string;
  "--text-black"?: string;
  "--text-gray"?: string;
  "--text-white"?: string;
  "--disable-gray"?: string;
  "--font-family"?: string;
};
