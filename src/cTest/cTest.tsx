import React, { useState } from 'react';
import {
  AclAccordion,
  AclAccordionDetails,
  AclAccordionSummary,
  AclAutocomplete,
  AclAvatar,
  AclButton,
  AclChip,
  AclDatepicker,
  AclDivider,
  AclDropdown,
  AclDropzone,
  AclInput,
  AclTabItem,
  AclTablePagination,
  IDictionary,
  useAclDropzone,
  useAclSnackbar,
} from '..';
import ArrowBack from '../common/assets/images/arrow-back.svg';
import { MEMBER_COLUMNS, OPPORTUNITY_ROWS, OPTIONS_2 } from './cTest.constant';
import * as CTestStyles from './cTest.module.css';
import { AColumn, ARow } from './cTest.type';

// FEATURE: Test the components by importing and using it inside this function
const CTest = () => {
  const { enqueueSnackbar } = useAclSnackbar();
  const { resetAclDropzone } = useAclDropzone();
  const [val, setVal] = useState<any>([]);
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

  return (
    <>
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
          <AclAccordion disableGutters expanded={false} onChange={(_, expanded) => setBool(expanded)}>
            <AclAccordionSummary aria-controls={'-panel-content'} id={'-panel-header'}>
              <div>Accordion Summary</div>
            </AclAccordionSummary>
            <AclAccordionDetails>
              <div className={CTestStyles['table-wrapper']}>
                <table className={CTestStyles['table']}>
                  <tbody>
                    {OPPORTUNITY_ROWS.map((rowItem: ARow, rowIndex: number) => (
                      <tr key={rowIndex}>
                        {MEMBER_COLUMNS.map((_columnItem: AColumn, columnIndex: number) => (
                          <td key={columnIndex}>{rowItem.rowName}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AclAccordionDetails>
          </AclAccordion>
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // border: 'solid black 1px',
          }}
        >
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
            showCheckbox
            fullWidth
          />
          <AclDropdown
            optionIdKey="i"
            optionValueKey="val"
            // value={val}
            onChange={(e, n) => console.log(n)}
            options={OPTIONS_2}
            variant="standard"
            // multiple
            fullWidth
            defaultValue={OPTIONS_2[0]}
          />
          <AclAutocomplete
            multiple
            optionIdKey="i"
            optionValueKey="val"
            onChange={(e, n) => console.log(n)}
            // open={true}

            options={OPTIONS_2}
            label="00OO"
            fullWidth
            // multiple
            // variant="standard"
          />
        </div>
        <div>
          <AclButton variant="outlined">Sample Button</AclButton>
          <AclAvatar>JJ</AclAvatar>
          <div style={{ display: 'flex', columnGap: '10px', backgroundColor: 'white', padding: '20px' }}>
            <AclChip label="MRR" sx={{ backgroundColor: '#BAE6FF', color: '#0072C3' }} />
            <AclChip label="Alerts" variant="outlined" sx={{ color: '#000000', fontSize: '14px' }} />
            <AclChip
              icon={<img src={ArrowBack} style={{ width: '16px', height: '16px' }} />}
              label="Alerts with icon"
              variant="outlined"
              sx={{ color: '#000000' }}
            />
          </div>
          {/* <AclModal open={bool} onClose={() => setBool(false)}>
            <div style={{ padding: '20px' }}>
              <h1>AclModal</h1>
            </div>
          </AclModal> */}
          <div style={{ backgroundColor: 'white', padding: '10px' }}></div>
          <div>
            <AclButton onClick={() => setBool(false)}>upload false</AclButton>
            <AclButton onClick={resetAclDropzone}>Reset</AclButton>
            <AclButton onClick={() => enqueueSnackbar('hello', { variant: 'error', persist: true })}>
              snackbar
            </AclButton>
            <AclButton onClick={() => enqueueSnackbar('hello', { persist: true })}>snackbar 2</AclButton>
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
            // defaultRowsPerPage={5}
            // count={10}
            totalNumberOfRows={10}
            // onChange={(e) => console.log(e)}
            onChangePage={(e) => setCurrentPage(e)}
            page={currentPage}
            // onChangeRowsPerPage={(e) => setRowsPerPage(e)}
          ></AclTablePagination>
        </div>
        <div style={{ display: 'flex' }}>
          <AclDatepicker fullWidth label="label" value={null}></AclDatepicker>
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
            fullWidth
          />
          <AclInput label="label" fullWidth></AclInput>
          <AclButton fullWidth>Button</AclButton>
        </div>
        {/* 
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
              options={OPTIONS_2}
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
            options={OPTIONS_2}
            defaultValue={[OPTIONS_2[1]]}
            multiple
            fullWidth
          ></AclDropdown>
          <AclDatepicker views={['month']} label="select date"></AclDatepicker>
        </div> */}
        {/* <AclCssBaseline /> */}
        <AclDivider />
        {/* <div style={{ height: 'calc(100vh - 200px)' }}>
          <AclTable
            rowItems={rows}
            // hideCheckbox
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
        </div> */}
      </div>
    </>
  );
};

export default CTest;
