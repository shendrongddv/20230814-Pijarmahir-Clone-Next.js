"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Contents
import { contentCourses } from "@/content";

// Components
import Image from "next/image";
import { useRef } from "react";

export const Sliders = () => {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={false}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        className="mySwiper mt-16 w-full border"
      >
        {contentCourses?.map((item) => (
          <SwiperSlide key={item.id} className="AAA">
            <div className="CCC overflow-hidden rounded-lg">
              <Image
                src={`/courses/${item.media}`}
                alt={item.title}
                width={343}
                height={179}
                className="h-auto w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperButtonNext>Next</SwiperButtonNext>
      </Swiper>
    </>
  );
};

type SwiperButtonNextProps = {
  children: React.ReactNode;
};

const SwiperButtonNext = ({ children }: SwiperButtonNextProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};
