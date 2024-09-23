import { Button } from "@relume_io/relume-ui";
import Link from "next/link";

const EnrollmentInfoLinks: React.FC = () => {
  const submitButtonLink =
    "https://parent-portal.kidsoft.com.au/create-account/pomonakindy/";
  const calculatorLink =
    "https://earlychildhood.qld.gov.au/kindy/age-requirements-and-enrolment#:~:text=Your%20child%20can%20attend%20kindy,determine%20your%20child's%20start%20year.";

  return (
    <>
      <section className="flex flex-col gap-4 text-base-400 bg-base-white">
        <h2 className="text-2xl mb-4 font-black text-base-cta-secondary">
          Important information:
        </h2>
        <h3 className="text-lg font-bold">
          We are currently welcoming children who will have turned 4 by the 30th
          of June in the year of enrollment.
        </h3>

        <ul className="px-4 list-disc space-y-2 text-md">
          <li>
            If you are unsure, please use this{" "}
            <Link
              className="font-bold hover:underline"
              href={calculatorLink}
              target="_blank"
            >
              calculator.
            </Link>
          </li>
          <li>
            If your child does not yet meet our eligibility criteria please
            click here to add them to our waitlist.
          </li>
        </ul>
        <div className="flex justify-center">
          <Link href={submitButtonLink} target="_blank">
            <Button
              type="button"
              className="mt-4 bg-base-400 hover:bg-base-cta-secondary text-base-white text-md rounded-md shadow-medium"
            >
              Proceed to Enrolment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EnrollmentInfoLinks;
