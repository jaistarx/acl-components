import { InputBase, ThemeProvider } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { CLOSE_ICON, INPUT_SEARCH_WRAPPER } from '../../constants/aclInputSearchConstant';
import { AclInputSearchProps } from '../../types/aclInputSearchEntity';
import AclIcon from '../aclIcon';
import SearchIcon from './icons/search-icon.svg';
import CloseIcon from './icons/close-icon.svg';

const getExposedProps = (props: AclInputSearchProps) => {
  const { onChange, ...restOfProps } = props;
  return {
    ...restOfProps,
    fullWidth: props.fullWidth ?? true,
  };
};

const AclInputSearch = ({ ...props }: AclInputSearchProps) => {
  const exposedProps = getExposedProps(props);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <div style={INPUT_SEARCH_WRAPPER}>
          <AclIcon src={SearchIcon}></AclIcon>
          <InputBase
            {...exposedProps}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputValueChange(event?.target?.value)}
          ></InputBase>
          <AclIcon src={CloseIcon} style={CLOSE_ICON(inputValue)} onClick={() => handleInputValueChange('')}></AclIcon>
        </div>
      </ThemeProvider>
    </>
  );
};

export default AclInputSearch;
