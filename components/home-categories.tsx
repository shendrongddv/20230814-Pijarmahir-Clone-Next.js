// Content
import { contentCategories } from "@/content";
import Image from "next/image";

const HomeCategories = () => {
  const items = contentCategories;

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
      {items?.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col items-center gap-1 md:gap-2"
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
          <span className="text-center text-xs font-medium md:text-base">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HomeCategories;
