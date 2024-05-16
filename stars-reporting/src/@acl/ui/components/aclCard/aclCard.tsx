import { Card, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { ICardExposedProps, ICardProps } from "../../types/aclCardEntity";
import { IDictionary } from "../../types/aclCore";

const getExposedProps = (props: ICardExposedProps): IDictionary<any> => {
  return {
    ...props,
    raised: props.raised ?? false,
  };
};

const AclCard = ({ children, ...props }: ICardProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Card {...exposedProps}>{children}</Card>
      </ThemeProvider>
    </>
  );
};

export default AclCard;
