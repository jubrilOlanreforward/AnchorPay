"use client";

import { SECURITY_SECTIONS } from "@/lib/constants/settingConstant";
import TabTrigger from "./TabTrigger";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const SecurityComponent = () => {
  return (
    <PageTransitionWrapper>
      <nav className="flex flex-col gap-4">
        {SECURITY_SECTIONS.map((section) => (
          <TabTrigger
            key={section.route}
            title={section.title ?? ""}
            icon={section.icon}
            route={section.route}
            isActive={false}
          />
        ))}
      </nav>
    </PageTransitionWrapper>
  );
};

export default SecurityComponent;
