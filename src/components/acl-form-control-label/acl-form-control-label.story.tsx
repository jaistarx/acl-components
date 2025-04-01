import { Checkbox, Radio, Switch } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclFormControlLabel } from '.';

/**
 * AclFormControlLabel renders a label for a control element, such as a checkbox, radio button, or switch.
 * It supports various options like label placement and disabling the control.
 */

const meta: Meta<typeof AclFormControlLabel> = {
  component: AclFormControlLabel,
  title: 'Components/AclFormControlLabel',
  tags: ['autodocs'],
  argTypes: {
    control: {
      description: `Type: ReactElement
      \nDescription: A control element, such as a Radio, Switch, or Checkbox.
      \nExample: &lt;Checkbox /&gt; or &lt;Radio /&gt; or &lt;Switch /&gt;`,
    },

    checked: {
      description: `Type: boolean
      \nDescription: If true, the component appears selected.
      \nDefault Value: false
      \nExample: &lt;AclFormControlLabel checked={true} /&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the control is disabled.
      \nDefault Value: false
      \nExample: &lt;AclFormControlLabel disabled={true} /&gt;`,
    },

    label: {
      description: `Type: string | ReactNode
      \nDescription: A text or element to be used in an enclosing label element.
      \nExample: &lt;AclFormControlLabel label="My Label" /&gt;`,
    },

    labelPlacement: {
      description: `Type: 'bottom' | 'end' | 'start' | 'top'
      \nDescription: The position of the label relative to the control.
      \nDefault Value: "end"
      \nExample: &lt;AclFormControlLabel labelPlacement="start" /&gt;`,
    },

    required: {
      description: `Type: boolean
      \nDescription: If true, the label will indicate that the input is required.
      \nDefault Value: false
      \nExample: &lt;AclFormControlLabel required={true} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    control: <Checkbox />,
    label: 'Control: Checkbox',
  },
};

export const Checked: Story = {
  args: {
    control: <Radio />,
    checked: true,
    label: 'Checked Radio',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export const Disabled: Story = {
  args: {
    control: <Switch />,
    disabled: true,
    label: 'Disabled Switch',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Label: Story = {
  args: {
    control: <Checkbox />,
    label: 'Custom Label',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
};

export const LabelPlacement: Story = {
  args: {
    control: <Radio />,
    label: 'Radio Button',
    labelPlacement: 'top',
  },
  argTypes: {
    labelPlacement: {
      control: { type: 'radio' },
      options: ['bottom', 'end', 'start', 'top'],
    },
  },
};

export const Required: Story = {
  args: {
    control: <Switch />,
    required: true,
    label: 'Required Switch',
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
  },
};
