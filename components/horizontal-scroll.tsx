import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Content
import { contentPartners } from "@/content";
import Image from "next/image";

const HorizontalScroll = () => {
  const items = contentPartners;

  return (
    <ScrollArea className="">
      <div className="flex w-full gap-2 md:gap-4">
        {items?.map((item) => (
          <div
            key={item.id}
            className="group flex w-5/12 shrink-0 flex-col items-center max-md:first:pl-4 max-md:last:pr-4 md:w-2/12"
          >
            <div className="flex h-full w-full items-center justify-center rounded-lg border p-2 transition duration-200 group-hover:shadow-md">
              <Image
                src={`/partners/${item.img}`}
                alt={item.name}
                width={200}
                height={150}
                className="max-h-14 w-auto scale-100 transition duration-200 group-hover:scale-90 md:max-h-20"
              />
            </div>
            <span className="mt-2 text-center text-sm font-medium opacity-75">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ScrollBar orientation="horizontal" className="max-md:px-4" />
      </div>
    </ScrollArea>
  );
};

export default HorizontalScroll;
