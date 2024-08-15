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
          Your child must be 4 years old by June 30th June in the year of
          enrolment!
        </h3>

        <ul className="px-4 list-disc space-y-2 text-md">
          <li>
            Unsure if your child is eligible, check this{" "}
            <Link
              className="font-bold hover:underline"
              href={calculatorLink}
              target="_blank"
            >
              calculator
            </Link>
          </li>
          <li>
            If you child is still no kindy age, you can still put down their
            names on the waiting list. Just click the button below.
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
