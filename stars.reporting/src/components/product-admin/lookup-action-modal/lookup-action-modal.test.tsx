import { renderTestingComponent } from '@/utils/common/helper';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import LookupActionModal from './index';

describe('LookupActionModal', () => {
  const defaultProps = {
    modalName: 'Add',
    openModal: true,
    setOpenModal: jest.fn(),
    lookupName: 'Test Lookup',
  };

  test('should render the modal with the correct elements', () => {
    renderTestingComponent(<LookupActionModal {...defaultProps} />);
    expect(screen.getByText('Add Test Lookup')).toBeInTheDocument();
    expect(screen.getByText('Lookup Value')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('should call toggleModal with false when Cancel button is clicked', () => {
    renderTestingComponent(<LookupActionModal {...defaultProps} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(defaultProps.setOpenModal).toHaveBeenCalledWith(false);
  });

  it('should not render the modal when openModal is false', () => {
    renderTestingComponent(<LookupActionModal {...defaultProps} openModal={false} />);
    expect(screen.queryByText('Add Test Lookup')).not.toBeInTheDocument();
  });
});
