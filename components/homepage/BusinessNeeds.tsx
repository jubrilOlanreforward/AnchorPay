"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperRef } from "swiper";

import Herocard from "@/components/ui/card";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/svg";
import { ICONS } from "@/components/homepage/imageAssets";
import { SWIPER_MIN_HEIGHT, SWIPER_CARD_MIN_HEIGHT } from "@/components/homepage/layoutConstants";

const cardData = [
  {
    title: "Convenience",
    description:
      "Access multiple loan options all in one place, saving you time and effort from searching through numerous lenders.",
    image: ICONS.Icon1,
  },
  {
    title: "Multiple Options",
    description:
      "Enjoy a wide range of loan products from different vendors, allowing you to find the perfect fit for your specific needs and preferences.",
    image: ICONS.Icon2,
  },
  {
    title: "Competitive Rates",
    description:
      "With multiple lenders competing for your business, you're more likely to find competitive interest rates and favorable terms, ultimately saving you money.",
    image: ICONS.Icon3,
  },
  {
    title: "Streamlined Process",
    description:
      "Our platform simplifies the loan application and approval process, offering a seamless experience from start to finish, so you can get the funds you need quickly and efficiently.",
    image: ICONS.Icon4,
  },
];

export const BusinessNeeds = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className='bg-primary_one_600'>
      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-3 p-2 md:p-14 mx-auto'>
        <div className='flex item-center'>
          <h1 className='text-white text-2xl md:text-[52px] font-montserrat font-bold p-6'>
            Let’s take care of <br /> your personal &<br /> business needs
          </h1>
        </div>
        {/* Mobile Swiper */}
        <div className='md:hidden pb-4 overflow-hidden relative'>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            className={`w-full ${SWIPER_MIN_HEIGHT}`}
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index} className={`${SWIPER_CARD_MIN_HEIGHT}`}>
                <Herocard title={item.title} description={item.description} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handlePrev}
            title='Previous slide'
            aria-label='Previous slide'
            className='swiper-button-prev-business absolute right-14 bottom-6 z-10 bg-white hover:bg-white/30 rounded-full p-2 transition-all duration-200'
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={handleNext}
            title='Next slide'
            aria-label='Next slide'
            className='swiper-button-next-business absolute right-2 bottom-6 z-10 bg-white hover:bg-white/30 rounded-full p-2 transition-all duration-200'
          >
            <ArrowRightIcon />
          </button>
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

export default BusinessNeeds;
