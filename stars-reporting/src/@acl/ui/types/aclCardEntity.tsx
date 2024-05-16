import { CardProps } from "@mui/material";

export declare type ICardExposedProps = CardProps & {
  raised?: boolean | undefined;
};

export declare type ICardProps = ICardExposedProps & {
  children?: React.ReactNode;
};
