import { AclButton, AclList, AclListItemButton, AclListItemText } from '@acl/ui';
import React, { useState } from 'react';
import LookupActionModal from '../product-admin/lookup-action-modal';
import ProductAdminSidePanelStyles from './product-admin-side-panel.module.css';
import { ProductAdminSidePanelProps } from './product-admin-side-panel.type';

const ProductAdminSidePanel = (props: ProductAdminSidePanelProps) => {
  const { categories, onCategoryClick, selectedCategory } = props;
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  return (
    <>
      <div className={ProductAdminSidePanelStyles['side-panel']}>
        <AclList className="">
          {categories.map((text, index) => (
            <AclListItemButton
              className={`${ProductAdminSidePanelStyles['side-panel-list']} ${
                selectedCategory === text ? ProductAdminSidePanelStyles['selected'] : ''
              }`}
              key={index}
              onClick={() => onCategoryClick(text)}
            >
              <AclListItemText primary={text} />
            </AclListItemButton>
          ))}
          <AclButton
            variant="outlined"
            onClick={() => setOpenAddModal(true)}
            className={ProductAdminSidePanelStyles['side-panel-list-button']}
          >
            + Add Category
          </AclButton>
        </AclList>
      </div>
      <LookupActionModal
        modalName="Add"
        openModal={openAddModal}
        setOpenModal={setOpenAddModal}
        lookupName="Category"
      />
    </>
  );
};

export default ProductAdminSidePanel;
