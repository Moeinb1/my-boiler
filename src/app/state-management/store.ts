import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ITransactionSlice, transactionSlice } from './slices/transactionSlice';
import { ICacheSlice, cacheSlice } from './slices/cacheSlice';

type IMyStore = ICacheSlice & ITransactionSlice;

const useMyStore = create<IMyStore>()(
  devtools((...a) => ({
    ...transactionSlice(...a),
    ...cacheSlice(...a),
  }))
);
export default useMyStore;
