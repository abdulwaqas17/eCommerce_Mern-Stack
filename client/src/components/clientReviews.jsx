import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ClientReview = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I bought medicine at Medilazar shop a lot. Products are so good. The price is a bit high because of high-quality medicines. No problem",
      avatar: "//ap-medilazar.myshopify.com/cdn/shop/files/avatar_1.png?v=1734680559&width=58",
      name: "Varun sonagra",
      date: "August 18, 2020"
    },
    {
      id: 2,
      rating: 4,
      text: "I bought medicine at Medilazar shop a lot. Products are so good. The price is a bit high because of high-quality medicines. No problem",
      avatar: "//ap-medilazar.myshopify.com/cdn/shop/files/avatar_2.png?v=1734680559&width=58",
      name: "Varun sonagra",
      date: "August 18, 2020"
    },
    {
      id: 3,
      rating: 5,
      text: "I bought medicine at Medilazar shop a lot. Products are so good. The price is a bit high because of high-quality medicines. No problem",
      avatar: "//ap-medilazar.myshopify.com/cdn/shop/files/avatar_3.png?v=1734680559&width=58",
      name: "Varun sonagra",
      date: "August 18, 2020"
    },
    {
      id: 4,
      rating: 3,
      text: "I bought medicine at Medilazar shop a lot. Products are so good. The price is a bit high because of high-quality medicines. No problem",
      avatar: "//ap-medilazar.myshopify.com/cdn/shop/files/avatar_2.png?v=1734680559&width=58",
      name: "Varun sonagra",
      date: "August 18, 2020"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`inline-flex ${i <= rating ? "text-[#fa9a00]" : "text-[#c4c4c4]"}`}>
          {i <= rating ? (
            <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.16966 6.81574L11.7859 4.72705C12.1884 4.39725 11.9871 3.8476 11.484 3.8476L8.16342 3.62773C7.96217 3.62773 7.76092 3.5178 7.76092 3.29794L6.45281 0.329794C6.25156 -0.109931 5.64782 -0.109931 5.44657 0.329794L4.3397 3.29794C4.23908 3.5178 4.03783 3.62773 3.83658 3.62773L0.515989 3.8476C0.0128689 3.8476 -0.188379 4.39725 0.214117 4.72705L2.83034 6.81574C2.93097 6.92567 3.03159 7.0356 2.93097 7.25547L2.12597 10.4435C2.02535 10.7733 2.52847 11.213 2.93097 10.8832L5.74844 9.1243C5.94969 9.01437 6.15094 9.01437 6.35219 9.1243L9.06903 10.8832C9.47153 11.1031 9.97465 10.7733 9.87403 10.3335L9.06903 7.25547C8.96841 7.14553 9.06903 6.92567 9.16966 6.81574Z" />
            </svg>
          ) : (
            <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.48473 6.08296L10.1408 4.76085L8.12175 4.62716C7.8643 4.62014 7.56372 4.54716 7.29797 4.35361C7.05297 4.17517 6.85932 3.90512 6.78925 3.57281L5.985 1.74793L5.26404 3.68122L5.249 3.71409C4.98386 4.29343 4.43607 4.61207 3.87815 4.62717L1.85924 4.76085L3.51527 6.08296L3.56799 6.14055C3.56953 6.14224 3.57181 6.14465 3.57475 6.14776C3.61718 6.19261 3.79713 6.38283 3.89516 6.65056C4.01207 6.96987 3.98755 7.28736 3.88382 7.56648L3.42129 9.39823L5.24354 8.26063L5.26905 8.2467C5.76906 7.97357 6.33157 7.97357 6.83157 8.2467L6.86432 8.26458L8.59179 9.38296L8.13662 7.6425C7.96008 7.26825 8.041 6.89586 8.08741 6.74377C8.15947 6.5076 8.28936 6.2964 8.43202 6.14055L8.48473 6.08296ZM9.06903 7.25547L9.87403 10.3335C9.97465 10.7733 9.47153 11.1031 9.06903 10.8832L6.35219 9.1243C6.15094 9.01437 5.94969 9.01437 5.74844 9.1243L2.93097 10.8832C2.52847 11.213 2.02535 10.7733 2.12597 10.4435L2.93097 7.25547C3.03159 7.0356 2.93097 6.92567 2.83034 6.81574L0.214117 4.72705C-0.188379 4.39725 0.0128689 3.8476 0.515989 3.8476L3.83658 3.62773C4.03783 3.62773 4.23908 3.5178 4.3397 3.29794L5.44657 0.329794C5.64782 -0.109931 6.25156 -0.109931 6.45281 0.329794L7.76092 3.29794C7.76092 3.5178 7.96217 3.62773 8.16342 3.62773L11.484 3.8476C11.9871 3.8476 12.1884 4.39725 11.7859 4.72705L9.16966 6.81574C9.06903 6.92567 8.96841 7.14553 9.06903 7.25547Z" />
            </svg>
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="bg-[#f6f7f7] bg-gradient-to-b from-[#eaf5ff] to-white py-[67px] md:py-[60px] sm:py-[60px] px-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[44px]">
          <h2 className="text-[30px] leading-[1.2] text-[#1d2a38] mb-0 max-w-[410px] mx-auto">
            Trusted by 10 Lakh Customers across 3600+ Cities
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".testimonial-next-button",
              prevEl: ".testimonial-prev-button",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-[5px] p-[43px] md:p-[30px] sm:p-[20px]">
                  <div className="flex items-center gap-[2px] mb-[15px]">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[#7d879c] mb-[20px]">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-[12px] mb-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-[58px] h-[58px]" 
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[16px] leading-[1.5] text-[#1d2a38] mb-0 font-other">
                        {testimonial.name}
                      </p>
                      <p className="text-[14px] leading-[1.7] text-[#7d879c] mb-0">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between mt-4">
            <button className="testimonial-prev-button swiper-button-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.757812 5.34375L4.32031 9.09375C4.50781 9.28125 4.73438 9.375 5 9.375C5.25 9.375 5.46875 9.28906 5.65625 9.11719C5.84375 8.94531 5.9375 8.72656 5.9375 8.46094C5.9375 8.19531 5.85156 7.96875 5.67969 7.78125L3.61719 5.625H10.0625C10.3281 5.625 10.5547 5.53906 10.7422 5.36719C10.9141 5.17969 11 4.95312 11 4.6875C11 4.42188 10.9141 4.20312 10.7422 4.03125C10.5547 3.84375 10.3281 3.75 10.0625 3.75H3.61719L5.67969 1.59375C5.85156 1.40625 5.9375 1.17969 5.9375 0.914062C5.9375 0.648438 5.84375 0.429688 5.65625 0.257812C5.46875 0.0859375 5.24219 0 4.97656 0C4.71094 0 4.49219 0.09375 4.32031 0.28125L0.757812 4.03125C0.585938 4.21875 0.5 4.4375 0.5 4.6875C0.5 4.9375 0.585938 5.15625 0.757812 5.34375Z" />
              </svg>
            </button>
            <button className="testimonial-next-button swiper-button-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2422 5.34375L6.67969 9.09375C6.49219 9.28125 6.26562 9.375 6 9.375C5.75 9.375 5.53125 9.28906 5.34375 9.11719C5.15625 8.94531 5.0625 8.72656 5.0625 8.46094C5.0625 8.19531 5.14844 7.96875 5.32031 7.78125L7.38281 5.625H0.9375C0.671875 5.625 0.445312 5.53906 0.257812 5.36719C0.0859375 5.17969 0 4.95312 0 4.6875C0 4.42188 0.0859375 4.20312 0.257812 4.03125C0.445312 3.84375 0.671875 3.75 0.9375 3.75H7.38281L5.32031 1.59375C5.14844 1.40625 5.0625 1.17969 5.0625 0.914062C5.0625 0.648438 5.15625 0.429688 5.34375 0.257812C5.53125 0.0859375 5.75781 0 6.02344 0C6.28906 0 6.50781 0.09375 6.67969 0.28125L10.2422 4.03125C10.4141 4.21875 10.5 4.4375 10.5 4.6875C10.5 4.9375 10.4141 5.15625 10.2422 5.34375Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;