"use client";

import { ReactNode, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ActionCard from "./ActionCard";
import Link from "next/link";
import { getStartedOptions } from "@/lib/constants/authConstants";

interface GetStartedOption {
  id: "bvn" | "email";
  title: string;
  description: string;
  icon: ReactNode;
}

const GetStarted = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSelection = useCallback(
    (option: GetStartedOption) => {
      setLoading(true);
      switch (option.id) {
        case "bvn":
          router.push("/auth/bvn");
          break;
        case "email":
          router.push("/auth/email");
          break;
        default:
          console.warn("Unknown option selected", option);
          setLoading(false);
      }
    },
    [router],
  );

  return (
    <section>
      <h1 className="font-montserrat text-[24px] font-[600] mb-3">
        Get Started With Booster
      </h1>
      <p className="font-[400] text-[17px] mb-8 tracking-[-0.15%] text-gray_950">
        {`Select how you’d like to sign up`}
      </p>

      <div className="mb-8 grid md:grid-cols-2 grid-cols-1 gap-[24px]">
        {getStartedOptions.map((option) => (
          <ActionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            onClick={() => handleSelection(option)}
          />
        ))}
      </div>

      <p className="text-[17px] mb-5">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-primary_one_600 font-[600] ms-2"
        >
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default GetStarted;
