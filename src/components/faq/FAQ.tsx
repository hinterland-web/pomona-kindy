"use client";
import React from "react";
import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import Link from "next/link";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq4Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Faq4 = (props: Faq4Props) => {
  const {
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq4Defaults,
    ...props,
  } as Props;

  const handbookLink =
    "https://drive.google.com/file/d/1i-LFRk3Nmq8av_PuliLl1PBAZifPtua8/view?usp=sharing";

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white text-base-400">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45 text-left"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">
            {footerDescription} Otherwise{" "}
            <Link href="/contact" className="font-bold">
              get in touch with us
            </Link>
          </p>
          <div className="mt-6 md:mt-8">
            <Link href={handbookLink} target="_blank">
              <Button
                variant={button.variant}
                size={button.size}
                iconRight={button.iconRight}
                iconLeft={button.iconLeft}
                className="text-lg bg-base-cta-secondary rounded-md  hover:bg-base-white hover:text-base-content"
              >
                {button.title}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq4Defaults: Faq4Props = {
  heading: "FAQs",
  description:
    "Here you will find answers to the most common questions about our Kindergarten. If something is still unclear, please don't hesitate to contact us.",
  questions: [
    // {
    //   title: "What is the process for handling injuries and incidents?",
    //   answer:
    //     "In the event of any child-related incident, we will contact you for all significant incidents, and you may be asked to collect your child. Teachers/educators will continue to monitor and care for your child until they are collected. A detailed incident record will be completed for you to review and sign at the end of your child’s day. If your child requires medical treatment beyond immediate First Aid, and we are unable to contact you, we will ensure your child is cared for and comforted, and contact your emergency contacts or call an ambulance. Please ensure your list of emergency contacts is always up to date.",
    // },
    {
      title: "What age should my child attend kindergarten?",
      answer:
        "Generally, your child should be turning 4 years old by 30 June. Although sometimes older and younger children are accepted.",
    },
    {
      title:
        "What if my child is not ready for Prep after their year at Kindy?",
      answer:
        "If you and/or the kindy Director/Teacher do not believe your child is ready to move onto Prep at the end of their kindy year, delayed exit from kindy can be applied for, and your child may do a second year at kindy.  Please speak to our Director/Teacher regarding the process for delayed exit from kindy.",
    },

    {
      title: "What days do children attend?",
      answer:
        "We cater for two groups of children aged between 3.5 and 4.5 years. Each group attends for a five day fortnight: Mari Group - Monday / Tuesday / alternate Wednesdays. Gulla Group - alternate Wednesdays / Thursday / Friday",
    },

    {
      title: "Do you provide meals?",
      answer:
        "We do not provide meals. Parents and guardians are encouraged to provide a healthy lunchbox (no chips, chocolate or lollies, please) and a separate piece of fruit. There are three breaks for meals (break times are approximate): Fruit Snack at around 9.30am, First Lunch at around 11am (?) and a second meal break at approx 1pm(?). Please ensure all lunchboxes are labeled clearly with your child’s full name. Please do not send your child with an insulated lunch bag. ",
    },
    {
      title: "What is the procedure for bringing healthy meals?",
      answer:
        "Healthy eating is encouraged at our centre. Your child needs healthy, nutritious food to fuel their body and mind for learning. Please discuss your child’s food requirements and allergies with us when you enrol, including any cultural or religious dietary needs. For more information, please see our Nutrition and Food Safety procedure.",
    },
    {
      title:
        "How do you manage privacy and the use of photography, video, and audio recordings?",
      answer:
        "Our centre uses photography, video, and audio recordings to capture learning that occurs at our centres and through our online program. This content is managed in accordance with our Privacy Policy. With your consent, we may also use it for promotion and marketing through our website or social media. You may change your consent at any time by advising us in writing. Please remember to only share images/recordings of your own child to respect the privacy and beliefs of all children and families.",
    },
    {
      title: "What should I know about excursions and visitors?",
      answer:
        " We have regular educational incursions ranging from presentations, to cultural showcases and hands-on workshops that align with the Early Years Learning Framework. Incursions are included as part of the Free Kindy program and there are no additional out-of-pocket expenses for parents/carers. Make sure to check upcoming incursions as advertised in the regular program newsletter. ",
    },
    {
      title: "What are the fees and membership requirements?",
      answer:
        "The fees are $1,025 per term, with an annual membership/enrolment fee of $100. Our Kindergarten is a not-for-profit Incorporated Association, governed by our Management Committee. By accepting an enrolment offer, one or both parents automatically agree to become a Financial Member of the Kindergarten for the entire period of their child’s enrolment. A member may resign from the Association by giving notice in writing to the Secretary.",
    },
    {
      title: "What is the sun safety policy?",
      answer:
        "We are a SunSafe Kindy. Children’s shirts should have sleeves (no singlets, please) and a hat when outdoors. Please bring 2-3 spare sets of play clothing (including underwear) as playtime at Kindy can sometimes get messy!Sun safety is important, and we ask that your child comes to the centre with a legionnaire-style or broad-brimmed hat each day. Apply sunscreen to your child at home or immediately upon arrival at the centre, and record this application on the sunscreen register. Teachers/educators will reapply sunscreen as needed.",
    },
    {
      title: "How are diverse learning needs and medical conditions managed?",
      answer:
        "If your child has a diverse learning need or a medical condition, such as anaphylaxis, asthma, diabetes, or epilepsy, provide a current medical management plan signed by your child’s medical practitioner. Before your child starts, have a conversation with your centre about their needs. If specialised health procedures are needed, we will work with you to support this. If your child has an NDIS plan, you are welcome to share it with us.",
    },
    {
      title: "What are the exclusion periods for common illnesses?",
      answer:
        "The exclusion periods for common childhood illnesses are as follows: Chickenpox - until all blisters have dried, Conjunctivitis - until discharge stops, Diarrhoea - until no loose bowel motion for 24 hours, Fever - 24 hours after it stops without medication, Gastroenteritis - 24 to 48 hours after symptoms cease, Hand, foot, and mouth disease - until all blisters have dried, Head lice - not excluded if effective treatment begins before the next day, and other specific guidelines for other illnesses. For full details, refer to the National Health and Medical Research Council guidelines.",
    },
    {
      title:
        "What should I do if my child requires medication during their time at the centre?",
      answer:
        "If your child needs medication during their time at the centre, inform the teachers/educators upon arrival. They will show you where the medication is stored, the procedure to administer it, and the form you need to complete and sign. The medication must be prescribed by a doctor, in date, and labelled by a pharmacist with your child’s name and dosage instructions.",
    },
    {
      title: "What are the centre's operating hours for drop-off and pick-up?",
      answer:
        "The center will open at 8:30am and close at 2:30pm. All children are expected to have left the premises by 2:30pm so please arrive early to ensure this is possible.",
    },
    {
      title: "Is there a uniform?",
      answer:
        "No, we do not enforce a uniform. However,We have Hats and T Shirts available for purchase, these are not mandatory. Hats $15, T-Shirts $20. Payment can be either cash or bank transfer. ",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "Have a look into the Family Handbook by clicking the button below.",
  button: {
    title: "Family Handbook",
    variant: "primary",
  },
};
