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

  const paramsValue = searchParams.get("param");

  const metaData = SETTINGS_METADATA.find((meta) => meta.route === pathname);

  const isActive = (route: string) =>
    pathname === route 

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <DashboardLayout>
      <div className="max-w-[950px] md:mt-[3rem] mt-[1rem] mx-auto w-full flex md:flex-row flex-col md:gap-[34px] gap-[20px] md:px-6 px-4">
        <aside className="md:w-[400px] w-full bg-white flex flex-col md:gap-7 gap-3 h-fit rounded-[14px] sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 md:min-w-[280px]">
          <nav className="flex flex-col gap-4">
            {SETTINGS_SECTIONS.map((section) => (
              <TabTrigger
                key={section.route}
                title={section.title ?? ""}
                icon={section.icon}
                route={section.route}
                isActive={isActive(section.route)}
              />
            ))}
          </nav>
          <LogoutTrigger />
        </aside>

        <main className="bg-white md:w-[500px] w-full rounded-[14px] h-fit sm:py-[34px] py-[25px] sm:px-[34px] px-[25px] border border-gray-200 flex-1">
          {metaData && (
            <div className="mb-8">
              {metaData.showBackButton && (
                <button
                  onClick={handleNavigateBack}
                  className="inline-flex items-center gap-2 cursor-pointer mb-6 px-3 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 bg-neutral-200 p-0.5 rounded-full" />
                  <span className="text-sm font-medium">Back</span>
                </button>
              )}

              <div>
                <h2 className="font-montserrat text-[17px] font-[600] text-neutral-950 mb-2">
                  {metaData.title}
                </h2>
                <p className="text-sm ">
                  {`${metaData.description} ${paramsValue ?? ""}`}
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
