import {
  Checkbox,
  FormControl,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { ICON_WRAPPER, LIST_ITEM_TEXT_ICON_WRAPPER } from '../../constants/aclDropdownV2Constant';
import { IDictionary } from '../../types';
import { AclDropdownV2Props, Option } from '../../types/aclDropdownV2Entity';
import DeleteIcon from './icons/delete-dropdown-v2.svg';
import EditIcon from './icons/edit-dropdown-v2.svg';

const getExposedProps = (props: AclDropdownV2Props): IDictionary<any> => {
  const { label, onChange, value, options, onClickOptionsAction, ...passedProps } = props;

  return {
    ...passedProps,
  };
};

const getDefaultValues = (
  defaultValue: Option | Option[] | undefined,
  multipleSelect: boolean | undefined,
): string | string[] => {
  if (defaultValue) {
    return Array.isArray(defaultValue)
      ? defaultValue.map((element: Option) => JSON.stringify(element))
      : JSON.stringify(defaultValue);
  } else {
    return multipleSelect ? [] : '';
  }
};

const AclDropdownV2 = ({ children, ...props }: AclDropdownV2Props) => {
  const exposedProps = getExposedProps(props);
  const [selectedOptions, setSelectedOptions] = useState<string | string[]>(
    getDefaultValues(exposedProps.defaultValue, exposedProps.multiple),
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>, child: React.ReactNode): void => {
    const {
      target: { value },
    } = event;

    if (!value) return;

    let parsedSelectedOptions, filteredSelectedOptions;

    if (Array.isArray(value)) {
      filteredSelectedOptions = value.filter(Boolean);
      parsedSelectedOptions = filteredSelectedOptions.map((option) => JSON.parse(option));
    } else {
      filteredSelectedOptions = value;
      parsedSelectedOptions = JSON.parse(value);
    }

    setSelectedOptions(filteredSelectedOptions);
    event.target.value = parsedSelectedOptions;

    if (props.onChange) props.onChange(event, child);
  };

  const handleIconClicked = (
    event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>,
    action: 'edit' | 'delete' | 'add',
    lookupName?: string,
    lookupValue?: string,
    originalValues?: any,
  ) => {
    event?.preventDefault();
    event?.stopPropagation();

    if (props.onClickOptionsAction) props.onClickOptionsAction(action, lookupName ?? '', lookupValue, originalValues);
  };

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControl>
          <Select
            value={selectedOptions}
            onChange={handleChange}
            renderValue={(selected: string | string[]) =>
              Array.isArray(selected) ? (
                <>
                  {selected.map((option: string, index: number) => (
                    <span key={option}>
                      {option ? JSON.parse(option).value : ''}
                      {index < selected?.length - 1 && ', '}
                    </span>
                  ))}
                </>
              ) : (
                <span>{selected ? JSON.parse(selected).value : ''}</span>
              )
            }
            {...exposedProps}
          >
            {props.options?.map((option: Option) => (
              <MenuItem key={option.id} value={JSON.stringify(option)}>
                {exposedProps.multiple && <Checkbox checked={selectedOptions.indexOf(JSON.stringify(option)) > -1} />}
                <div style={LIST_ITEM_TEXT_ICON_WRAPPER}>
                  <ListItemText primary={option.value} />
                  <div style={ICON_WRAPPER}>
                    <IconButton
                      size="small"
                      onClick={(event) =>
                        handleIconClicked(event, 'edit', props.label, option.value, option.originalValues)
                      }
                    >
                      <img src={EditIcon} alt="edit-icon" />
                    </IconButton>
                    <IconButton size="small">
                      <img src={DeleteIcon} alt="delete-icon" />
                    </IconButton>
                  </div>
                </div>
              </MenuItem>
            ))}
            <MenuItem onClick={(event) => handleIconClicked(event, 'add', props.label)}>
              <span>+ Add {` ${props.label} `} Value</span>
            </MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
};

export default AclDropdownV2;
