import { globalActions } from '@/redux/global';
import { ClientRoles } from '@/redux/user';
import { getIconFromClient } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclCard, AclIcon, AclInputSuggestion } from '@acl/ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OPTIONS } from './client-selection.constant';
import ClientSelectionStyles from './client-selection.module.css';

const ClientSelection = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [filteredClients, setFilteredClients] = useState(user.clientRoles);

  const handleSearch = (value: string): void => {
    const filteredClientObj: ClientRoles = {};
    Object.keys(user.clientRoles).forEach((clientName: string) => {
      if (clientName.toLowerCase().includes(value.toLowerCase())) {
        filteredClientObj[clientName] = user.clientRoles[clientName];
      }
    });
    setFilteredClients(filteredClientObj);
  };

  const handleClientClick = (clientName: string): void => {
    sessionStorage.setItem('selectedClient', clientName);
    dispatch(globalActions.update({ selectedClient: clientName }));
    navigate(`${clientName}/dashboard`);
  };

  useEffect(() => {
    dispatch(globalActions.update({ showSidemenu: false }));
    sessionStorage.removeItem('selectedClient');
    dispatch(globalActions.update({ selectedClient: '' }));

    const clientNames = Object.keys(user.clientRoles);

    if (clientNames?.length === 1 && clientNames[0] === 'Global') {
      sessionStorage.setItem('selectedClient', 'Global');
      dispatch(globalActions.update({ selectedClient: 'Global' }));
      navigate('Global/dashboard');
    }

    return () => {
      dispatch(globalActions.update({ showSidemenu: true }));
    };
  }, [dispatch, navigate, user.clientRoles]);

  return (
    <div className={ClientSelectionStyles['client-selection']}>
      <div>
        <span className={ClientSelectionStyles['client-selection-header']}>Select client</span>
      </div>
      <div className={ClientSelectionStyles['search-bar']}>
        <AclInputSuggestion options={OPTIONS} placeholder="Search Clients" onChange={(e) => handleSearch(e)} />
      </div>
      <div className={ClientSelectionStyles['client-list']}>
        {Object.keys(filteredClients).map((clientName: string, index: number) => {
          if (clientName === 'Global') return <div key={index}></div>;
          return (
            <AclCard
              key={index}
              className={ClientSelectionStyles['client-card']}
              onClick={() => handleClientClick(clientName)}
            >
              <div className={ClientSelectionStyles['each-client-wrapper']}>
                <div>
                  {getIconFromClient(clientName) && (
                    <AclIcon
                      className={ClientSelectionStyles['client-icon']}
                      src={getIconFromClient(clientName)}
                      alt={`${clientName}-logo-icon`}
                    />
                  )}
                </div>
                <div>
                  <div className={ClientSelectionStyles['client-heading']}>{clientName}</div>
                  <div className={ClientSelectionStyles['client-sub-text']}>
                    {filteredClients[clientName].join(', ')}
                  </div>
                </div>
              </div>
            </AclCard>
          );
        })}
      </div>
    </div>
  );
};

export default ClientSelection;
