import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AclTable, AclTableColDef, AclTableProps, IDictionary } from '../..';

type Row = {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
};

const ACL_TABLE_COLUMNS: AclTableColDef<Row>[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
];

const ACL_TABLE_ROWS: Row[] = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 14,
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 31,
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 31,
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 11,
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 34,
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: '',
    age: 15,
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
  },
];

const WrappedAclTable = (props: AclTableProps) => {
  return (
    <>
      <div style={{ height: 'calc(100vh - 50px)' }}>
        <AclTable {...props} />
      </div>
    </>
  );
};

/**The AclTable component is used to display tabular data within applications. It provides options for
 * customizing rowItems, columnItems, pagination, and other features to enhance the presentation and functionality
 * of the table. */

const meta: Meta<typeof AclTable> = {
  component: WrappedAclTable,
  title: 'Components/AclTable',
  tags: ['autodocs'],
  argTypes: {
    rowItems: {
      description: `Type: Array
      \nDescription: An array of objects representing the rowItems of data to be displayed in the table.
      \nDefault Value: []
      \nExample:
      \nrowItems={[
      \n  { id: 1, name: 'John', age: 30 },
      \n  { id: 2, name: 'Jane', age: 25 },
      \n  // Additional rowItems...
      \n]}`,
    },
    columnItems: {
      description: `Type: Array
      \nDescription: An array of objects representing the columnItems of the table, specifying their headers and data keys.
      \nDefault Value: []
      \nExample:
      \ncolumns={[
      \n  { header: 'ID', key: 'id' },
      \n  { header: 'Name', key: 'name' },
      \n  { header: 'Age', key: 'age' },
      \n  // Additional columnItems...
      \n]}`,
    },

    selectedRows: {
      description: `Type: Array
      \nDescription: An array containing the selected rowItems in the table.
      \nDefault Value: []
      \nExample:selectedRows={[1, 3, 5]}`,
    },

    hideCheckbox: {
      description: `Type: boolean
      \nDescription: Specifies whether to hide the checkbox column for selecting rowItems.
      \nDefault Value: false
      \nExample:hideCheckbox={true}`,
    },

    onRowClick: {
      description: `Type: function
      \nDescription: Callback function triggered when a row in the table is clicked. Receives the clicked row as a parameter.
      \nDefault Value: N/A
      \nExample:onRowClick={(row) => handleRowClick(row)}`,
    },

    defaultSelectedRows: {
      description: `Type: Array
      \nDescription: An array containing selected rows.
      \nDefault Value: N/A
      \nExample:defaultSelectedRows={[rowItems[1],rowItems[4],rowItems[5]]}`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
  },
};

export const SelectedRows: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
    selectedRows: (event: IDictionary<any>) => console.log(event),
  },
};

export const HideCheckbox: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
    hideCheckbox: true,
  },
  argTypes: {
    hideCheckbox: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const OnRowClick: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
    onRowClick: (event: IDictionary<any>) => console.log(event),
  },
};

export const DefaultSelectedRows: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
    defaultSelectedRows: [ACL_TABLE_ROWS[1], ACL_TABLE_ROWS[4], ACL_TABLE_ROWS[5]],
  },
};

export const StickyLastColumn: Story = {
  args: {
    rowItems: ACL_TABLE_ROWS,
    columnItems: ACL_TABLE_COLUMNS,
    stickyLastColumn: false,
  },
};
