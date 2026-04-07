"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoImage from "@/public/Logo 2.png";
import Menu from "@/public/icons/menu.svg";
import Link from "next/link";
import { CloseIcon } from "@/components/svg";

const navItems = [
  { label: "Loans", href: "#" },
  { label: "Savings", href: "#" },
  { label: "P2P", href: "#" },
  { label: "BNPL", href: "#" },
  { label: "FAQ", href: "#" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-white to-transparent backdrop-blur-lg'>
      <nav className='max-w-7xl flex items-center justify-between p-6 lg:px-8'>
        {/* Logo */}
        <div className='flex lg:flex-1'>
          <Link href='#' className='-m-1.5 p-1.5'>
            <Image src={logoImage} alt='Logo' className='h-7 w-auto px-5' />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button onClick={() => setIsOpen(true)} className='p-2.5 text-gray-700'>
            <Image src={Menu} alt='menu' />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex lg:gap-x-12'>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className='text-sm font-semibold text-gray-900'>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-3'>
          <Link href='/auth/get-started'>
            <Button className='text-white bg-button-primary px-6 rounded-sm'>Get Started</Button>
          </Link>
          <Link href='/auth/login'>
            <Button className='bg-accent text-gray-900 px-6'>Log in</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 bg-white p-6 lg:hidden h-max min-h-full'>
          <div className='flex items-center  justify-between'>
            <Image src={logoImage} alt='Logo' className='h-7 w-auto' />
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className='mt-6 space-y-4'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='block text-base font-semibold text-gray-900'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className='mt-6 space-y-4'>
            <Link
              href='/auth/login'
              className='block bg-light-primary text-primary text-center py-2 rounded-lg'
            >
              Log in
            </Link>
            <Link
              href='/auth/get-started'
              className='block bg-button-primary text-white text-center py-2 rounded-lg'
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
