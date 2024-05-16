import { LinkProps } from "@mui/material";

export declare type AclLinkProps = LinkProps & {
  children?: React.ReactNode;
  component?: React.ReactNode;
  disabled?: boolean;
  underline?: "always" | "hover" | "none";
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | string;
};
