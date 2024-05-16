import AdvLogoShort from "@/assets/images/adv-logo-short.png";
import AdvLogo from "@/assets/images/adv-logo.png";
import ChevronDownIcon from "@/assets/images/chevron-down-icon.svg";
import MenuToggleIcon from "@/assets/images/side-menu-toggle-icon.svg";
import { CHECK_LIST } from "./sidemenu.constants";
import {
  CheckListItem,
  CheckListOption,
  SidemenuProps,
} from "./sidemenu.types";
import {
  AclAccordion,
  AclAccordionDetails,
  AclAccordionSummary,
  AclBox,
  AclDivider,
  AclDrawer,
  AclIcon,
  AclListItemButton,
} from "@acl/ui";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideMenuStyles from "./sidemenu.module.css";

const Sidemenu = (props: SidemenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandSideMenu, setExpandSideMenu] = useState<boolean>(true);
  const [accordionExpanded, setAccordionExpanded] = useState<{
    [key: string]: boolean;
  }>({});

  const handleAccordionChange =
    (groupName: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
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
        openWidth="300px"
        closeWidth="100px"
        toggleDrawer={expandSideMenu}
        iconPosition={{ bottom: "50px", right: "-12px" }}
        iconComponent={
          <AclBox
            className={SideMenuStyles["sidemenu-icon-container"]}
            onClick={handleToggleSideMenu}
          >
            <AclIcon
              className={`${SideMenuStyles["toggle-drawer-icon"]} ${
                !expandSideMenu
                  ? SideMenuStyles["toggle-drawer-icon-close"]
                  : ""
              }`}
              src={MenuToggleIcon}
            />
          </AclBox>
        }
      >
        <div className={SideMenuStyles["sidemenu-wrapper"]}>
          <div className={SideMenuStyles["logo-container"]}>
            <AclIcon
              src={!expandSideMenu ? AdvLogoShort : AdvLogo}
              className={SideMenuStyles["sidemenu-adv-logo"]}
            ></AclIcon>
          </div>
          {expandSideMenu && (
            <>
              <div className={SideMenuStyles["divider-line-container"]}>
                <AclDivider></AclDivider>
              </div>
              <div className={SideMenuStyles["accordion-container"]}>
                {CHECK_LIST.map((listItem: CheckListItem, listItemIndex) => (
                  <AclAccordion
                    disableGutters
                    key={listItemIndex}
                    expanded={accordionExpanded?.[listItem?.groupName] ?? false}
                    onChange={handleAccordionChange(listItem?.groupName)}
                  >
                    <AclAccordionSummary
                      aria-controls={listItem?.groupName + "-panel-content"}
                      id={listItem?.groupName + "-panel-header"}
                    >
                      <div className={SideMenuStyles["accordion-summary"]}>
                        <div>{listItem?.groupName}</div>
                        <AclIcon
                          src={ChevronDownIcon}
                          className={`${
                            SideMenuStyles["accordion-summary-icon"]
                          } ${
                            accordionExpanded?.[listItem?.groupName]
                              ? SideMenuStyles[
                                  "accordion-summary-icon-expanded"
                                ]
                              : ""
                          }`}
                        />
                      </div>
                    </AclAccordionSummary>
                    <AclAccordionDetails>
                      <>
                        {listItem?.options?.map(
                          (subItem: CheckListOption, subItemIndex: number) => (
                            <div
                              key={subItemIndex}
                              className={
                                SideMenuStyles[
                                  "accordion-details-option-container"
                                ]
                              }
                            >
                              <AclListItemButton
                                key={subItemIndex}
                                onClick={() => navigate(subItem?.navigateTo)}
                              >
                                <div
                                  className={`${
                                    location.pathname === subItem?.navigateTo
                                      ? SideMenuStyles[
                                          "accordion-details-option-selected"
                                        ]
                                      : ""
                                  }`}
                                >
                                  {subItem?.name}
                                </div>
                              </AclListItemButton>
                            </div>
                          )
                        )}
                      </>
                    </AclAccordionDetails>
                  </AclAccordion>
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
