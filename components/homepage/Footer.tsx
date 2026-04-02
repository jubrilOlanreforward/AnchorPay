"use client";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  FooterImg,
  FooterWave2,
  AngleRight,
} from "../svg";
import { Logo } from "../ui/shared/Logo";
const Footer = () => {
  return (
    <footer className='w-full bg-primary text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 md:px-14 py-14'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex w-full flex-1 flex-col gap-8 items-start'>
            <h2 className='text-2xl font-bold tracking-wide h-7 w-auto'>
              <Logo />
            </h2>
            <div className='flex items-center gap-3'>
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                <FacebookIcon />
              </span>
              <span className='flex h-8 w-8 items-center p-2 justify-center rounded-full bg-white/20'>
                <TwitterIcon />
              </span>
              <span className='flex h-8 w-8 items-center p-2 justify-center rounded-full bg-white/20'>
                <InstagramIcon />
              </span>
              <span className='flex h-8 w-8 items-center p-2 justify-center rounded-full bg-white/20'>
                <YoutubeIcon />
              </span>
            </div>
            <p className='text-sm text-white/90'>© 2024 All rights reserved</p>
          </div>
          <div className='flex flex-3 flex-wrap gap-5  w-full justify-between'>
            <div>
              <h3 className='text-lg font-semibold mb-3'>Product</h3>
              <FooterWave2 />
              <ul className='space-y-2  text-white/90 mt-2 text-base'>
                <li className='flex items-center'>
                  <AngleRight />
                  Loan Marketplace
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  P2P Lending
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  BNPL
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  Savings
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-3'>Company</h3>
              <FooterWave2 />
              <ul className='space-y-2 text-base text-white/90 mt-2'>
                <li className='flex items-center'>
                  <AngleRight />
                  About Us
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  Career
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  FAQ
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-3'>Contact</h3>
              <FooterWave2 />
              <ul className='space-y-2 text-base text-white/90 mt-2'>
                <li className='flex items-center'>
                  <AngleRight /> Stallion Plaza, 36 Marina Road, Lagos
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  info@booster.com
                </li>
                <li className='flex items-center'>
                  <AngleRight />
                  +91-585-656-858
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterImg />
    </footer>
  );
};

export default Footer;
