import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FAQ = () => {
  return (
    <div className="w-full bg-[#F4F6FA] p-4 sm:p-8 md:p-12">
      <div className="flex flex-col ">
        <h2 className="text-center text-[#0F0E47] font-normal text-4xl pb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex gap-4 flex-col">
          {faqData.map((item, index) => (
            <FaqAccordion key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FaqAccordionProps {
  value: string;
  title: string;
  description: string;
}

const FaqAccordion = ({ value, title, description }: FaqAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-[55rem] mx-auto bg-white px-4 py-3 rounded-lg"
    >
      <AccordionItem value={value}>
        <AccordionTrigger className="text-[#0F0E47]">{title}</AccordionTrigger>
        <AccordionContent className="text-[#4B5563]">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const faqData: FaqAccordionProps[] = [
  {
    value: "secure-backups",
    title: "How does ShieldSync secure my backups?",
    description:
      "We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks.",
  },
  {
    value: "restore-files",
    title: "Can I restore files instantly?",
    description:
      "Yes, with ShieldSync’s instant restore feature, you can quickly recover your files whenever needed.",
  },
  {
    value: "exceed-storage",
    title: "What happens if I exceed my storage?",
    description:
      "If you exceed your storage limit, you will have the option to upgrade your plan or delete old backups to free up space.",
  },
];
