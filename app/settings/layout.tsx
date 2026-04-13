"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  SETTINGS_METADATA,
  SETTINGS_SECTIONS,
} from "@/lib/constants/settingConstant";
import TabTrigger from "@/components/dashboard/settings/TabTrigger";
import LogoutTrigger from "@/components/dashboard/settings/Logout";
import DashboardLayout from "../dashboard/layout";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramsvalue = searchParams.get("param");

  const metaData = SETTINGS_METADATA.find((meta) => meta.pathname === pathname);

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <DashboardLayout>
      <div className="max-w-[950px] md:mt-[3rem] mt-[1rem] mx-auto w-full flex md:flex-row flex-col md:gap-[34px] gap-[20px] md:px-6 px-4">
        <aside className="md:w-[400px] w-full bg-white flex flex-col md:gap-10 gap-5 h-fit rounded-[14px] sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 md:min-w-[280px]">
          <h1 className="font-montserrat md:text-[22px] text-[20px] font-[700] text-neutral-950">
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

        <main
          key={pathname}
          className="bg-white md:w-[500px] w-full rounded-[14px] h-fit sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 flex-1"
        >
          {metaData && (
            <div className="mb-8">
              <button
                onClick={handleNavigateBack}
                className="inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-full bg-neutral-50 hover:bg-neutral-200 text-neutral-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back</span>
              </button>

              <div>
                <h2 className="font-montserrat md:text-[20px] text-[18px] font-[600] text-neutral-950 mb-2">
                  {metaData.title}
                </h2>
                <p className="md:text-[15px] text-sm ">
                  {`${metaData.description} ${paramsvalue}`}
                </p>
              </div>
            </div>
          )}
          {children}
        </main>
      </div>

    </DashboardLayout>

  );
}
