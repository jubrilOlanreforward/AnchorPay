'use client';
import React, { useState } from 'react'
import NotificationIcon from '@/components/SVGs/notificationIcon';
import UserAvatarIcon from '@/components/SVGs/userAvatar';
import ChevronIcon from '@/components/SVGs/chevronDown';
import EyeIcon from '@/components/SVGs/eyeIcon';
import HouseMoneyIcon from '@/components/SVGs/houseMoneyIcon';
import DoubleArrowIcon from '@/components/SVGs/doubleArrowUp';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AddBvnIcon from '@/components/SVGs/addBvn';
import { ArrowRight } from 'lucide-react';
import AddNinIcon from '@/components/SVGs/addNin';
import AddAddressIcon from '@/components/SVGs/addAddress';
import AddCardIcon from '@/components/SVGs/addCard';

export default function Dashboard() {

    const [onboardingProgress, setOnboardingProgress] = useState(true);


    return (
        <>
            <section className="main bg-[#f4f4f4] h-screen w-full  flex flex-col m-0 ml-56">
                <div className=' flex items-center justify-between bg-[#ffffff] rounded-sm flex-row m-5 h-14.75 px-4 py-2 '>
                    <p className='font-semibold text-[28px] text-[#181818]'>Dashboard</p>
                    <div className='flex justify-between items-center'>
                        <div className='cursor-pointer'>
                            <NotificationIcon />

                        </div>
                        <hr className='mx-4 h-6 border-l border-gray-300' />
                        <div className='cursor-pointer flex items-center gap-4'>
                            <UserAvatarIcon />
                            <p className='text-[#323539] text-xs font-semibold'>Hi, Chiamaka Uche</p>
                            <ChevronIcon />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mx-5 flex-1'>
                    <div className='flex gap-3'>

                        <div className='loan-card w-[37%] h-49.75 flex flex-col gap-10.5 rounded-[20px] bg-[#1f7aea] py-6 px-2.5 text-white'>
                            <div className='flex flex-col gap-2 items'>
                                <p className='text-sm'>Loan Balance</p>
                                <div className='flex gap-4 items-center'>
                                    <h1 className='text-[28px] font-semibold'>0.00</h1>
                                    <EyeIcon />
                                </div>


                            </div>
                            <div className='flex items-center justify-between p-4 bg-white/20 w-full h-12.25 rounded-sm' >
                                <div className='flex flex-col p-1'>
                                    <p className='text-[12px] '>Linked Bank Account</p>
                                    <p className='text-[16px] text-[#ffffff]'>0154252686</p>

                                </div>
                                <div className="bg-[#ffffff] flex items-center justify-center rounded-lg p-2 w-fit h-6">
                                    <p className="text-primary_one_600 text-xs">Sterling Bank</p>
                                </div>
                            </div>
                        </div>
                        <div className='apply-button bg-[#E5E5E7] flex justify-center w-[37%] rounded-[20px] items-center h-49.75'>
                            <button className='rounded-[84px] flex items-center justify-between bg-[#1F7AEA] h-[52px] w-[176px] px-6 text-white'>
                                <span>+</span>    <p>Apply for a loan</p>
                            </button>
                        </div>
                        <div className="tall-grid relative bg-[#C7DEFA] overflow-hidden h-[calc(100vh-150px)] w-[25%] rounded-lg p-6">

                        {/* Content */}
                        <div className="relative z-1 text-center">
                            <h2 className="text-xl font-bold text-[#0B2B4C]">
                                Need to pay rent urgently?
                            </h2>
                            <p className="text-sm mt-2 text-[#0B2B4C]">
                                Booster gives you access...
                            </p>

                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                                Apply for Loan
                            </button>
                        </div>

                        {/* Curved white background */}
                        <div className="absolute flex items-center justify-center bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[200px] bg-white rounded-t-[50%]" >
                            <HouseMoneyIcon />
                        </div>

                    </div>
                    </div>

                    <div className='recent-loan bg-white rounded-lg p-6 flex-1 flex flex-col items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center'>
                                <svg className='w-10 h-10 text-blue-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <circle cx='8' cy='8' r='1.5' fill='currentColor'/>
                                    <circle cx='8' cy='14' r='1.5' fill='currentColor'/>
                                    <circle cx='14' cy='8' r='1.5' fill='currentColor'/>
                                    <circle cx='14' cy='14' r='1.5' fill='currentColor'/>
                                </svg>
                            </div>
                            <h3 className='text-[18px] font-semibold text-[#181818]'>There are no transaction yet</h3>
                            <p className='text-[14px] text-[#323539] text-center'>You have no active loans on your account. Tap the button below to apply for a loan.</p>
                            <button className='mt-4 bg-[#1F7AEA] text-white px-6 py-2 rounded-lg'>Apply for a loan</button>
                        </div>
                    </div>

                </div>
            </section>
            {onboardingProgress ?
                <div className='onboarding-prompt overflow-scroll z-5 absolute w-124.5 h-120 right-0 bottom-0 bg-[white] rounded-[24px] p-8.5'>
                    <div className='flex'>
                        <button type='button' className='w-11 h-11 cursor-pointer' >
                            <CircularProgressbar
                                value={7}
                                text={`1/7`}
                                styles={buildStyles({
                                    pathColor: "#2EBF43",
                                    trailColor: "#DEF7E2",
                                    strokeLinecap: "butt",
                                    textSize: '20px',
                                    textColor: '#181818',
                                })}
                            />
                        </button>
                        <div className="flex ml-8 justify-between gap-24 items-start">
                            <div className="max-w-59.75">
                                <p className='text-gray_950 text-[18px]'>
                                    Update Your Profile
                                </p>
                                <p className='texttext-sm text-[#323539] '>Remove account restrictions and start applying for loans.</p>
                            </div>
                            <div onClick={() => setOnboardingProgress(false)}>
                                <DoubleArrowIcon />
                            </div>


                        </div>


                    </div>
                    <p className="pt-8 text-[16px] font-semibold font-poppins">
                        Complete Your KYC
                    </p>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddBvnIcon />
                            <p className="ml-4 text-[14px]">Add & Verify your BVN</p>
                        </div>
                        <div className=" ml-30 bg-[#2AA63C] rounded-full p-1 h-6 w-12.5">
                            <p className='text-white text-center text-[10px] font-poppins'>Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddNinIcon />
                            <p className="ml-4 text-[14px]">Add & Verify your NIN</p>
                        </div>
                        <div className=" ml-30 bg-[#2AA63C] rounded-full p-1 h-6 w-12.5">
                            <p className='text-white text-center text-[10px] font-poppins'>Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddAddressIcon />
                            <p className="ml-4 text-[14px]">Verify your Address</p>
                        </div>
                        <div className=" ml-30 bg-[#FFAE43] rounded-full p-1 h-6 w-17.25">
                            <p className='text-white text-center text-[10px] font-poppins'>Not Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                    <p className="pt-8 text-[16px] font-semibold font-poppins">
                        Other To Dos
                    </p>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddCardIcon />
                            <p className="ml-4 text-[14px]">Link Your Debit Card</p>
                        </div>
                        <div className=" ml-30 bg-[#FFAE43] rounded-full p-1 h-6 w-17.25">
                            <p className='text-white text-center text-[10px] font-poppins'>Not Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddCardIcon />
                            <p className="ml-4 text-[14px]">Link Your Bank Account</p>
                        </div>
                        <div className=" ml-30 bg-[#FFAE43] rounded-full p-1 h-6 w-17.25">
                            <p className='text-white text-center text-[10px] font-poppins'>Not Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                    <div className="mt-4 bg-[#ECF4FD] w-full flex p-4  items-center rounded-sm">
                        <div className='flex items-center'>
                            <AddCardIcon />
                            <p className="ml-4 text-[14px]">Set up Transaction PIN</p>
                        </div>
                        <div className=" ml-30 bg-[#FFAE43] rounded-full p-1 h-6 w-17.25">
                            <p className='text-white text-center text-[10px] font-poppins'>Not Done</p>
                        </div>
                        <div className='ml-2 rotate-270'>
                            <ChevronIcon fill="#9599A1" />

                        </div>

                    </div>
                </div>
                :
                <div className="update-profile flex items-center justify-between bg-[#2AA63C] z-5 absolute w-124.5 h-fit right-0 bottom-0 rounded-[24px] p-8.5">
                    <button type='button' className='w-11 h-11 cursor-pointer' >
                        <CircularProgressbar
                            value={7}
                            text={`1/7`}
                            styles={buildStyles({
                                pathColor: "#FFAE43",
                                trailColor: "#DEF7E2",
                                strokeLinecap: "butt",
                                textSize: '20px',
                                textColor: '#181818',
                            })}
                        />
                    </button>

                    <p className="text-white font-poppins font-semibold text-[18px]">Update your Profile</p>
                    <div className='rotate-180' onClick={() => setOnboardingProgress(true)}>
                        <DoubleArrowIcon fill={'#ffffff'} />
                    </div>

                </div>}
        </>
    )
}
