"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectionCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export const SelectionCard = ({
  title,
  description,
  icon,
  selected,
  onClick,
  className = "",
}: SelectionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center justify-between gap-4 ${
        selected
          ? "border-primary_one_600 bg-blue-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300"
      } ${className}`}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className={`p-3 rounded-xl ${selected ? "bg-white" : "bg-gray-100"}`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <p className="font-bold text-[16px] text-[#344054]">{title}</p>
          {description && (
            <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
              {description}
            </p>
          )}
        </div>
      </div>
      {selected ? (
        <div className="shrink-0 w-6 h-6 rounded-full bg-primary_one_600 flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      ) : (
        <div className="shrink-0 w-6 h-6 rounded-full border-2 border-gray-200" />
      )}
    </button>
  );
};

interface LoanInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prefix?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const LoanInput = ({
  label,
  prefix,
  error,
  icon,
  className = "",
  ...props
}: LoanInputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="font-semibold text-[#344054] text-[15px]">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-bold text-[16px]">
            {prefix}
          </div>
        )}
        <input
          {...props}
          className={`w-full rounded-2xl h-[56px] px-4 shadow-sm border transition-all outline-none font-medium text-[16px] ${
            prefix ? "pl-10" : ""
          } ${icon ? "pr-12" : ""} ${
            error
              ? "border-red-500 bg-red-50 focus:border-red-600"
              : "border-gray-200 bg-[#FAFAFA] focus:border-primary_one_600 focus:bg-white"
          } ${className}`}
        />
        {icon && !error && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-[13px] font-medium px-1">{error}</p>
      )}
    </div>
  );
};

export const ActionButtons = ({
  onNext,
  onPrev,
  nextLabel = "Continue",
  prevLabel = "Back",
  isNextDisabled = false,
}: {
  onNext: () => void;
  onPrev?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  isNextDisabled?: boolean;
}) => {
  return (
    <div className="flex gap-3 mt-8">
      {onPrev && (
        <button
          onClick={onPrev}
          className="flex-1 border border-gray-300 text-gray-700 rounded-full h-[56px] text-[15px] font-bold shadow-sm transition-colors hover:bg-gray-50 bg-white"
        >
          {prevLabel}
        </button>
      )}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex-1 bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-[56px] text-[15px] font-bold shadow-sm transition-all ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
        } ${!onPrev ? "w-full" : ""}`}
      >
        {nextLabel}
      </button>
    </div>
  );
};

interface ProviderCardProps {
  name: string;
  logo: string;
  selected: boolean;
  onClick: () => void;
}

export const ProviderCard = ({ name, logo, selected, onClick }: ProviderCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 bg-white ${
        selected ? "border-primary_one_600 shadow-md ring-1 ring-primary_one_600" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center p-2 bg-white overflow-hidden">
        <img src={logo} alt={name} className="w-full h-full object-contain" />
      </div>
      <p className="font-bold text-[14px] text-[#344054]">{name}</p>
    </button>
  );
};

interface OfferCardProps {
  amount: string;
  rate: string;
  tenure: string;
  selected: boolean;
  onClick: () => void;
}

export const OfferCard = ({ amount, rate, tenure, selected, onClick }: OfferCardProps) => {
  return (
    <div
      className={`p-6 rounded-3xl border-2 transition-all bg-white flex flex-col gap-4 ${
        selected ? "border-primary_one_600 shadow-md" : "border-gray-100"
      }`}
    >
      <div>
        <p className="text-[13px] text-gray-500 font-bold uppercase tracking-wider mb-1">Loan Amount</p>
        <p className="text-[28px] font-black text-[#101828]">₦{amount}</p>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wide">Interest Rate</p>
          <p className="text-[16px] font-bold text-[#344054]">{rate}</p>
        </div>
        <div>
          <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wide">Loan Tenure</p>
          <p className="text-[16px] font-bold text-[#344054]">{tenure}</p>
        </div>
      </div>
      <button
        onClick={onClick}
        className={`w-full h-[52px] rounded-full font-bold text-[15px] transition-all ${
          selected
            ? "bg-primary_one_600 text-white shadow-lg"
            : "border border-primary_one_600 text-primary_one_600 hover:bg-blue-50"
        }`}
      >
        {selected ? "Offer Selected" : "Accept Offer"}
      </button>
    </div>
  );
};
