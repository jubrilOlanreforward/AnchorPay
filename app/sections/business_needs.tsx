"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Herocard from "@/components/ui/card";
import Icon1 from "@/public/icons/cardicon1.svg";
import Icon2 from "@/public/icons/cardicon2.svg";
import Icon3 from "@/public/icons/cardicon3.svg";
import Icon4 from "@/public/icons/cardicon4.svg";

const cardData = [
  {
    title: "Convenience",
    description:
      "Access multiple loan options all in one place, saving you time and effort from searching through numerous lenders.",
    image: Icon1,
  },
  {
    title: "Multiple Options",
    description:
      "Enjoy a wide range of loan products from different vendors, allowing you to find the perfect fit for your specific needs and preferences.",
    image: Icon2,
  },
  {
    title: "Competitive Rates",
    description:
      "With multiple lenders competing for your business, you're more likely to find competitive interest rates and favorable terms, ultimately saving you money.",
    image: Icon3,
  },
  {
    title: "Streamlined Process",
    description:
      "Our platform simplifies the loan application and approval process, offering a seamless experience from start to finish, so you can get the funds you need quickly and efficiently.",
    image: Icon4,
  },
];

export const Business_needs = () => {
  return (
    <section className='bg-primary_one_600'>
      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-3 p-2 md:p-14'>
        <div className='flex item-center'>
          <h1 className='text-white text-2xl md:text-[52px] font-montserrat font-bold p-6'>
            Let’s take care of <br /> your personal &<br /> business needs
          </h1>
        </div>
        {/* Mobile Swiper */}
        <div className='md:hidden pb-4 overflow-hidden'>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className=' w-full'
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                <Herocard title={item.title} description={item.description} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className='hidden md:grid grid-cols-2 gap-6 items-center relative'>
          {cardData.map((item, index) => (
            <Herocard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business_needs;
