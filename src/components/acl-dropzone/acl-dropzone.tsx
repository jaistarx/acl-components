import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { Box, Button, IconButton, ListItemButton, ThemeProvider } from '@mui/material';
import React from 'react';
import Dropzone, { DropEvent, ErrorCode, FileRejection } from 'react-dropzone';
import { AclThemeProvider, convertBytes } from '../../common';
import {
  BUTTON,
  BUTTON_ICON,
  CHOOSE_FILE_TEXT,
  DESC_TEXT,
  DRAG_N_DROP_TEXT,
  DROPPED_FILES_SPEC_CONTAINER,
  FILES_BUTTON_CONTAINER,
  FILE_NAMES,
  FILE_NAMES_SIZE_OR_ERROR_CONTAINER,
  ICON,
  OUTER_BOX_CONTAINER,
} from './acl-dropzone.constant';
import { useAclDropzone } from './acl-dropzone.hook';
import { AclDropzoneProps } from './acl-dropzone.type';

const getForwardedProps = (props: AclDropzoneProps) => {
  const { isUploading, onClickUpload, helperText, errorText, disableUploadButton, ...restOfProps } = props;

  return {
    ...restOfProps,
  };
};

const AclDropzone = (props: AclDropzoneProps) => {
  const forwardedProps = getForwardedProps(props);
  const { acceptedFiles, fileRejections, dropEvent, resetAclDropzone, handleOnDrop } = useAclDropzone();

  const handleOnDropLocal = (acceptedFiles: File[], fileRejections: FileRejection[], dropEvent: DropEvent) => {
    handleOnDrop(acceptedFiles, fileRejections, dropEvent);
    props.onDrop?.(acceptedFiles, fileRejections, dropEvent);
  };

  const handleRejectionReason = (fileRejected: FileRejection) => {
    const error = fileRejected.errors[0];

    switch (error.code) {
      case ErrorCode.FileTooLarge:
        return `File is too large (max ${convertBytes(props.maxSize)})`;
      case ErrorCode.FileTooSmall:
        return `File is too small (min ${convertBytes(props.minSize)})`;
      case ErrorCode.TooManyFiles:
        return `File limit exceeded (max ${props.maxFiles ?? 'N/A'})`;
      case ErrorCode.FileInvalidType:
        const validFileTypes = props.accept
          ? Object.values(props.accept).flat().join(', ')
          : 'No valid types specified';

        return `Invalid file type (Allowed ${validFileTypes})`;
      default:
        return error.message || 'An unknown error occurred';
    }
  };

  const isFilesAccepted = Array.isArray(acceptedFiles) && acceptedFiles.length > 0;
  const isFilesRejected = Array.isArray(fileRejections) && fileRejections.length > 0;
  const isFilesDropped = Boolean(dropEvent);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Dropzone disabled={isFilesDropped} {...forwardedProps} onDrop={handleOnDropLocal}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps()} className="dropzone-container">
            <input {...getInputProps()} />
            <ListItemButton
              disableRipple={isFilesDropped}
              disableTouchRipple={isFilesDropped}
              sx={OUTER_BOX_CONTAINER(isDragActive, Boolean(isFilesDropped))}
            >
              {isFilesDropped ? (
                <>
                  <div style={FILES_BUTTON_CONTAINER}>
                    <div style={DROPPED_FILES_SPEC_CONTAINER(isFilesAccepted ? 'accepted' : 'rejected')}>
                      <div>
                        {isFilesAccepted && !props.errorText ? (
                          <InsertDriveFileOutlinedIcon sx={ICON(Boolean(props.isUploading))} />
                        ) : (
                          <ErrorIcon sx={{ ...ICON(Boolean(props.isUploading)), color: '#9F1853' }} />
                        )}
                      </div>
                      <Box sx={FILE_NAMES_SIZE_OR_ERROR_CONTAINER}>
                        <div style={FILE_NAMES(Boolean(props.isUploading))}>
                          {(isFilesRejected || props.errorText ? fileRejections : acceptedFiles)
                            ?.map(
                              (file: File | FileRejection) => (file as File).name || (file as FileRejection).file.name,
                            )
                            .join(', ')}
                        </div>
                        <div style={{ color: isFilesRejected || props.errorText ? '#9F1853' : '#AFAFAF' }}>
                          {Boolean(props.errorText)
                            ? props.errorText
                            : (isFilesRejected ? fileRejections : acceptedFiles)
                                ?.map((file: File | FileRejection) =>
                                  isFilesRejected
                                    ? handleRejectionReason(file as FileRejection)
                                    : convertBytes((file as File).size),
                                )
                                .join(', ')}
                        </div>
                      </Box>
                      <IconButton disabled={Boolean(props.isUploading)} onClick={() => resetAclDropzone()}>
                        <DeleteOutlineOutlinedIcon sx={ICON(Boolean(props.isUploading))} />
                      </IconButton>
                    </div>
                    <Button
                      variant="contained"
                      onClick={props.onClickUpload}
                      sx={BUTTON}
                      disabled={props.isUploading || isFilesRejected || props.disableUploadButton}
                      startIcon={
                        Boolean(props.isUploading) ? (
                          <RefreshOutlinedIcon sx={BUTTON_ICON(true)} />
                        ) : (
                          <FileUploadOutlinedIcon sx={BUTTON_ICON(isFilesRejected)} />
                        )
                      }
                    >
                      {Boolean(props.isUploading) ? 'Uploading' : 'Upload File'}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div style={DRAG_N_DROP_TEXT}>
                    <span style={CHOOSE_FILE_TEXT}>Choose a file</span> or Drag & drop it here
                  </div>
                  <div style={DESC_TEXT}>
                    {props.helperText ?? 'For file specifications, please download the roster template'}
                  </div>
                </>
              )}
            </ListItemButton>
          </div>
        )}
      </Dropzone>
    </ThemeProvider>
  );
};

export default AclDropzone;
