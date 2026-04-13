"use client";
import { DashboardIcon, SettingsIcon, StoreIcon, LoansIcon, LogoIcon } from "@/components/svg";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <div className="sidebar w-56 h-screen m-0 bg-primary_one_600 py-10 px-5 fixed flex flex-col gap-13.75">
            <LogoIcon />
            <ul className="flex flex-col gap-2">
                {/* DASHBOARD */}
                <li
                    className={`group cursor-pointer w-full h-[48px] rounded-lg flex items-center relative transition-all ${isActive("/dashboard")
                        ? "bg-white text-[#1F7AEA] shadow-sm"
                        : "text-white hover:bg-white/10 hover:text-white"
                        }`}
                >
                    {isActive("/dashboard") && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#FFAE43] rounded-r-md"></div>
                    )}
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-[14px] w-full px-4"
                    >
                        <span className={isActive("/dashboard") ? "hidden" : "block"}>
                            <DashboardIcon fill="#ffffff" />
                        </span>
                        <span className={isActive("/dashboard") ? "block" : "hidden"}>
                            <DashboardIcon fill="#1F7AEA" />
                        </span>
                        <p className="font-semibold text-[15px]">Dashboard</p>
                    </Link>
                </li>

                {/* LOANS */}
                <li
                    className={`group cursor-pointer w-full h-[48px] rounded-lg flex items-center relative transition-all ${isActive("/loans")
                        ? "bg-white text-[#1F7AEA] shadow-sm"
                        : "text-white hover:bg-white/10 hover:text-white"
                        }`}
                >
                    {isActive("/loans") && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#FFAE43] rounded-r-md"></div>
                    )}
                    <Link
                        href="/loans"
                        className="flex items-center gap-[14px] w-full px-4"
                    >
                        <span className={isActive("/loans") ? "hidden" : "block"}>
                            <LoansIcon fill="#ffffff" />
                        </span>
                        <span className={isActive("/loans") ? "block" : "hidden"}>
                            <LoansIcon fill="#1F7AEA" />
                        </span>
                        <p className="font-semibold text-[15px]">Loans</p>
                    </Link>
                </li>

                {/* STORE */}
                <li
                    className={`group cursor-pointer w-full h-[48px] rounded-lg flex items-center relative transition-all ${isActive("/store")
                        ? "bg-white text-[#1F7AEA] shadow-sm"
                        : "text-white hover:bg-white/10 hover:text-white"
                        }`}
                >
                    {isActive("/store") && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#FFAE43] rounded-r-md"></div>
                    )}
                    <Link
                        href="/store"
                        className="flex items-center gap-[14px] w-full px-4"
                    >
                        <span className={isActive("/store") ? "hidden" : "block"}>
                            <StoreIcon fill="#ffffff" />
                        </span>
                        <span className={isActive("/store") ? "block" : "hidden"}>
                            <StoreIcon fill="#1F7AEA" />
                        </span>
                        <p className="font-semibold text-[15px]">Store</p>
                    </Link>
                </li>

                {/* SETTINGS */}
                <li
                    className={`group cursor-pointer w-full h-[48px] rounded-lg flex items-center relative transition-all ${isActive("/settings")
                        ? "bg-white text-[#1F7AEA] shadow-sm"
                        : "text-white hover:bg-white/10 hover:text-white"
                        }`}
                >
                    {isActive("/settings") && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#FFAE43] rounded-r-md"></div>
                    )}
                    <Link
                        href="/settings"
                        className="flex items-center gap-[14px] w-full px-4"
                    >
                        <span
                            className={isActive("/settings") ? "hidden" : "block"}
                        >
                            <SettingsIcon fill="#ffffff" />
                        </span>
                        <span
                            className={isActive("/settings") ? "block" : "hidden"}
                        >
                            <SettingsIcon fill="#1F7AEA" />
                        </span>
                        <p className="font-semibold text-[15px]">Settings</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
