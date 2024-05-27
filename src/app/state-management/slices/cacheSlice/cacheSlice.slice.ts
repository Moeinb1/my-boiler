import { produce } from 'immer';
import { StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ICacheSlice } from './cacheSlice.type';

const cacheSlice: StateCreator<
  ICacheSlice,
  [['zustand/devtools', never]],
  any,
  any
> = persist(
  (set) => ({
    cacheSlice: {
      state: {
        kycRowDetails: {},
        enums: {},
        backendRoute: {},
        permission: {},
        profileData: {},
        access: {},
        isDesktop: false,
        notifCount: {
          kyc: undefined,
          transaction: false,
          order: false,
          crypto: false,
          token: false,
        },
        balance: '',
      },
      action: {
        setCacheDataEnums: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.enums = payload;
            }),
            false,
            'setCacheDataEnums'
          );
        },
        setCacheDataBackendRoute: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.backendRoute = payload;
            }),
            false,
            'setCacheDataBackendRoute'
          );
        },

        setCacheDataPermission: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.permission = payload;
            }),
            false,
            'setCacheDataPermission'
          );
        },
        setCacheDataAccess: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.access = payload;
            }),
            false,
            'setCacheDataAccess'
          );
        },

        setCacheDataProfileData: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.profileData = payload;
            }),
            false,
            'setCacheDataProfileData'
          );
        },
        setNotifCount: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.notifCount = payload;
            }),
            false,
            'setNotifCount'
          );
        },
        setBalance: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.balance = payload;
            }),
            false,
            'setBalance'
          );
        },
        setKycRowDetails: (payload: any) => {
          set(
            produce((state: any) => {
              state.cacheSlice.state.kycRowDetails = payload;
            }),
            false,
            'setKycRowDetails'
          );
        },
           setIsDesktop: (payload:any) => {
        set(
          produce((state: any) => {
            state.cacheSlice.state.isDesktop = payload;
          })
        );
      },
      },
    },
  }),
  {
    name: 'hydarate-storage', // name of item in the storage (must be unique)
    version: 0,
    storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
    partialize: (state) => state.cacheSlice.state,
    merge(persistedState: any, currentState: any) {
      if (persistedState?.profileData) {
        currentState.cacheSlice.state.profileData = persistedState.profileData;
      }
      if (persistedState?.access) {
        currentState.cacheSlice.state.access = persistedState.access;
      }
      if (persistedState?.backendRoute) {
        currentState.cacheSlice.state.backendRoute =
          persistedState.backendRoute;
      }
      if (persistedState?.enums) {
        currentState.cacheSlice.state.enums = persistedState.enums;
      }
      if (persistedState?.notifCount) {
        currentState.cacheSlice.state.notifCount = persistedState.notifCount;
      }
      if (persistedState?.balance) {
        currentState.cacheSlice.state.balance = persistedState.balance;
      }
      if (persistedState?.kycRowDetails) {
        currentState.cacheSlice.state.kycRowDetails =
          persistedState.kycRowDetails;
      }
        if (persistedState?.isDesktop) {
        currentState.cacheSlice.state.isDesktop =
          persistedState.isDesktop;
      }
    },
  }
);

export default cacheSlice;
