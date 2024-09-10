import { createTheme } from '@mui/material/styles';

const AclThemeProvider = createTheme({
  palette: {
    primary: {
      main: '#04636d',
    },
    // TODO: Change color from palette
    secondary: {
      main: '#b012d4',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Poppins, Arial, sans-serif',
    body1: {
      //TODOs: selected case for LisItemButton needs to handle
      // color: '#323c47',
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0,
    },
    body2: {
      color: '#9FA2B4',
      fontWeight: 700,
      fontSize: 14,
    },
  },
  components: {
    // MuiBase
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Poppins, Arial, sans-serif',
        },
      },
    },
    // MuiCheckbox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#CACACA',
        },
      },
    },
    // MuiTable
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: 'none',
          background: '#FFFFFF',
          overflow: 'auto',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            color: '#9FA2B4',
            fontWeight: 700,
            fontSize: 14,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '.MuiTableRow-root': {
            '.MuiTableCell-root': {
              color: '#323c47',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: 0,
            },
            // ":last-child td": {
            //   borderBottom: "none",
            // },
            ':hover': {
              cursor: 'pointer',
              // TODO: integrate hover
              // backgroundColor: "#F4F6FA",
            },
            ':hover .mui-table-first-row-cell': {
              // TODO: integrate hover
              // backgroundColor: "#F4F6FA",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          minWidth: 148,
          maxHeight: 24,
          padding: '0px 8px',
        },
      },
    },
    // MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          minHeight: '0px',
          minWidth: '0px',
          fontWeight: 700,
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: '14px',
        },
        contained: {
          '&:hover': {
            backgroudColor: '#002E33',
          },
        },
        outlined: {
          '&:hover': {
            color: '#002E33',
            borderColor: '#002E33',
          },
        },
      },
    },
    // MuiLink
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: '#0097AC',
          fontWeight: 500,
          fontSize: '14px',
          fontFamily: 'Poppins, Arial, sans-serif',
          letterSpacing: '-0.022em',
          ':hover': {
            cursor: 'pointer',
          },
          ':disabled': {
            opacity: '40%',
            cursor: 'default',
          },
        },
      },
    },
    // MuiSwitch
    MuiSwitch: {
      styleOverrides: {
        root: {
          // NOTE: Use this code for direct color change
          // "& .MuiSwitch-switchBase.Mui-checked": {
          //   color: "#FFFFFF",
          // },
          // "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          //   backgroundColor: "#D1ECF0",
          // },
        },
      },
    },
    // MuiTextField
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: '0px',
          margin: '0px',
          '.MuiInputLabel-root, .MuiInputLabel-root.Mui-focused, .MuiInputLabel-root.Mui-error': {
            color: '#818E9B',
          },
        },
      },
    },
    // MuiCard
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FCFCFC',
          boxShadow: '0px 4px 11px 2px #262B6808',
          borderRadius: '16px',
        },
      },
    },
    // MuiDivider
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#9FA2B459',
          border: '1px solid #9FA2B459',
        },
      },
    },
    // MuiGrid
    MuiGrid: {
      styleOverrides: {
        container: {
          alignItems: 'end',
        },
      },
    },
    // MuiPopover
    MuiPopover: {
      styleOverrides: {
        root: {
          '.MuiPopover-paper': {
            boxShadow: 'none',
            borderRadius: '12px',
            border: 'solid #DEE0E7 1px',
          },
        },
      },
    },
    // MuiToggleButtonGroup
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: 'solid 3px #F4F4F7',
          borderRadius: '8px',
          backgroundColor: '#F4F4F7',
          gap: '4px',
          height: '32px',
        },
      },
    },
    // MuiToggleButton
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#262B68 !important',
          textTransform: 'none',
          border: 'none !important',
          borderRadius: '5px !important',
          position: 'relative',
          '&.Mui-selected': {
            background: 'linear-gradient(90deg, #D1DAFF 0%, #FFD8D8 96.28%)',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          },
        },
      },
    },
    // MuiInputBase
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '0px',
          margin: '0px',
          borderRadius: '4px !important',
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#EFF1F7',
          '&:hover': {
            backgroundColor: '#E0E3EB',
          },
          '&.Mui-focused': {
            backgroundColor: '#EFF1F7',
          },
          '&.Mui-disabled': {
            backgroundColor: '#F5F5F5',
          },
          '&::before': {
            borderBottom: 'none',
          },
          '&::after': {
            borderBottom: 'none',
          },
        },
      },
    },
    // MuiAccordion
    MuiAccordion: {
      styleOverrides: {
        root: {
          color: '#202224',
          textTransform: 'none',
          border: 'solid 1px #DEE0E7',
          borderRadius: '12px !important',
          position: 'relative',
          boxShadow: 'none',
          fontSize: '14px',
          fontWeight: 400,
          '&:before': {
            content: 'none',
          },
          '.Mui-expanded': {
            borderRadius: '0px',
          },
          '.MuiAccordionSummary-root': {
            // background: '#F4F4F4',
            height: '66px',
          },
          '.MuiAccordionDetails-root': {
            padding: '0px',
            borderRadius: '0px',
          },
        },
      },
    },
    // MuiSnackbar
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '.MuiSnackbarContent-root': {
            color: '#FCFCFC',
            fontWeight: 400,
            fontSize: '14px',
            textTransform: 'none',
            borderRadius: '8px',
            background: '#666A94',
            padding: '0px 8px',
            height: '32px',
            minWidth: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: '8px',
          },
          '.MuiSnackbarContent-message, .MuiSnackbarContent-action': {
            padding: '0px',
            margin: '0px',
          },
          bottom: '60px !important',
          right: '56px !important',
        },
      },
    },
    // MuiBackdrop
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000b3',
          zIndex: 1300,
        },
      },
    },
    // MuiCircularProgress
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#0097ac',
        },
      },
    },
    // MuiSelect
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.readonly': {
            pointerEvents: 'none',
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
    // MuiMenu
    MuiMenu: {
      styleOverrides: {
        root: {
          '.MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    // Add other theme settings as needed
  },
});

export default AclThemeProvider;
