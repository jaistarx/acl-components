import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclDatepicker } from '.';

/**The AclDatepicker component is designed to facilitate the selection of dates from a calendar
 * interface. It allows users to pick a specific date, making it a user-friendly and standardized
 * way to collect date-related information.
 */
const meta: Meta<typeof AclDatepicker> = {
  component: AclDatepicker,
  title: 'Components/AclDatepicker',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: `Type: string
        \nDescription: The label prop sets a label or placeholder text for the datepicker input.
        \nDefault Value: ''
        \nExample: 
        &lt;AclDatepicker label="Select a Date" /&gt;`,
      control: { type: 'text' },
    },
    fullWidth: {
      description: `Type: boolean
        \nDescription: The fullWidth prop, when set to true, makes the datepicker span the full width of its container.
        \nDefault Value: false
        \nExample:
        &lt;AclDatepicker fullWidth={true} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: <>Sample Date Picker</>,
  },
};

export const FullWidth: Story = {
  args: {
    label: <>Sample Date Picker</>,
    fullWidth: true,
  },
  argTypes: {
    fullWidth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};
