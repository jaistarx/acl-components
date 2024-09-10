export type SidemenuProps = {};

export type MenuListOption = { name: string; navigateTo: string };

export type MenuListItem = {
  groupName: string;
  options: MenuListOption[];
  roles: string[];
};
