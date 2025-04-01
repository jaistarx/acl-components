import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AclButton, AclModal } from '..';

/**The AclModal component is a versatile UI element that overlays content on the main application
 * interface. Primarily used for capturing input, displaying information, or highlighting critical
 * alerts, modals provide a focused and interactive experience without navigating away from the current
 * page. */

const meta: Meta<typeof AclModal> = {
  component: AclModal,
  title: 'Components/AclModal',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `Type: ReactNode
      \nDescription: The content to be displayed inside the modal. This can include text, forms, images,
       or any other React components.
      \nDefault Value: N/A
      \nExample:&lt;AclModal&gt;Content Goes Here&lt;/AclModal&gt;`,
      control: { type: 'text' },
    },
    open: {
      description: `Type: boolean (required)
      \nDescription: Determines whether the modal is currently open or closed. When set to true, the modal is displayed; when set to false, the modal is hidden.
      \nDefault Value: false
      \nExample: &lt;AclModal openModal={true}&gt;&lt;AclModal/&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    modalDisplayStyle: {
      description: `Type: Object
      \nDescription: Sets the display style of the modal.
      \nDefault Value: {}
      \nExample: &lt;AclModal openModal={openModal} toggleOpenModal={setOpenModal} modalDisplayStyle={{widht:"700px"}}&gt;&lt;AclModal/&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: any = (args: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <AclButton onClick={() => setOpenModal(true)}>Open Modal</AclButton>
      <AclModal open={openModal}>
        <div>{args.children}</div>
        <div>
          <AclButton variant="outlined" onClick={() => setOpenModal(false)}>
            Close Modal
          </AclButton>
        </div>
      </AclModal>
    </>
  );
};

export const Children: Story = Template.bind({});

Children.args = {
  children: <>Sample Modal</>,
  open: true,
};

export const OpenModal: Story = Template.bind({});

OpenModal.args = {
  children: <>Sample Modal</>,
  open: true,
};

export const ModalDisplayStyle: Story = Template.bind({});

ModalDisplayStyle.args = {
  children: <>Sample Modal</>,
  open: true,
  modalDisplayStyle: {
    width: '700px',
    height: '500px',
  },
};
