import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <p className="text-[13px] font-[400] mb-3">
      By proceeding, I understand and agree to Boosters{" "}
      <Link href="" className="text-primary_one_600 font-[600]">
        Privacy Policy/Terms{" "}
      </Link>
      and{" "}
      <Link href="" className="text-primary_one_600 font-[600]">
        Conditions
      </Link>{" "}
    </p>
  );
};

export default TermsAndConditions;
