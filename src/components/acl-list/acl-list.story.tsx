import { ListItem, ListItemText } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclList } from '.';

/**
 * AclList renders a list of items with optional padding and density configurations.
 * It supports various options for customizing the appearance and behavior of the list.
 */

const meta: Meta<typeof AclList> = {
  component: AclList,
  title: 'Components/AclList',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: node
      \nDescription: The content of the component, typically a list of items.
      \nExample: &lt;AclList &gt;&lt;ListItem &gt;Item 1 &lt;/ListItem &gt;&lt;ListItem &gt;Item 2 &lt;/ListItem &gt;&lt;/AclList &gt;`,
    },

    dense: {
      description: `Type: boolean
      \nDescription: If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items.
      \nDefault Value: false
      \nExample: &lt;AclList dense={true}&gt;&lt;ListItem &gt;Item 1 &lt;/ListItem &gt;&lt;/AclList &gt;`,
    },

    disablePadding: {
      description: `Type: boolean
      \nDescription: If true, vertical padding is removed from the list.
      \nDefault Value: false
      \nExample: &lt;AclList disablePadding={true}&gt;&lt;ListItem &gt;Item 1 &lt;/ListItem &gt;&lt;/AclList &gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dense: Story = {
  args: {
    dense: true,
    children: (
      <AclList>
        <ListItem>
          <ListItemText primary="Dense Item 1" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Dense Item 2" />
        </ListItem>
      </AclList>
    ),
  },
  argTypes: {
    dense: {
      control: { type: 'boolean' },
    },
  },
};

export const DisablePadding: Story = {
  args: {
    disablePadding: true,
    children: (
      <>
        <ListItem>
          <ListItemText primary="No Padding Item 1" />
        </ListItem>

        <ListItem>
          <ListItemText primary="No Padding Item 2" />
        </ListItem>
      </>
    ),
  },
  argTypes: {
    disablePadding: {
      control: { type: 'boolean' },
    },
  },
};
