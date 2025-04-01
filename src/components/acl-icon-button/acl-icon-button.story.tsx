import { Delete, Info } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclIconButton } from '.';

/**
 * AclIconButton renders an icon button, which supports different colors, sizes, and states (like disabled).
 * It can display various MUI icons and provides optional features such as disabling ripple effects.
 */

const meta: Meta<typeof AclIconButton> = {
  component: AclIconButton,
  title: 'Components/AclIconButton',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: React.ReactNode
      \nDescription: The icon to display inside the button.
      \nExample: &lt;Edit /&gt; or &lt;Delete /&gt; or &lt;Info /&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the button will be disabled.
      \nDefault Value: false
      \nExample: &lt;AclIconButton disabled={true} /&gt;`,
    },

    disableFocusRipple: {
      description: `Type: boolean
      \nDescription: If true, the keyboard focus ripple will be disabled.
      \nDefault Value: false
      \nExample: &lt;AclIconButton disableFocusRipple={true} /&gt;`,
    },

    size: {
      description: `Type: 'small' | 'medium' | 'large'
      \nDescription: The size of the button.
      \nDefault Value: 'medium'
      \nExample: &lt;AclIconButton size="large" /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Info />,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    disableFocusRipple: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Disabled: Story = {
  args: {
    children: <Info />,
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    disableFocusRipple: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Size: Story = {
  args: {
    children: <Delete />,
    size: 'large',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    disableFocusRipple: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const DisableFocusRipple: Story = {
  args: {
    children: <Delete />,
    disableFocusRipple: false,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    disableFocusRipple: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
