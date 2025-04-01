import type { Meta, StoryObj } from '@storybook/react';
import { AclPaper } from '.';

/**
 * AclPaper is a versatile container component with customizable elevation, square corners, and variant options.
 */

const meta: Meta<typeof AclPaper> = {
  component: AclPaper,
  title: 'Components/AclPaper',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content to display within the AclPaper component.
      \nDefault Value: None
      \nExample: &lt;AclPaperThis is a paper component /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Children: Story = {
  args: {
    children: 'This is a paper component with default settings.',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    elevation: {
      control: { type: 'number' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['elevation', 'outlined'],
    },
  },
};
