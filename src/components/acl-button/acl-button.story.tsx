import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclButton } from '.';

/**AclButton component communicate actions that users can take. They are typically placed throughout your UI in places like Forms, Cards, etc. for getting click feedback.
 */

const meta: Meta<typeof AclButton> = {
  component: AclButton,
  title: 'Components/AclButton',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content inside the button.',
      defaultValue: 'Sample Button',
      control: { type: 'text' },
    },

    variant: {
      description: `Type: string
      \nThe variant prop allows you to specify the style or type of the ACL button. 
      This can include options like \"contained\", \"outlined\", \"text\", depending on your UI design 
      system. It influences the visual appearance of the button to indicate its purpose or importance. 
      \nDefault Value: contained (The default variant for the ACL button is \"contained\"). 
      \nExample: &lt;AclButton variant='contained'&gt;test&lt;/AclButton&gt;`,
    },

    disabled: {
      description: `Type: boolean
      \nIt disables/enables the component. When true, the component is disabled
      preventing user interaction.
      \nDefault Value: (Component is initially enabled).
      \nExample: &lt;AclButton disabled={true}&gt;test&lt;/AclButton&gt;`,
    },

    disableElevation: {
      description: `Type: boolean
      \nDescription: When true, it disables the elevation (shadow effect) on the component.
      \nDefault Value: false (elevation is applied).
      \nExample: &lt;AclButton disableElevation={true}&gt;test&lt;/AclButton&gt;`,
    },

    disableFocusRipple: {
      description: `Type: boolean
      \nDescription: If set to true, the disableFocusRipple prop prevents the component from displaying a ripple effect when it receives focus. It's used to control the visual feedback when the component is interacted with via keyboard focus.
      \nDefault Value: false (Focus ripple effect is enabled by default).
      \nExample:&lt;AclButton disableFocusRipple={true}&gt;test&lt;/AclButton&gt;`,
    },

    disableRipple: {
      description: `Type: boolean
      \nDescription: The disableRipple prop, when set to true, disables the ripple effect on the 
      component. This effect is a visual response to user interactions, like clicks or touches. 
      When disabled, no ripple animation occurs.
      \nDefault Value: false (Ripple effect is enabled by default).
      \nExample:&lt;AclButton disableRipple={true}&gt;test&lt;/AclButton&gt;`,
    },

    fullWidth: {
      description: `Type: boolean
      \nDescription: The fullWidth prop, when set to true, makes the component occupy the full width of 
      its container. It expands to fill the available horizontal space.
      \nDefault Value: false (Component's width is not full-width by default).
      \nExample:&lt;AclButton fullWidth={true}&gt;test&lt;/AclButton&gt;`,
    },

    href: {
      description: `Type: string
      Description: The href prop specifies the URL that the component links to. It is often used with 
      components like links and buttons to define the destination URL or resource when the component is 
      clicked.
      \nDefault Value: undefined (No default URL is specified).
      \nExample:&lt;AclButton href='https://loremipsum.io/' > test</AclButton&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Children: Story = {
  args: {
    children: 'Sample Button',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};

export const Variant: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export const Disabled: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    disabled: true,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
    },
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const DisableElevation: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    disableElevation: true,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    disableElevation: {
      control: { type: 'radio' },
      options: [true, false],
      defaultValue: false,
    },
  },
};

export const DisableFocusRipple: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    disableFocusRipple: true,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    disableFocusRipple: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const DisableRipple: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    disableRipple: true,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    disableRipple: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    fullWidth: true,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    fullWidth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};
export const Href: Story = {
  args: {
    children: <>Sample Button</>,
    variant: 'contained',
    href: 'https://loremipsum.io/',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    href: {
      control: { type: 'text' },
    },
  },
};
