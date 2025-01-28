import { render } from '@testing-library/react';
import React from 'react';
import { AclLoader } from '../..';

describe('AclLoader', () => {
  it('renders with CircularProgress when open', () => {
    const { container } = render(<AclLoader open={true} />);
    const circularProgressElement = container.querySelector('.MuiCircularProgress-root');
    expect(circularProgressElement).toBeInTheDocument();
  });

  it('does not render CircularProgress when AclLoader is closed', () => {
    const { container } = render(<AclLoader open={false} />);
    const circularProgressElement = container.querySelector('.MuiCircularProgress-root');
    expect(circularProgressElement).not.toBeInTheDocument();
  });
});
