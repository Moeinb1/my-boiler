'use client';

import { useState } from 'react';
import MyNavbar from '../components/navbar/CustomNavbar';
import MyDrawer from '../components/sidebar/CustomSidebar';
import useMyStore from '../state-management/store';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const {
    state: { isDesktop },
  } = useMyStore((state) => state.cacheSlice);
  return (
    <section className="flex flex-col w-full ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <MyNavbar />

      <div className="flex w-full ">
        {isDesktop && <MyDrawer />}

        <div className=" !h-screen bg-red-100 py-16 px-2 w-full  ">
          {children}
        </div>
      </div>
    </section>
  );
}
