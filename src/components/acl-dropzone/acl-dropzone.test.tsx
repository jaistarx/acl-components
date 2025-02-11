import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import React, { useContext } from 'react';
import { ErrorCode, FileRejection } from 'react-dropzone';
import { AclDropzone, AclDropzoneContext, AclDropzoneProvider, useAclDropzone } from '../..';

const mockData = (files: File[]) => {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
};

const TestComponent = () => {
  const context = useContext(AclDropzoneContext);

  if (!context) {
    return <div>Context not available</div>;
  }

  return (
    <div>
      <button onClick={context.resetAclDropzone}>Reset</button>
      <button onClick={() => context.handleOnDrop([{ name: 'test-file.txt' } as File], [], {} as DragEvent)}>
        Drop File
      </button>
      <span data-testid="files">{context.acceptedFiles?.length ?? 0}</span>
      <span data-testid="rejections">{context.fileRejections?.length ?? 0}</span>
    </div>
  );
};

describe('AclDropzoneProvider', () => {
  it('should reset dropzone state when resetAclDropzone is called', () => {
    render(
      <AclDropzoneProvider>
        <TestComponent />
      </AclDropzoneProvider>,
    );

    const filesCount = screen.getByTestId('files');
    const rejectionsCount = screen.getByTestId('rejections');
    const resetButton = screen.getByText('Reset');

    act(() => {
      screen.getByText('Drop File').click();
    });
    expect(filesCount).toHaveTextContent('1');
    expect(rejectionsCount).toHaveTextContent('0');
    act(() => {
      resetButton.click();
    });
    expect(filesCount).toHaveTextContent('0');
    expect(rejectionsCount).toHaveTextContent('0');
  });

  it('should handle file drop and update state correctly', () => {
    render(
      <AclDropzoneProvider>
        <TestComponent />
      </AclDropzoneProvider>,
    );

    const filesCount = screen.getByTestId('files');
    const rejectionsCount = screen.getByTestId('rejections');
    const dropButton = screen.getByText('Drop File');

    expect(filesCount).toHaveTextContent('0');
    expect(rejectionsCount).toHaveTextContent('0');
    act(() => {
      dropButton.click();
    });
    expect(filesCount).toHaveTextContent('1');
    expect(rejectionsCount).toHaveTextContent('0');
  });
});

describe('AclDropzone', () => {
  let mockFiles: File[];
  let mockRejections: FileRejection[];
  let testEvent: DragEvent;

  beforeEach(() => {
    mockFiles = [new File(['file content'], 'test-file.txt', { type: 'text/plain' })];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.FileTooLarge, message: 'File is too large' }],
      },
    ];
    testEvent = {} as DragEvent;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders dropzone component', () => {
    render(<AclDropzone />);
    expect(screen.getByText(/Choose a file/i)).toBeInTheDocument();
  });

  it('displays dropped file name', async () => {
    mockRejections = [];

    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText('test-file.txt')).toBeInTheDocument();
  });

  it('handles file too large rejection', () => {
    mockFiles = [];

    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/File is too large/i)).toBeInTheDocument();
  });

  it('handles file too small rejection', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.FileTooSmall, message: 'File is too small' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/File is too small/i)).toBeInTheDocument();
  });

  it('handles too many files rejection', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.TooManyFiles, message: 'File limit exceeded' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/File limit exceeded/i)).toBeInTheDocument();
  });

  it('handles too many files rejection with max number of files provided', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.TooManyFiles, message: 'File limit exceeded' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone maxFiles={4} />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/File limit exceeded/i)).toBeInTheDocument();
    expect(screen.getByText(/max 4/i)).toBeInTheDocument();
  });

  it('handles invalid file type rejection', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.FileInvalidType, message: 'Invalid file type' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
          }}
        />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/Invalid file type/i)).toBeInTheDocument();
  });

  it('handles invalid file type rejection without accept prop', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.FileInvalidType, message: 'Invalid file type' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/Invalid file type/i)).toBeInTheDocument();
    expect(screen.getByText(/No valid types specified/i)).toBeInTheDocument();
  });

  it('handles rejection with invalid code', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: 'invalid code', message: 'An unknown error occurred' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/An unknown error occurred/i)).toBeInTheDocument();
  });

  it('handles rejection with invalid code when meassage is not present', () => {
    mockFiles = [];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: 'invalid code', message: '' }],
      },
    ];
    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );

    expect(screen.getByText(/An unknown error occurred/i)).toBeInTheDocument();
  });

  it('resets dropzone when delete icon is clicked', () => {
    mockRejections = [];

    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone />
      </AclDropzoneProvider>,
    );
    const deleteIcon = screen.getByTestId('DeleteOutlineOutlinedIcon');
    fireEvent.click(deleteIcon.parentElement!);
    expect(deleteIcon).not.toBeInTheDocument();
    expect(screen.queryByText('test-file.txt')).not.toBeInTheDocument();
  });

  it('renders dropzone component with custom helper text', () => {
    render(<AclDropzone helperText="Custom helper text" />);
    expect(screen.getByText('Custom helper text')).toBeInTheDocument();
  });

  it('renders dropzone component with custom error text', () => {
    mockFiles = [];

    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone errorText="Custom error text" />
      </AclDropzoneProvider>,
    );
    expect(screen.getByText('Custom error text')).toBeInTheDocument();
  });

  it('overrides accepted files if custom error text is given', () => {
    mockFiles = [];
    mockRejections = null as unknown as FileRejection[];

    render(
      <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
        <AclDropzone errorText="Custom error text" />
      </AclDropzoneProvider>,
    );
    expect(screen.getByText('Custom error text')).toBeInTheDocument();
  });

  it('should call handleOnDropLocal when files are dropped', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', { type: 'application/json' });
    const data = mockData([file]);
    const onDragEnter = jest.fn();
    const onDrop = jest.fn();

    const { container } = render(<AclDropzone onDrop={onDrop} onDragEnter={onDragEnter} />);

    await act(() => fireEvent.dragEnter(container.querySelector('.dropzone-container')!, data));
    await act(() => fireEvent.drop(container.querySelector('.dropzone-container')!, data));
    expect(onDragEnter).toHaveBeenCalled();
    expect(onDrop).toHaveBeenCalled();
  });

  it('does not call handleOnDropLocal when files are dropped if not provided', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', { type: 'application/json' });
    const data = mockData([file]);
    const onDragEnter = jest.fn();
    const onDrop = jest.fn();

    const { container } = render(<AclDropzone />);

    await act(() => fireEvent.dragEnter(container.querySelector('.dropzone-container')!, data));
    await act(() => fireEvent.drop(container.querySelector('.dropzone-container')!, data));
    expect(onDragEnter).not.toHaveBeenCalled();
    expect(onDrop).not.toHaveBeenCalled();
  });

  it('shows loader while isuploadind is true', async () => {
    mockRejections = [];
    render(
      <>
        <AclDropzoneProvider acceptedFiles={mockFiles} fileRejections={mockRejections} dropEvent={testEvent}>
          <AclDropzone isUploading={true} />
        </AclDropzoneProvider>
      </>,
    );

    expect(screen.getByText('Uploading')).toBeInTheDocument();
  });
});

