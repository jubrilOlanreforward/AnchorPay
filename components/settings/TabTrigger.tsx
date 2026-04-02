"use client";

import { useRouter, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";

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
  const router = useRouter();
  const IconComponent = icon as React.ElementType;

  return (
    <button
      onClick={() => router.push(route)}
      className="p-[10px] rounded-md font-[500] text-[16px] cursor-pointer flex justify-between items-center transition-colors duration-200"
      style={{ backgroundColor: "var(--color-tab-bg)" }}
    >
      <div className="flex gap-3 items-center">
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-light-primary">
          <IconComponent />
        </div>
        <span>{title}</span>
      </div>
      <ChevronRight
        className={cn("transition-colors duration-200")}
        style={{
          color: isActive
            ? "var(--color-tab-chevron-active)"
            : "var(--color-tab-chevron-inactive)",
        }}
      />
    </button>
  );
};

export default TabTrigger;
