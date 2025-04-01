import { List, ListItem } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclListItemText } from '.';

/**
 * AclListItemText renders a text block for a list item with customizable properties.
 * It supports options like disabling Typography wrapping and indented text for certain layouts.
 */

const meta: Meta<typeof AclListItemText> = {
  component: AclListItemText,
  title: 'Components/AclListItemText',
  tags: ['autodocs'],
  argTypes: {
    disableTypography: {
      description: `Type: boolean
      \nDescription: If true, the children won't be wrapped by a Typography component. This is useful for rendering an alternative Typography variant by wrapping the text manually.
      \nDefault Value: false
      \nExample: &lt;AclListItemText disableTypography={true} /&gt;`,
    },

    inset: {
      description: `Type: boolean
      \nDescription: If true, the children are indented. This is helpful when there is no left avatar or icon.
      \nDefault Value: false
      \nExample: &lt;AclListItemText inset={true} /&gt;`,
    },

    primary: {
      description: `Type: string | ReactNode
      \nDescription: The primary content of the list item text, typically used for the main label.
      \nExample: &lt;AclListItemText primary="Primary Text" /&gt;`,
    },

    secondary: {
      description: `Type: string | ReactNode
      \nDescription: The secondary content of the list item text, usually displayed below the primary content.
      \nExample: &lt;AclListItemText secondary="Secondary Text" /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DisableTypography: Story = {
  args: {
    primary: 'Text Without Typography Wrapping',
    disableTypography: true,
  },
  argTypes: {
    disableTypography: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => (
    <List>
      <ListItem>
        <AclListItemText {...args} />
      </ListItem>
    </List>
  ),
};

export const Inset: Story = {
  args: {
    primary: 'Indented Text',
    inset: true,
  },
  argTypes: {
    inset: {
      control: { type: 'boolean' },
    },
  },

  render: (args) => (
    <List>
      <ListItem>
        <AclListItemText {...args} />
      </ListItem>
    </List>
  ),
};

export const Primary: Story = {
  args: {
    primary: 'Primary Text',
  },
  argTypes: {
    primary: {
      control: { type: 'text' },
    },
  },

  render: (args) => (
    <List>
      <ListItem>
        <AclListItemText {...args} />
      </ListItem>
    </List>
  ),
};

export const Secondary: Story = {
  args: {
    primary: 'Primary Text',
    secondary: 'Secondary Text',
  },
  argTypes: {
    secondary: {
      control: { type: 'text' },
    },
  },

  render: (args) => (
    <List>
      <ListItem>
        <AclListItemText {...args} />
      </ListItem>
    </List>
  ),
};
