import { render } from '@testing-library/react';
import React from 'react';
import { AclBackdropLoader } from '../..';

describe('AclBackdropLoader', () => {
  it('renders Backdrop with CircularProgress when open', () => {
    const { container } = render(<AclBackdropLoader open={true} />);
    const backdropElement = container.querySelector('.MuiBackdrop-root');
    const circularProgressElement = container.querySelector('.MuiCircularProgress-root');
    expect(backdropElement).toBeInTheDocument();
    expect(circularProgressElement).toBeInTheDocument();
  });

  it('does not render CircularProgress when Backdrop is closed', () => {
    const { container } = render(<AclBackdropLoader open={false} />);
    const backdropElement = container.querySelector('.MuiBackdrop-root');
    const circularProgressElement = container.querySelector('.MuiCircularProgress-root');
    expect(backdropElement).not.toBeInTheDocument();
    expect(circularProgressElement).not.toBeInTheDocument();
  });
});
