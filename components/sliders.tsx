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
import { Star } from "lucide-react";
import { Badge } from "./ui/badge";

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
        // navigation={true}
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
        className="mySwiper AAA mt-16 w-full"
      >
        {contentCourses?.map((item) => (
          <SwiperSlide key={item.id} className="BBB">
            <CourseCard
              key={item.id}
              title={item.title}
              provider={item.provider}
              reviewCount={item.reviewCount}
              price={item.price}
              isOnline={item.isOnline}
              media={item.media}
            />
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

type CourseCard = {
  title: string;
  provider: string;
  reviewCount: number;
  price: number;
  isOnline: boolean;
  media: string;
};
const CourseCard = ({
  title,
  provider,
  reviewCount,
  price,
  isOnline,
  media,
}: CourseCard) => {
  return (
    <div className="CCC space-y-2">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/courses/${media}`}
          alt={title}
          width={343}
          height={179}
          className="h-auto w-full flex-1 shrink-0"
        />
      </div>

      <Badge
        variant="secondary"
        className="px-1.5 text-[10px] leading-none text-foreground/50"
      >
        {isOnline ? "Online" : "Offline"}
      </Badge>

      <h4 className="line-clamp-2 text-xs font-bold capitalize">{title}</h4>
      <span className="text-xs font-semibold text-foreground/50">
        {provider}
      </span>
      <div className="flex items-center">
        <div className="flex items-center">
          <Star className="h-3 w-3 pr-[1px] text-yellow-400 last:pr-0" />
          <Star className="h-3 w-3 pr-[1px] text-yellow-400 last:pr-0" />
          <Star className="h-3 w-3 pr-[1px] text-yellow-400 last:pr-0" />
          <Star className="h-3 w-3 pr-[1px] text-yellow-400 last:pr-0" />
          <Star className="h-3 w-3 pr-[1px] text-yellow-400 last:pr-0" />
        </div>
        <span className="ml-1 text-[10px] font-bold leading-none">5.0</span>
        <span className="ml-1 text-[10px] leading-none text-muted-foreground">
          ({reviewCount}&nbsp;Ulasan)
        </span>
      </div>
      <div className="text-sm font-bold">Rp. {price}</div>
    </div>
  );
};
