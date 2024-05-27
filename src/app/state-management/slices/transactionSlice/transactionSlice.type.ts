export type ITransactionSlice = {
  transactionSlice: {
    state: {
      depositRequestModal: { isShow: boolean; rowData: any };
      transactionEditModal: { isShow: boolean; rowData: any };
      searchData: {
        created_at?: string;
        mobile_number?: string | number;
        name?: string;
        national_code?: string | number;
        page?: number | string;
        per_page?: number | string;
        sort?: string | number;
        direction?: string | number;
        started_at?: string | undefined;
        ended_at?: string | undefined;
      };
    };
    action: {
      setDepositRequestModal: (_?: object) => void;
      setTransactionEditModal: (_: object) => void;
      setSearchData: ({
        created_at,
        mobile_number,
        name,
        national_code,
        page,
        per_page,
        sort,
        direction,
        started_at,
        ended_at,
      }: {
        created_at?: string;
        mobile_number?: string | number;
        name?: string;
        national_code?: string | number;
        page?: number | string;
        per_page?: number | string;
        sort?: string | number;
        direction?: string | number;
        started_at?: string | undefined;
        ended_at?: string | undefined;
      }) => void;
    };
  };
};
