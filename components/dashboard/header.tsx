'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NotificationIcon from '@/components/SVGs/notificationIcon';
import UserAvatarIcon from '@/components/SVGs/userAvatar';
import ChevronIcon from '@/components/SVGs/chevronDown';

export default function DashboardHeader() {
    const pathname = usePathname();

    // Determine the page title based on the route
    const getPageTitle = () => {
        if (pathname.includes('/loans')) return 'Loans';
        if (pathname.includes('/store')) return 'Store';
        if (pathname.includes('/settings')) return 'Settings';
        return 'Dashboard';
    };

    return (
        <header className='flex items-center justify-between bg-white/60 backdrop-blur-md rounded-sm flex-row mx-6 mt-6 pb-4 pt-2 h-[72px] px-4 sticky top-0 z-10'>
            <p className='font-bold text-[22px] text-[#181818] capitalize'>{getPageTitle()}</p>
            <div className='flex justify-between items-center bg-transparent'>
                <div className='cursor-pointer px-4 relative'>
                    <NotificationIcon />
                    {/* Hardcoded notification dot for active state demo */}
                    <span className="absolute top-0 right-4 w-2 h-2 bg-red-500 rounded-full md:hidden"></span>
                </div>
                <div className='cursor-pointer flex items-center gap-3 pl-4 border-l border-gray-200 ml-2'>
                    <UserAvatarIcon />
                    <p className='text-[#323539] text-xs font-semibold'>Hi, Chiamaka Uche</p>
                    <ChevronIcon />
                </div>
            </div>
        </header>
    );
}
