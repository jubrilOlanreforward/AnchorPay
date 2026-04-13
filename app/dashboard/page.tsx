'use client';
import React, { useState } from 'react'
import PromoCarousel from '@/components/dashboard/PromoCarousel';
import { EyeIcon, DoubleArrowIcon, AddBvnIcon, AddNinIcon, AddAddressIcon, AddCardIcon, ChevronIcon } from '@/components/svg';
import { ApplyLoanModal } from '@/components/loans/apply-loan-modal';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';

export default function Dashboard() {

    const [onboardingProgress, setOnboardingProgress] = useState(true);

    return (
        <React.Fragment>
            {/* Main Content Area */}
            <div className='flex flex-row gap-6 mx-10 flex-1 mt-4 relative font-poppins'>

                {/* LEFT COLUMN (~65%) */}
                <div className='flex flex-col gap-6 w-[65%]'>

                    {/* Top row of left column (2 cards) */}
                    <div className="grid grid-cols-2 gap-6 h-[190px]">
                        {/* Loan Balance Card */}
                        <div className='w-full h-full flex flex-col justify-between rounded-3xl p-5 text-white shadow-sm relative overflow-hidden'
                            style={{
                                background: 'linear-gradient(110deg, #4185fe 0%, #175ce0 100%)'
                            }}>
                            {/* Soft wavy overlay pattern */}
                            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/wave.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            
                            <div className='flex flex-col gap-1 z-10'>
                                <p className='text-[13px] text-blue-50 font-medium'>Loan Balance</p>
                                <div className='flex gap-4 items-center'>
                                    <h1 className='text-[34px] font-bold tracking-tight'>0.00</h1>
                                    <span className="cursor-pointer opacity-80 hover:opacity-100"><EyeIcon /></span>
                                </div>
                            </div>

                            <div className='flex items-center justify-between px-3 py-2 bg-white/20 backdrop-blur-sm w-full rounded-xl z-10' >
                                <div className='flex flex-col'>
                                    <p className='text-[10px] text-blue-50 font-medium'>Linked Bank Account</p>
                                    <p className='text-[14px] font-semibold text-white'>0154252686</p>
                                </div>
                                <div className="bg-white flex items-center justify-center rounded-lg px-3 py-1 shadow-sm">
                                    <p className="text-[#1f7aea] text-[11px] font-bold">Sterling Bank</p>
                                </div>
                            </div>
                        </div>

                        {/* Apply For Loan Box */}
                        <div className='bg-[#F7F8F9] w-full rounded-3xl flex items-center justify-center h-full border border-gray-100'>
                            <ApplyLoanModal>
                                <button className='bg-[#1F7AEA] hover:bg-[#1860bb] text-white rounded-full flex items-center justify-center gap-2 px-6 py-3 shadow-md transition-all hover:scale-105'>
                                    <span className="text-[18px] leading-none mb-0.5">+</span>
                                    <span className="font-semibold text-[14px]">Apply for a loan</span>
                                </button>
                            </ApplyLoanModal>
                        </div>
                    </div>

                    {/* Bottom row of left column (Recent Loans) */}
                    <div className='bg-white rounded-3xl p-6 flex flex-col border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1 min-h-[400px]'>
                        <h3 className='text-[15px] text-gray-400 font-semibold mb-10'>Recent Loan</h3>

                        <div className='flex flex-col items-center justify-center gap-3 text-center my-auto relative'>
                            <div className='w-20 h-20 bg-[#ECF4FD] rounded-full flex items-center justify-center mb-2'>
                                <svg className='w-8 h-8 text-[#1F7AEA]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <circle cx='8' cy='8' r='1.5' fill='currentColor' />
                                    <circle cx='8' cy='14' r='1.5' fill='currentColor' />
                                    <circle cx='14' cy='8' r='1.5' fill='currentColor' />
                                    <circle cx='14' cy='14' r='1.5' fill='currentColor' />
                                </svg>
                            </div>
                            <h4 className='text-[18px] font-bold text-[#181818]'>There are no transaction yet</h4>
                            <p className='text-[13px] text-gray-500 max-w-[280px] leading-relaxed mb-3'>You have no active loans on your account. Tap the button below to apply for a loan.</p>
                            <Link href="/dashboard/loans" className='bg-[#1F7AEA] hover:bg-[#1860bb] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full shadow-sm'>
                                Apply for a loan
                            </Link>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN (~35%) */}
                <div className="flex flex-col gap-6 w-[35%] relative">

                    {/* Promo Carousel */}
                    <PromoCarousel />

                    {/* Floater Overlays Right Column & overlaps Left visually */}
                    {onboardingProgress ? (
                        <div className='absolute z-40 top-[220px] -left-[120px] right-0 bg-white rounded-3xl p-6 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col max-h-[600px]'>
                            <div className='flex items-start mb-6'>
                                <button type='button' className='w-12 h-12 flex-shrink-0 cursor-pointer pt-1'>
                                    <div style={{ width: 44, height: 44 }}>
                                        <CircularProgressbar
                                            value={14.2}
                                            text={`1/7`}
                                            styles={buildStyles({
                                                pathColor: "#2EBF43",
                                                trailColor: "#DEF7E2",
                                                strokeLinecap: "butt",
                                                textSize: '28px',
                                                textColor: '#181818',
                                            })}
                                        />
                                    </div>
                                </button>
                                <div className="flex ml-4 justify-between w-full items-start">
                                    <div>
                                        <p className='text-[#181818] text-[16px] font-bold leading-tight mb-1 mt-1'>
                                            Update Your Profile
                                        </p>
                                        <p className='text-[11px] text-gray-500 font-medium leading-snug pr-4 max-w-[200px]'>Remove account restrictions and start applying for loans.</p>
                                    </div>
                                    <div className="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors" onClick={() => setOnboardingProgress(false)}>
                                        <DoubleArrowIcon fill="#181818" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1">
                                <p className="text-[13px] font-bold text-[#181818] mb-1">Complete Your KYC</p>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddBvnIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Add & Verify your BVN</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#2AA63C] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddNinIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Add & Verify your NIN</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#2AA63C] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddAddressIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Verify your Address</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#FF9500] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Not Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>

                                <p className="text-[13px] font-bold text-[#181818] mt-3 mb-1">Other To Dos</p>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddCardIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Link Your Debit Card</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#FF9500] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Not Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddCardIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Link Your Bank Account</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#FF9500] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Not Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>

                                <div className="bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-blue-100 rounded-md p-1.5"><AddCardIcon /></div>
                                        <p className="text-[12px] font-semibold text-[#181818]">Set up Transaction PIN</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-[#FF9500] rounded-full px-3 py-1 mt-0.5 text-white text-[9px] font-bold tracking-wider">Not Done</span>
                                        <div className='rotate-270 transform'><ChevronIcon fill="#9599A1" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute z-40 right-0 bottom-4 cursor-pointer w-fit bg-[#2AA63C] hover:bg-[#238c32] shadow-[0px_8px_30px_rgba(0,0,0,0.15)] transition-all rounded-[24px] px-6 py-4 flex items-center justify-between gap-4" onClick={() => setOnboardingProgress(true)}>
                            <div className='w-10 h-10 flex-shrink-0 bg-white rounded-full p-0.5'>
                                <CircularProgressbar
                                    value={14.2}
                                    text={`1/7`}
                                    styles={buildStyles({
                                        pathColor: "#FFAE43",
                                        trailColor: "#DEF7E2",
                                        strokeLinecap: "butt",
                                        textSize: '28px',
                                        textColor: '#181818',
                                    })}
                                />
                            </div>
                            <p className="text-white font-poppins font-bold text-[14px] whitespace-nowrap pt-1">Update your Profile</p>
                            <div className='rotate-180 transform bg-white/20 rounded-full p-1'>
                                <DoubleArrowIcon fill={'#ffffff'} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}
