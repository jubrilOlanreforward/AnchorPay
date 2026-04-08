"use client"

import { ApplyLoanModal } from "@/components/loans/apply-loan-modal";
import PromoCarousel from '@/components/dashboard/PromoCarousel';
import HouseMoneyIcon from '@/components/SVGs/houseMoneyIcon';
import React, { useState } from "react";
import Link from 'next/link';

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className='flex flex-row gap-6 mx-10 flex-1 mt-4 relative font-poppins pb-10'>
        
        {/* LEFT COLUMN (~65%) */}
        <div className="flex flex-col gap-6 w-[65%]">
          <div className="flex flex-col md:flex-row gap-6 mb-2 justify-between items-center">
              <div className="flex space-x-1.5 bg-[#f0f4f8] p-1.5 rounded-full self-start w-fit">
                <button 
                  onClick={() => setActiveTab("all")}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === "all" ? "bg-[#1f7aea] text-white shadow-md shadow-blue-500/20" : "text-[#596574] hover:text-[#112d4e]"}`}
                >
                  All loans
                </button>
                <button 
                  onClick={() => setActiveTab("active")}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === "active" ? "bg-[#1f7aea] text-white shadow-md shadow-blue-500/20" : "text-[#596574] hover:text-[#112d4e]"}`}
                >
                  Active loans
                </button>
              </div>
              <div className="flex gap-4">
                <ApplyLoanModal />
              </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100 flex flex-col min-h-[450px]">
              {/* Simple Table Header */}
              <div className="grid grid-cols-5 text-xs font-bold text-gray-400 uppercase tracking-wider pb-4 border-b border-gray-100 px-6">
                <div>Loan Amount</div>
                <div>Interest</div>
                <div>Tenure</div>
                <div>Status</div>
                <div className="text-right">Action</div>
              </div>
              
              {/* Simple Table Content View */}
              <div className="flex flex-col items-center justify-center flex-1 py-12 text-center">
                  <div className='w-20 h-20 bg-[#ECF4FD] rounded-full flex items-center justify-center mb-2'>
                        <svg className='w-8 h-8 text-[#1F7AEA]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <circle cx='8' cy='8' r='1.5' fill='currentColor'/>
                            <circle cx='8' cy='14' r='1.5' fill='currentColor'/>
                            <circle cx='14' cy='8' r='1.5' fill='currentColor'/>
                            <circle cx='14' cy='14' r='1.5' fill='currentColor'/>
                        </svg>
                  </div>
                <h4 className='text-[18px] font-bold text-[#181818] mb-1'>There are no transaction yet</h4>
                <p className="text-[#596574] text-[13px] font-medium max-w-[280px]">
                    {activeTab === "active" ? "You have no active loans on your account. Tap the button below to apply for a loan." : "You have no loan history. Tap the button below to apply for a loan."}
                </p>
                <div className="mt-4">
                  <ApplyLoanModal>
                      <button className='bg-[#1F7AEA] hover:bg-[#1860bb] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full shadow-sm'>
                          Apply for a loan
                      </button>
                  </ApplyLoanModal>
                </div>
              </div>
          </div>
        </div>

        {/* RIGHT COLUMN (~35%) */}
        <div className="flex flex-col gap-6 w-[35%] relative">
            <PromoCarousel />
        </div>
    </div>
  );
}
