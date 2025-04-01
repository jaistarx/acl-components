import Avatar from '@mui/material/Avatar';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclChip } from '.';

/**
 * AclChip component represents complex entities in a compact form, and can contain an avatar, text, and be interactive.
 */

const meta: Meta<typeof AclChip> = {
  component: AclChip,
  title: 'Components/AclChip',
  tags: ['autodocs'],

  argTypes: {
    avatar: {
      description: `Type: ReactNode
      \nDescription: The Avatar element to display within the chip.
      \nExample: &lt;AclChip avatar=&lt;AclAvatar&gt;A&lt;/AclAvatar&gt; /&gt;`,
      control: { type: 'object' },
    },

    // backgroundColor: {
    //   description: `Type: string
    //   \nDescription: The backgroundColor of the component. Supports custom theme colors.
    //   \nExample: &lt;AclChip backgroundColor="#BAE6FF" /&gt;`,
    //   control: { type: 'text' },
    // },

    clickable: {
      description: `Type: boolean
      \nDescription: If true, the chip will appear clickable even if onClick is not defined.
      \nDefault Value: false
      \nExample: &lt;AclChip clickable={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    color: {
      description: `Type: string
      \nDescription: The color of the component. Supports custom theme colors.
      \nExample: &lt;AclChip color="#0072C3" /&gt;`,
      control: { type: 'text' },
    },

    disabled: {
      description: `Type: boolean
      \nDescription: If true, the component is disabled.
      \nDefault Value: false
      \nExample: &lt;AclChip disabled={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    label: {
      description: `Type: string
      \nDescription: The content or label displayed inside the chip.
      \nExample: &lt;AclChip label="Chip Label" /&gt;`,
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithAvatar: Story = {
  args: {
    label: 'Chip with Avatar',
    avatar: <div>A</div>,
    color: 'primary',
    size: 'medium',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    avatar: {
      control: { type: 'object' },
    },
    color: {
      control: { type: 'text' },
    },
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    clickable: true,
    color: 'secondary',
    size: 'medium',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'text' },
    },
  },
};

export const Color: Story = {
  args: {
    label: 'Chip with Avatar',
    avatar: <Avatar>A</Avatar>,
    color: 'primary',
    size: 'medium',
  },
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    avatar: {
      control: { type: 'object' },
    },
  },
};

export const BackgroundColor: Story = {
  args: {
    label: 'Chip with Avatar',
    avatar: <Avatar>A</Avatar>,
    color: 'lightgreen',
  },
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    avatar: {
      control: { type: 'object' },
    },
  },
};

export const Disabled: Story = {
  args: {
    size: 'small',
    label: 'Disabled Chip',
    disabled: true,
    color: 'error',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'text' },
    },
  },
};

export const Label: Story = {
  args: {
    label: 'Label',
    size: 'small',
    color: 'info',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    color: {
      control: { type: 'text' },
    },
  },
};
