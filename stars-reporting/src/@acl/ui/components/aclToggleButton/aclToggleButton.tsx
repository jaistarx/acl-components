import { ThemeProvider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, {
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  IToggleButtonOptions,
  IToggleButtonProps,
} from "../../types/aclToggleButtonEntity";

const getExposedProps = (props: IToggleButtonProps) => {
  return {
    ...props,
  };
};

const getPassedProps = (props: IToggleButtonProps) => {
  const { options, onChange, defaultValue, ...restOfProps } = props;
  return restOfProps;
};

const AclToggleButton = ({ children, ...props }: IToggleButtonProps) => {
  const optionLabelRef = useRef<RefObject<HTMLDivElement>[]>(
    props.options?.map(() => createRef()) || []
  );
  const [value, setValue] = useState<IToggleButtonOptions>({
    id: "",
    label: "",
  });
  const exposedProps = getExposedProps(props);
  const passedProps = getPassedProps(props);

  const handleValueChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: IToggleButtonOptions
  ) => {
    if (newValue) {
      setValue(newValue);
      if (exposedProps.onChange) {
        exposedProps.onChange(newValue);
      }
    }
  };

  useEffect(() => {
    if (exposedProps.defaultValue) {
      setValue(exposedProps.defaultValue);
    }
  }, [exposedProps.defaultValue]);

  useEffect(() => {
    optionLabelRef.current.forEach((ref: RefObject<HTMLDivElement>) => {
      if (ref?.current) {
        ref.current.style.width = `${ref.current.clientWidth + 5}px`;
      }
    });
  }, [exposedProps.options]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={handleValueChange}
          aria-label="text alignment"
          {...passedProps}
        >
          {exposedProps.options?.map(
            (option: IToggleButtonOptions, key: number) => (
              <ToggleButton
                key={option.id}
                value={option}
                aria-label={`${key}-toggle-value`}
              >
                <div ref={optionLabelRef.current[key]} title={option.label}>
                  {option.label}
                </div>
              </ToggleButton>
            )
          )}
        </ToggleButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default AclToggleButton;
