import React from 'react';
import { AclTableColDef, AclTableProps } from './aclTable.type';

export const TABLE_CELL = (column: AclTableColDef, props: AclTableProps) => {
  let stickyColumnStyle: React.CSSProperties = {
    position: 'sticky',
    right: 0,
    boxShadow: '-2px 0px 24px 0px #00000029',
  };

  return {
    width: column.width || 'auto',
    textAlign: column.align,
    '&:last-child': props.stickyLastColumn !== false ? stickyColumnStyle : {},
  };
};

export const OUTER_CONTAINER = { height: '100%', width: '100%' };

export const TABLE_VIRTUOSO = {
  border: 'none',
  background: '#FFFFFF',
  overflow: 'auto',
  borderRadius: '4px',
};
