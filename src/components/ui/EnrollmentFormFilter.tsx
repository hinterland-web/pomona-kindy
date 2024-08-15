import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  dateOfBirth: z.string().transform((value) => new Date(value)),
});

type FormData = z.infer<typeof schema>;

const EnrollmentFormFilter: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEligible, setIsEligible] = useState<boolean>(false);

  const submitButtonLink =
    "https://parent-portal.kidsoft.com.au/create-account/pomonakindy/";
  const errorMessageLink =
    "https://earlychildhood.qld.gov.au/kindy/age-requirements-and-enrolment#:~:text=Your%20child%20can%20attend%20kindy,determine%20your%20child's%20start%20year.";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const birthDate = data.dateOfBirth;
    const nextYear = new Date().getFullYear() + 1;
    const cutoffDate = new Date(nextYear, 5, 30);
    const age =
      (cutoffDate.getTime() - birthDate.getTime()) /
      (365.25 * 24 * 60 * 60 * 1000);

    if (age >= 4) {
      setIsEligible(true);
      setErrorMessage(null);

      window.open(submitButtonLink, "_blank", "noopener,noreferrer");
      
    } else {
      setIsEligible(false);
      setErrorMessage(
        "Your child must be at least 4 years old by June 30th of next year to be eligible."
      );
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 text-base-400 bg-base-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mb-4">
          Before we proceed, please let us know:
        </h2>
        <span className="flex flex-1 items-center justify-between">
          <label className="text-lg">When was your child born?</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 mx-5"
            type="date"
            id="dateOfBirth"
            {...register("dateOfBirth")}
          />
        </span>
        <Button
          type="submit"
          className="mt-4 bg-base-400 text-base-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Checking..." : "Submit"}
        </Button>
      </form>
      {errorMessage && (
        <p className="text-red-500 mt-4">
          {errorMessage}. Check this{" "}
          <Link className="font-bold underline" href={errorMessageLink}>
            link
          </Link>{" "}
          for more information.
        </p>
      )}
    </>
  );
};

export default EnrollmentFormFilter;
