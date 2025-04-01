import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclCheckbox, AclFormControlLabel } from '..';

/**
 * AclCheckbox component allows users to select one or more options from a set.
 * It can be used to control various settings in forms or options in the UI.
 *
 * NOTE: Use with AclFormControlLabel
 *  <AclFormControlLabel
 *    control={<AclCheckbox defaultChecked />}
 *    label="Label"
 *  />
 */

const meta: Meta<typeof AclCheckbox> = {
  component: AclCheckbox,
  title: 'Components/AclCheckbox',
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: {
      description: `Type: boolean
      \nDescription: The default checked state. Use when the component is not controlled.
      \nDefault Value: false
      \nExample: &lt;AclCheckbox defaultChecked={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    checked: {
      description: `Type: boolean
      \nDescription: If true, the component is checked.
      \nDefault Value: false
      \nExample: &lt;AclCheckbox checked={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the component is disabled.
      \nDefault Value: false
      \nExample: &lt;AclCheckbox disabled={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    indeterminate: {
      description: `Type: boolean
      \nDescription: If true, the component appears indeterminate. This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a data-indeterminate attribute on the input.
      \nDefault Value: false
      \nExample: &lt;AclCheckbox indeterminate={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Template: any = () => {
  return (
    <>
      <AclFormControlLabel control={<AclCheckbox defaultChecked />} label="Label" />
    </>
  );
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultChecked: Story = Template.bind({
  args: {
    defaultChecked: true,
  },
  argTypes: {
    defaultChecked: {
      control: { type: 'boolean' },
    },
  },
});

export const Checked: Story = {
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Indeterminate: Story = {
  args: {
    checked: true,
    indeterminate: true,
  },
  argTypes: {
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
};
