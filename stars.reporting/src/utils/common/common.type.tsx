export type UnparsedUser = {
  email: string;
  given_name: string;
  family_name: string;
  name: string;
  group: string[];
};

export type Option = {
  id: string;
  value: string;
  [key: string | number]: string | number;
};
