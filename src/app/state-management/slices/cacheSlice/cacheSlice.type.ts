interface INotifCount {
  kyc?: number;
  transaction?: boolean;
  order?: boolean;
  crypto?: boolean;
  token?: boolean;
  isDesktop?: boolean;
}
export type ICacheSlice = {
  cacheSlice: {
    state: {
      isDesktop?: boolean;
      enums?: {
        data: any;
        status: {
          appUser: {
            inactive: string;
            kyc_one_pending: string;
            kyc_one_reject: string;
            kyc_one_active: string;
            kyc_two_pending: string;
            kyc_two_reject: string;
            kyc_two_active: string;
            ban: string;
          };
          transaction: {
            rejected: string;
            verified: string;
            failed: string;
            pending: string;
          };
          user: {
            active: string;
            inactive: string;
          };
          order: {
            active: string;
            cancelled: string;
            completed: string;
          };
          market: {
            active: string;
            inactive: string;
          };
          coin: {
            active: string;
            inactive: string;
          };
          bank_account: {
            active: string;
            inactive: string;
            pending: string;
          };
          promotion: {
            active: string;
            inactive: string;
          };
          faq: {
            active: string;
            inactive: string;
          };
          banner: {
            active: string;
            inactive: string;
          };
          app_user_document: {
            pending: string;
            verified: string;
            rejected: string;
          };
        };
        type: {
          banner: {
            internal: string;
            external: string;
          };
          coin: {
            internal: string;
            external: string;
            crypto: string;
            investmen: string;
            commodity: string;
            service: string;
          };
          log: {
            login: string;
            logout: string;
            create: string;
            read: string;
            excel: string;
            update: string;
            delete: string;
          };
          order: {
            buy: string;
            sell: string;
          };
        };
        theme: {
          banner: {
            dark: string;
            light: string;
          };
        };
        device: {
          banner: {
            desktop: string;
            mobile: string;
          };
        };
        position: {
          banner: {
            top: string;
            middle: string;
            bottom: string;
          };
        };
        category: {
          log: {
            auth: string;
            user: string;
            appUser: string;
            role: string;
            permission: string;
            transaction: string;
            order: string;
            coin_management: string;
            transaction_request: string;
            requestOrder: string;
            kyc: string;
            faq: string;
            banner: string;
            promotion: string;
          };
        };
        priority: {
          log: {
            critical: string;
            high: string;
            medium: string;
            low: string;
            nonEssential: string;
          };
        };
      };
      backendRoute?: object | [];
      permission?: object;
      profileData?: any | any[];
      access?: any | any[];
      notifCount?: INotifCount;
      balance?: number | string;
      kycRowDetails?: any;
    };
    action: {
      setCacheDataEnums: (_?: any) => void;
      setCacheDataBackendRoute: (_?: any) => void;
      setCacheDataPermission: (_?: any) => void;
      setCacheDataAccess: (_?: any) => void;
      setCacheDataProfileData: (_?: any) => void;
      setNotifCount: (_?: INotifCount) => void;
      setBalance: (_?: number | string) => void;
      setKycRowDetails: (_?: any) => void;
      setIsDesktop: (_?: boolean) => void;
    };
  };
};
