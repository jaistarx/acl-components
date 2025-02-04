import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import { DropEvent, FileRejection } from 'react-dropzone';
import { AclButton, AclDropzone, AclDropzoneProvider, useAclDropzone } from '../..';

jest.mock('./acl-dropzone.hook', () => ({
  useAclDropzone: jest.fn(),
}));

const TestComponent = () => {
  const { handleOnDrop } = useAclDropzone();

  return <button onClick={() => handleOnDrop([], [], {} as DropEvent)}>Drop File</button>;
};

describe('AclDropzone', () => {
  let mockHandleOnDrop: jest.Mock;
  let mockResetAclDropzone: jest.Mock;

  beforeEach(() => {
    mockHandleOnDrop = jest.fn();
    mockResetAclDropzone = jest.fn();
    (useAclDropzone as jest.Mock).mockReturnValue({
      acceptedFiles: [],
      fileRejections: [],
      dropEvent: undefined,
      resetAclDropzone: mockResetAclDropzone,
      handleOnDrop: mockHandleOnDrop,
    });
  });

  it('renders dropzone component', () => {
    render(<AclDropzone />);
    expect(screen.getByText(/Choose a file/i)).toBeInTheDocument();
  });

  it('displays dropped file name', () => {
    (useAclDropzone as jest.Mock).mockReturnValue({
      acceptedFiles: [new File([], 'testfile.txt')],
      fileRejections: [],
      dropEvent: {},
      resetAclDropzone: mockResetAclDropzone,
      handleOnDrop: mockHandleOnDrop,
    });

    render(<AclDropzone />);
    expect(screen.getByText('testfile.txt')).toBeInTheDocument();
  });

  it('handles file rejection', () => {
    (useAclDropzone as jest.Mock).mockReturnValue({
      acceptedFiles: [],
      fileRejections: [
        { file: new File([], 'invalidfile.txt'), errors: [{ code: 'file-too-large', message: 'File is too large' }] },
      ],
      dropEvent: {},
      resetAclDropzone: mockResetAclDropzone,
      handleOnDrop: mockHandleOnDrop,
    });

    render(<AclDropzone />);
    expect(screen.getByText(/File is too large/i)).toBeInTheDocument();
  });

  it('resets dropzone when delete icon is clicked', () => {
    (useAclDropzone as jest.Mock).mockReturnValue({
      acceptedFiles: [new File([], 'testfile.txt')],
      fileRejections: [],
      dropEvent: {},
      resetAclDropzone: mockResetAclDropzone,
      handleOnDrop: mockHandleOnDrop,
    });

    render(<AclDropzone />);
    const deleteIcon = screen.getByTestId('DeleteOutlineOutlinedIcon');
    fireEvent.click(deleteIcon.parentElement!);
    expect(mockResetAclDropzone).toHaveBeenCalled();
  });

  it('renders dropzone component with custom helper text', () => {
    render(<AclDropzone helperText="Custom helper text" />);
    expect(screen.getByText('Custom helper text')).toBeInTheDocument();
  });

  it('resets dropzone correctly', () => {
    (useAclDropzone as jest.Mock).mockReturnValue({
      acceptedFiles: [new File([], 'testfile.txt')],
      fileRejections: [],
      dropEvent: {},
      resetAclDropzone: mockResetAclDropzone,
      handleOnDrop: mockHandleOnDrop,
    });

    render(
      <>
        <AclButton onClick={mockResetAclDropzone}>Reset Dropzone</AclButton>
        <AclDropzone helperText="Custom helper text" />
      </>,
    );

    expect(screen.getByText('testfile.txt')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Reset Dropzone'));
    expect(mockResetAclDropzone).toHaveBeenCalled();
  });

  it('should update state when handleOnDrop is called', async () => {
    const testAcceptedFiles = [new File(['file content'], 'test-file.txt', { type: 'text/plain' })];
    const testRejections: FileRejection[] = [];
    const testEvent = {} as DropEvent;
    render(
      <AclDropzoneProvider>
        <TestComponent />
      </AclDropzoneProvider>,
    );
    await act(async () => {
      mockHandleOnDrop(testAcceptedFiles, testRejections, testEvent);
    });
    expect(mockHandleOnDrop).toHaveBeenCalledWith(testAcceptedFiles, testRejections, testEvent);
  });
});

describe('useAclDropzone', () => {
  it('should return default values when no provider is present', () => {
    const { result } = renderHook(() => useAclDropzone());

    expect(result.current).toEqual({
      acceptedFiles: [],
      fileRejections: [],
      dropEvent: undefined,
      resetAclDropzone: expect.any(Function),
      handleOnDrop: expect.any(Function),
    });
  });
});
