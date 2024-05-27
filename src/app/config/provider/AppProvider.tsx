'use client';
import Loading from '@/app/components/loading/loading';
import { deleteCookie, getCookie, hasCookie } from 'cookies-next';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import theme from '@/app/config/theme';
import { ThemeProvider } from '@mui/material';
import useMyStore from '@/app/state-management/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from '@/app/components/toast/CustomToast';
const AppProvider = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading?: any;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const token: { password: string } = hasCookie('token')
    ? JSON?.parse(`${getCookie('token')}`)
    : '';
  const {
    action: { setIsDesktop },
  } = useMyStore((state) => state.cacheSlice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function updateSize() {
    setIsDesktop(window.innerWidth <= 768 ? false : true);
  }
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [router, updateSize]);

  const queryClientMutualOptions: any = {
    retry(failureCount: number, error: any) {
      if (failureCount === 0 && error?.response?.status === 401) {
        return true;
      } else if (failureCount > 0 && error?.response?.status === 401) {
        localStorage.clear();
        deleteCookie('user');
        router.replace('/login');
        return false;
      }
    },
    retryDelay: 1200,
    onError(error: any, variables: any, context: any) {
      CustomToast({ type: 'error', message: 'errror' });
    },
    onSuccess(data: any, variables: any, context: any) {
      CustomToast({ type: 'success', message: 'success' });
    },
  };
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            ...queryClientMutualOptions,
          },
          queries: {
            ...queryClientMutualOptions,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  if (process.env.NODE_ENV === 'production') {
    process.env.NODE_ENV;
  }
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [pathName]);
  useEffect(() => {
    if (!token?.password && pathName !== ('/' || '/login')) {
      router.push('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, token]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer autoClose={2000} />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      )}
    </div>
  );
};

export default AppProvider;
