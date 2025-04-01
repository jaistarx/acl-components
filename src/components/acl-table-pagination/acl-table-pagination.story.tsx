import type { Meta, StoryObj } from '@storybook/react';
import { AclTablePagination } from '.';

/**
 * AclTablePagination is a component that handles pagination for tables. It allows users to navigate through pages of data.
 */

const meta: Meta<typeof AclTablePagination> = {
  component: AclTablePagination,
  title: 'Components/AclTablePagination',
  tags: ['autodocs'],
  argTypes: {
    count: {
      description: `Type: integer
      \nDescription: The total number of rows. To enable server-side pagination for an unknown number of items, provide -1.
      \nDefault Value: undefined (required)
      \nExample: &lt;AclTablePagination count={100} /&gt;`,
    },

    page: {
      description: `Type: integer
      \nDescription: The zero-based index of the current page.
      \nDefault Value: 0
      \nExample: &lt;AclTablePagination page={0} /&gt;`,
    },

    rowsPerPage: {
      description: `Type: array of numbers
      \nDescription: The number of rows per page as an array. This allows multiple options for the number of rows.
      \nDefault Value: [5,10,15]
      \nExample: &lt;AclTablePagination rowsPerPage={[5, 10, 25]} /&gt;`,
    },

    defaultRowsPerPage: {
      description: `Type: number
      \nDescription: Default value of the rows per page.
      \nDefault Value: NA
      \nExample: &lt;AclTablePagination defaultRowsPerPage={10} /&gt;`,
    },

    totalNumberOfRows: {
      description: `Type: number
      \nDescription: If given, the number of pages is automatically calculated. It can also handle rows per page change.
      \nDefault Value: NA
      \nExample: &lt;AclTablePagination totalNumberOfRows={110} /&gt;`,
    },

    onChangeRowsPerPage: {
      description: `Type: fuction
      \nDescription:  Callback function triggered when the rows per page is changed. Receives the changed value as a parameter.
      \nDefault Value: NA
      \nExample: &lt;AclTablePagination onChangeRowsPerPage={(event)=>console.log(event)} /&gt;`,
    },

    onChangePage: {
      description: `Type: fuction
      \nDescription:  Callback function triggered when a page is clicked. Receives the changed value as a parameter.
      \nDefault Value: NA
      \nExample: &lt;AclTablePagination onChangePage={(event)=>console.log(event)} /&gt;`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 100,
    page: 1,
    rowsPerPage: [5, 10, 15],
  },
};

export const Count: Story = {
  args: {
    count: 50,
    rowsPerPage: [5, 10, 15],
  },

  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
  },
};

export const Page: Story = {
  args: {
    count: 50,
    page: 5,
    rowsPerPage: [5, 10, 15],
  },

  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};

export const RowsPerPage: Story = {
  args: {
    count: 50,
    rowsPerPage: [1, 3, 5, 7, 9, 10, 15],
  },
  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};

export const DefaultRowsPerPage: Story = {
  args: {
    defaultRowsPerPage: 10,
    count: 50,
    rowsPerPage: [5, 10, 15],
  },
  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};

export const TotalNumberOfRows: Story = {
  args: {
    totalNumberOfRows: 110,
    rowsPerPage: [5, 10, 15],
  },
  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};

export const OnChangeRowsPerPage: Story = {
  args: {
    count: 50,
    onChangeRowsPerPage: (event: number) => console.log(event),
    rowsPerPage: [5, 10, 15],
  },
  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};

export const OnChangePage: Story = {
  args: {
    count: 50,
    onChangePage: (event: number) => console.log(event),
    rowsPerPage: [5, 10, 15],
  },
  argTypes: {
    count: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    rowsPerPage: { control: { type: 'range' } },
    showFirstButton: { control: { type: 'boolean' } },
    showLastButton: { control: { type: 'boolean' } },
  },
};
