import type { Meta, StoryObj } from '@storybook/react';
import { AclPagination } from '.';

/**
 * AclPagination is a component that allows for navigating through multiple pages.
 * It can be customized with various properties, such as color, page count, and control over buttons.
 */

const meta: Meta<typeof AclPagination> = {
  component: AclPagination,
  title: 'Components/AclPagination',
  tags: ['autodocs'],
  argTypes: {
    boundaryCount: {
      description: `Type: number
      \nDescription: Number of always visible pages at the beginning and end of the pagination component.
      \nDefault Value: 1
      \nExample: &lt;AclPagination boundaryCount={2} /&gt;`,
    },

    count: {
      description: `Type: number
      \nDescription: The total number of pages for the pagination component.
      \nDefault Value: 1
      \nExample: &lt;AclPagination count={10} /&gt;`,
    },

    defaultPage: {
      description: `Type: number
      \nDescription: The page selected by default when the component is uncontrolled.
      \nDefault Value: 1
      \nExample: &lt;AclPagination defaultPage={3} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPagination: Story = {
  args: {
    count: 10,
    defaultPage: 1,
    color: 'standard',
    boundaryCount: 1,
    disabled: false,
    hideNextButton: false,
    hidePrevButton: false,
  },
};

export const BoundaryCount: Story = {
  args: {
    count: 10,
    boundaryCount: 1,
  },
  argTypes: {
    boundaryCount: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'standard'],
    },
    count: {
      control: { type: 'number' },
    },
    defaultPage: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    hideNextButton: {
      control: { type: 'boolean' },
    },
    hidePrevButton: {
      control: { type: 'boolean' },
    },
  },
};

export const Count: Story = {
  args: {
    count: 10,
  },
  argTypes: {
    boundaryCount: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'standard'],
    },
    count: {
      control: { type: 'number' },
    },
    defaultPage: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    hideNextButton: {
      control: { type: 'boolean' },
    },
    hidePrevButton: {
      control: { type: 'boolean' },
    },
  },
};

export const DefaultPage: Story = {
  args: {
    count: 10,
    defaultPage: 3,
  },
  argTypes: {
    boundaryCount: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'standard'],
    },
    count: {
      control: { type: 'number' },
    },
    defaultPage: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    hideNextButton: {
      control: { type: 'boolean' },
    },
    hidePrevButton: {
      control: { type: 'boolean' },
    },
  },
};
