import { Item } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Star } from "lucide-react";

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
    <div className="w-[40vw] shrink-0 space-y-2 max-md:first:ml-4 max-md:last:mr-4 md:w-1/4">
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
