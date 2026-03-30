"use client";

import { useEffect, useMemo, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CustomButton from "@/components/ui/shared/CustomButton";

const TOTAL_OTP_LENGTH = 6;

const EnterOtp = () => {
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
    console.log("Resend OTP requested");
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    if (otpValue.length !== TOTAL_OTP_LENGTH) {
      return;
    }
    console.log("Verify OTP:", otpValue);
    // TODO: call OTP verification API
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
    <div>
      <p className="text-sm text-gray-600 mb-6">
        Enter the OTP sent to cuche.@unionbank.ng
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>{otpBlock}</div>

        <CustomButton
          type="submit"
          title="Verify OTP"
          className="w-full"
          disabled={otpValue.length !== TOTAL_OTP_LENGTH}
        />
      </form>

      <p className="mb-1 mt-6 text-sm text-gray-950">
        Didn’t get an OTP?{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={!isResendAvailable}
          className={`text-primary_one_600 font-semibold underline ${
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

export default EnterOtp;
