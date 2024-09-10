import { LookupItem } from '@/redux/lookup';

export type LookupActionModalProps = {
  openModal: boolean;
  setOpenModal: (event: boolean) => void;
  modalName: string;
  lookupName: string;
  lookupValue?: string;
  originalValues?: LookupItem;
};
