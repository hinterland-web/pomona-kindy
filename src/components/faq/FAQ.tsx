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
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white text-base-400">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
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
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link href="/contact">
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
    {
      title: "What is the process for handling injuries and incidents?",
      answer:
        "In the event of any child-related incident, we will contact you for all significant incidents, and you may be asked to collect your child. Teachers/educators will continue to monitor and care for your child until they are collected. A detailed incident record will be completed for you to review and sign at the end of your child’s day. If your child requires medical treatment beyond immediate First Aid, and we are unable to contact you, we will ensure your child is cared for and comforted, and contact your emergency contacts or call an ambulance. Please ensure your list of emergency contacts is always up to date.",
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
        "From time to time, your child might go out into the community on an excursion to places like the local school, nearby nature spaces, the library, or the museum. Visitors may also be invited to share experiences and activities with your child. We will always inform you in advance about excursions or visitors, and you are welcome to join us. Please see our Excursions procedures for further information.",
    },
    {
      title: "What are the fees and membership requirements?",
      answer:
        "The fees are $1,025 per term, with an annual membership/enrolment fee of $100. Our Kindergarten is a not-for-profit Incorporated Association, governed by our Management Committee. By accepting an enrolment offer, one or both parents automatically agree to become a Financial Member of the Kindergarten for the entire period of their child’s enrolment. A member may resign from the Association by giving notice in writing to the Secretary.",
    },
    {
      title: "What is the sun safety policy?",
      answer:
        "Sun safety is important, and we ask that your child comes to the centre with a legionnaire-style or broad-brimmed hat each day. Apply sunscreen to your child at home or immediately upon arrival at the centre, and record this application on the sunscreen register. Teachers/educators will reapply sunscreen as needed.",
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
        "In the morning, our gates will be open from 8.30 am and will close at 9.30 am. In the afternoon, our gate will be open from 2 pm to 2.30 pm to ensure the safety of the children. If you need to access the kindergarten at other times, please talk with the educators.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "We are here to help you.",
  button: {
    title: "Get in Touch!",
    variant: "primary",
  },
};
