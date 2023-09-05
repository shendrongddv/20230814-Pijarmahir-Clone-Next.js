import { Item } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type CourseCard = {
  title: string;
  provider: string;
  reviewCount: number;
  price: number;
  isOnline: boolean;
  media: string;
};

export const CourseCard = ({
  title,
  provider,
  reviewCount,
  price,
  isOnline,
  media,
}: CourseCard) => {
  return (
    <div className="w-[20%] shrink-0 space-y-2 md:w-[30%]">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={`/courses/${media}`}
          alt={title}
          width={343}
          height={179}
          className="h-auto w-full"
        />
      </div>

      <Badge variant="secondary" className="text-foreground/50">
        Kursus&nbsp;
        {isOnline ? "Online" : "Offline"}
      </Badge>

      <h4 className="line-clamp-2 text-xs font-bold capitalize">{title}</h4>
      <span className="text-xs font-semibold text-foreground/50">
        {provider}
      </span>
      <div></div>
      <div className="text-sm font-bold">Rp. {price}</div>
    </div>
  );
};
