"use client"

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import React, { useState } from "react";

interface ApplyLoanModalProps {
  children?: React.ReactNode;
}

export function ApplyLoanModal({ children }: ApplyLoanModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Trigger */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer inline-block">
        {children || (
          <Button className="bg-[#1f7aea] hover:bg-[#1860bb] text-white rounded-full px-6 font-semibold shadow-md">
            Apply for loan
          </Button>
        )}
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-poppins">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Dialog Body */}
          <div className="relative bg-white sm:max-w-md w-[425px] p-8 rounded-[32px] z-50 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight mb-2 text-[#344054]">Apply for loan</h2>
              <p className="text-[13px] text-gray-500 font-medium">Fill in the details correctly.</p>
            </div>

            <div className="grid gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="font-semibold text-[#344054] text-[15px]">Loan Amount</label>
                <div className="relative">
                  <input
                    id="amount"
                    placeholder="N500k-5m"
                    className="w-full rounded-2xl h-[52px] px-4 shadow-sm border border-gray-200 focus:border-[#1f7aea] focus:ring-1 focus:ring-[#1f7aea] bg-[#fafafa] outline-none text-[15px] transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                     <Info className="w-[18px] h-[18px]" />
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="font-semibold text-[#344054] text-[15px]">Reason for loan</label>
                <div className="relative">
                    <select
                      id="reason"
                      className="w-full rounded-2xl h-[52px] px-4 shadow-sm border border-gray-200 focus:border-[#1f7aea] focus:ring-1 focus:ring-[#1f7aea] bg-[#fafafa] outline-none text-[15px] appearance-none transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>Select reason</option>
                      <option value="education">Education</option>
                      <option value="housing">Housing</option>
                      <option value="personal">Personal expenses</option>
                      <option value="investment">Investment</option>
                      <option value="medical">Medical expenses</option>
                      <option value="agriculture">Agriculture</option>
                    </select>
                    {/* Native dropdown chevron wrapper */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#1F7AEA] hover:bg-[#1860bb] text-white rounded-full h-[52px] text-[15px] font-semibold mt-8 shadow-sm transition-colors">
              See Breakdown
            </Button>
            
            {/* Close cross top right */}
            <button 
              className="absolute top-6 right-6 opacity-50 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
