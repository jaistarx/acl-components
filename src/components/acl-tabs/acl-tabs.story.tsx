import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AclTabs } from '.';

const meta: Meta<typeof AclTabs> = {
  component: AclTabs,
  title: 'Components/AclTabs',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: `Type: 'standard' | 'scrollable' | 'fullWidth' | 'primary' | 'secondary'.
      \nDescription: Defines the variant of the tabs.
      \nDefault Value: 'standard'
      \nExample: &lt;AclTabs variant="scrollable" /&gt;`,
    },
    tabItems: {
      description: `Type: AclTabItems[]
      \nDescription: An array of tab items, each with optional count.
      \nExample: &lt;AclTabs tabItems={[{ label: 'Tab 1', count: 5 }, { label: 'Tab 2', count: 10 }]} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: React.FC<any> = ({ children, ...props }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<string>('Tab 1');

  return (
    <>
      <AclTabs value={value} onChange={(_event, newValue) => setValue(newValue)} {...props}>
        Open Popper
      </AclTabs>
    </>
  );
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    tabItems: [{ label: 'Tab 1', count: 5 }, { label: 'Tab 2' }],
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  render: (args) => <Template {...args} />,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    tabItems: [{ label: 'Tab 1', count: 5 }, { label: 'Tab 2' }],
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  render: (args) => <Template {...args} />,
};

export const Centered: Story = {
  args: {
    variant: 'primary',
    centered: true,
    tabItems: [{ label: 'Tab 1', count: 5 }, { label: 'Tab 2' }],
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  render: (args) => <Template {...args} />,
};

export const Value: Story = {
  args: {
    variant: 'primary',
    value: 'Tab 1',
    tabItems: [{ label: 'Tab 1', count: 5 }, { label: 'Tab 2' }],
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  render: (args) => <Template {...args} />,
};

export const OnChange: Story = {
  args: {
    variant: 'primary',
    onChange: (_event: React.SyntheticEvent, newValue: string) => console.log(newValue),
    tabItems: [{ label: 'Tab 1', count: 5 }, { label: 'Tab 2' }],
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  render: (args) => <Template {...args} />,
};
