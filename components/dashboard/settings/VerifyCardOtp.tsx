"use client";

import { useEffect, useMemo, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import CustomButton from "@/components/ui/shared/CustomButton";
import { cn } from "@/lib/utils";
import SuccessModal from "@/components/shared/SuccessModal";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import { useRouter } from "next/navigation";

const TOTAL_OTP_LENGTH = 6;

const VerifyCardOtp = () => {
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(59);
  const [isResendAvailable, setIsResendAvailable] = useState(false);

  const disableBtn = otpValue.length !== TOTAL_OTP_LENGTH;

  useEffect(() => {
    if (timer <= 0) {
      setIsResendAvailable(true);
      return;
    }
    setIsResendAvailable(false);

    const id = window.setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [timer]);

  const handleResend = () => {
    setTimer(59);
    setIsResendAvailable(false);
    setOtpValue("");
    console.log("Resend card OTP requested");
    // TODO: call resend OTP API for card verification
  };

  const handleSubmit = () => {
    if (disableBtn) return;

    console.log("Verify card OTP:", otpValue);
    setIsAlertOpen(true);
    // TODO: call card OTP verification API
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleSuccessModalClose = () => {
    setIsAlertOpen(false);
    // Navigate to the cards-accounts page or link-debit-card management page
    router.push("/settings/link-debit-card");
  };

  const otpBlock = useMemo(
    () => (
      <InputOTP
        id='verify-card-otp'
        value={otpValue}
        onChange={setOtpValue}
        maxLength={TOTAL_OTP_LENGTH}
        autoFocus
        onComplete={handleSubmit}
      >
        <InputOTPGroup className='flex gap-2 justify-center'>
          {Array.from({ length: TOTAL_OTP_LENGTH }).map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    ),
    [otpValue],
  );

  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-8 flex-1 overflow-y-auto font-poppins pb-10'>
        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div>{otpBlock}</div>

          <p className='md:mb-12 mb-3 mt-6 text-sm text-gray-950 bg-neutral-100 px-4 py-2 rounded-[100px]'>
            {`Didn't get an OTP?`}{" "}
            <button
              type='button'
              onClick={handleResend}
              disabled={!isResendAvailable}
              className={`text-primary_one_600 ms-1 font-normal ${
                isResendAvailable ? "opacity-100" : "opacity-50 cursor-not-allowed"
              }`}
            >
              Resend code in 0:{timer.toString().padStart(2, "0")}
            </button>
          </p>

          <CustomButton
            type='submit'
            title='Verify Card'
            className={cn("w-full", disableBtn && "bg-neutral-200 text-black")}
            disabled={disableBtn}
          />
        </form>
      </div>

      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={handleSuccessModalClose}
        title='Card Verified Successfully!'
        description='Your debit card has been successfully linked and verified. You can now use it for transactions.'
      />
    </PageTransitionWrapper>
  );
};

export default VerifyCardOtp;
