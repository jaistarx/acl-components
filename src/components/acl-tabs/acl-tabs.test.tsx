import { Tabs } from '@mui/material';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclTabItem, AclTabs } from '../..';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Tabs: jest.fn(({ children }) => <div data-testid="tabs">{children}</div>),
  Tab: jest.fn(({ label }) => <div data-testid="tab">{label}</div>),
}));

describe('AclTabs', () => {
  it('renders Tabs component with tab items', () => {
    const tabItems = [
      { label: 'Tab 1', count: 10 },
      { label: 'Tab 2', count: 5 },
    ];
    render(<AclTabs tabItems={tabItems} />);
    const tabs = screen.getByTestId('tabs');
    expect(tabs).toBeInTheDocument();
    const tabLabels = screen.getAllByTestId('tab');
    expect(tabLabels).toHaveLength(2);
    expect(tabLabels[0]).toHaveTextContent('Tab 1');
    expect(tabLabels[1]).toHaveTextContent('Tab 2');
  });

  it('applies custom styles and props to Tabs', () => {
    const tabItems = [{ label: 'Tab 1', count: 3 }];
    render(
      <AclTabs tabItems={tabItems} centered={false} justifyContent="flex-start" sx={{ backgroundColor: 'red' }} />,
    );
    expect(Tabs).toHaveBeenCalledWith(
      expect.objectContaining({
        centered: false,
        sx: expect.objectContaining({
          backgroundColor: 'red',
        }),
      }),
      expect.anything(),
    );
  });

  it('renders custom tab labels with counts', () => {
    const tabItems = [{ label: 'Tab 1', count: 10 }, { label: 'Tab 2' }];
    render(<AclTabs tabItems={tabItems} />);
    const tabs = screen.getAllByTestId('tab');
    expect(tabs[0]).toHaveTextContent('Tab 1');
    expect(tabs[0]).toHaveTextContent('10');
    expect(tabs[1]).toHaveTextContent('Tab 2');
  });

  it('renders nothing for invalid tab items', () => {
    const tabItems = [null, undefined, { label: 'Tab 1' }];
    render(<AclTabs tabItems={tabItems as AclTabItem[]} />);
    const tabs = screen.getAllByTestId('tab');
    expect(tabs).toHaveLength(1);
    expect(tabs[0]).toHaveTextContent('Tab 1');
  });

  it('renders nothing when tab items are not provided', () => {
    const { container } = render(<AclTabs />);
    const tabs = container.querySelector('.MuiTabs-root');
    expect(tabs).not.toBeInTheDocument();
  });

  it('applies custom variant and handles additional tab properties', () => {
    const tabItems = [{ label: 'Custom Tab', variant: 'secondary', count: 15 }];
    render(<AclTabs tabItems={tabItems} variant="secondary" />);
    expect(Tabs).toHaveBeenCalledWith(
      expect.objectContaining({
        sx: expect.objectContaining({
          '& .MuiTabs-flexContainer': { justifyContent: 'space-evenly' },
        }),
      }),
      expect.anything(),
    );
    const tabLabels = screen.getAllByTestId('tab');
    expect(tabLabels[0]).toHaveTextContent('Custom Tab');
    expect(tabLabels[0]).toHaveTextContent('15');
  });
});
