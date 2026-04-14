import React, { useEffect } from "react";
import { LoanStepComponentProps } from "@/lib/constants/loanConstants";
import { BoosterLoader } from "@/components/svg";

const LoanOffersLoading = ({ onNext }: LoanStepComponentProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <div className="mb-10 animate-pulse">
        <BoosterLoader />
      </div>
      
      <p className="text-primary_one_600 font-bold text-[20px] text-center max-w-[240px] leading-tight tracking-tight">
        Checking for loan offers, please wait...
      </p>
    </div>
  );
};

export default LoanOffersLoading;
