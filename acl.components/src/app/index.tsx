import {
  AclButton,
  AclChip,
  AclCssBaseline,
  AclDatepicker,
  AclDropdown,
  AclTabItems,
  AclTable,
  AclTableColDef,
  AclTablePagination,
  AclTabs,
  IDictionary,
  useAclSnackbar,
} from '@acl/ui';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, { useEffect, useState } from 'react';

const App = () => {
  const { enqueueSnackbar } = useAclSnackbar();
  const [val, setVal] = useState<string>('one');
  const [tabItems, setTabItems] = useState<AclTabItems[]>([
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

  const getMeasureThreshold = () => {
    const thresholdData = [
      {
        thresholdId: 276,

        measureId: 45,

        starRating: '1 Star',

        thresholdValue: 71,

        organizationType: 'MA-PD',
      },

      {
        thresholdId: 277,

        measureId: 45,

        starRating: '1 Star',

        thresholdValue: 78,

        organizationType: 'PDP',
      },

      {
        thresholdId: 278,

        measureId: 45,

        starRating: '2 Stars',

        thresholdValue: 79,

        organizationType: 'MA-PD',
      },

      {
        thresholdId: 279,

        measureId: 45,

        starRating: '2 Stars',

        thresholdValue: 82,

        organizationType: 'PDP',
      },

      {
        thresholdId: 280,

        measureId: 45,

        starRating: '3 Stars',

        thresholdValue: 83,

        organizationType: 'MA-PD',
      },

      {
        thresholdId: 281,

        measureId: 45,

        starRating: '3 Stars',

        thresholdValue: 85,

        organizationType: 'PDP',
      },

      {
        thresholdId: 282,

        measureId: 45,

        starRating: '4 Stars',

        thresholdValue: 86,

        organizationType: 'MA-PD',
      },

      {
        thresholdId: 283,

        measureId: 45,

        starRating: '4 Stars',

        thresholdValue: 87,

        organizationType: 'PDP',
      },

      {
        thresholdId: 284,

        measureId: 45,

        starRating: '5 Stars',

        thresholdValue: 100,

        organizationType: 'MA-PD',
      },

      {
        thresholdId: 285,

        measureId: 45,

        starRating: '5 Stars',

        thresholdValue: 100,

        organizationType: 'PDP',
      },
    ];

    const thresholdDat = [
      {
        thresholdId: 161,

        measureId: 33,

        starRating: '1 Star',

        thresholdValue: 49,

        organizationType: null,
      },

      {
        thresholdId: 162,

        measureId: 33,

        starRating: '2 Stars',

        thresholdValue: 79,

        organizationType: null,
      },

      {
        thresholdId: 163,

        measureId: 33,

        starRating: '3 Stars',

        thresholdValue: 88,

        organizationType: null,
      },

      {
        thresholdId: 164,

        measureId: 33,

        starRating: '4 Stars',

        thresholdValue: 96,

        organizationType: null,
      },

      {
        thresholdId: 165,

        measureId: 33,

        starRating: '5 Stars',

        thresholdValue: 100,

        organizationType: null,
      },
    ];

    const thresholdMapping: Record<string, { name: string; value: number }[]> = {};

    thresholdData?.forEach(({ organizationType = 'default', starRating, thresholdValue }) => {
      if (!thresholdMapping[organizationType]) {
        thresholdMapping[organizationType] = [];
      }

      thresholdMapping[organizationType].push({ name: starRating, value: thresholdValue });
    });

    const combinedArray = Object.values(thresholdMapping).reduce((acc, array) => [...acc, ...array], []);

    // console.log(Object.values(thresholdMapping));
    // console.log(combinedArray);
  };

  useEffect(() => {
    getMeasureThreshold();
  }, []);

  type R = {
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

  const columns: AclTableColDef<R>[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
      align: 'right',
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
      align: 'center',
    },
    {
      field: 'age2',
      headerName: 'Age2',
      width: 100,
      align: 'center',
    },
    {
      field: 'age3',
      headerName: 'Age3',
      width: 100,
      align: 'center',
    },
    {
      field: 'age4',
      headerName: 'Age4',
      width: 100,
      align: 'center',
    },
    {
      field: 'age5',
      headerName: 'Age5',
      width: 100,
      align: 'center',
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
  };

  const rows: R[] = [
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      id:11,
      lastName: 'Roxie',
      firstName: 'Harvey',
      age: 65,
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
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
      action:<AclChip label='Savio'></AclChip>
    },
  ];

  return (
    <>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        {/* <div>
          <AclAvatar>SJ</AclAvatar>
          <AclChip chipStyle={{ color: '#0072C3', backgroundColor: '#BAE6FF' }} label="rrrr" />
          <AclChip chipStyle={{ color: '#04636D', backgroundColor: '#CCF7EA' }} label="rrrr" />
          <AclChip chipStyle={{ color: 'white', backgroundColor: 'black' }} label="+" />
        </div>
        <div>
          <AclDatepicker fullWidth views={['year', 'month', 'day']} label="label"></AclDatepicker>
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <AclDropdown label="label" fullWidth options={options}></AclDropdown>
          </div>
        </div>
        <div>
          <AclInput label="label" fullWidth></AclInput>
        </div>
        <div>
          <AclInput error label="label" fullWidth></AclInput>
        </div>
        <div>
          <AclTabs
            tabItems={tabItems}
            variant="secondary"
            centered
            value={val}
            onChange={(event: React.SyntheticEvent, newValue: string) => setVal(newValue)}
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
        </div> */}
        <div>
        <div>
          <AclTabs
            tabItems={tabItems}
            variant="primary"
            centered
            value={val}
            onChange={(event: React.SyntheticEvent, newValue: string) => setVal(newValue)}
          />
        </div>
          <AclButton onClick={() => handlClick()}>hello</AclButton>
          <AclButton variant="outlined" onClick={() => enqueueSnackbar('hello')} className="button-sample">
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
        <h2>hello age 3</h2>
        <div style={{ height: '500px' }}>
          <AclTable
            rowItems={rows}
            // hideCheckbox
            // stickyLastColumn={false}
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

export default App;
