import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclBox, AclCssBaseline } from '..';

/**
 * AclCssBaseline component wraps the application with CSS baseline styles.
 * It also optionally enables the color-scheme CSS property for better support of light/dark modes.
 */

const meta: Meta<typeof AclCssBaseline> = {
  component: AclCssBaseline,
  title: 'Components/AclCssBaseline',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The wrapped content inside the component. This can be any valid React node, including text, images, or other components.
      \nDefault Value: null
      \nExample: &lt;Typography variant="body1"&gt;Hello World&lt;/Typography&gt;`,
      control: { type: 'text' },
    },

    enableColorScheme: {
      description: `Type: boolean
      \nDescription: Enable the color-scheme CSS property to use the theme palette's mode (light/dark). This allows for better adaptability of the component's styling based on the user's theme preference.
      \nDefault Value: false
      \nExample: &lt;AclCssBaseline enableColorScheme={true}&gt;...&lt;/AclCssBaseline&gt;`,
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EnableColorScheme: Story = {
  args: {
    enableColorScheme: true,
    children: (
      <AclBox>
        <Typography variant="h6">Color Scheme Enabled</Typography>
        <Typography variant="body1">
          This example enables the color-scheme CSS property to support light/dark modes based on the theme.
        </Typography>
      </AclBox>
    ),
  },
  argTypes: {
    enableColorScheme: {
      control: { type: 'boolean' },
    },
  },
};

export const Children: Story = {
  args: {
    children: (
      <AclBox>
        <Typography variant="h6">Children Example</Typography>
        <Typography variant="body1">
          This content demonstrates the children prop of the AclCssBaseline component.
        </Typography>
      </AclBox>
    ),
    enableColorScheme: false, // Default value
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};