describe('useAclDropzone', () => {
  let mockFiles: File[];
  let mockRejections: FileRejection[];
  let testEvent: DragEvent;

  beforeEach(() => {
    mockFiles = [new File(['file content'], 'test-file.txt', { type: 'text/plain' })];
    mockRejections = [
      {
        file: new File([], 'invalidfile.txt'),
        errors: [{ code: ErrorCode.FileTooLarge, message: 'File is too large' }],
      },
    ];
    testEvent = {} as DragEvent;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return default values when no provider is present', () => {
    const { result } = renderHook(() => useAclDropzone());

    expect(result.current.acceptedFiles).toEqual([]);
    expect(result.current.fileRejections).toEqual([]);
    expect(result.current.dropEvent).toBeUndefined();
    expect(() => result.current.resetAclDropzone()).not.toThrow();
    expect(() => result.current.handleOnDrop([], [], {} as DragEvent)).not.toThrow();
  });

  it('should use values from AclDropzoneProvider', () => {
    const { result } = renderHook(() => useAclDropzone(), {
      wrapper: AclDropzoneProvider,
    });

    expect(result.current.acceptedFiles).toBeUndefined();
    expect(result.current.fileRejections).toBeUndefined();
    expect(result.current.dropEvent).toBeUndefined();
  });

  it('should update accepted files and file rejections when handleOnDrop is called', async () => {
    const { result } = renderHook(() => useAclDropzone(), {
      wrapper: AclDropzoneProvider,
    });
    mockRejections = [];

    act(() => {
      result.current.handleOnDrop(mockFiles, mockRejections, testEvent);
    });
    await waitFor(() => expect(result.current.acceptedFiles).toHaveLength(1));
    await waitFor(() => expect(result.current.fileRejections).toEqual(mockRejections));
  });

  it('handleOnDrop for largeFileRejection', async () => {
    const { result } = renderHook(() => useAclDropzone(), {
      wrapper: AclDropzoneProvider,
    });
    const largeFileRejection: FileRejection[] = [
      {
        file: new File(['file content'], 'large-file.txt', { type: 'text/plain' }),
        errors: [{ code: ErrorCode.FileTooLarge, message: '' }],
      },
    ];

    act(() => {
      result.current.handleOnDrop([], largeFileRejection, testEvent);
    });
    await waitFor(() => expect(result.current.fileRejections).toEqual(largeFileRejection));
  });

  it('handleOnDrop for smallFileRejection', async () => {
    const { result } = renderHook(() => useAclDropzone(), {
      wrapper: AclDropzoneProvider,
    });
    const smallFileRejection: FileRejection[] = [
      {
        file: new File(['file content'], 'small-file.txt', { type: 'text/plain' }),
        errors: [{ code: ErrorCode.FileTooSmall, message: '' }],
      },
    ];

    act(() => {
      result.current.handleOnDrop([], smallFileRejection, testEvent);
    });
    await waitFor(() => expect(result.current.fileRejections).toEqual(smallFileRejection));
  });

  it('handleOnDrop for invalidTypeRejection', async () => {
    const { result } = renderHook(() => useAclDropzone(), {
      wrapper: AclDropzoneProvider,
    });
    const invalidTypeRejection: FileRejection[] = [
      {
        file: new File(['file content'], 'invalid-file.jpg', { type: 'image/jpeg' }),
        errors: [{ code: ErrorCode.FileInvalidType, message: '' }],
      },
    ];

    act(() => {
      result.current.handleOnDrop([], invalidTypeRejection, testEvent);
    });
    await waitFor(() => expect(result.current.fileRejections).toEqual(invalidTypeRejection));
  });
});
