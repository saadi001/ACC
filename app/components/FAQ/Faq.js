import { faqData } from "@/app/asset/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "../shared/Title/Title";

const Faq = () => {
  return (
    <div id="faq" className="py-10">
      <Title>Frequently Asked Questions</Title>
      <div className="py-10 max-w-xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-1" className="">
          {faqData.map((faq, i) => {
            return (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger>{faq?.ques}</AccordionTrigger>
                <AccordionContent>{faq?.ans}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
