"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProfileFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  linkHref?: string;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  disabled = false,
  linkHref,
}) => {
  return (
    <Link
      href={linkHref ?? "#"}
      className={cn(
        "w-full flex items-center justify-between transition-colors duration-200",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer ",
      )}
    >
      <div className="flex flex-col items-start gap-1">
        <label className="text-sm font-medium text-secondary">{label}</label>
        <p className="text-[15px] font-medium text-gray-950">{value}</p>
      </div>
      {!disabled && <ChevronRight className="w-5 h-5 text-chevron-inactive" />}
    </Link>
  );
};
export default ProfileField;
