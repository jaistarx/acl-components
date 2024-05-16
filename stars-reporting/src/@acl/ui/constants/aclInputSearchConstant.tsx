export const INPUT_SEARCH_WRAPPER = {
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
  borderRadius: "12px",
  backgroundColor: "#EFF1F7",
  padding: "8px 16px",
};

export const CLOSE_ICON = (inputValue: string) => {
  return { opacity: inputValue === "" ? 0 : 1 };
};
