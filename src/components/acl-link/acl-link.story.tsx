import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclLink } from '.';

/**The AclLink component renders links with various styles, including underlined, disabled, and
 * customized variants. */
const meta: Meta<typeof AclLink> = {
  component: AclLink,
  title: 'Components/AclLink',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
            \nDescription: The text content or components to be rendered inside the link.
            \nDefault Value: null
            \nExample:&lt;AclLink variant="custom" underline={true} disabled={false}&gt;Your Link Text&lt;/AclLink&gt;`,
      control: { type: 'text' },
    },
    underline: {
      description: `Type: boolean
            \nDescription: Determines whether the link text should be underlined.
            \nDefault Value: false
            \nExample:&lt;AclLink variant="custom" underline={true} disabled={false}&gt;Your Link Text&lt;/AclLink&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    variant: {
      description: `Type: string
            \nDescription: Determines the visual style of the link, allowing for customization.
            \nDefault Value: N/A
            \nExample:&lt;AclLink variant="custom"&gt;Custom Styled Link&lt;/AclLink&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta | typeof AclLink>;

export const Children: Story = {
  args: {
    children: <>Sample Link</>,
  },
};

export const Underline: Story = {
  args: {
    children: <>Sample Link</>,
    underline: 'hover',
  },
  argTypes: {
    underline: {
      control: { type: 'radio' },
      options: ['always', 'hover', 'none'],
    },
  },
};

export const Variant: Story = {
  args: {
    children: <>Sample Link</>,
    variant: 'body1',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
};
