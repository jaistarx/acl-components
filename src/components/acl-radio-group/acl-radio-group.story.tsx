import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclRadio, AclRadioGroup } from '..';

/**
 * AclRadioGroup is a component that groups radio buttons together, allowing only one selection at a time.
 */

const meta: Meta<typeof AclRadioGroup> = {
  component: AclRadioGroup,
  title: 'Components/AclRadioGroup',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: node
      \nDescription: The content of the component, typically one or more AclRadio components.
      \nDefault Value: undefined
      \nExample: &lt;AclRadioGroup><AclRadio value="option1" /glt; &lt;AclRadio value="option2" /glt;&lt;/AclRadioGroup &gt;`,
    },

    name: {
      description: `Type: string
      \nDescription: The name used to reference the value of the control. If not provided, it defaults to a randomly generated name.
      \nDefault Value: undefined
      \nExample: &lt;AclRadioGroup name="radio-group" /glt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    name: 'custom-radio-group',
    children: (
      <>
        <label>
          <AclRadio value="optionA" /> Option A
        </label>
        <label>
          <AclRadio value="optionB" /> Option B
        </label>
      </>
    ),
  },
  argTypes: {
    name: { control: { type: 'text' } },
  },
};
