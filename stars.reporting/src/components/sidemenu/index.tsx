import AdvLogoShort from '@/assets/images/adv-logo-short.png';
import AdvLogo from '@/assets/images/adv-logo.png';
import ChevronDownIcon from '@/assets/images/chevron-down-icon.svg';
import MenuToggleIcon from '@/assets/images/side-menu-toggle-icon.svg';
import useAppSelector from '@/utils/hooks/app-selector';
import {
  AclAccordion,
  AclAccordionDetails,
  AclAccordionSummary,
  AclBox,
  AclCollapse,
  AclDivider,
  AclDrawer,
  AclIcon,
  AclListItemButton,
} from '@acl/ui';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MENU_LIST } from './sidemenu.constant';
import SideMenuStyles from './sidemenu.module.css';
import { MenuListItem, MenuListOption } from './sidemenu.type';

const Sidemenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const global = useAppSelector((state) => state.global);
  const user = useAppSelector((state) => state.user);
  const [expandSideMenu, setExpandSideMenu] = useState<boolean>(true);
  const [accordionExpanded, setAccordionExpanded] = useState<{
    [key: string]: boolean;
  }>({});

  const handleAccordionChange = (groupName: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setAccordionExpanded({
      ...accordionExpanded,
      [groupName]: isExpanded,
    });
  };

  const handleToggleSideMenu = () => {
    setExpandSideMenu((currentState) => !currentState);
  };

  return (
    <>
      <AclDrawer
        openWidth={global.showSidemenu ? '300px' : '0px'}
        closeWidth={global.showSidemenu ? '100px' : '0px'}
        toggleDrawer={expandSideMenu}
        iconPosition={{ bottom: '50px', right: '-12px' }}
        iconComponent={
          global.showSidemenu ? (
            <AclBox className={SideMenuStyles['sidemenu-icon-container']} onClick={handleToggleSideMenu}>
              <AclIcon
                className={`${SideMenuStyles['toggle-drawer-icon']} ${
                  !expandSideMenu ? SideMenuStyles['toggle-drawer-icon-close'] : ''
                }`}
                src={MenuToggleIcon}
              />
            </AclBox>
          ) : (
            <></>
          )
        }
      >
        <div className={SideMenuStyles['sidemenu-wrapper']}>
          <div className={SideMenuStyles['logo-container']}>
            <AclIcon
              src={!expandSideMenu ? AdvLogoShort : AdvLogo}
              className={SideMenuStyles['sidemenu-adv-logo']}
            ></AclIcon>
          </div>
          {expandSideMenu && (
            <>
              <div className={SideMenuStyles['divider-line-container']}>
                <AclDivider></AclDivider>
              </div>
              <div
                className={`${SideMenuStyles['dashboard-text']} ${
                  location.pathname === `/starsreporting/${global.selectedClient}/dashboard`
                    ? SideMenuStyles['dashboard-text-selected']
                    : ''
                }`}
                onClick={() => navigate(`/starsreporting/${global.selectedClient}/dashboard`)}
              >
                <span>Dashboard</span>
              </div>
              <div className={SideMenuStyles['accordion-container']}>
                {MENU_LIST.map((listItem: MenuListItem, listItemIndex: number) => (
                  <AclCollapse
                    in={listItem.roles?.some((role: string) => user.clientRoles[global.selectedClient]?.includes(role))}
                    unmountOnExit
                    key={listItemIndex}
                  >
                    <AclAccordion
                      disableGutters
                      expanded={accordionExpanded?.[listItem?.groupName] ?? false}
                      onChange={handleAccordionChange(listItem?.groupName)}
                    >
                      <AclAccordionSummary
                        aria-controls={listItem?.groupName + '-panel-content'}
                        id={listItem?.groupName + '-panel-header'}
                      >
                        <div className={SideMenuStyles['accordion-summary']}>
                          <div>{listItem?.groupName}</div>
                          <AclIcon
                            src={ChevronDownIcon}
                            className={`${SideMenuStyles['accordion-summary-icon']} ${
                              accordionExpanded?.[listItem?.groupName]
                                ? SideMenuStyles['accordion-summary-icon-expanded']
                                : ''
                            }`}
                          />
                        </div>
                      </AclAccordionSummary>
                      <AclAccordionDetails>
                        <>
                          {listItem?.options?.map((subItem: MenuListOption, subItemIndex: number) => (
                            <div key={subItemIndex} className={SideMenuStyles['accordion-details-option-container']}>
                              <AclListItemButton
                                key={subItemIndex}
                                onClick={() =>
                                  navigate(`${global.selectedClient}/${subItem?.navigateTo ? subItem?.navigateTo : ''}`)
                                }
                              >
                                <div
                                  className={`${
                                    location.pathname ===
                                    `/starsreporting/${global.selectedClient}/${subItem?.navigateTo}`
                                      ? SideMenuStyles['accordion-details-option-selected']
                                      : ''
                                  }`}
                                >
                                  {subItem?.name}
                                </div>
                              </AclListItemButton>
                            </div>
                          ))}
                        </>
                      </AclAccordionDetails>
                    </AclAccordion>
                  </AclCollapse>
                ))}
              </div>
            </>
          )}
        </div>
      </AclDrawer>
    </>
  );
};

export default Sidemenu;
