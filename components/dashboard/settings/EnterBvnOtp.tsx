"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import CustomButton from "@/components/ui/shared/CustomButton";
import { cn } from "@/lib/utils";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import { CheckIcon } from "@/components/svg";

const TOTAL_OTP_LENGTH = 6;

const EnterBvnOtp = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(59);
  const [isResendAvailable, setIsResendAvailable] = useState(false);
  const disableBtn = otpValue.length !== TOTAL_OTP_LENGTH;
  const toastRef = useRef<HTMLDivElement | null>(null);

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
    setIsSuccess(true);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  useEffect(() => {
    if (isSuccess && toastRef.current) {
      toastRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isSuccess]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     const timer = setTimeout(() => setIsSuccess(false), 4000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isSuccess]);

  const otpBlock = useMemo(
    () => (
      <InputOTP
        id='enter-otp'
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
    [otpValue, handleSubmit],
  );

  const successToast = () => (
    <div
      ref={toastRef}
      className='flex items-center gap-3 border-l-4 border-green-600 bg-green-50 p-4 rounded-md absolute -top-60 w-full z-10 left-0 animate__animated animate__fadeInUp'
      style={{ animationDelay: "0.7s" }}
    >
      <CheckIcon />
      <div className='my-2'>
        <p className='text-green-700 font-semibold text-base font-poppins'>
          BVN Verification Successful
        </p>
        <p className='text-sm text-gray-700 font-montserrat'>
          Your BVN has been verified successfully and you can now proceed to take your first loan.
        </p>
      </div>
    </div>
  );

  return (
    <PageTransitionWrapper>
      <div className='relative'>
        {isSuccess && successToast()}
        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div>{otpBlock}</div>

          <p className='md:mb-12 mb-3 mt-6 text-sm text-gray-950 bg-neutral-50 px-[16px] py-[8px] rounded-[100px]'>
            {`Didn’t get an OTP?`}{" "}
            <button
              type='button'
              onClick={handleResend}
              disabled={!isResendAvailable}
              className={`text-primary_one_600 ms-1 font-[400] ${
                isResendAvailable ? "opacity-100" : "opacity-50 cursor-not-allowed"
              }`}
            >
              Resend code in 0:{timer.toString().padStart(2, "0")}
            </button>
          </p>
          <CustomButton
            type='submit'
            title='Verify'
            className={cn("w-full", disableBtn && "bg-neutral-200 text-black")}
            disabled={disableBtn}
          />
        </form>
      </div>
    </PageTransitionWrapper>
  );
};

export default EnterBvnOtp;
