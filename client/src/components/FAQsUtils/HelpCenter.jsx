import React from "react";

const HelpCenter = () => {
  const faqs = [
    {
      id: "1",
      question: "How much is shipping?",
      answer: "Standard Shipping: We charge items are $5.99 for the first item + $1.99 for additional items shipped domestic and $6.99 for the first item + $1.99 per each additional product to the rest of the world."
    },
    {
      id: "2",
      question: "Can I expedite my order?",
      answer: "We currently do not offer expedited shipping because all of our products are custom made-to-order after each purchase. We are looking into ways to expand our shipping options for you."
    },
    {
      id: "3",
      question: "Can I deliver to multiple addresses?",
      answer: "We do not offer shipping to multiple addresses for a single order. If you would like items delivered to multiple addresses, please place those orders separately."
    },
    {
      id: "4",
      question: "Do you offer delivery to PO Boxes or Military APO/FPO addresses?",
      answer: "Yes, we can send shipments to PO Boxes and Military APO/FPO addresses. Orders shipped to APO addresses are done so via DHL or UPS, and then are turned over to USPS for final delivery (through the military mail system). Shipments to APOs can take up to 45 additional days to arrive. Unfortunately, once the package enters the military mail system, tracking ceases to update for military security reasons. This means that we no longer have visibility of your order and cannot provide tracking information."
    },
    {
      id: "5",
      question: "Will I be charged VAT taxes?",
      answer: "Items shipping internationally from the US are shipped DDU (Delivered Duty Unpaid) and we do not collect VAT (Value Added Taxes). All taxes, duties, and customs fees are the responsibility of the recipient of the package. Depending on the receiving country, your package may incur local customs or VAT charges. We recommend contacting your local customs office for more information regarding your country's customs policies. Items fulfilled from the UK and EU are charged a 20% VAT rate."
    },
    {
      id: "6",
      question: "Do you alert us once our order ships?",
      answer: "Yes! An email will be sent to you with the tracking information once it ships out to you!"
    },
    {
      id: "7",
      question: "Where do I get tracking info?",
      answer: "An email with tracking details will be sent to you the moment your product is shipped out!"
    },
    {
      id: "8",
      question: "Have not received my order yet, now what?",
      answer: "First, check tracking info and see if it was delivered. If it says delivered but never received please allow a few more days. Sometimes products are delivered late by DHL or scanned delivered by mistake. Then call or email us regarding the whereabouts of your order!"
    }
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Help Center</h2>
          </div>
          
          <div className="flex flex-col space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-4 text-gray-600 group-open:hidden" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M5.80023 10.2433C5.80023 9.691 6.24795 9.24329 6.80023 9.24329C7.35252 9.24329 7.80023 9.691 7.80023 10.2433C7.80023 10.7956 7.35252 11.2433 6.80023 11.2433C6.24795 11.2433 5.80023 10.7956 5.80023 10.2433Z"></path>
                        <path d="M9.22974 10.2433C9.22974 9.691 9.67745 9.24329 10.2297 9.24329C10.782 9.24329 11.2297 9.691 11.2297 10.2433C11.2297 10.7956 10.782 11.2433 10.2297 11.2433C9.67745 11.2433 9.22974 10.7956 9.22974 10.2433Z"></path>
                        <path d="M12.6592 10.2433C12.6592 9.691 13.1069 9.24329 13.6592 9.24329C14.2115 9.24329 14.6592 9.691 14.6592 10.2433C14.6592 10.7956 14.2115 11.2433 13.6592 11.2433C13.1069 11.2433 12.6592 10.7956 12.6592 10.2433Z"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-gray-900">{faq.question}</h3>
                    </div>
                    <svg 
                      className="w-4 h-4 text-gray-600 transition-transform duration-300 group-open:rotate-45" 
                      viewBox="0 0 16 16" 
                      fill="currentColor"
                    >
                      <path d="M0 7H16V9H0V7Z"></path>
                      <path d="M7 16L7 1.19209e-07L9 0L9 16H7Z"></path>
                    </svg>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;