"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "lucide-react";
import Banner from "../../components/Banner";
const faqs = [
  {
    question: "What types of products do you sell?",
    answer:
      "We specialize in used cars, spare parts, household equipment, and electronics. We also offer transportation assistance and business consultation services.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we offer international shipping for most of our products. Contact us for more details regarding specific locations.",
  },
  {
    question: "How can I get a quote for relocation services?",
    answer:
      "Simply reach out via our contact page with your details, and our team will provide a personalized quote.",
  },
  {
    question: "Do you offer business consultation for startups?",
    answer:
      "Absolutely! We provide tailored business consultation services for startups and established businesses alike.",
  },
];

const FAQPage = () => {
  return (
    <>
        <Banner/>
        <div className="mx-4 px-4 py-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
                Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mt-2">
                Find answers to the most common questions about our services.
            </p>

            <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                    <div className="border rounded-lg shadow-md">
                        <Disclosure.Button className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none">
                        {faq.question}
                        <ChevronUp
                            className={`w-6 h-6 transition-transform ${
                            open ? "rotate-180" : ""
                            }`}
                        />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-5 pb-4 text-gray-600">
                        {faq.answer}
                        </Disclosure.Panel>
                    </div>
                    )}
                </Disclosure>
                ))}
            </div>
        </div>
    </>
  );
};

export default FAQPage;
