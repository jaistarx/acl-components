import { List } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclListItemButton } from '.';

/**
 * AclListItemButton renders a list item button with various customizable properties.
 * It supports options for alignment, focus behavior, density, and more.
 */

const meta: Meta<typeof AclListItemButton> = {
  component: AclListItemButton,
  title: 'Components/AclListItemButton',
  tags: ['autodocs'],
  argTypes: {
    alignItems: {
      description: `Type: 'center' | 'flex-start'
      \nDescription: Defines the align-items style property for the button.
      \nDefault Value: 'center'
      \nExample: &lt;AclListItemButton alignItems="flex-start" /&gt;`,
    },

    autoFocus: {
      description: `Type: boolean
      \nDescription: If true, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true.
      \nDefault Value: false
      \nExample: &lt;AclListItemButton autoFocus={true} /&gt;`,
    },

    dense: {
      description: `Type: boolean
      \nDescription: If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component.
      \nDefault Value: false
      \nExample: &lt;AclListItemButton dense={true} /&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the component is disabled.
      \nDefault Value: false
      \nExample: &lt;AclListItemButton disabled={true} /&gt;`,
    },

    divider: {
      description: `Type: boolean
      \nDescription: If true, a 1px light border is added to the bottom of the list item.
      \nDefault Value: false
      \nExample: &lt;AclListItemButton divider={true} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlignedFlexStart: Story = {
  args: {
    alignItems: 'flex-start',
    children: 'Aligned to Flex Start',
  },
  argTypes: {
    alignItems: {
      control: { type: 'radio' },
      options: ['center', 'flex-start'],
    },
  },

  render: (args) => (
    <List>
      <AclListItemButton {...args} sx={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
        {args.children}
      </AclListItemButton>
    </List>
  ),
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    children: 'Auto Focused List Item Button',
  },
  argTypes: {
    autoFocus: { control: { type: 'boolean' } },
  },

  render: (args) => (
    <List>
      <AclListItemButton {...args} sx={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
        {args.children}
      </AclListItemButton>
    </List>
  ),
};

export const Dense: Story = {
  args: {
    dense: true,
    children: 'Dense List Item Button',
  },
  argTypes: {
    dense: { control: { type: 'boolean' } },
  },

  render: (args) => (
    <List>
      <AclListItemButton {...args} sx={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
        {args.children}
      </AclListItemButton>
    </List>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled List Item Button',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },

  render: (args) => (
    <List>
      <AclListItemButton {...args} sx={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
        {args.children}
      </AclListItemButton>
    </List>
  ),
};

export const Divider: Story = {
  args: {
    divider: true,
    children: 'List Item Button with Divider',
  },
  argTypes: {
    divider: { control: { type: 'boolean' } },
  },

  render: (args) => (
    <List>
      <AclListItemButton {...args} sx={{ backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
        {args.children}
      </AclListItemButton>
    </List>
  ),
};
