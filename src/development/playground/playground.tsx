import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  AclAccordion,
  AclAccordionDetails,
  AclAccordionSummary,
  AclAutocomplete,
  AclAvatar,
  AclBackdropLoader,
  AclButton,
  AclCheckbox,
  AclChip,
  AclDatepicker,
  AclDivider,
  AclDropdown,
  AclDropzone,
  AclFormControlLabel,
  AclInput,
  AclLink,
  AclListItemText,
  AclLoader,
  AclModal,
  AclPagination,
  AclPopover,
  AclRadio,
  AclRadioGroup,
  AclTabItem,
  AclTable,
  AclTablePagination,
  AclTabs,
  CancelIcon,
  IDictionary,
  LoaderIcon,
  Order,
  useAclDropzone,
  useAclSnackbar,
} from '../..';
import ArrowBack from '../../common/assets/images/arrow-back.svg';
import { MEMBER_COLUMNS, OPPORTUNITY_ROWS, OPTIONS_2, columns, rows } from './playground.constant';
import * as PlaygroundStyles from './playground.module.css';
import { AColumn, ARow, Row } from './playground.type';
import { SnackbarKey } from 'notistack';

// FEATURE: Test the components by importing and using it inside this function
const Playground = () => {
  const { enqueueSnackbar, closeSnackbar } = useAclSnackbar();
  const { resetAclDropzone } = useAclDropzone();
  const [val, setVal] = useState<any>(OPTIONS_2[1]);
  const [val2, setVal2] = useState<any>([OPTIONS_2[0]]);
  const [options, setOptions] = useState<any>(OPTIONS_2);
  const [bool, setBool] = useState<boolean>(false);
  const [bool2, setBool2] = useState<boolean>(false);
  const [tabItems, setTabItems] = useState<AclTabItem[]>([
    { label: 'Item One', value: 'one' },
    { label: 'Item Two', value: 'two', count: 3 },
    { label: 'Item three', value: 'three', disabled: true },
    { label: 'Item Four', value: 'four' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [data, setData] = useState(rows);
  const [selectedRows, setSelectedRows] = useState([rows[1]]);
  const [sortOrder, setSortOrder] = useState(localStorage.getItem('order') ?? 'asc');

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

  useEffect(() => {
    console.log(val);
  }, [val]);

  useEffect(() => {
    console.log(rowsPerPage);
  }, [rowsPerPage]);

  return (
    <>
      <div style={{ width: '100%' }}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={options}
          getOptionLabel={(option) => option.val}
          defaultValue={[options[1]]}
          renderInput={(params) => <TextField {...params} label="Multiple values" placeholder="Favorites" />}
        />
      </div>
      <div
        style={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          backgroundColor: '#FAFAFA',
        }}
      >
        <div>
          <AclTabs
            tabItems={tabItems}
            // variant="secondary"
            // centered
            // justifyContent="flex-start"
            value={'one'}
            // onChange={(event: React.SyntheticEvent, newValue: string) => setVal(newValue)}
          />
        </div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        >
          <AclAccordion disableGutters={false} expanded={bool} onChange={(_, expanded) => setBool(expanded)}>
            <AclAccordionSummary aria-controls={'-panel-content'} id={'-panel-header'}>
              <div>Accordion Summary</div>
            </AclAccordionSummary>
            <AclAccordionDetails>
              <div>Test Content</div>
            </AclAccordionDetails>
          </AclAccordion>
        </div>
        <div
          style={{
            // width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // border: 'solid black 1px',
          }}
        >
          <AclDropdown
            optionIdKey="i"
            optionValueKey="val"
            value={val2}
            label="label"
            onChange={(e) => setVal2(e.target.value)}
            options={OPTIONS_2}
            variant="standard"
            // defaultValue={{}}
            multiple
            showCheckbox
            fullWidth
            loading={bool2}
          />
          <AclAutocomplete
            optionIdKey="i"
            optionValueKey="val"
            value={val2}
            onChange={(e, n) => setVal2(n)}
            options={options}
            // variant="standard"
            label="autocomplete"
            // open={true}
            fullWidth
            required
            loading={bool2}
            // showCheckbox
            multiple
            limitTags={1}
            // defaultValue={OPTIONS_2[0]}
          />
          <AclButton
            onClick={() => {
              // setVal('');
              // setOptions([...OPTIONS_2, { i: 5, val: 'five', second: 'ol' }, { i: 6, val: 'six', second: 'o' }]);
              // setVal2([]);
              setBool2((p) => !p);
            }}
          >
            change val
          </AclButton>
          {/* <AclAutocomplete
            // optionIdKey="i"
            defaultValue={{}}
            // optionValueKey={1}
            onChange={(e, newVal) => console.log(newVal)}
            options={[{ value: 'two' }, { value: 'three' }]}
            label="00OO"
          /> */}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AclAvatar>JJ</AclAvatar>
            <AclLink href="https://example.com" underline="hover" data-testid="custom-link">
              Custom Link
            </AclLink>
            <AclListItemText sx={{ color: 'red' }}>Test Content</AclListItemText>
            {/* <AclPopover open={true} anchorEl={document.body}>
              <div>Test content</div>
            </AclPopover> */}
          </div>
          <AclPagination count={10} page={2} data-testid="custom-pagination" />
          <div style={{ display: 'flex', columnGap: '10px', backgroundColor: 'white', padding: '20px' }}>
            <AclChip label="MRR" sx={{ backgroundColor: '#BAE6FF', color: '#0072C3' }} />
            <AclChip label="Alerts" variant="outlined" sx={{ color: '#000000', fontSize: '14px' }} />
            <AclChip
              icon={<img src={ArrowBack} style={{ width: '16px', height: '16px' }} />}
              label="Alerts with icon"
              variant="outlined"
              sx={{ color: '#000000' }}
            />
            <AclCheckbox />
            <div>
              <AclRadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <AclFormControlLabel value="female" control={<AclRadio />} label="Female" />
                <AclFormControlLabel value="male" control={<AclRadio />} label="Male" />
                <AclFormControlLabel value="other" control={<AclRadio />} label="Other" />
                <AclFormControlLabel value="disabled" disabled control={<AclRadio />} label="other" />
              </AclRadioGroup>
            </div>
          </div>
          <AclModal open={false}>
            <div style={{ padding: '20px' }}>
              <h1>AclModal</h1>
            </div>
          </AclModal>
          <div style={{ backgroundColor: 'white', padding: '10px' }}></div>
          <div>
            <AclButton onClick={() => setBool(false)}>upload false</AclButton>
            <AclButton onClick={resetAclDropzone}>Reset</AclButton>
            <AclButton
              onClick={() =>
                enqueueSnackbar(
                  'hello Failed to load resource: the server responded with a status of 404 (Not Found)',
                  {
                    variant: 'error',
                    action: (key: SnackbarKey) => <button onClick={() => closeSnackbar(key)}>Close</button>,
                  },
                )
              }
            >
              snackbar
            </AclButton>
            <AclButton
              onClick={() =>
                enqueueSnackbar(
                  'hello Failed to load resource: the server responded with a status of 404 (Not Found)',
                  { persist: true },
                )
              }
            >
              snackbar 2
            </AclButton>
            <LoaderIcon />
          </div>
          <div style={{ backgroundColor: 'white' }}>
            <AclDropzone
              accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpg', '.jpeg'],
              }}
              isUploading={bool}
              onClickUpload={() => setBool(true)}
              // errorText="this is an error"
              // maxSize={10}
              disableUploadButton
            />
          </div>
          <AclTablePagination
            rowsPerPage={[1, 3, 4, 5]}
            defaultRowsPerPage={5}
            rowsPerPageValue={rowsPerPage}
            // count={10}
            totalNumberOfRows={10}
            // onChange={(e) => console.log(e)}
            onChangePage={(e) => setCurrentPage(e)}
            page={currentPage}
            onChangeRowsPerPage={(e) => setRowsPerPage(e)}
          ></AclTablePagination>
        </div>
        <div style={{ display: 'flex' }}>
          <AclAutocomplete
            // optionIdKey="i"
            defaultValue={{}}
            // optionValueKey={1}
            onChange={(e, newVal) => console.log(newVal)}
            options={[{ value: 'twov 2ecwedcw wedcwed wdecw dcwe dvweed wedvedv ' }, { value: 'three' }]}
            label="00OO"
            loading={bool2}
          />
          <AclAutocomplete
            // open
            showCheckbox
            // optionIdKey="i"
            defaultValue={{}}
            // optionValueKey={1}
            onChange={(e, newVal) => console.log(newVal)}
            options={[{ value: 'two' }, { value: 'three' }]}
            label="00OO"
            // loading={bool2}
          />
          <AclInput label="input label" multiline></AclInput>
          <AclButton>Button</AclButton>
        </div>
        <div style={{ display: 'flex' }}>
          <AclDropdown
            optionIdKey="i"
            optionValueKey="val"
            value={val}
            label="label"
            onChange={(e) => setVal(e.target.value)}
            options={OPTIONS_2}
            // variant="standard"
            // defaultValue={OPTIONS_2[0]}
            // multiple
            //
            showCheckbox
            loading={bool2}
          />
          <AclDatepicker className={PlaygroundStyles['date-picker']} label="label" value={null}></AclDatepicker>
          <AclInput disabled label="label"></AclInput>
          <AclButton>Button</AclButton>
        </div>
        {/* 
        <div>
          <AclDatepicker  label="label"></AclDatepicker>
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <AclDropdown
              label="label"
              
              optionIdKey="i"
              optionValueKey="val"
              onChange={(e) => console.log(e.target.value)}
              options={OPTIONS_2}
            ></AclDropdown>
          </div>
        </div>
        <div>
          <AclInput label="label" ></AclInput>
        </div>
        <div>
          <AclInput error label="label" ></AclInput>
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
            options={OPTIONS_2}
            defaultValue={[OPTIONS_2[1]]}
            multiple
            
          ></AclDropdown>
          <AclDatepicker views={['month']} label="select date"></AclDatepicker>
        </div> */}
        <AclDivider />
        <AclBackdropLoader open={bool2} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AclButton variant="outlined" onClick={() => setData((prev) => (prev.length > 3 ? rows.slice(0, 2) : rows))}>
            Sample Button
          </AclButton>
          <div style={{ flex: 1, height: data.length > 6 ? 'calc(100vh - 200px)' : '400px', padding: '0px 50px' }}>
            {bool2 ? (
              <AclLoader open={bool2} />
            ) : (
              <AclTable
                rowItems={data}
                hasCollapsibleContent
                // hideCheckbox
                // disableRowSelect
                // onSelectAll={(e) => console.log(e)}
                defaultSelectedRows={[rows[5]]}
                selectedRows={selectedRows}
                columnItems={columns}
                onChangeSelectedRows={(event, rows) => {
                  setSelectedRows(rows as Row[]);
                  console.log('selected rows', rows);
                }}
                defaultSortingState={{
                  order: localStorage.getItem('order') as Order,
                  field: localStorage.getItem('field') as string,
                }}
                getSortingState={({ order, field }) => {
                  localStorage.setItem('order', order);
                  localStorage.setItem('field', field as string);
                }}
                // onRowClick={() => console.log('single row')}
                // stickyLastColumn={false}
              ></AclTable>
            )}
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
      </div>
    </>
  );
};

export default Playground;
