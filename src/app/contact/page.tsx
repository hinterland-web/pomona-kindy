import { Contact24 } from "@/components/contactForm/ContactDetails";

export default function Contact() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-to-b from-base-cta-primary  to-base-white"></div>
      <div className="relative z-10">
        <Contact24 />
      </div>
    </div>
  );
}
