/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, ThemeProvider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import React, { useEffect } from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { ICON_CONTAINER } from '../../constants/aclDrawerConstant';
import { IDictionary } from '../../types/aclCore';
import { IAclDrawerPassedProps, IAclDrawerProps } from '../../types/aclDrawerEntity';
import ToggleIcon from './icons/side-menu-toggle-icon.svg';

const openedMixin = (theme: Theme, openWidth: string | undefined): CSSObject => ({
  width: openWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme, closeWidth: string | undefined): CSSObject => ({
  width: closeWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

// FEATURE: Use the below commented functions for seperate Mixins

// const openedMixinDrawer = (
//   theme: Theme,
//   openWidth: string | undefined
// ): CSSObject => ({
//   width: openWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
// });

// const closedMixinDrawer = (
//   theme: Theme,
//   closeWidth: string | undefined
// ): CSSObject => ({
//   width: closeWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
// });

// const openedMixinBox = (
//   theme: Theme,
//   openWidth: string | undefined
// ): CSSObject => ({
//   width: openWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
// });

// const closedMixinBox = (
//   theme: Theme,
//   closeWidth: string | undefined
// ): CSSObject => ({
//   width: closeWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
// });

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAclDrawerPassedProps>((props) => ({
  width: props['open-width'],
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(props.open && {
    ...openedMixin(props.theme, props['open-width']),
    '& .MuiDrawer-paper': {
      border: 'none',
      overflowX: 'hidden',
      ...openedMixin(props.theme, props['open-width']),
    },
  }),
  ...(!props.open && {
    ...closedMixin(props.theme, props['close-width']),
    '& .MuiDrawer-paper': {
      border: 'none',
      overflowX: 'hidden',
      ...closedMixin(props.theme, props['close-width']),
    },
  }),
}));

const ContainerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAclDrawerPassedProps>((props) => ({
  width: props['open-width'],
  flexShrink: 0,
  boxSizing: 'border-box',
  position: 'fixed',
  height: '100%',
  zIndex: 1199,
  background: 'none',
  ...(props.open && {
    ...openedMixin(props.theme, props['open-width']),
  }),
  ...(!props.open && {
    ...closedMixin(props.theme, props['close-width']),
  }),
}));

const ContainerBoxWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAclDrawerPassedProps>((props) => ({
  width: props['open-width'],
  flexShrink: 0,
  position: 'relative',
  zIndex: 1198,
  background: 'none',
  ...(props.open && {
    ...openedMixin(props.theme, props['open-width']),
  }),
  ...(!props.open && {
    ...closedMixin(props.theme, props['close-width']),
  }),
}));

const getExposedProps = (props: IAclDrawerProps): IDictionary<any> => {
  const { openWidth, closeWidth, toggleDrawer, isOpen, iconComponent, iconPosition, ...restOfProps } = props;
  return {
    ...restOfProps,
    open: props.toggleDrawer ?? false,
    'open-width': props.openWidth ?? '240px',
    'close-width': props.closeWidth ?? '122px',
    'icon-component': props.iconComponent ?? <img src={ToggleIcon} alt="toggle-icon"></img>,
    'icon-position': props.iconPosition ?? { bottom: '5%', right: '-10px' },
  };
};

const AclDrawer = ({ children, ...props }: IAclDrawerProps) => {
  const exposedProps = getExposedProps(props);

  useEffect(() => {
    if (props.isOpen) {
      props.isOpen(props.toggleDrawer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.toggleDrawer]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ContainerBoxWrapper {...exposedProps}>
          <ContainerBox {...exposedProps}>
            <Box sx={ICON_CONTAINER(exposedProps['icon-position'])}>{exposedProps['icon-component']}</Box>
            <Drawer variant="permanent" {...exposedProps}>
              {children}
            </Drawer>
          </ContainerBox>
        </ContainerBoxWrapper>
      </ThemeProvider>
    </>
  );
};

export default AclDrawer;
