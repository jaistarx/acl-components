import type { Meta, StoryObj } from '@storybook/react';
import { AclRadio } from '.';

/**
 * AclRadio is a component that provides a simple radio button with customizable properties like checked state, color, disabled, and ripple effect.
 */

const meta: Meta<typeof AclRadio> = {
  component: AclRadio,
  title: 'Components/AclRadio',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: `Type: boolean
      \nDescription: If true, the radio button is checked.
      \nDefault Value: false
      \nExample: &lt;AclRadio checked={true} /&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the component is disabled.
      \nDefault Value: false
      \nExample: &lt;AclRadio disabled={true} /&gt;`,
    },

    disableRipple: {
      description: `Type: boolean
      \nDescription: If true, the ripple effect is disabled.
      \nDefault Value: false
      \nExample: &lt;AclRadio disableRipple={true} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Radio story with default properties
export const DefaultRadio: Story = {
  args: {
    name: 'radio-example',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
  },
};

export const DisableRipple: Story = {
  args: {
    disableRipple: true,
  },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
  },
};
