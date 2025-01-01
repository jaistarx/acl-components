export const OUTER_BOX_CONTAINER = (isDragActive: boolean, isFilesDropped: boolean) => {
  return {
    fontFamily: 'Manrope',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: '8px',
    cursor: isFilesDropped ? 'auto' : 'pointer',
    height: '90px',
    border: `1px dashed ${isFilesDropped ? 'transparent' : isDragActive ? '#04636D' : '#AFAFAF'}`,
    backgroundColor: isDragActive ? '#F3F3F3' : 'transparent',
    '&:hover': isFilesDropped
      ? {
          backgroundColor: 'transparent',
        }
      : {
          borderColor: '#04636D',
          backgroundColor: '#F3F3F3',
        },
  };
};

export const FILES_BUTTON_CONTAINER = { display: 'flex', alignItems: 'center', columnGap: '24px' };

export const DROPPED_FILES_SPEC_CONTAINER = (status: 'accepted' | 'rejected') => {
  return {
    backgroundColor: '#F7F7F7',
    height: '55px',
    width: '332px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',
    padding: '0px 12px',
    border: `0.5px solid ${status === 'rejected' ? '#9F1853' : 'transparent'}`,
    borderLeft: `4px solid ${status === 'rejected' ? '#9F1853' : 'transparent'}`,
  };
};

export const ICON = (isUploading: boolean) => {
  return { height: '24px', width: '24px', color: isUploading ? '#AFAFAF' : '#4B4B4B' };
};

export const FILE_NAMES_SIZE_OR_ERROR_CONTAINER = {
  flex: 1,
  height: 'inherit',
  overflowY: 'auto',
  alignContent: 'center',
};

export const FILE_NAMES = (isUploading: boolean) => {
  return { color: isUploading ? '#AFAFAF' : '#000000' };
};

export const BUTTON = { width: '168px' };

export const BUTTON_ICON = (isDisabled?: boolean) => {
  return { height: '24px', width: '24px', color: isDisabled ? '#AFAFAF' : '#FFFFFF' };
};

export const DRAG_N_DROP_TEXT = { fontSize: '14px', fontWeight: 500, color: '#000000' };

export const CHOOSE_FILE_TEXT = { color: '#04636D' };

export const DESC_TEXT = { fontSize: '12px', fontWeight: 400, color: '#AFAFAF' };
