"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  onEdit?: () => void;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  disabled = false,
  onEdit,
}) => {
  return (
    <button
      onClick={onEdit}
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-between transition-colors duration-200",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer ",
      )}
    >
      <div className="flex flex-col items-start gap-1">
        <label className="text-sm font-medium text-secondary">{label}</label>
        <p className="text-base font-medium text-gray-950">{value}</p>
      </div>
      {!disabled && <ChevronRight className="w-5 h-5 text-chevron-inactive" />}
    </button>
  );
};
export default ProfileField;
