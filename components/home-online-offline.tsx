import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { Circle } from "lucide-react";

import MediaShape from "@/public/shape-1.svg";
import MediaShape2 from "@/public/shape-2.png";

import { Sliders } from "./sliders";
import Image from "next/image";

export const HomepageOnlineOffline = () => {
  return (
    <section className="relative overflow-hidden bg-[url(/bg-gradient-1.svg)] bg-cover bg-center bg-no-repeat py-16 md:px-4">
      <div className="container flex flex-col gap-16">
        {/* Online Courses */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between max-md:px-4">
            <h2
              className={cn(
                buttonVariants({
                  variant: "heading",
                  className:
                    "h-max rounded-br-3xl rounded-tr-3xl bg-white py-2 pl-2 pr-6 font-semibold leading-none text-primary-foreground",
                }),
              )}
            >
              <Circle className="mr-2 h-4 w-4" />
              Kursus Online Prakerja
            </h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 text-white",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          <Sliders />
        </div>

        {/* Offline Courses */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between max-md:px-4">
            <h2
              className={cn(
                buttonVariants({
                  variant: "heading",
                  className:
                    "h-max rounded-br-3xl rounded-tr-3xl bg-white py-2 pl-2 pr-6 font-semibold leading-none text-secondary-foreground",
                }),
              )}
            >
              <Circle className="mr-2 h-4 w-4" />
              Kursus Offline Prakerja
            </h2>

            <Link
              href="/"
              aria-label="Lihat Semua"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "px-0 py-0 text-white",
                }),
              )}
            >
              Lihat Semua
            </Link>
          </div>

          <Sliders />
        </div>
      </div>

      {/* Decoration */}
      <Image
        src={MediaShape}
        alt="Decoration"
        className="absolute -bottom-16 -left-16 z-0 h-64 w-auto sm:h-auto"
      />

      {/* Decoration 2 */}
      <Image
        src={MediaShape2}
        alt="Decoration"
        className="absolute -right-0 -top-0 z-0 h-64 w-3/5 md:w-auto"
      />
    </section>
  );
};
