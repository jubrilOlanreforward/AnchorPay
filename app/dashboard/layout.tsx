import React from 'react'
import Sidebar from "@/components/shared/Sidebar";
import DashboardHeader from '@/components/dashboard/header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-screen overflow-hidden m-0 flex flex-row bg-[#FAFAFA] font-poppins'>
      <Sidebar />
      <section className="main flex-1 h-[100vh] flex flex-col m-0 ml-56 border-l border-gray-100 relative">
          <DashboardHeader />
          <div className="flex-1 w-full overflow-y-auto overflow-x-hidden relative h-full pb-8">
            {children}
          </div>
      </section>
    </div>
  )
}
