import React from 'react'
import Sidebar from "@/components/shared/Sidebar";

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-[100vw] m-0 flex flex-row gap-4'>
      <Sidebar />
      {children}
    </div>
  )
}
