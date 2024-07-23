import { fetchReportConfig } from '@/redux/powerbi';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclSpinner } from '@acl/ui';
import { PowerBIEmbed } from 'powerbi-client-react';
import React, { useEffect } from 'react';
import Report1Styles from './report-1.module.css';

const Report1 = () => {
  const dispatch = useAppDispatch();
  const powerbi = useAppSelector((state) => state.powerbi);

  useEffect(() => {
    dispatch(fetchReportConfig());
  }, [dispatch]);

  return (
    <>
      <div className={Report1Styles['outer-container']}>
        {!powerbi.loading && Boolean(powerbi.data.embedUrl) ? (
          <PowerBIEmbed
            embedConfig={powerbi.data}
            cssClassName={Report1Styles['powerbi-report']}
            getEmbeddedComponent={(embeddedReport) => embeddedReport}
          />
        ) : (
          <AclSpinner />
        )}
      </div>
    </>
  );
};

export default Report1;
