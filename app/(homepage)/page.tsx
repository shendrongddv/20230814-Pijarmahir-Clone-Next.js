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
import { Sliders } from "@/components/sliders";
import { HomepageOnlineOffline } from "@/components/home-online-offline";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Circle } from "lucide-react";

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
      <HomepageOnlineOffline />
      {/* ./Online & Offline Courses */}

      {/* Best Sellers */}
      <section className="pt-16 md:px-4">
        <div className="container flex flex-col gap-4 md:gap-6">
          {/* Title */}
          <div className="flex items-center justify-between max-md:px-4">
            <h2 className="h2 font-semibold">Best Seller</h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 font-semibold text-accent-foreground",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          {/* Content */}
          <Sliders />
        </div>
      </section>
      {/* ./ Best Sellers */}

      {/* Populer */}
      <section className="pt-16 md:px-4">
        <div className="container flex flex-col gap-4 md:gap-6">
          {/* Title */}
          <div className="flex items-center justify-between max-md:px-4">
            <h2 className="h2 font-semibold">Populer Saat Ini</h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 font-semibold text-accent-foreground",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          {/* Content */}
          <Sliders />
        </div>
      </section>
      {/* ./ Populer */}

      {/* Ready */}
      <section className="pt-16 md:px-4">
        <div className="container flex flex-col gap-4 md:gap-6">
          {/* Title */}
          <div className="flex items-center justify-between max-md:px-4">
            <h2 className="h2 font-semibold">
              Siap Jadi Talenta Digital terbaik
            </h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 font-semibold text-accent-foreground",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          {/* Content */}
          <Sliders />
        </div>
      </section>
      {/* ./ Ready */}

      {/* Special for You */}
      <section className="pt-16 md:px-4">
        <div className="container flex flex-col gap-4 md:gap-6">
          {/* Title */}
          <div className="flex items-center justify-between max-md:px-4">
            <h2 className="h2 font-semibold">Pilihan Terbaik Untukmu</h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 font-semibold text-accent-foreground",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          {/* Content */}
          <Sliders />
        </div>
      </section>
      {/* ./ Special for You */}

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
