import AdvLogo from '@/assets/images/advantasure-logo.png';
import NotifyIcon from '@/assets/images/bell-icon.png';
import LogoutIcon from '@/assets/images/logout-icon.png';
import SearchIcon from '@/assets/images/search-icon.png';
import ProfileIcon from '@/assets/images/user-icon.png';
import { userActions } from '@/redux/user';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclIcon } from '@acl/ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLE_LIST } from './header.constant';
import HeaderStyles from './header.module.css';

const Header = () => {
  const user = useAppSelector((state) => state.user);
  const global = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hasRoleForClassName = (className: string): boolean => {
    const roleItem = ROLE_LIST.find((item) => item.className === className);

    return roleItem ? roleItem.roles.some((role) => user.clientRoles[global.selectedClient].includes(role)) : false;
  };

  return (
    <>
      <div className={HeaderStyles['outer-container']}>
        <div className={HeaderStyles['header-advlogo-container']}>
          <AclIcon src={AdvLogo} className={HeaderStyles['header-adv-logo']}></AclIcon>
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
              {hasRoleForClassName('report-viewer') && (
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
              {hasRoleForClassName('product-admin') && (
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
              <AclIcon src={SearchIcon} className={HeaderStyles['header-icon']}></AclIcon>
              <AclIcon src={NotifyIcon} className={HeaderStyles['header-icon']}></AclIcon>
              <AclIcon src={ProfileIcon} className={HeaderStyles['header-icon']}></AclIcon>
              <AclIcon
                src={LogoutIcon}
                onClick={() => dispatch(userActions.clearUser())}
                className={HeaderStyles['header-icon']}
              ></AclIcon>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
