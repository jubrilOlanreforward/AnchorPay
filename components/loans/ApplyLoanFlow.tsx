"use client";

import React, { useState, useEffect, ComponentType } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LoanStepComponentProps, LoanStep } from "@/lib/constants/loanConstants";
import LoanDetails from "./steps/LoanDetails";
import AccountSelection from "./steps/AccountSelection";
import TenorSelection from "./steps/TenorSelection";
import ReviewLoanDetails from "./steps/ReviewLoanDetails";
import LoanConfirmation from "./steps/LoanConfirmation";
import { CustomModal } from "@/components/ui/shared/Modal";
import { CloseIcon } from "../svg";
const LOAN_STEPS: LoanStep[] = [
    {
        id: "loan-details",
        slug: "loan-details",
        title: "Apply for loan",
        subTitle: "Put in how much loan you need",
        component: LoanDetails,
    },
    {
        id: "account-selection",
        slug: "account-selection",
        title: "Select Account",
        component: AccountSelection,
    },
    {
        id: "tenor-selection",
        slug: "tenor-selection",
        title: "Select Tenor",
        component: TenorSelection,
    },
    {
        id: "review-details",
        slug: "review-details",
        title: "Review Details",
        component: ReviewLoanDetails,
    },
    {
        id: "confirmation",
        slug: "confirmation",
        title: "Confirmation",
        component: LoanConfirmation,
    },
];

type ApplyLoanFlowProps = {
    isModal?: boolean;
    onClose?: () => void;
};

const ApplyLoanFlow = ({ isModal = false, onClose }: ApplyLoanFlowProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const stepParam = searchParams.get("step");

    // Initialize step index based on URL parameter
    const getInitialStepIndex = () => {
        if (!stepParam) return 0;
        const stepIdx = LOAN_STEPS.findIndex((s) => s.slug === stepParam);
        return stepIdx >= 0 ? stepIdx : 0;
    };

    const [currentStepIndex, setCurrentStepIndex] = useState(getInitialStepIndex());
    const [isInitialized, setIsInitialized] = useState(false);

    const currentStep = LOAN_STEPS[currentStepIndex];
    const CurrentComponent: ComponentType<LoanStepComponentProps> = currentStep.component;

    useEffect(() => {
        if (!stepParam) {
            const baseStep = LOAN_STEPS[0]?.slug;
            if (baseStep) {
                router.replace(`${pathname}?step=${baseStep}`);
            }
        }
        setIsInitialized(true);
    }, [stepParam, router, pathname]);

    const pushStepParam = (index: number) => {
        const newSlug = LOAN_STEPS[index]?.slug;
        if (!newSlug || !pathname) return;
        router.replace(`${pathname}?step=${newSlug}`);
    };

    const handleNext = () => {
        if (currentStepIndex < LOAN_STEPS.length - 1) {
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
        } else if (onClose) {
            onClose();
        }
    };

    if (!isInitialized) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary_one_600"></div>
            </div>
        );
    }

    const contentElement = (
        <>
            {/* Header with progress indicator */}
            <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                <div>
                <h1 className="font-semibold text-[22px] text-heading">{currentStep.title}</h1>
                {currentStep.subTitle && (
                    <p className="text-gray-500 text-[14px] mt-1">{currentStep.subTitle}</p>
                )}
                </div>

                    {/* Close button for modal */}
                    {isModal && (
                        <button
                            onClick={onClose}
                            className="cursor-pointer bg-[#DAE9FC] p-1 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                        >
                           <CloseIcon fill="#1F7AEA"/>
                        </button>
                    )}
                </div>

            </div>

            {/* Step Content */}
            <CurrentComponent onNext={handleNext} />
        </>
    );

    if (isModal) {
        return contentElement;
    }

    return (
        <CustomModal>


            {contentElement}

        </CustomModal>
    );
};

export default ApplyLoanFlow;
