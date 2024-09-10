import ViewIcon from '@/assets/images/view-icon.svg';
import { fileActions, getFileProcessing } from '@/redux/file';
import { fetchMeasureData, measureActions } from '@/redux/measure';
import { getIconFromFileType } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclCard, AclDatepicker, AclIcon, AclSpinner } from '@acl/ui';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import DashboardStyles from './dashboard.module.css';
import { FileRow, MeasureRow } from './dashboard.type';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const measureData = useAppSelector((state) => state.measure);
  const file = useAppSelector((state) => state.file);
  const global = useAppSelector((state) => state.global);
  const user = useAppSelector((state) => state.user);

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      const measureDate = format(selectedDate, 'dd-MMM-yyyy');
      const measureYear = selectedDate.getFullYear();

      dispatch(getFileProcessing({ measureDate }));
      dispatch(fetchMeasureData({ measureYear }));
    }
  };

  const isRolePresent = (role: string): boolean => {
    return user.clientRoles[global.selectedClient].includes(role);
  };

  useEffect(() => {
    dispatch(fileActions.reset());
    dispatch(measureActions.reset());
  }, [dispatch]);

  return (
    <div>
      {isRolePresent('ProjectAdministrator') && (
        <div className={DashboardStyles['dashboard-scroll-container']}>
          <div className={DashboardStyles['dashboard-flex-container']}>
            <h2 className={DashboardStyles['dashboard-main-name']}>Dashboard</h2>
            <AclDatepicker
              onAccept={(date: Date | null) => handleDateChange(date)}
              label="select month and year"
              openTo="month"
              views={['month', 'year']}
            />
          </div>
          <div className={DashboardStyles['dashboard-card-list']}>
            <AclCard className={DashboardStyles['dashboard-card']}>
              <div>Total Measures added</div>
            </AclCard>
            <AclCard className={DashboardStyles['dashboard-card']}>
              <div>Total Files uploaded</div>
            </AclCard>
            <AclCard className={DashboardStyles['dashboard-card']}>
              <div>Total Files failed</div>
            </AclCard>
            <AclCard className={DashboardStyles['dashboard-card']}>
              <div>Total Part C measures</div>
            </AclCard>
            <AclCard className={DashboardStyles['dashboard-card']}>
              <div>Total Part D measures</div>
            </AclCard>
          </div>
          <div className={DashboardStyles['dashboard-sub-container']}>
            <div className={DashboardStyles['dashboard-sub-card']}>
              <div>
                <h3>Uploaded files</h3>
                {file.loading ? (
                  <AclSpinner />
                ) : Boolean(file.data?.fileProcessing?.length) ? (
                  <table className={DashboardStyles['dashboard-upload-file-table']}>
                    <tbody>
                      {file.data?.fileProcessing?.map((row: FileRow, rowIndex: number) => (
                        <tr key={rowIndex}>
                          <td className={DashboardStyles['dashboard-file-icon-name-wrapper']}>
                            <AclIcon
                              className={DashboardStyles['dashboard-icon']}
                              src={getIconFromFileType(row.fileExtension)}
                            />
                            <span>{row.fileName}</span>
                          </td>
                          <td>
                            <AclIcon className={DashboardStyles['dashboard-act-icon']} src={ViewIcon} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <h5>No Data Found</h5>
                )}
              </div>
            </div>
            <div className={DashboardStyles['dashboard-table-container']}>
              <h3>Measures</h3>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {measureData.data?.map((row: MeasureRow, rowIndex: number) => (
                    <tr key={rowIndex}>
                      <td>{row.categoryName}</td>
                      <td>{row.measureName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
