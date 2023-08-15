// Image
import imgPijarCamp from "../../public/pijarcamp.jpg";
import imgPijarCampMobile from "../../public/pijarcamp-sm.jpg";
import imgPijarPrakerja from "../../public/pijarmahir-x-prakerja.jpg";
import imgPijarPrakerjaMobile from "../../public/pijarmahir-x-prakerja-sm.jpg";
import Image from "next/image";
import HorizontalScroll from "@/components/horizontal-scroll";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Banner Sliders */}
      {/* ./ Banner Sliders */}

      {/* Category */}
      {/* ./ Category */}

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
                  className="flex h-full w-auto md:hidden"
                />
                {/* Image Desktop */}
                <Image
                  src={imgPijarCamp}
                  alt="Pijar Camp"
                  width={812}
                  height={294}
                  className="hidden h-full w-auto md:flex"
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
                  className="flex h-full w-auto md:hidden"
                />
                {/* Image Desktop */}
                <Image
                  src={imgPijarPrakerja}
                  alt="Pijar Prakerja"
                  width={812}
                  height={294}
                  className="hidden h-full w-auto md:flex"
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
