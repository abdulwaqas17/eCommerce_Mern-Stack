import React from "react";
import { useTranslation } from "react-i18next";

const ForForNewsletter = () => {
     const { t } = useTranslation();
  return (
    <section className=" py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t("headings.newsletterSignup")}
          </h2>
          <p className="text-gray-600 max-w-xl">
            Join 60,000+ Subscribers and get a new discount coupon every
            Saturday.
          </p>

          <form
            method="POST"
            action="/contact#contact_form"
            className="w-full max-w-md"
          >
            <input type="hidden" name="form_type" value="customer" />
            <input type="hidden" name="utf8" value="✓" />
            <input type="hidden" name="contact[tags]" value="newsletter" />
            <input
              type="hidden"
              name="contact[context]"
              value="newsletter-form"
            />

            <div className="w-full flex items-center gap-2 bg-white rounded-full p-2 shadow-sm">
              <input
                type="email"
                name="contact[email]"
                placeholder="Your email address..."
                required
                className="flex-1 md:px-4 px-2 py-2 bg-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-cyan-600 text-white  md:px-5 px-2 py-1 md:py-2 rounded-full hover:bg-cyan-700 transition md:text-xl text-sm"
              >
                Subscribe
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2422 5.65625L6.67969 9.40625C6.49219 9.59375 6.26562 9.6875 6 9.6875C5.75 9.6875 5.53125 9.60156 5.34375 9.42969C5.15625 9.25781 5.0625 9.03906 5.0625 8.77344C5.0625 8.50781 5.14844 8.28125 5.32031 8.09375L7.38281 5.9375H0.9375C0.671875 5.9375 0.445312 5.85156 0.257812 5.67969C0.0859375 5.49219 0 5.26562 0 5C0 4.73438 0.0859375 4.51562 0.257812 4.34375C0.445312 4.15625 0.671875 4.0625 0.9375 4.0625H7.38281L5.32031 1.90625C5.14844 1.71875 5.0625 1.49219 5.0625 1.22656C5.0625 0.960938 5.15625 0.742188 5.34375 0.570312C5.53125 0.398438 5.75781 0.3125 6.02344 0.3125C6.28906 0.3125 6.50781 0.40625 6.67969 0.59375L10.2422 4.34375C10.4141 4.53125 10.5 4.75 10.5 5C10.5 5.25 10.4141 5.46875 10.2422 5.65625Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForForNewsletter;
