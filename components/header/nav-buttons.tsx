import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { User } from "lucide-react";

export const NavButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4 md:pl-8">
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "default",
            className: "px-8",
          }),
        )}
      >
        Masuk
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "destructive",
            size: "default",
            className: "px-8",
          }),
        )}
      >
        Masuk
      </Link>
    </div>
  );
};

export const NavMobileButtons = () => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({
          variant: "destructive",
          size: "icon",
          className: "shrink-0",
        }),
      )}
    >
      <User className="h-4 w-4" />
    </Link>
  );
};
