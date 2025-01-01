export type AColumn = {
  date: string;
  totalEngagedMembers: string;
  engagedMemberswithAlert: string;
  [key: string]: string;
};

export type ARow = {
  // TODO: Use this during api integration
  //   field: keyof Column;
  field: string;
  rowName: string;
};

export type Row = {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  age1: number;
  age2: number;
  age3: number;
  age4: number;
  age5: number;
  age6: number;
  age7: number;
  age8: number;
  age9: number;
  age10: number;
  age11: number;
  age12: number;
  age13: number;
  age14: number;
  age15: number;
  age16: number;
  age17: number;
  age18: number;
  age19: number;
  age20: number;
  // age18: number;
  // age18: number;
  action?: React.ReactNode;
  collapsibleContent?: React.ReactNode;
};
