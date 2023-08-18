// Content
import { contentCategories } from "@/content";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HomeCategories = () => {
  const items = contentCategories;

  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-6">
      {items?.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col items-center gap-1 max-md:pb-2 md:gap-2"
        >
          <div className="w-full overflow-hidden rounded-lg">
            <Image
              src={`/categories/${item.img}`}
              alt={item.title}
              width={1020}
              height={540}
              className="h-auto w-full scale-100 transition duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-center text-[10px] font-medium md:text-base">
            {item.title}
          </span>
        </div>
      ))}

      <div className="group flex flex-col items-center gap-1 max-md:pb-2 md:hidden md:gap-2">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-slate-100">
          <ChevronRight className="h-10 w-10 scale-90 opacity-25 transition duration-200 group-hover:scale-110 group-hover:opacity-50" />
        </div>
        <span className="text-center text-[10px] font-medium md:text-base">
          Temukan Minatmu
        </span>
      </div>
    </div>
  );
};

export default HomeCategories;
