import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclBox } from '.';

/**ACLBox component is a generic, theme-aware container with access to CSS utilities from MUI System.  */
const meta: Meta<typeof AclBox> = {
  component: AclBox,
  title: 'Components/AclBox',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content or children components representing access control information inside the ACL box.
      \nDefault Value: null
      \nExample: &lt;ACLBox&gt;Content goes here&lt;/ACLBox&gt;`,
      defaultValue: 'This text is inside the AclBox',
      control: { type: 'text' },
    },

    sx: {
      description: `Type: object
      \nDescription: The sx prop allows you to apply custom styling using Theme UI. It provides a 
      flexible way to customize the appearance of the ACL box.
      \nDefault Value: {}
      \nExample: &lt;ACLBox sx={{ padding: '15px', backgroundColor: 'lightblue', color: "purple" }} &gt;Custom Styling &lt;/ACLBox&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Children: Story = {
  args: {
    children: <>This text is inside AclBox</>,
  },
};

export const Sx: Story = {
  args: {
    children: <>This text is inside AclBox</>,
    sx: { padding: '15px', backgroundColor: 'lightblue', color: 'purple' },
  },
};
