import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AclButton, AclPopover } from '..';

/**The AclPopover component is used to display a popover that appears when triggered by user
 * interaction. It provides a convenient way to present additional information or actions within a UI
 * element. */

const meta: Meta<typeof AclPopover> = {
  component: AclPopover,
  title: 'Components/AclPopover',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The element or component that triggers the popover when interacted with.
      \nDefault Value: null`,
    },
    open: {
      descrption: `Type: boolean
      \nDescription: Specifies whether the popover is currently open or closed.
      \nDefault Value: false`,
    },
    anchorEl: {
      descrption: `Type: ReactNode
      \nDescription: Specifies the popover position while opened.
      \nDefault Value: null`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [id, setId] = useState<string>('id-0');

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
    setId('id-1');
    setIsOpen(true);
  };

  const handlePopoverClose = (event: React.FocusEvent<HTMLDivElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    setAnchorEl(null);
    setId('id-0');
    setIsOpen(false);
  };

  return (
    <>
      <AclButton onClick={(event) => handlePopoverClick(event)}>Open Popover</AclButton>
      <AclPopover open={isOpen} onBlur={(event) => handlePopoverClose(event)} anchorEl={anchorEl} id={id}>
        {children}
      </AclPopover>
    </>
  );
};

export const DefaultPopover: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popover</div>,
  },

  render: (args) => <Template {...args} />,
};
