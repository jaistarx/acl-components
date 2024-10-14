export const TABS_CONTAINER = (variant?: string) => {
  switch (variant) {
    case 'secondary':
      return { background: '#F7F7F7' };
    default:
      return { background: '#04636D' };
  }
};

export const TAB_LABEL_CONTAINER = {
  display: 'flex',
  columnGap: '4px',
  alignItems: 'center',
};

export const TAB_LABEL_COUNT = {
  background: '#C2407D',
  borderRadius: '100px',
  padding: '0px 4px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
};
