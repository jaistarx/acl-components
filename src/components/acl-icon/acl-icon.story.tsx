import type { Meta, StoryObj } from '@storybook/react';
import { AclIcon } from '.';
import USTHealthProoflogo from '../../common/assets/images/UST_HealthProof_logo.svg';

/**The AclIcon component provides an interface for displaying icons for use in your application.
 * It uses existing image props to display the icons. */
const meta: Meta<typeof AclIcon> = {
  component: AclIcon,
  title: 'Components/AclIcon',
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: ` Type: ReactNode
            \nDescription: you can pass the imported icon component from any image(svg,jpg,png)
            \nDefault Value: null
            \nExample: &lt;AclIcon src={customIcon} /&gt;`,
    },
    alt: {
      description: `Type: string
            \nDescription:  The alt attribute is used to provide alternative text for images. This text is displayed if the image cannot be loaded or if the user is using a screen reader.
            \nDefault Value: null
            \nExample: &lt;AclIcon src="image.jpg"  
               alt="Description of the image"/&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    src: USTHealthProoflogo,
    alt: 'close-toggle-menu-icon',
  },
};
