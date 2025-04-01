import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  AclButton,
  AclSnackbarProvider,
  // AclSnackbarProviderProps,
  useAclSnackbar,
} from '..';

const WrappedAclSnackbar = () => {
  const { enqueueSnackbar } = useAclSnackbar();

  return (
    <>
      <AclButton onClick={() => enqueueSnackbar('This is a snackbar')}>Open Snackbar</AclButton>
    </>
  );
};

const WrappedAclSnackbarProvider = (props: any) => {
  return (
    <>
      <AclSnackbarProvider {...props}>
        <WrappedAclSnackbar />
      </AclSnackbarProvider>
    </>
  );
};

/**
 * The AclSnackbar component is a verc:\Users\p740368\Advantasure\Acl-Projects\rqsr-ui-storybook\src\stories\components\aclTable.stories.tsxsatile notification and feedback mechanism used to inform users about
 * updates, errors, or important actions in the UI. It is typically displayed temporarily and can contain
 * customizable messages, actions, or alerts.
 */

const meta: Meta<typeof AclSnackbarProvider> = {
  component: WrappedAclSnackbarProvider,
  title: 'Components/AclSnackbar',
  tags: ['autodocs'],
  argTypes: {
    anchorOrigin: {
      description: `Type: { horizontal: 'center' | 'left' | 'right'; vertical: 'bottom' | 'top' }
      \nDescription: The anchor of the Snackbar.
      \nDefault Value: { vertical: 'bottom', horizontal: 'left' }
      \nExample: &lt;AclSnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }} /&gt;`,
      control: { type: 'object' },
    },

    maxSnack: {
      description: `Type: number
      \nDescription: The maximum number of Snackbars displayed at once.
      \nDefault Value: 5
      \nExample: &lt;AclSnackbarProvider maxSnack={3} /&gt;`,
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AnchorOrigin: Story = {
  args: {
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    maxSnack: 5,
  },
};

export const MaxSnack: Story = {
  args: {
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    maxSnack: 3,
  },
  argTypes: {
    maxSnack: {
      control: { type: 'number' },
    },
  },
};
