import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclBox, AclCollapse } from '..';

/**
 * AclCollapse component is used to show and hide content with a smooth transition.
 */

const meta: Meta<typeof AclCollapse> = {
  component: AclCollapse,
  title: 'Components/AclCollapse',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content node to be collapsed.
      \nDefault Value: null
      \nExample: &lt;AclCollapse&gt;This is the content inside the collapse component.&lt;/AclCollapse&gt;`,
      control: { type: 'text' },
    },

    collapsedSize: {
      description: `Type: string
      \nDescription: The size (height or width) of the container when collapsed.
      \nDefault Value: "0px"
      \nExample: &lt;AclCollapse collapsedSize="50px"&gt;Content&lt;/AclCollapse&gt;`,
      control: { type: 'text' },
      defaultValue: '0px',
    },

    in: {
      description: `Type: boolean
      \nDescription: If true, the component will transition in (expand).
      \nDefault Value: false
      \nExample: &lt;AclCollapse in={true}&gt;Content&lt;/AclCollapse&gt;`,
      control: { type: 'boolean' },
      defaultValue: false,
    },

    orientation: {
      description: `Type: 'horizontal' | 'vertical'
      \nDescription: The transition orientation, either 'horizontal' or 'vertical'.
      \nDefault Value: "vertical"
      \nExample: &lt;AclCollapse orientation="horizontal"&gt;Content&lt;/AclCollapse&gt;`,
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'vertical',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const CollapsedSize: Story = {
  args: {
    children: (
      <AclBox>
        <Typography variant="body1">This content is collapsed with a custom size (50px).</Typography>
      </AclBox>
    ),
    collapsedSize: '50px',
    in: true,
    orientation: 'vertical',
  },
  argTypes: {
    collapsedSize: {
      control: { type: 'text' },
    },
    in: {
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export const In: Story = {
  args: {
    children: (
      <AclBox>
        <Typography variant="body1">This content is currently expanded.</Typography>
      </AclBox>
    ),
    collapsedSize: '0px',
    in: true,
    orientation: 'vertical',
  },
  argTypes: {
    in: {
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export const Orientation: Story = {
  args: {
    children: (
      <AclBox>
        <Typography variant="body1">This content collapses horizontally.</Typography>
      </AclBox>
    ),
    collapsedSize: '0px',
    in: true,
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    in: {
      control: { type: 'boolean' },
    },
  },
};
