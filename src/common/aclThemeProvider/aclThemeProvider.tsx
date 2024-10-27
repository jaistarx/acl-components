import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/AdapterDateFns';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const AclThemeProvider = createTheme({
  palette: {
    primary: {
      main: '#04636D',
    },
    secondary: {
      main: '#F53D6B',
    },
    error: {
      main: '#9F1853',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
  },
  components: {
    // MuiCssBaseline
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Manrope, "Helvetica", "Arial", sans-serif',
        },
      },
    },
    // MuiCheckbox
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          '&.Mui-checked': {
            color: '#F53D6B',
          },
        },
      },
    },
    // MuiTable
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          tableLayout: 'fixed',
          borderSpacing: '0px',
          position: 'relative',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: 'none',
          background: '#FFFFFF',
          overflow: 'auto',
          borderRadius: '4px',
          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          // TODO: Remove all unused zIndex after testing
          // zIndex: '3 !important',
          '.MuiTableCell-root': {
            color: '#4B4B4B',
            backgroundColor: '#E5E5E5',
            fontWeight: 700,
            fontSize: 14,
            height: '49px',
            padding: '3px 8px',
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
            // '&:last-child': {
            //   zIndex: '4 !important',
            // },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '.MuiTableRow-root': {
            cursor: 'pointer',
            backgroundColor: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#F7F7F7',
            },
            '&.Mui-selected': {
              backgroundColor: '#E6FBF8',
              '&:hover': {
                backgroundColor: '#d8fdf8',
              },
              '.MuiTableCell-root:first-of-type': {
                borderLeft: '2px solid #00D6B8',
              },
            },
          },
          '.MuiTableCell-root': {
            // zIndex: 1,
            backgroundColor: 'inherit',
            padding: '8px',
            color: '#000000',
            height: '59px',
            borderBottom: '1px solid #E5E5E5',
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
            // '&:last-child': {
            //   zIndex: '2 !important',
            // },
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          // NOTE: Use if needed
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          // zIndex: '3 !important',
          '.MuiTableCell-root': {
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5E5E5',
            padding: '3px 8px',
            height: '49px',
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
            // '&:last-child': {
            //   zIndex: '4 !important',
            // },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    // MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
          minHeight: '0px',
          minWidth: '0px',
          fontWeight: 500,
          fontSize: '14px',
          position: 'relative',
          whiteSpace: 'nowrap',
        },
        contained: {
          border: '1px solid transparent',
          '&:hover': {
            background: '#03525A',
          },
          '&:active': {
            background: '#038F94',
            borderColor: 'var(--Primary-Colors-Aqua-Marine, #00D6B8)',
          },
          '&:disabled': {
            background: 'var(--Neutral-Colors-Gray-3, #E5E5E5)',
          },
        },
        outlined: {
          borderColor: '#04636D',
          '&:hover': {
            color: '#03525A',
            borderColor: '#03525A',
          },
          '&:active': {
            color: '#038F80',
            borderColor: '#038F80',
          },
          '&:disabled': {
            color: 'var(--Neutral-Colors-Gray-2, #AFAFAF)',
            borderColor: 'var(--Neutral-Colors-Gray-2, #AFAFAF)',
          },
        },
        text: {
          '&:hover': {
            color: '#03525A',
          },
          '&:active': {
            color: '#038F94',
          },
          '&:disabled': {
            color: 'var(--Neutral-Colors-Gray-2, #AFAFAF)',
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
          borderRadius: '4px',
          borderColor: 'blue',
          '.MuiInputBase-input': {
            padding: '0px',
            margin: '0px',
            // maxHeight: '48px !important',
          },
          '.MuiFormLabel-root': {
            color: '#4B4B4B',
          },
          '.MuiFormHelperText-root': {
            color: '#4B4B4B',
          },
          // NOTE: Use this code for direct color change
          // '.MuiInputLabel-root, .MuiInputLabel-root.Mui-focused, .MuiInputLabel-root.Mui-error': {
          //   color: '#9F1853',
          // },
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
          // NOTE: use if needed
          // '.MuiPopover-paper': {
          //   boxShadow: 'none',
          //   borderRadius: '12px',
          //   border: 'solid #DEE0E7 1px',
          // },
        },
      },
    },
    // MuiInputBase
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '0px',
          margin: '0px',
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
          // NOTE: Use if needed
          // '&.readonly': {
          //   pointerEvents: 'none',
          //   backgroundColor: '#f5f5f5',
          // },
        },
      },
    },
    // MuiInputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#4B4B4B',
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
          '.MuiPaper-root': {
            boxShadow: 'none',
          },
        },
      },
    },
    // MuiPagination
    MuiPagination: {
      styleOverrides: {
        root: {
          '.MuiPaginationItem-root': {
            borderBottom: '4px solid transparent',
            borderRadius: '0px',
          },
          '.MuiPaginationItem-text': {
            fontWeight: 400,
          },
          '.MuiPaginationItem-text.Mui-selected': {
            fontWeight: 600,
          },
          '.MuiPaginationItem-root.Mui-selected': {
            borderBottom: '4px solid #00D6B8',
          },
          '.MuiPaginationItem-root.Mui-focused': {
            backgroundColor: '#CCF7EA !important',
            borderBottom: '4px solid #00D6B8',
          },
        },
      },
    },
    // MuiPaper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          border: '2px solid #04636D',
          marginTop: '2px',
        },
      },
    },
    // MuiTabs
    MuiTabs: {
      styleOverrides: {
        root: {},
        indicator: {
          backgroundColor: '#00D6B8',
        },
      },
    },
    // MuiTab
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '13px',
          '&.Mui-selected': {
            fontWeight: 600,
            letterSpacing: '-0.1px',
          },
          '&.Mui-disabled': {
            color: '#A6A7AC',
          },
          variants: [
            {
              props: { variant: 'primary' },
              style: {
                color: '#FFFFFF',
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                },
              },
            },
            {
              props: { variant: 'secondary' },
              style: {
                color: '#002E33',
                '&.Mui-selected': {
                  backgroundColor: '#FFFFFF',
                  color: '#002E33',
                },
              },
            },
          ],
        },
      },
    },
    // MuiChip
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          height: '32px',
          minWidth: '0px',
          fontWeight: 500,
          fontSize: '12px',
        },
      },
    },
    // Add other theme settings as needed
  },
});

export default AclThemeProvider;
