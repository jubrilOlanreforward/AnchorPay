"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TabTriggerProps {
  title: string;
  icon: ComponentType;
  route: string;
  isActive: boolean;
}

const TabTrigger: React.FC<TabTriggerProps> = ({
  title,
  icon,
  route,
  isActive,
}) => {
  const IconComponent = icon as React.ElementType;

  return (
    <Link
      href={route}
      className="bg-[var(--color-tab-bg)] p-[10px] rounded-md font-[500] text-[16px] cursor-pointer flex justify-between items-center transition-colors duration-200"
    >
      <div
        className={cn(
          " px-2 flex items-center  pr-3",
          isActive && "border-l-4 border-[var(--color-primary_one_600)]",
        )}
      >
        <div className="flex gap-3 items-center">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--color-tab-icon-bg)]">
            <IconComponent />
          </div>
          <span className="text-sm">{title}</span>
        </div>
        <ChevronRight
          className={cn(
            "transition-colors duration-200 text-[var(--color-tab-chevron-inactive)] w-4 h-4",
            isActive && "text-[var(--color-tab-chevron-active)]",
          )}
        />
      </div>
    </Link>
  );
};

export default TabTrigger;
