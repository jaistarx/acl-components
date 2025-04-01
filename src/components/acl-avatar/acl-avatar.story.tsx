import type { Meta, StoryObj } from '@storybook/react';
import { AclAvatar } from '.';

/**
 * ACLAvatar component is typically used to represent a user or entity,
 * commonly with images or initials in a small circle or square.
 */

const meta: Meta<typeof AclAvatar> = {
  component: AclAvatar,
  title: 'Components/AclAvatar',
  tags: ['autodocs'],

  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content or children components representing the user's avatar. This can include an image, initials, or any other representation of a user or entity.
      \nDefault Value: null
      \nExample: &lt;Avatar src="user.jpg" alt="User Name" /&gt;`,
      defaultValue: 'A',
      control: { type: 'text' },
    },

    src: {
      description: `Type: string
      \nDescription: The src attribute for the img element. It specifies the URL of the image to be displayed as the avatar. This is a required property.
      \nExample: &lt;Avatar src="user.jpg" alt="User Name" /&gt;`,
      control: { type: 'text' },
    },

    variant: {
      description: `Type: 'circular' | 'rounded' | 'square'
      \nDescription: The shape of the avatar. This property determines the border radius of the avatar, affecting its overall appearance.
      \nDefault Value: "circular"
      \nExample: &lt;Avatar variant="rounded" src="user.jpg" alt="User Name" /&gt;`,
      defaultValue: 'circular',
      control: { type: 'radio' },
      options: ['circular', 'rounded', 'square'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Children: Story = {
  args: {
    children: 'A',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};

export const Src: Story = {
  args: {
    src: 'https://example.com/avatar.png',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
};

export const Variant: Story = {
  args: {
    children: 'A',
    variant: 'circular', //default value
  },

  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['circular', 'rounded', 'square'],
    },
  },
};
