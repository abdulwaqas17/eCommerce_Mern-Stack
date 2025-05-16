import React from "react";

const OrderingFAQs = () => {
  const faqs = [
    {
      id: "1",
      question: "What payment methods do you accept?",
      answer: "We accept Paypal, Debit and all major Credit Cards",
      open: true
    },
    {
      id: "2",
      question: "What is your ordering process?",
      answer: "Ordering process is simply 4 quick steps: 1. Select your favorite items and add them to cart<br>2. Enter your billing and shipping information<br>3. Select shipping method<br>4. Checkout"
    },
    {
      id: "3",
      question: "What should I do if I made a mistake on my order?",
      answer: "Immediately contact us by phone or email and our team will gladly resolve all of your concerns! Email: support@leoclothes.com"
    },
    {
      id: "4",
      question: "How do I apply a coupon code?",
      answer: "Enter your coupon code inside you shopping cart! Coupon code section lies between your listed items and checkout! You can also enter your coupon code during checkout when entering your payment information! (Please note that you must hit apply coupon before adding payment)"
    },
    {
      id: "5",
      question: "How do I change my order?",
      answer: "Email us regarding all changes to an order!"
    },
    {
      id: "6",
      question: "Can I cancel my order?",
      answer: "We can only process cancellations for items that have not gone into production. Please email us at support@leoclothes.com with your order details we will cancel your order and provide a full refund. We cannot cancel orders once the printing process has begun."
    },
    {
      id: "7",
      question: "What's the status of my order?",
      answer: "Following a successful order, please expect a confirmation email. You will also receive an update email when your order goes into production. Once your order ships, we will send a third email with your tracking information. The most recent information on your order is always available via the receipt link provided in our email correspondence. If you did not receive the status update emails, please check your spam folder or promotions tab in case it was redirected there. Replacements, Exchanges, and Returns"
    },
    {
      id: "8",
      question: "What is your return policy?",
      answer: "Please see our Return Policy. My shirt doesn't fit. What can I do? You may exchange apparel items, unworn, unused, and unwashed, for a different size within 10 days of the delivery date. We can only accept apparel exchanges for a different size, in the same style and color that was originally ordered. Customers are responsible for return and exchange shipping rates. We do not exchange posters, hats, cell phone cases, or other non apparel products. Only one exchange is allowed for each item ordered. I'm unsatisfied with my product. What can I do? We are committed to providing you with the absolute best products, and are happy to replace your order for any of the following reasons: The product is flawed. The print quality is poor. The product you received is different from the product originally represented on our site. Please email us at support@leoclothes.com with a photo of the product you received along with detail shots you wish to include. We will use this information to look into a replacement and prevent future errors. Our customer service team will review your claim. If your claim is approved, we will provide you with a replacement free of charge. For all other requests please email us at support@leoclothes.com. Our customer service team will review your claim. If your claim is approved, we will provide you with a return address. Customers are responsible for return and exchange shipping rates. Please allow 3-5 business days after your return is received for a refund to appear. Any unauthorized returns, or returns of items that are washed, worn, or damaged will not be eligible for a refund or replacement, and the item will be forfeited."
    },
    {
      id: "9",
      question: "What if my order is defective, wrong size, or incorrect product?",
      answer: "Send us an email with attaching photo(s) and we will send out a replacement within 72 business hours!"
    },
    {
      id: "10",
      question: "What should I do in case of late or missing refunds?",
      answer: "<br>If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you've done all of this and you still have not received your refund yet, please contact us at support@leoclothes.com. Who will be responsible for shipping fee if I exchange or return an order. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund. Depending on where you live, the time it may take for your exchanged product to reach you, may vary. If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.<br>"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ordering</h2>
          </div>
          
          <div className="flex flex-col space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group" open={faq.open}>
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
                    <div 
                      className="text-gray-600" 
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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

export default OrderingFAQs;