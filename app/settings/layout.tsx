"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useStore } from "@/store/useStore";
import { SETTINGS_SECTIONS } from "@/lib/constants/settingConstant";
import TabTrigger from "@/components/settings/TabTrigger";
import LogoutTrigger from "@/components/settings/Logout";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const { settingsMetadata } = useStore();

  const displayTitle = settingsMetadata?.title || "";
  const displayDescription = settingsMetadata.description || "";

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <div className="max-w-[1000px] m-auto w-full grid md:grid-cols-2 grid-cols-1 md:gap-[34px] gap-[20px]">
      {/* Sidebar */}
      <aside className="bg-white flex flex-col md:gap-10 gap-5 h-fit rounded-[10px] sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 md:min-w-[280px]">
        <h1 className="font-montserrat md:text-[24px] text-[22px] font-[700] text-neutral-950">
          Settings
        </h1>
        <nav className="flex flex-col gap-4">
          {SETTINGS_SECTIONS.map((section) => (
            <TabTrigger
              key={section.route}
              title={section.title ?? ""}
              icon={section.icon}
              route={section.route}
              isActive={pathname?.includes(section.route) || false}
            />
          ))}
        </nav>
        <LogoutTrigger />
      </aside>

      {/* Main Content */}
      <main className="bg-white rounded-[10px] h-fit sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 flex-1">
        {displayTitle && (
          <div className="mb-8">
            <button
              onClick={handleNavigateBack}
              className="inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>

            <div>
              <h2 className="font-montserrat text-[24px] font-[600] text-neutral-950 mb-2">
                {displayTitle}
              </h2>
              <p className="text-[16px] text-gray-600">{displayDescription}</p>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
