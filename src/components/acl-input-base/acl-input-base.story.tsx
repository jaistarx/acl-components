import type { Meta, StoryObj } from '@storybook/react';
import { AclInputBase } from '.';

/**
 * AclInputBase is a customizable input component that supports various features like auto focus,
 * error indication, and different colors. It can be used in forms or standalone input fields.
 */

const meta: Meta<typeof AclInputBase> = {
  component: AclInputBase,
  title: 'Components/AclInputBase',
  tags: ['autodocs'],
  argTypes: {
    autoFocus: {
      description: `Type: boolean
      \nDescription: If true, the input element is focused during the first mount.
      \nDefault Value: false
      \nExample: &lt;AclInputBase autoFocus={true} /&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the component is disabled. The prop defaults to the value (false) inherited
      from the parent FormControl component.
      \nExample: &lt;AclInputBase disabled={true} /&gt;`,
    },

    error: {
      description: `Type: boolean
      \nDescription: If true, the input will indicate an error. The prop defaults to the value (false)
      inherited from the parent FormControl component.
      \nExample: &lt;AclInputBase error={true} /&gt;`,
    },

    fullWidth: {
      description: `Type: boolean
      \nDescription: If true, the input will take up the full width of its container.
      \nDefault Value: false
      \nExample: &lt;AclInputBase fullWidth={true} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: 'Input base',
  },
  argTypes: {
    autoFocus: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input',
  },
  argTypes: {
    autoFocus: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Input with Error',
  },
  argTypes: {
    autoFocus: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full Width Input',
  },
  argTypes: {
    autoFocus: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};
