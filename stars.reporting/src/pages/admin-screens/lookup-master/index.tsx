import AddIcon from '@/assets/images/add-icon.svg';
import { AclButton, AclDatepicker, AclIcon, AclInput, AclSpinner } from '@acl/ui';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LookupItem, deleteLookupData, fetchLookupData, lookupActions, saveLookupData } from '@/redux/lookup';
import LookUpMasterStyles from './lookup-master.module.css';
import { Row } from './lookup-master.type';
import useAppSelector from '@/utils/hooks/app-selector';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import { DISABLED_LOOKUP_TYPES, LOOKUP_TYPES } from './lookup-master.constant';

function LookUpMaster() {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(0);
  const [rows, setRows] = useState<Row[]>([]);
  const dispatch = useAppDispatch();
  const lookup = useAppSelector((state) => state.lookup);
  const user = useAppSelector((state) => state.user);

  const handleYearChange = (date: Date | null) => {
    if (date) {
      const measureYear = date.getFullYear();

      dispatch(fetchLookupData({ measureYear }));
    }

    setRows([]);
    setSelectedYear(date ? date.getFullYear() : 0);
  };

  useEffect(() => {
    dispatch(lookupActions.reset());
  }, [dispatch]);

  const addRow = () => {
    const newRow: Row = {
      lookupType: '',
      lookupName: '',
      lookupValue: '',
      isEditing: false,
      lookupId: 0,
      measureYear: selectedYear,
      userName: user.userName,
    };
    setRows([...rows, newRow]);
  };

  const updateRow = (index: number, field: string, value: string) => {
    const newRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, [field]: value };
      }

      return row;
    });

    setRows(newRows);
  };

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const deleteLookup = (lookupId: number) => {
    dispatch(deleteLookupData(lookupId));
  };

  const saveRow = (index: number) => {
    const rowToSave: Row = rows[index];

    if (!rowToSave.lookupType || !rowToSave.lookupValue || !selectedYear) {
      alert('Please fill out all fields before saving.');

      return;
    }

    dispatch(saveLookupData(rowToSave)).then(() => {
      // Remove the saved row from the state
      const updatedRows = rows.filter((_, i) => i !== index);

      setRows(updatedRows);
      dispatch(fetchLookupData({ measureYear: selectedYear }));
    });
  };

  return (
    <div className={LookUpMasterStyles['lookup-master-main-container']}>
      <p></p>
      <FormControl className={LookUpMasterStyles['lookup-master-form-control']}>
        <AclDatepicker
          onChange={handleYearChange}
          label="Select Measurement Year"
          openTo="year"
          views={['year']}
          className={LookUpMasterStyles['lookup-master-select']}
        />
      </FormControl>
      <p></p>
      <table className={LookUpMasterStyles['lookup-master-table']}>
        <thead>
          <tr>
            <th>Lookup Type</th>
            <th>Lookup Name</th>
            <th>Lookup Value</th>
          </tr>
        </thead>
        <tbody>
          {lookup.loading ? (
            <AclSpinner />
          ) : Boolean(lookup.data?.actionPayload?.length) ? (
            lookup.data?.actionPayload?.map((item: LookupItem) => (
              <tr key={item.lookupId}>
                <td>{item.lookupType}</td>
                <td>{item.lookupName}</td>
                <td>{item.lookupValue}</td>
                <td>
                  <div className={LookUpMasterStyles['button-wrapper']}>
                    <AclButton onClick={() => deleteLookup(item.lookupId)}>Delete</AclButton>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            ''
          )}
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <FormControl className={LookUpMasterStyles['lookup-master-form-control-lookup']}>
                  <InputLabel id="measurementYear-label">Select Lookup Type</InputLabel>
                  <Select
                    labelId="measurementYear-label"
                    id="measurementYear"
                    value={row.lookupType}
                    onChange={(e) => updateRow(index, 'lookupType', e.target.value)}
                    label="Select Measurement Year"
                    fullWidth
                    variant="standard"
                  >
                    <MenuItem value="">Select Lookup Type</MenuItem>
                    {LOOKUP_TYPES.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </td>
              <td>
                <AclInput
                  type="text"
                  value={row.lookupName}
                  onChange={(e) => updateRow(index, 'lookupName', e.target.value)}
                  disabled={DISABLED_LOOKUP_TYPES.includes(row.lookupType)}
                />
              </td>
              <td>
                <AclInput
                  type="text"
                  value={row.lookupValue}
                  onChange={(e) => updateRow(index, 'lookupValue', e.target.value)}
                  disabled={[''].includes(row.lookupType)}
                />
              </td>
              <td>
                <div className={LookUpMasterStyles['button-wrapper']}>
                  <AclButton onClick={() => saveRow(index)}>Save</AclButton>
                  <AclButton onClick={() => deleteRow(index)}>Delete</AclButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AclButton
        variant="outlined"
        onClick={addRow}
        endIcon={<AclIcon className={LookUpMasterStyles['lookup-master-add-icon']} src={AddIcon} />}
      >
        Add
      </AclButton>
    </div>
  );
}

export default LookUpMaster;
