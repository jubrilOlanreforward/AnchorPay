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
import LoanTypeSelection from "./steps/LoanTypeSelection";
import LoanOffersLoading from "./steps/LoanOffersLoading";
import ProviderSelection from "./steps/ProviderSelection";
import OfferSelection from "./steps/OfferSelection";

interface ApplyLoanFlowProps {
    isModal?: boolean;
    onClose?: () => void;
}

const UNION_KASH_STEPS: LoanStep[] = [
    // { id: "loan-type", slug: "loan-type", title: "Apply for loan", component: LoanTypeSelection },
    { id: "loan-details", slug: "loan-details", title: "Enter loan amount", subTitle: "Enter your Union bank account details", component: LoanDetails },
    { id: "account-selection", slug: "account-selection", title: "Select Account", component: AccountSelection },
    { id: "tenor-selection", slug: "tenor-selection", title: "Select Tenor", component: TenorSelection },
    { id: "review-details", slug: "review-details", title: "Confirm details", component: ReviewLoanDetails },
    { id: "confirmation", slug: "confirmation", title: "Confirmation", component: LoanConfirmation }
];

const OTHERS_FLOW_STEPS: LoanStep[] = [
    { id: "loan-details", slug: "loan-details", title: "Apply for loan", subTitle: "Put in how much loan you need", component: LoanDetails },
    { id: "provider-selection", slug: "provider-selection", title: "Available Providers", subTitle: "Select your preferred loan provider", component: ProviderSelection },
    { id: "loading", slug: "loading", title: "Checking Offers", component: LoanOffersLoading },
    { id: "offer-selection", slug: "offer-selection", title: "Loan Offers", component: OfferSelection },
    // { id: "account-selection", slug: "account-selection", title: "Select Account", component: AccountSelection },
    { id: "review-details", slug: "review-details", title: "Confirm details", component: ReviewLoanDetails },
    { id: "confirmation", slug: "confirmation", title: "Confirmation", component: LoanConfirmation }
];

const ApplyLoanFlow = ({ isModal = false, onClose }: ApplyLoanFlowProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const stepParam = searchParams.get("step");

    const [loanType, setLoanType] = useState<"union-kash" | "others" | null>(null);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
        if (savedData.loanType) {
            setLoanType(savedData.loanType);
        }
    }, [stepParam]);

    // const activeSteps = loanType === "others" ? OTHERS_FLOW_STEPS : UNION_KASH_STEPS;
const activeSteps = OTHERS_FLOW_STEPS;
    const getInitialStepIndex = () => {
        if (!stepParam) return 0;
        const stepIdx = activeSteps.findIndex((s) => s.slug === stepParam);
        return stepIdx >= 0 ? stepIdx : 0;
    };

    const [currentStepIndex, setCurrentStepIndex] = useState(getInitialStepIndex());
    const [isInitialized, setIsInitialized] = useState(false);

    const currentStep = activeSteps[currentStepIndex];
    if (!currentStep) return null; // Safety check

    const CurrentComponent: ComponentType<LoanStepComponentProps> = currentStep.component;

    useEffect(() => {
        if (!stepParam) {
            router.replace(`${pathname}?step=${activeSteps[0].slug}`);
        }
        setIsInitialized(true);
    }, [stepParam, router, pathname, activeSteps]);

    const pushStepParam = (index: number) => {
        const newSlug = activeSteps[index]?.slug;
        if (!newSlug || !pathname) return;
        router.replace(`${pathname}?step=${newSlug}`);
    };

    const handleNext = () => {
        // Refresh loanType if we just completed step 0
        if (currentStepIndex === 0) {
            const savedData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
            setLoanType(savedData.loanType);
        }

        if (currentStepIndex < activeSteps.length - 1) {
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
            <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
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
                            className="cursor-pointer bg-[#F2F4F7] p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <CloseIcon fill="#667085" />
                        </button>
                    )}
                </div>
            </div>

            {/* Step Content */}
            <CurrentComponent onNext={handleNext} onPrev={handlePrev} onClose={onClose} />
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
