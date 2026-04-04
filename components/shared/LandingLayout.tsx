'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import Menu from "@/public/icons/menu.svg";
import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-white to-transparent backdrop-blur-lg'>
        <nav
          aria-label='Global'
          className='max-w-7xl flex items-center justify-between p-6 lg:px-8'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image src={logoImage} alt='' className='h-7 w-auto px-5' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Open main menu</span>
              <Image src={Menu} alt='menu' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a href='#' className='text-sm/6 font-semibold text-gray-900'>
              Loans
            </a>
            <a href='#' className='text-sm/6 font-semibold text-gray-900'>
              Savings
            </a>
            <a href='#' className='text-sm/6 font-semibold text-gray-900'>
              P2P
            </a>
            <a href='#' className='text-sm/6 font-semibold text-gray-900'>
              BNPL
            </a>
            <a href='#' className='text-sm/6 font-semibold text-gray-900'>
              FAQ
            </a>
          </div>
          <div className='hidden  lg:flex lg:flex-1 lg:justify-end gap-3'>
            <Button className='text-sm/6 text-white cursor-pointer bg-button-primary px-6 rounded-sm'>
              Get Started
            </Button>
            <Button className='text-sm/6 font-semibold cursor-pointer bg-accent text-gray-900 px-6'>
              Log in
            </Button>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
