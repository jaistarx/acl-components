import { editLookupData, fetchLookupData } from '@/redux/lookup';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import { AclButton, AclInput, AclModal, useAclSnackbar } from '@acl/ui';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import LookupActionModalStyles from './lookup-action-modal.module.css';
import { LookupActionModalProps } from './lookup-action-modal.type';

const LookupActionModal = (props: LookupActionModalProps) => {
  const { modalName, openModal, setOpenModal, lookupName, lookupValue, originalValues } = props;
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useAclSnackbar();
  const [inputValue, setInputValue] = useState<string>('');
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  const handleSaveOrEdit = async () => {
    if (!originalValues) return;

    try {
      setShowBackdrop(true);

      if (modalName === 'Edit') {
        const measureYear = format(new Date(), 'dd-MMM-yyyy');
        const changeValues = { ...originalValues, lookupValue: inputValue, measureYear };
        await dispatch(editLookupData(changeValues)).unwrap();
        await dispatch(fetchLookupData({ measureYear: 2024 })).unwrap();
        enqueueSnackbar(
          <div>
            Edit <b>{lookupName}</b> successful!
          </div>,
          { variant: 'success' },
        );
        setOpenModal(false);
      }
    } catch (error) {
      enqueueSnackbar(
        <div>
          Edit <b>{lookupName}</b> failed!
          <br />
          {(error as Error).message}
        </div>,
        { variant: 'error' },
      );
    } finally {
      setShowBackdrop(false);
    }
  };

  useEffect(() => {
    setInputValue(lookupValue ?? '');
  }, [lookupValue]);

  return (
    <>
      <AclModal id="add-or-edit-modal" openModal={openModal} closeIconComponent={<></>}>
        <div className={LookupActionModalStyles['outer-container']}>
          <span className={LookupActionModalStyles['lookup-name-header']}>{modalName + ' ' + lookupName}</span>
          <div>
            <div>
              <span>Lookup Value</span>
            </div>
            <div>
              <AclInput fullWidth value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            </div>
          </div>
          <div className={LookupActionModalStyles['button-container']}>
            <AclButton variant="outlined" onClick={() => setOpenModal(false)}>
              Cancel
            </AclButton>
            <AclButton onClick={handleSaveOrEdit} disabled={showBackdrop}>
              Save
            </AclButton>
          </div>
        </div>
      </AclModal>
    </>
  );
};

export default LookupActionModal;
