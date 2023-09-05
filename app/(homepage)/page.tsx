import Image from "next/image";

// Images
import imgPijarCamp from "../../public/pijarcamp.jpg";
import imgPijarCampMobile from "../../public/pijarcamp-sm.jpg";
import imgPijarPrakerja from "../../public/pijarmahir-x-prakerja.jpg";
import imgPijarPrakerjaMobile from "../../public/pijarmahir-x-prakerja-sm.jpg";

// Components
import BannerSlider from "@/components/banner-slider";
import HomeCategories from "@/components/home-categories";
import HorizontalScroll from "@/components/horizontal-scroll";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { contentCourses } from "@/content";
import { CourseCard } from "@/components/course-card";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Banner Sliders */}
      <section id="banners" className="px-4 py-4 md:py-16">
        <div className="container w-full justify-center">
          <BannerSlider />
        </div>
      </section>
      {/* ./ Banner Sliders */}

      {/* Category */}
      <section id="categories" className="px-4 pb-16">
        <div className="container">
          <HomeCategories />
        </div>
      </section>
      {/* ./ Category */}

      {/* Online & Offline Courses */}
      <section
        id="courses"
        className="bg-[url(/backgrounds/bg-1.svg)] bg-cover bg-center bg-no-repeat px-4 py-16"
      >
        <div className="container space-y-16">
          {/* Online Courses */}
          <div className="grid grid-cols-2 items-center gap-4 md:gap-6">
            {/* Col */}
            <div className="">
              <div className="flex w-max items-center gap-1 rounded-lg rounded-br-3xl rounded-tr-3xl bg-white py-1 pl-2 pr-4 md:gap-2 md:pl-4 md:pr-8">
                <span className="h-3 w-3 rounded-full bg-blue-900 md:h-4 md:w-4"></span>
                <h2 className="h2 font-semibold">Kursus Online Prakerja</h2>
              </div>
            </div>
            {/* Col */}
            <div className="text-end text-white max-md:px-4">Lihat Semua</div>
            {/* Col */}
          </div>
          {/* ./ Online Courses */}

          {/* Offline Courses */}
          <div className="grid grid-cols-2 items-center gap-4 md:gap-6">
            {/* Col */}
            <div className="">
              <div className="flex w-max items-center gap-1 rounded-lg rounded-br-3xl rounded-tr-3xl bg-white py-1 pl-2 pr-4 md:gap-2 md:pl-4 md:pr-8">
                <span className="h-3 w-3 rounded-full bg-blue-900 md:h-4 md:w-4"></span>
                <h2 className="h2 font-semibold">Kursus Offline Prakerja</h2>
              </div>
            </div>
            {/* Col */}
            <div className="text-end text-white max-md:px-4">Lihat Semua</div>
            {/* Col */}
          </div>
          {/* ./ Offline Courses */}
        </div>
      </section>
      {/* ./Online & Offline Courses */}

      {/* Best Sellers */}
      <section className="border-b py-16 md:px-4">
        <div className="container flex flex-col gap-4">
          <h2 className="h2 font-semibold max-md:pl-4">Best Sellers</h2>

          {/* # */}
          <ScrollArea>
            <div className="flex gap-4">
              {contentCourses?.map((item) => (
                <CourseCard
                  key={item.id}
                  title={item.title}
                  provider={item.provider}
                  reviewCount={item.reviewCount}
                  price={item.price}
                  isOnline={item.isOnline}
                  media={item.media}
                />
              ))}
            </div>
            <div className="mt-4">
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>
      </section>
      {/* ./ Best Sellers */}

      {/* Specials */}
      <section id="specials" className="px-4 pt-16">
        <div className="container">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <h2 className="h2 font-semibold">Spesial hanya di Pijar Mahir</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              {/* Col */}
              <div className="overflow-hidden rounded-lg">
                {/* Image Mobile */}
                <Image
                  src={imgPijarCampMobile}
                  alt="Pijar Camp"
                  width={306}
                  height={447}
                  className="flex h-auto w-full md:hidden"
                />
                {/* Image Desktop */}
                <Image
                  src={imgPijarCamp}
                  alt="Pijar Camp"
                  width={812}
                  height={294}
                  className="hidden h-auto w-full md:flex"
                />
              </div>
              {/* Col */}
              <div className="overflow-hidden rounded-lg">
                {/* Image Mobile */}
                <Image
                  src={imgPijarPrakerjaMobile}
                  alt="Pijar Prakerja"
                  width={306}
                  height={447}
                  className="flex h-auto w-full md:hidden"
                />
                {/* Image Desktop */}
                <Image
                  src={imgPijarPrakerja}
                  alt="Pijar Prakerja"
                  width={812}
                  height={294}
                  className="hidden h-auto w-full md:flex"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Specials */}

      {/* Partners */}
      <section id="partners" className="pb-12 pt-16 md:px-4">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-4 md:gap-6">
            {/* Col */}
            <div className="max-md:px-4">
              <h2 className="h2 font-semibold">Mitra Pelatihan</h2>
            </div>
            {/* Col */}
            <div className="text-end max-md:px-4">Lihat Semua</div>
            {/* Col */}
            <div className="col-span-2">
              <HorizontalScroll />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Reviews */}
      {/* ./ Reviews */}
    </main>
  );
}
