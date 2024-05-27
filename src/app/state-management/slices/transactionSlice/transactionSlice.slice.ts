import { produce } from 'immer';
import { StateCreator } from 'zustand';
import { ITransactionSlice } from './transactionSlice.type';

const transactionSlice: StateCreator<
  ITransactionSlice,
  [['zustand/devtools', never]]
> = (set) => ({
  transactionSlice: {
    state: {
      transactionEditModal: { isShow: false, rowData: '' },
      depositRequestModal: { isShow: false, rowData: '' },
      searchData: {
        created_at: '',
        mobile_number: '',
        name: '',
        national_code: '',
        started_at: '',
        ended_at: '',
      },
    },
    action: {
      setTransactionEditModal: (payload: any) => {
        set(
          produce((state: any) => {
            state.transactionSlice.state.transactionEditModal = payload;
          }),
          false,
          'setTransactionEditModal'
        );
      },
      setDepositRequestModal: (payload: any) => {
        set(
          produce((state: any) => {
            state.transactionSlice.state.depositRequestModal = payload;
          }),
          false,
          'setDepositRequestModal'
        );
      },
      setSearchData: (payload) => {
        set(
          produce((state: any) => {
            state.transactionSlice.state.searchData = payload;
          }),
          false,
          'setSearchData'
        );
      },
    },
  },
});

export default transactionSlice;
