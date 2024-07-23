export type ClientRoles = {
  [key: string]: string[];
};

export type UserState = {
  userEmail: string;
  firstName: string;
  lastName: string;
  userName: string;
  profileImage?: string;
  clientRoles: ClientRoles;
  isAuthenticated: boolean;
  isLoading?: boolean;
};
