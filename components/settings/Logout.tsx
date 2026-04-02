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
      className="font-[500] p-[10px] rounded-md text-[16px] cursor-pointer flex justify-between items-center text-red-600 hover:text-red-700 transition-colors duration-200"
      style={{ backgroundColor: "var(--color-logout-bg)" }}
    >
      <div className="flex gap-3 items-center">
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-red-light)",
          }}
        >
          <LogoutIcon />
        </div>
        <span>Logout</span>
      </div>
    </button>
  );
};
export default LogoutTrigger;
