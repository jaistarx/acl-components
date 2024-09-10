import NotifyIcon from '@/assets/images/bell-icon.png';
import LogoutIcon from '@/assets/images/logout-icon.png';
import SearchIcon from '@/assets/images/search-icon.png';
import ProfileIcon from '@/assets/images/user-icon.png';
import USTHealthProofLogo from '@/assets/images/ust-healthproof-logo.svg';
import { userActions } from '@/redux/user';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclIcon, AclIconButton } from '@acl/ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderStyles from './header.module.css';

const Header = () => {
  const user = useAppSelector((state) => state.user);
  const global = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isRolePresent = (role: string): boolean => {
    return user.clientRoles[global.selectedClient].includes(role);
  };

  return (
    <>
      <div className={HeaderStyles['outer-container']}>
        <div>
          <AclIcon src={USTHealthProofLogo} className={HeaderStyles['header-healthproof-logo']}></AclIcon>
        </div>
        {Boolean(global.selectedClient) && (
          <>
            <div className={HeaderStyles['title-group']}>
              <span
                className={`${HeaderStyles['menu-item']} ${
                  location.pathname === `/starsreporting/${global.selectedClient}/dashboard`
                    ? HeaderStyles['menu-item-selected']
                    : ''
                }`}
                onClick={() => navigate(`/starsreporting/${global.selectedClient}/dashboard`)}
              >
                Dashboard
              </span>
              {isRolePresent('ReportViewer') && (
                <>
                  <span
                    className={`${HeaderStyles['menu-item']} ${
                      location.pathname === `/starsreporting/${global.selectedClient}/plan-market-analysis`
                        ? HeaderStyles['menu-item-selected']
                        : ''
                    }`}
                    onClick={() => navigate(`/starsreporting/${global.selectedClient}/plan-market-analysis`)}
                  >
                    Plan Market Analysis
                  </span>
                </>
              )}
              {isRolePresent('ProjectAdministrator') && (
                <>
                  <span
                    className={`${HeaderStyles['menu-item']} ${
                      location.pathname === `/starsreporting/${global.selectedClient}/file-upload`
                        ? HeaderStyles['menu-item-selected']
                        : ''
                    }`}
                    onClick={() => navigate(`/starsreporting/${global.selectedClient}/file-upload`)}
                  >
                    File Upload
                  </span>
                  <span
                    className={`${HeaderStyles['menu-item']} ${
                      location.pathname === `/starsreporting/${global.selectedClient}/measure`
                        ? HeaderStyles['menu-item-selected']
                        : ''
                    }`}
                    onClick={() => navigate(`/starsreporting/${global.selectedClient}/measure`)}
                  >
                    Measures
                  </span>
                </>
              )}
            </div>

            <div className={HeaderStyles['icon-group']}>
              <AclIconButton>
                <AclIcon src={SearchIcon} className={HeaderStyles['header-icon']}></AclIcon>
              </AclIconButton>
              <AclIconButton>
                <AclIcon src={NotifyIcon} className={HeaderStyles['header-icon']}></AclIcon>
              </AclIconButton>
              <AclIconButton>
                <AclIcon src={ProfileIcon} className={HeaderStyles['header-icon']}></AclIcon>
              </AclIconButton>
              <AclIconButton onClick={() => dispatch(userActions.clearUser())}>
                <AclIcon src={LogoutIcon} className={HeaderStyles['header-icon']}></AclIcon>
              </AclIconButton>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
