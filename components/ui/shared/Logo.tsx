"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "nextjs-toploader/app";
import LightLogo from "../../../public/Layer 2.png";
import DarkLogo from "../../../public/Logo 2.png";
import { CustomImage } from "./CustomImage";

interface LogoProps {
  style?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ style, isLight = true }) => {
  const router = useRouter();
  const navigateToHome = () => router.push("/");
  return (
    <CustomImage
      src={isLight ? LightLogo : DarkLogo}
      style={cn("w-[184px] h-[34px]", style)}
      imgStyle="object-contain"
      clickFunc={navigateToHome}
    />
  );
};
