import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclFormControl } from '.';

/**
 * AclFormControl is a wrapper component that provides context for form controls like input fields.
 * It supports various customization options for layout and display.
 */

const meta: Meta<typeof AclFormControl> = {
  component: AclFormControl,
  title: 'Components/AclFormControl',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content of the component.
      \nExample: &lt;AclFormControl&gt;&lt;TextField label="Input" /&gt;&lt;/AclFormControl&gt;`,
    },

    error: {
      description: `Type: boolean
      \nDescription: If true, the label is displayed in an error state.
      \nDefault Value: false
      \nExample: &lt;AclFormControl error /&gt;`,
    },

    focused: {
      description: `Type: boolean
      \nDescription: If true, the component is displayed in focused state.
      \nExample: &lt;AclFormControl focused /&gt;`,
    },

    fullWidth: {
      description: `Type: boolean
      \nDescription: If true, the component will take up the full width of its container.
      \nDefault Value: false
      \nExample: &lt;AclFormControl fullWidth /&gt;`,
    },

    hiddenLabel: {
      description: `Type: boolean
      \nDescription: If true, the label is hidden. This increases density for a FilledInput. Be sure to add aria-label to the input element.
      \nDefault Value: false
      \nExample: &lt;AclFormControl hiddenLabel /&gt;`,
    },

    required: {
      description: `Type: boolean
      \nDescription: If true, the label indicates that the input is required.
      \nDefault Value: false
      \nExample: &lt;AclFormControl required /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <TextField label="Default Input" variant="outlined" />,
    color: 'primary',
    error: false,
    focused: false,
    fullWidth: false,
    hiddenLabel: false,
    required: false,
  },
};

export const Error: Story = {
  args: {
    children: <TextField label="Error Input" variant="outlined" />,
    error: true,
  },
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
  },
};

export const Focused: Story = {
  args: {
    children: <TextField label="Focused Input" variant="outlined" />,
    focused: true,
  },
  argTypes: {
    focused: {
      control: { type: 'boolean' },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: <TextField label="Full Width Input" variant="outlined" />,
    fullWidth: true,
  },
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export const HiddenLabel: Story = {
  args: {
    children: <TextField label="Hidden Label Input" variant="filled" aria-label="Hidden Label" />,

    hiddenLabel: true,
  },
  argTypes: {
    hiddenLabel: {
      control: { type: 'boolean' },
    },
  },
};

export const Required: Story = {
  args: {
    children: <TextField label="Required Input" variant="outlined" />,
    required: true,
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
  },
};
