import type { Meta, StoryObj } from '@storybook/react';
import { AclBackdropLoader } from '.';

/**
 * Backdrop component is used to overlay a screen or area, typically for modals, popovers,
 * or other components that need to appear in front of the current content.
 */

const meta: Meta<typeof AclBackdropLoader> = {
  component: AclBackdropLoader,
  title: 'Components/AclBackdropLoader',
  tags: ['autodocs'],

  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content of the component, typically a modal or popover.
      \nDefault Value: "Backdrop Content"
      \nExample: &lt;AclBackdropLoader open={true}&gt;Backdrop Content&lt;/AclBackdropLoader&gt;`,
      defaultValue: 'CircularProgress',
      control: { type: 'text' },
    },

    open: {
      description: `Type: boolean
      \nDescription: If true, the component is shown.
      \nDefault Value: false
      \nExample: &lt;AclBackdropLoader open={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },

    invisible: {
      description: `Type: boolean
      \nDescription: If true, the backdrop is invisible. This can be used when rendering a popover or a custom select component.
      \nDefault Value: false
      \nExample: &lt;AclBackdropLoader open={true} invisible={true} /&gt;`,
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    children: 'Backdrop is open',
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
};

export const Invisible: Story = {
  args: {
    open: true,
    children: 'Invisible Backdrop Content',
    invisible: true,
  },
  argTypes: {
    invisible: {
      control: { type: 'boolean' },
    },
  },
};
