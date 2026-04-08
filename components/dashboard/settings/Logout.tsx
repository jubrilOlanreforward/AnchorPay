"use client";

import { useRouter } from "next/navigation";
import { LogoutIcon } from "@/components/svg";

const LogoutTrigger: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[var(--color-logout-bg)] font-[500] p-[10px] rounded-md text-[16px] cursor-pointer flex justify-between items-center text-red-600 hover:text-red-700 transition-colors duration-200"
    >
      <div className="flex gap-3 items-center">
        <div className="bg-[var(--color-red-light)] w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <LogoutIcon />
        </div>
        <span className="text-sm">Logout</span>
      </div>
    </button>
  );
};
export default LogoutTrigger;
