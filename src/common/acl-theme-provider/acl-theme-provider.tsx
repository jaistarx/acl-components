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
    text: {
      primary: '#4B4B4B',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
    fontSize: 12, // Base font size in px (default is 14px)
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '28px',
    },
    h3: {
      fontSize: '24px',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '16px',
    },
    h6: {
      fontSize: '14px',
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
    caption: {
      fontSize: '10px',
    },
    subtitle1: {
      fontSize: '14px',
    },
    subtitle2: {
      fontSize: '12px',
    },
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
        root: {
          '.MuiSvgIcon-root': {
            width: '18px',
            height: '18px',
          },
        },
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
          fontWeight: 500,
          fontSize: '12px',
          '& table': {
            borderCollapse: 'inherit',
            tableLayout: 'auto',
            borderSpacing: '0px',
          },
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
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root, & > .MuiTableRow-root > .MuiTableCell-root': {
            color: '#4B4B4B',
            backgroundColor: '#E5E5E5',
            height: '38px',
            padding: '3px 8px',
            fontFamily: '', // TODO: Replace with F37 Hybrid
            fontWeight: 700,
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
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
              '> .MuiTableCell-root:first-of-type': {
                borderLeft: '2px solid #00D6B8',
              },
            },
          },
          '.MuiTableCell-root': {
            backgroundColor: 'inherit',
            padding: '8px',
            color: '#000000',
            height: '56px',
            borderBottom: '1px solid #E5E5E5',
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
          },
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root, & > .MuiTableRow-root > .MuiTableCell-root': {
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5E5E5',
            padding: '3px 8px',
            height: '44px',
            '&:first-of-type': {
              borderLeft: '2px solid transparent',
            },
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
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: '#4B4B4B',
          fontWeight: 700,
          '&.Mui-active': {
            color: '#4B4B4B',
          },
          '& .MuiSvgIcon-root': {
            margin: '0px 2px',
          },
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
          height: '48px',
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
    // MuiRadio
    MuiRadio: {
      styleOverrides: {
        root: {
          '.MuiSvgIcon-root': {
            width: '16px',
            height: '16px',
          },
        },
      },
    },
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
          boxShadow: '0px 2px 8px 0px #00D6B829',
          borderRadius: '4px',
        },
      },
    },
    // MuiDivider
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#E5E5E5',
          borderBottom: '1px solid #E5E5E5',
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
    // MuiInput
    MuiInput: {
      styleOverrides: {
        root: {
          height: '48px',
          margin: '0px',
          padding: '0px',
        },
      },
    },
    // MuiInputBase
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '48px',
          margin: '0px',
          padding: '0px',
          '&.MuiOutlinedInput-root': {
            padding: '14px',
          },
          '& .MuiInputBase-input': {
            padding: '0px',
          },
        },
        multiline: {
          height: 'auto',
        },
      },
    },
    // MuiInputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#4B4B4B',
          transform: 'translate(14px, 13px) scale(1)',
          '&.Mui-focused, &.MuiFormLabel-filled, &.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(0.75)',
          },
          '&.Mui-disabled': {
            color: '#0000008C',
          },
        },
      },
    },
    // MuiFilledInput
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
          textTransform: 'none',
          border: 'none',
          position: 'relative',
          boxShadow: 'none',
          margin: '0px',
          padding: '0px',
          borderRadius: '0px',
          borderBottom: '1px solid #E5E5E5',
          backgroundColor: 'transparent',
          '&.MuiPaper-root': {
            borderRadius: '0px',
          },
          '&:first-of-type': {
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
          },
          '&:last-of-type': {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
          },
          '.MuiAccordionSummary-root': {
            height: '72px',
            padding: '0px 24px',
            margin: '0px',
            minHeight: '0px',
          },
          '.MuiAccordionSummary-content': {
            padding: '0px',
            margin: '0px',
            minHeight: '0px',
          },
          '.MuiAccordionDetails-root': {
            padding: '0px',
            margin: '0px',
            minHeight: '0px',
          },
          '.Mui-expanded': {
            borderRadius: '0px',
          },
        },
      },
    },
    // MuiBackdrop
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#00000080',
          zIndex: 1300,
        },
      },
    },
    // MuiCircularProgress
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#00D6B8',
        },
      },
    },
    // MuiSelect
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.MuiInput-root, &.MuiInputBase-root': {
            height: '48px',
            margin: '0px',
          },
          '&.MuiInput-root:before': {
            borderBottom: 'none',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
          },
          '&.MuiInput-root:after': {
            borderBottom: 'none',
          },
          '& .MuiSelect-icon': {
            right: '9px',
          },
          '& .MuiSelect-iconStandard': {
            right: '0px',
          },
          // NOTE: Use if needed
          // '&.readonly': {
          //   pointerEvents: 'none',
          //   backgroundColor: '#f5f5f5',
          // },
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
          '.MuiList-root': {
            margin: '0px',
            padding: '12px',
            maxHeight: '40vh',
            position: 'relative',
            overflow: 'auto',
          },
          '.MuiMenuItem-root': {
            margin: '0px',
            padding: '0px 12px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            columnGap: '8px',
            width: '100%',
            flex: 1,
            '& .MuiCheckbox-root': {
              padding: '0px 8px 0px 0px',
            },
          },
        },
      },
    },
    // MuiAutocomplete
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: '0px',
          '& .MuiButtonBase-root': {
            padding: '5px',
            margin: '0px',
          },
          '& .MuiChip-root': {
            height: '28px',
            maxWidth: 'calc(100% - 19px)',
            '& .MuiSvgIcon-root': {
              fontSize: '18px',
            },
          },
          '& .MuiInputBase-root': {
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            padding: '10px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&.Mui-focused': {
              minHeight: '48px',
              height: 'auto',
            },
          },
          '& .MuiAutocomplete-tag': {
            padding: '0px',
            margin: '0px',
            fontSize: '13px',
          },
          '& .MuiOutlinedInput-root': {
            '& .MuiAutocomplete-input': {
              padding: '0px',
              margin: '0px',
            },
            '& .MuiAutocomplete-endAdornment': {
              right: '4px',
            },
          },
        },
        listbox: {
          padding: '12px',
          '& .MuiAutocomplete-option': {
            height: '44px',
            padding: '0px 12px',
            '& .MuiListItemText-root': {
              padding: '0px',
              whiteSpace: 'nowrap',
            },
            '& .MuiCheckbox-root': {
              padding: '0px 8px 0px 0px',
            },
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
            backgroundColor: '#CCF7EA',
            borderBottom: '4px solid #00D6B8',
          },
        },
      },
    },
    // MuiOutlinedInput
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
          },
        },
      },
    },
    // MuiPaper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          border: '1px solid #04636D',
          marginTop: '4px',
          boxShadow: '0px 2px 8px 0px #00D6B829',
        },
      },
    },
    // MuiTabs
    MuiTabs: {
      styleOverrides: {
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
          fontWeight: 400,
          '&.Mui-selected': {
            fontWeight: 600,
            letterSpacing: '-0.2px',
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
          borderWidth: '1px',
          height: '32px',
          minWidth: '0px',
          '.MuiChip-label': {
            padding: '0px 12px',
          },
          '.MuiChip-icon': {
            margin: '0px -4px 0px 8px',
          },
        },
      },
    },
    // MuiStack
    MuiStack: {
      styleOverrides: {
        root: {
          width: '100%',
          '.MuiTextField-root, .MuiPickersTextField-root': {
            minWidth: 'auto !important',
          },
        },
      },
    },
    // MuiDateCalendar
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          '.MuiButtonBase-root, .MuiTypography-root': {
            fontWeight: 500,
            fontSize: '12px',
          },
        },
      },
    },
    // Add other theme settings as needed
  },
});

export default AclThemeProvider;
