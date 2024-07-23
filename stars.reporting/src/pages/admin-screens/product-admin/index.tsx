import AddIcon from '@/assets/images/add-icon.svg';
import { fetchLookupData, lookupActions } from '@/redux/lookup';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclButton, AclDatepicker, AclIcon, AclSpinner } from '@acl/ui';
import React, { useEffect, useState } from 'react';
import ProductAdminStyles from './product-admin.module.css';
import { Row } from './product-admin.type';

const ProductAdmin = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const dispatch = useAppDispatch();
  const lookup = useAppSelector((state) => state.lookup);

  useEffect(() => {
    dispatch(lookupActions.reset());
  }, [dispatch]);

  const AddRow = () => {
    const newRow: Row = {
      measureCode: '',
      measureName: '',
      abbreviation: '',
      oneStar: '',
      twoStar: '',
      threeStar: '',
      fourStar: '',
      fiveStar: '',
      measureWeight: '',
      correlation: '',
      measureCategory: '',
      measureSubcategory: '',
      contractType: '',
      measureType: '',
      domainType: '',
      isEditing: true,
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={ProductAdminStyles['product-admin-outer-container']}>
        <div className={ProductAdminStyles['heading-datepicker-wrapper']}>
          <h2 className={ProductAdminStyles['product-admin-main-name']}>Product Admin</h2>
          <AclDatepicker
            onChange={(date: Date | null) => dispatch(fetchLookupData({ measureYear: date?.getFullYear() }))}
            label="Select Measurement Year"
            openTo="year"
            views={['year']}
            className={ProductAdminStyles['year-picker']}
          />
        </div>
        {lookup.loading ? (
          <AclSpinner />
        ) : Boolean(Object.keys((lookup.data?.lookupTypes)??{}).length) ? (
          <div>
            <table className={ProductAdminStyles['product-admin-table']}>
              <thead>
                <tr>
                  <th>Measure code</th>
                  <th>Measure Name</th>
                  <th>Abbreviation</th>
                  <th colSpan={5}>Measure Threshold</th>
                  <th>Measure Weight</th>
                  <th>Correlation</th>
                  <th>Measure Category</th>
                  <th>Measure Sub-category</th>
                  <th>Contract Type</th>
                  <th>Measure Type</th>
                  <th>Domain Type</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>1 Star</th>
                  <th>2 Star</th>
                  <th>3 Star</th>
                  <th>4 Star</th>
                  <th>5 Star</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    {Array.from({ length: 10 }).map((_, colIndex) => (
                      <td key={colIndex}>
                        <input type="text" />
                      </td>
                    ))}

                    {Object.keys(lookup.data?.lookupTypes ?? {}).map((colIndex) => (
                      <td key={colIndex}>
                        <select>
                          {lookup.data?.lookupTypes?.[colIndex]?.map((value: string, index: number) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </td>
                    ))}

                    <td>
                      <button onClick={() => deleteRow(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AclButton
              variant="outlined"
              onClick={AddRow}
              endIcon={<AclIcon className={ProductAdminStyles['product-admin-add-icon']} src={AddIcon} />}
            >
              Add
            </AclButton>
          </div>
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </>
  );
};

export default ProductAdmin;
