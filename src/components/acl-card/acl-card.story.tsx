import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclCard } from '.';

/**Cards are surfaces that display content and actions provided by the user. The AclCard component includes header and body as children which can provide 
 different styles accordingly.
*/

const meta: Meta<typeof AclCard> = {
  component: AclCard,
  title: 'Components/AclCard',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nThe content of the component.
      \nExample: &lt;AclCard&gt;\nCard content\n&lt;/AclCard&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const ChildrenTemplate: any = () => {
  return (
    <>
      <AclCard>Card content</AclCard>
    </>
  );
};

export const Children: Story = ChildrenTemplate.bind({});
