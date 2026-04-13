"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  BVN_STEPS,
  EMAIL_STEPS,
  StepComponentProps,
} from "@/lib/constants/authConstants";
import { ComponentType } from "react";

type FlowType = "bvn" | "email";

const AccountSetup = ({ flow }: { flow: FlowType }) => {
  const steps = flow === "bvn" ? BVN_STEPS : EMAIL_STEPS;
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const pathname = usePathname();

  // Initialize step index based on URL parameter
  const getInitialStepIndex = () => {
    if (!stepParam) return 0;
    const stepIdx = steps.findIndex((s) => s.slug === stepParam);
    return stepIdx >= 0 ? stepIdx : 0;
  };

  const [currentStepIndex, setCurrentStepIndex] = useState(getInitialStepIndex);
  const [isInitialized, setIsInitialized] = useState(false);

  const currentStep = steps[currentStepIndex];
  const CurrentComponent: ComponentType<StepComponentProps> =
    currentStep.component;

  useEffect(() => {
    if (!stepParam) {
      const baseStep = steps[0]?.slug;
      if (baseStep) {
        router.replace(`${pathname}?step=${baseStep}`);
      }
    }
    setIsInitialized(true);
  }, [stepParam, steps, router, pathname]);

  const pushStepParam = (index: number) => {
    const newSlug = steps[index]?.slug;
    if (!newSlug || !pathname) return;
    router.replace(`${pathname}?step=${newSlug}`);
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      pushStepParam(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      pushStepParam(prevIndex);
    }
  };

  return (
    <div>
      {!isInitialized ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary_one_600"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`w-[35px] rounded transition-all duration-300 ${
                    index === currentStepIndex
                      ? "bg-primary_one_600 h-1.5"
                      : "h-[2.9px] bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-[80%] w-full">
            <h1 className="font-montserrat md:text-[20px] text-[20px] font-[700] mb-3">
              {currentStep.title}
            </h1>
          </div>
          <CurrentComponent onNext={handleNext} />
        </>
      )}
    </div>
  );
};

export default AccountSetup;
