import React from 'react';
import { AclTableColDef, AclTableProps } from './acl-table.type';

export function TABLE_CELL<T>(column: AclTableColDef<T>, props: AclTableProps) {
  const stickyColumnStyle: React.CSSProperties = {
    position: 'sticky',
    right: 0,
    boxShadow: '-2px 0px 24px 0px #00000029',
  };

  return {
    width: column.width || 'auto',
    textAlign: column.align,
    cursor: props.disableRowSelect ? 'auto' : undefined,
    '&:last-child': props.stickyLastColumn !== false ? stickyColumnStyle : {},
  };
}

export const TABLE_HEAD_SPAN = { userSelect: 'text', cursor: 'pointer' };

export const TABLE_ROW_SPAN = { userSelect: 'text', cursor: 'text' };

export const OUTER_CONTAINER = { height: '100%', width: '100%', flex: 1, position: 'relative' };

export const TABLE_VIRTUOSO = {
  border: 'none',
  background: '#FFFFFF',
  overflow: 'auto',
  borderRadius: '4px',
};

export const NO_DATA_MESSAGE = {
  position: 'absolute',
  top: 'calc(50% + 11px)',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  pointerEvents: 'none',
};

export const TABLE_ROW_COLLAPSIBLE_CONTENT = {
  border: 'none',
  padding: '0px',
  margin: '0px',
  minHeight: '0px',
  height: '0px',
  cursor: 'auto',
  backgroundColor: 'transparent',
};

export const TABLE_CELL_COLLAPSIBLE_CONTENT = (openCollapsibleContent: boolean) => {
  return {
    padding: '0px',
    margin: '0px',
    minHeight: '0px',
    height: '0px',
    cursor: 'auto',
    backgroundColor: 'transparent',
    border: openCollapsibleContent ? 'auto' : 'none',
  };
};

export const TABLE_BACKDROP_LOADER = { position: 'absolute' };
