"use client";

import { useEffect, useMemo, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const TOTAL_OTP_LENGTH = 6;

const VerifyBvn = ({ onNext }: { onNext?: () => void }) => {
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(59);
  const [isResendAvailable, setIsResendAvailable] = useState(false);

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
    // TODO: trigger OTP resend request
    console.log("Resend code requested");
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    console.log("Verify OTP:", otpValue);
    // TODO: call verification API
    onNext?.();
  };

  const otpBlock = useMemo(
    () => (
      <InputOTP
        id="verify-bvn-otp"
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
    <div>
      <p className="text-[14px] text-gray-950 mb-6">
        Enter the OTP sent to the phone number and Email address associated with
        your BVN.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>{otpBlock}</div>
      </form>

      <p className="mb-1 mt-6 text-sm text-gray-950 bg-neutral-100 px-[16px] py-[8px] rounded-[100px]">
        {`Didn’t get an OTP?`}{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={!isResendAvailable}
          className={`text-primary_one_600 font-[400] ${
            isResendAvailable ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Resend code
        </button>{" "}
        in 0:{timer.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default VerifyBvn;
