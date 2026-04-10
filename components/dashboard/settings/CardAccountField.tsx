import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CardAccountFieldProps {
  label: string;
  labelBg: string;
  icon: React.ReactNode;
  value: string;
  linkHref?: string;
}

const CardAccountField: React.FC<CardAccountFieldProps> = ({
  label,
  labelBg,
  icon,
  value,
  linkHref,
}) => {
  return (
    <Link
      href={linkHref ?? "#"}
      className='bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer transition hover:opacity-90'
    >
      {/* Left */}
      <div className='flex items-center gap-3'>
        <div className='bg-blue-100 rounded-full p-2'>{icon}</div>
        <p className='text-base font-medium text-gray-950'>{value}</p>
      </div>

      {/* Right */}
      <div className='flex items-center gap-3'>
        <span
          className={`${labelBg} rounded-full px-3 py-1 text-white text-[9px] font-bold tracking-wider`}
        >
          {label}
        </span>

        <ChevronRight className='w-4 h-4 text-[#9599A1]' />
      </div>
    </Link>
  );
};

export default CardAccountField;
