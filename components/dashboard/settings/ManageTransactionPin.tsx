"use client";

import { MANAGE_TRANSACTION_PIN_SECTIONS } from "@/lib/constants/settingConstant";
import TabTrigger from "./TabTrigger";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const ManageTransactionPinComponent = () => {
  return (
    <PageTransitionWrapper>
      <nav className="flex flex-col gap-4">
        {MANAGE_TRANSACTION_PIN_SECTIONS.map((section) => (
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

export default ManageTransactionPinComponent;
