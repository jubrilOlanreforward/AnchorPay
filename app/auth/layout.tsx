"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { CustomImage } from "@/components/ui/shared/CustomImage";
import { Logo } from "@/components/ui/shared/Logo";
import AuthBgGradient from "@/public/Create account_Email address.png";
import AuthBgGradient2 from "@/public/Create account_Email address_OTP 6.png";

const otpRelatedPaths = ["verify"];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlStep = searchParams.get("step");
  const isGetStarted = pathname?.endsWith("/get-started");

  const isVerifyRoute = otpRelatedPaths.some(
    (p) => pathname?.includes(p) || urlStep?.includes(p),
  );

  const backgroundImage = isVerifyRoute ? AuthBgGradient2 : AuthBgGradient;

  const maxWidthClass = isGetStarted ? "max-w-[540px]" : "max-w-[504px]";

  return (
    <div className="min-h-screen relative flex flex-col justify-center sm:items-auto items-center bg-primary_one_600 p-2">
      <Logo isLight style="mt-10 z-200" />
      <div
        className={`${maxWidthClass} md:my-[5rem] my-10 z-100 w-full bg-white h-fit rounded-[10px] sm:py-[40px] py-[20px] sm:px-[32px] px-[25px]`}
      >
        {children}
      </div>
      <CustomImage
        key={isVerifyRoute ? "verify" : "default"}
        src={backgroundImage}
        style="w-full h-full absolute bottom-0 left-0 z-10 md:block hidden h-[694px]"
        imgStyle="object-fill"
      />
    </div>
  );
}
