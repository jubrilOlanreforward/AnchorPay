"use client";

import { useEffect, useMemo, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CustomButton from "@/components/ui/shared/CustomButton";
import { cn } from "@/lib/utils";
import SuccessModal from "@/components/shared/SuccessModal";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const TOTAL_OTP_LENGTH = 6;

const EnterPhoneOtp = () => {
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
    console.log("Resend OTP requested");
  };

  const handleSubmit = () => {
    if (disableBtn) return;

    console.log("Verify OTP:", otpValue);
    setIsAlertOpen(true);
    // TODO: call OTP verification API
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const otpBlock = useMemo(
    () => (
      <InputOTP
        id="enter-otp"
        value={otpValue}
        onChange={setOtpValue}
        maxLength={TOTAL_OTP_LENGTH}
        autoFocus
        onComplete={handleSubmit}
      >
        <InputOTPGroup className="flex gap-2 justify-center">
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
      <form onSubmit={(e) => submitHandler(e)} className="space-y-6">
        <div>{otpBlock}</div>

        <p className="md:mb-12 mb-3 mt-6 text-sm text-gray-950 bg-neutral-50 px-[16px] py-[8px] rounded-[100px]">
          {`Didn’t get an OTP?`}{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={!isResendAvailable}
            className={`text-primary_one_600 ms-1 font-[400] ${
              isResendAvailable
                ? "opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Resend code in 0:{timer.toString().padStart(2, "0")}
          </button>
        </p>
        <CustomButton
          type="submit"
          title="Verify"
          className={cn("w-full", disableBtn && "bg-neutral-200 text-black")}
          disabled={disableBtn}
        />
      </form>
      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={() => setIsAlertOpen(false)}
        title="Your Phone Number has being Changed!"
        description="You will receive a notification shortly, Kindly login with the new Phone Number."
      />
    </PageTransitionWrapper>
  );
};

export default EnterPhoneOtp;
