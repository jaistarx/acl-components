import { IDictionary } from "../types/aclCore";

export const INPUT_OUTER_CONTAINER = (open: boolean) => {
  return {
    width: "100%",
    backgroundColor: "#FCFCFC",
    border: "solid #DEE0E7 1px",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    borderBottomRightRadius: open ? "0px" : "16px",
    borderBottomLeftRadius: open ? "0px" : "16px",
    borderBottom: open ? "none" : "solid #DEE0E7 1px",
    padding: "6px 24px",
  };
};

export const SEARCH_ICON_CONTAINER = {
  display: "flex",
  alignItems: "center",
};

export const SEARCH_ICON = {
  width: "24px",
  height: "24px",
  marginRight: "8px",
};

export const POPPER_CONTAINER = (offsetWidth: number | undefined) => {
  return {
    borderBottomRightRadius: "16px",
    borderBottomLeftRadius: "16px",
    border: "solid #DEE0E7 1px",
    backgroundColor: "#FCFCFC",
    borderTop: "none",
    width: offsetWidth ? `${offsetWidth - 2}px` : undefined,
  };
};

export const DIVIDER_CONTAINER = { padding: "0px 24px" };

export const OPTIONS_OUTER_CONTAINER: IDictionary<string> = {
  padding: "0px 24px",
  maxHeight: "176px",
  overflowY: "auto",
};

export const OPTIONS_CONTAINER = {
  cursor: "pointer",
  padding: "12px 0px",
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
};
