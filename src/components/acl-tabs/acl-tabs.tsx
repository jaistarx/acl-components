import { Tab, Tabs, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider, stringifyObjectValues } from '../../common';
import { IDictionary } from '../../common/types';
import { TABS_CONTAINER, TAB_LABEL_CONTAINER, TAB_LABEL_COUNT } from './acl-tabs.constant';
import { AclTabItem, AclTabsProps } from './acl-tabs.type';

const getForwardedProps = (props: AclTabsProps) => {
  const { tabItems, variant, ...forwardedProps } = props;

  return {
    centered: props.centered ?? true,
    ...forwardedProps,
  };
};

const AclTabs = ({ children, ...props }: AclTabsProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Tabs sx={TABS_CONTAINER(props.variant)} {...forwardedProps}>
          {props.tabItems?.map((item: AclTabItem, index: number) => {
            if (!Boolean(item)) return <></>;

            const variantAddedTabProps: IDictionary<any> = {
              ...item,
              item,
              variant: props.variant ?? 'primary',
              key: index,
              label: item.count ? (
                <div style={TAB_LABEL_CONTAINER}>
                  <span>{item.label}</span>
                  <span style={TAB_LABEL_COUNT}>{item.count}</span>
                </div>
              ) : (
                <span>{item.label}</span>
              ),
            };

            return <Tab key={stringifyObjectValues(item)} {...variantAddedTabProps} />;
          })}
        </Tabs>
      </ThemeProvider>
    </>
  );
};

export default AclTabs;
