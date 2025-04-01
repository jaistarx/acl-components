import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AclButton, AclPaper, AclPopper } from '..';

/**
 * AclPopper is a component that provides a flexible way to position content relative to another element.
 * It allows for customizable placement, open state, and portal behavior.
 */

const meta: Meta<typeof AclPopper> = {
  component: AclPopper,
  title: 'Components/AclPopper',
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: `Type: boolean
      \nDescription: If true, the Popper component is visible.
      \nDefault Value: None (required)
      \nExample: &lt;AclPopper open={true} /&gt;`,
    },

    disablePortal: {
      description: `Type: boolean
      \nDescription: If true, the children will remain under the DOM hierarchy of the parent component.
      \nDefault Value: false
      \nExample: &lt;AclPopper disablePortal={true} /&gt;`,
    },

    keepMounted: {
      description: `Type: boolean
      \nDescription: If true, the children remain in the DOM even when the Popper is not open. Useful for SEO or when you need better responsiveness.
      \nDefault Value: false
      \nExample: &lt;AclPopper keepMounted={true} /&gt;`,
    },

    placement: {
      description: `Type: 'auto' | 'bottom' | 'top' | 'left' | 'right' | 'auto-start' | 'auto-end' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
      \nDescription: The placement of the Popper relative to its anchor element.
      \nDefault Value: 'bottom'
      \nExample: &lt;AclPopper placement="bottom-start" /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: React.FC<any> = ({ children, ...props }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [id, setId] = useState<string>('id-0');

  const handlePopperClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    event?.stopPropagation();

    if (isOpen) {
      setAnchorEl(null);
      setId('id-0');
      setIsOpen(false);
    } else {
      setAnchorEl(event?.currentTarget);
      setId('id-1');
      setIsOpen(true);
    }
  };

  return (
    <>
      <AclButton onClick={(event) => handlePopperClick(event)}>Open Popper</AclButton>
      <AclPopper open={isOpen} anchorEl={anchorEl} id={id} {...props}>
        <AclPaper>{children}</AclPaper>
      </AclPopper>
    </>
  );
};

export const DefaultPopper: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popper</div>,
    disablePortal: false,
  },

  render: (args) => <Template {...args} />,
};

export const Open: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popper</div>,
    open: true,
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },

  render: (args) => <Template {...args} />,
};

export const DisablePortal: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popper</div>,
    disablePortal: false,
  },
  argTypes: {
    disablePortal: {
      control: { type: 'boolean' },
    },
  },

  render: (args) => <Template {...args} />,
};

export const KeepMounted: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popper</div>,
    keepMounted: false,
  },
  argTypes: {
    keepMounted: {
      control: { type: 'boolean' },
    },
  },

  render: (args) => <Template {...args} />,
};

export const Placement: Story = {
  args: {
    children: <div style={{ padding: '5px' }}>Sample Popper</div>,
    placement: 'top',
  },
  argTypes: {
    placement: {
      control: { type: 'radio' },
      options: [
        'auto',
        'bottom',
        'top',
        'left',
        'right',
        'auto-start',
        'auto-end',
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
    },
  },

  render: (args) => <Template {...args} />,
};
