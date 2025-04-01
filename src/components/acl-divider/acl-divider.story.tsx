import type { Meta, StoryObj } from '@storybook/react';
import { AclDivider } from '.';

/**AclDivider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy. */

const meta: Meta<typeof AclDivider> = {
  component: AclDivider,
  title: 'Components/AclDivider',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content or children components representing access control information inside 
      the ACL divider.
      \nDefault Value: null
      \nExample: &lt;AclDivider /&gt;`,
      defaultValue: 'Sample Divider',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Divider: Story = {};
