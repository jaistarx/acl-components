import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  AclAvatar,
  AclButton,
  AclCheckbox,
  AclChip,
  AclCssBaseline,
  AclDatepicker,
  AclDivider,
  AclDropdown,
  AclFormControlLabel,
  AclInput,
  AclPagination,
  AclRadio,
  AclRadioGroup,
  AclSnackbarProvider,
  AclTabItem,
  AclTable,
  AclTableColDef,
  AclTablePagination,
  AclTabs,
  IDictionary,
  useAclSnackbar,
} from '..';

// FEATURE: Test the components by importing and using it inside this function
const CTest = () => {
  const { enqueueSnackbar } = useAclSnackbar();
  const [val, setVal] = useState<string>('one');
  const [tabItems, setTabItems] = useState<AclTabItem[]>([
    { label: 'Item One', value: 'one' },
    { label: 'Item Two', value: 'two', count: 3 },
    { label: 'Item three', value: 'three', disabled: true },
    { label: 'Item Four', value: 'four' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const options = [
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' },
    { id: 4, value: 'four' },
  ];

  const options2 = [
    { i: 1, val: 'one', second: 'y' },
    { i: 2, val: 'two', second: 'u' },
    { i: 3, val: 'three', second: 'i' },
    { i: 4, val: 'four', second: 'o' },
  ];

  const handlClick = (p?: IDictionary<string>) => {
    console.log(p);
    setTabItems([
      { label: 'Item One', value: 'one' },
      { label: 'Item Two', value: 'two', disabled: true },
      { label: 'Item three', value: 'three', disabled: true, count: 20 },
      { label: 'Item Four', value: 'four' },
    ]);
  };

  const handleClick1 = (s: string) => {
    setVal(s);
    console.log(s);
  };

  type Row = {
    id: number;
    lastName: string;
    firstName: string;
    age: number;
    age1: number;
    age2: number;
    age3: number;
    age4: number;
    age5: number;
    age6: number;
    age7: number;
    age8: number;
    age9: number;
    age10: number;
    age11: number;
    age12: number;
    age13: number;
    age14: number;
    age15: number;
    age16: number;
    age17: number;
    age18: number;
    age19: number;
    age20: number;
    // age18: number;
    // age18: number;
    action?: React.ReactNode;
  };

  const columns: AclTableColDef<Row>[] = [
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
    {
      field: 'age2',
      headerName: 'Age2',
      width: 100,
    },
    {
      field: 'age3',
      headerName: 'Age3',
      width: 100,
    },
    {
      field: 'age4',
      headerName: 'Age4',
      width: 100,
    },
    {
      field: 'age5',
      headerName: 'Age5',
      width: 100,
    },
    {
      field: 'age6',
      headerName: 'Age6',
      width: 100,
      align: 'center',
    },
    {
      field: 'age7',
      headerName: 'Age7',
      width: 100,
      align: 'center',
    },
    {
      field: 'age8',
      headerName: 'Age8',
      width: 100,
      align: 'center',
    },
    {
      field: 'age9',
      headerName: 'Age9',
      width: 100,
      align: 'center',
    },
    {
      field: 'age10',
      headerName: 'Age10',
      width: 100,
      align: 'center',
    },
    {
      field: 'age11',
      headerName: 'Age11',
      width: 100,
      align: 'center',
    },
    {
      field: 'age12',
      headerName: 'Age12',
      width: 100,
      align: 'center',
    },
    {
      field: 'age13',
      headerName: 'Age13',
      width: 100,
      align: 'center',
    },
    {
      field: 'age14',
      headerName: 'Age14',
      width: 100,
      align: 'center',
    },
    {
      field: 'age15',
      headerName: 'Age15',
      width: 100,
      align: 'center',
    },
    {
      field: 'age16',
      headerName: 'Age16',
      width: 100,
      align: 'center',
    },
    {
      field: 'age17',
      headerName: 'Age17',
      width: 100,
      align: 'center',
    },
    {
      field: 'age18',
      headerName: 'Age18',
      width: 100,
      align: 'center',
    },
    {
      field: 'age19',
      headerName: 'Age19',
      width: 100,
      align: 'center',
    },
    {
      field: 'age20',
      headerName: 'Age20',
      width: 100,
      align: 'right',
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 170,
      align: 'center',
    },
  ];

  const handleButtonClick = (e: any) => {
    e?.stopPropagation();
    e?.preventDefault();
    console.log('table');
  };

  const rows: Row[] = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      age: 14,
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      action: (
        <div style={{ display: 'flex', columnGap: '5px' }}>
          <AclButton variant="outlined" fullWidth startIcon={<PlayArrowIcon />} onClick={handleButtonClick}>
            click
          </AclButton>
          <AclButton fullWidth onClick={handleButtonClick}>
            click
          </AclButton>
        </div>
      ),
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      age: 31,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      age: 31,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      age: 11,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      age: 0,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 6,
      lastName: 'Melisandre',
      firstName: '',
      age: 150,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      age: 44,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 34,
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      age: 36,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 10,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 11,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 12,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 13,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 14,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 15,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 16,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 17,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 18,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 19,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
    {
      age1: 34,
      age2: 34,
      age3: 34,
      age4: 34,
      age5: 34,
      age6: 34,
      age7: 34,
      age8: 34,
      age9: 34,
      age10: 34,
      age11: 34,
      age12: 34,
      age13: 34,
      age14: 34,
      age15: 34,
      age16: 34,
      age17: 34,
      age18: 34,
      age19: 34,
      age20: 3456676878,
      id: 20,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action: <AclChip label="Chip"></AclChip>,
    },
  ];

  return (
    <>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <div>
          <AclButton variant="outlined">Sample Button</AclButton>
          <AclAvatar>JJ</AclAvatar>
          <AclChip chipStyle={{ color: '#0072C3', backgroundColor: '#BAE6FF' }} label="rrrr" />
          <AclChip chipStyle={{ color: '#04636D', backgroundColor: '#CCF7EA' }} label="rrrr" />
          <AclChip chipStyle={{ color: 'white', backgroundColor: 'black' }} label="+" />
        </div>
        <div>
          <AclDatepicker fullWidth label="label"></AclDatepicker>
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <AclDropdown
              label="label"
              fullWidth
              optionIdKey="i"
              optionValueKey="val"
              onChange={(e) => console.log(e.target.value)}
              options={options2}
            ></AclDropdown>
          </div>
        </div>
        <div>
          <AclInput label="label" fullWidth></AclInput>
        </div>
        <div>
          <AclInput error label="label" fullWidth></AclInput>
        </div>
        <div>
          <AclDivider></AclDivider>
        </div>
        <div>
          <AclTabs
            tabItems={tabItems}
            variant="secondary"
            centered
            value={val}
            onChange={(event: React.SyntheticEvent, newValue: string) => handleClick1(newValue)}
          />
        </div>
        <div>
          <AclTabs
            tabItems={tabItems}
            variant="primary"
            centered
            value={val}
            onChange={(event: React.SyntheticEvent, newValue: string) => setVal(newValue)}
          />
        </div>
        <div>
          <AclFormControlLabel control={<AclCheckbox defaultChecked />} label="Label" />
          <AclCheckbox color="secondary"></AclCheckbox>
        </div>
        <div>
          <AclPagination count={10} />
        </div>
        <div>
          <AclRadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <AclFormControlLabel value="female" control={<AclRadio />} label="Female" />
            <AclFormControlLabel value="male" control={<AclRadio />} label="Male" />
            <AclFormControlLabel value="other" control={<AclRadio />} label="Other" />
            <AclFormControlLabel value="disabled" disabled control={<AclRadio />} label="other" />
          </AclRadioGroup>
        </div>
        <div>
          <AclInput label="button-group"></AclInput>
          <AclButton onClick={() => handlClick()}>hello</AclButton>
          <AclButton
            variant="outlined"
            onClick={() => enqueueSnackbar('hello', { style: { backgroundColor: 'red' } })}
            className="button-sample"
          >
            +
          </AclButton>
          <AclDropdown
            // optionIdKey="i"
            optionValueKey="val"
            onChange={(e) => console.log(e.target.value)}
            options={options2}
            defaultValue={[options2[1]]}
            multiple
            fullWidth
          ></AclDropdown>
          <AclDatepicker views={['month']} label="select date"></AclDatepicker>
        </div>
        <AclCssBaseline />
        <AclDivider />
        <div style={{ height: 'calc(100vh - 200px)' }}>
          <AclTable
            rowItems={rows}
            hideCheckbox
            stickyLastColumn={false}
            defaultSelectedRows={[rows[1], rows[3], rows[6]]}
            columnItems={columns}
            selectedRows={(row) => console.log(row)}
          ></AclTable>
          <div style={{ whiteSpace: 'nowrap' }}>
            <AclTablePagination
              rowsPerPage={[1, 3, 4, 5]}
              // defaultRowsPerPage={5}
              // count={10}
              totalNumberOfRows={rows.length}
              onChange={(e) => console.log(e)}
              onChangePage={(e) => setCurrentPage(e)}
              onChangeRowsPerPage={(e) => setRowsPerPage(e)}
            ></AclTablePagination>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE: Don't change this below line
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// FEATURE: Add providers here
root.render(
  <React.StrictMode>
    <AclSnackbarProvider>
      <CTest />
    </AclSnackbarProvider>
  </React.StrictMode>,
);
