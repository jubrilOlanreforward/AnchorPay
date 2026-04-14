"use client"

import { Button } from "@/components/ui/button";
import React, { Suspense, useState } from "react";
import ApplyLoanFlow from "./ApplyLoanFlow";

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
          <Button className="bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full px-6 font-semibold shadow-md">
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
          <div className="relative bg-white sm:max-w-md w-106.25 max-h-[90vh] overflow-y-auto p-8 rounded-[32px] z-50 shadow-2xl animate-in zoom-in-95 duration-200">
            <Suspense fallback={<div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary_one_600"></div></div>}>
              <ApplyLoanFlow isModal={true} onClose={() => setIsOpen(false)} />
            </Suspense>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
