"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";
import { Pagination, A11y } from "swiper/modules";
import { Testimonialcard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/svg";
import {
  TESTIMONIAL_COLUMN_MAX_HEIGHT,
  SWIPER_MIN_HEIGHT,
} from "@/components/homepage/layoutConstants";
import { IMAGES } from "@/components/homepage/imageAssets";

const cardData = [
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: IMAGES.TestimonialAvatar,
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: IMAGES.TestimonialAvatar,
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: IMAGES.TestimonialAvatar,
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: IMAGES.TestimonialAvatar,
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: IMAGES.TestimonialAvatar,
  },
];

const Testimonial = () => {
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
    <section>
      <div className='max-w-7xl overflow-hidden w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-3 p-2 md:p-14 bg-gradient-to-br from-white to-transparent'>
        <div className='absolute  w-full h-full bg-primary/30 z-1 blur-3xl rounded-full opacity-40'></div>
        <div className='relative z-3 gap-4 hidden md:flex md:flex-row'>
          <div
            className={`flex flex-col ${TESTIMONIAL_COLUMN_MAX_HEIGHT} flex-wrap justify-center gap-4`}
          >
            {cardData.slice(0, 2).map((item, index) => (
              <Testimonialcard
                key={index}
                name={item.name}
                content={item.content}
                image={item.image}
              />
            ))}
          </div>
          <div
            className={`flex flex-col ${TESTIMONIAL_COLUMN_MAX_HEIGHT} flex-wrap justify-center gap-4`}
          >
            {cardData.slice(2).map((item, index) => (
              <Testimonialcard
                key={index + 2}
                name={item.name}
                content={item.content}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className='wrapper flex flex-col-reverse'>
          <div className='p-2 '>
            <div className='md:hidden pb-4 relative'>
              <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={16}
                slidesPerView={"auto"}
                centeredSlides={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                pagination={{ clickable: true }}
                className={`w-full ${SWIPER_MIN_HEIGHT} mySwiper`}
              >
                {cardData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Testimonialcard
                      key={index}
                      name={item.name}
                      content={item.content}
                      image={item.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Button
                onClick={handlePrev}
                className='swiper-button-prev-business absolute right-14 bottom-6 z-10 bg-white hover:bg-white/30 rounded-full p-2 transition-all duration-200'
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                onClick={handleNext}
                className='swiper-button-next-business absolute right-2 bottom-6 z-10 bg-white hover:bg-white/30 rounded-full p-2 transition-all duration-200'
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          <div>
            <div className='bg-green p-6 max-w-[435px]'>
              <h1 className='text-4xl  font-montserrat font-bold'>Our Customers love what we do</h1>
              <p className='text-bace text-gray-500 mt-4 md:mt-6'>
                We have provided a platform that provide solution with our unique features. Read
                testimonial from our customers.
              </p>
              <Button className='md:mt-6 bg-button-primary px-6 py-3 text-white mt-4 md:mt-8'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
