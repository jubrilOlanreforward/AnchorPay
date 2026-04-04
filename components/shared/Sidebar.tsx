'use client';
import DashboardIcon from '@/components/SVGs/dashboardIcon'
import SettingsIcon from '@/components/SVGs/settingsIcon'
import StoreIcon from '@/components/SVGs/storeIcon'
import LoansIcon from '@/components/SVGs/loansIcon'
import React from 'react'
import { usePathname } from 'next/navigation'
import LogoIcon from '@/components/SVGs/logo';

export default function Sidebar() {
    const pathname = usePathname()

    const isActive = (path: string) => { return pathname === path }

    return (
        <div className="sidebar w-56 h-screen m-0 bg-primary_one_600 py-10 px-5 fixed flex flex-col gap-13.75">
            <LogoIcon />
            <ul className='flex flex-col gap-[7px]'>
                <li className="group cursor-pointer w-full h-[48px] hover:bg-white hover:text-[#1F7AEA] rounded-sm flex items-center gap-2 px-4 text-white">
                    <a href="/dashboard" className="flex items-center gap-[14px] w-full">

                        {/* ICON SWITCH */}
                        <span className="block group-hover:hidden">
                            <DashboardIcon fill="#ffffff" />
                        </span>

                        <span className="hidden group-hover:block">
                            <DashboardIcon fill="#1F7AEA" />
                        </span>

                        <p>Dashboard</p>
                    </a>
                </li>
                <li className="group cursor-pointer w-full h-[48px] hover:bg-white hover:text-[#1F7AEA] rounded-sm flex items-center gap-2 px-4 text-white">
                    <a href="/loans" className="flex items-center gap-[14px] w-full">

                        {/* ICON SWITCH */}
                        <span className="block group-hover:hidden">
                            <LoansIcon fill="#ffffff" />
                        </span>

                        <span className="hidden group-hover:block">
                            <LoansIcon fill="#1F7AEA" />
                        </span>

                        <p>Loans</p>
                    </a>
                </li>
                <li className="group cursor-pointer w-full h-[48px] hover:bg-white hover:text-[#1F7AEA] rounded-sm flex items-center gap-2 px-4 text-white">
                    <a href="/store" className="flex items-center gap-[14px] w-full">

                        {/* ICON SWITCH */}
                        <span className="block group-hover:hidden">
                            <StoreIcon fill="#ffffff" />
                        </span>

                        <span className="hidden group-hover:block">
                            <StoreIcon fill="#1F7AEA" />
                        </span>

                        <p>Store</p>
                    </a>
                </li>
                <li className="group cursor-pointer w-full h-[48px] hover:bg-white hover:text-[#1F7AEA] rounded-sm flex items-center gap-2 px-4 text-white">
                    <a href="/settings" className="flex items-center gap-[14px] w-full">

                        {/* ICON SWITCH */}
                        <span className="block group-hover:hidden">
                            <SettingsIcon fill="#ffffff" />
                        </span>

                        <span className="hidden group-hover:block">
                            <SettingsIcon fill="#1F7AEA" />
                        </span>

                        <p>Settings</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
