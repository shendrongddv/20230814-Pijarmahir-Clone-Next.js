import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideIcon, Menu } from "lucide-react";
import { SiteLogo } from "../site-logo";
import { categoryLinks } from "./nav-dropdown";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col justify-start p-0"
      >
        <SheetHeader className="border-b p-4">
          <SheetClose asChild>
            <SiteLogo />
          </SheetClose>
        </SheetHeader>
        {/* Main */}
        <NavMobile />
        {/* ./ Main */}
        <SheetFooter className="mt-auto grid grid-cols-2 gap-2 border-t p-4">
          <SheetClose asChild>
            <Button
              variant="secondary"
              className="bg-accent-foreground text-foreground hover:bg-accent-foreground/90 hover:text-foreground"
            >
              Daftar
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="default">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const NavMobile = () => {
  return (
    <nav className="px-4">
      <ul className="mb-4 grid grid-cols-2 gap-2">
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Prakerja
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Pijar Camp
            </Button>
          </SheetClose>
        </li>
      </ul>
      <span className="text-sm font-medium">Kategori</span>
      <ul className="mt-2 grid gap-1">
        {categoryLinks?.map((item) => (
          <li key={item.id}>
            <CategoryItem
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

type TCategoryItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const CategoryItem = ({ label, href, icon: Icon }: TCategoryItem) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "default",
            className:
              "group w-full justify-start text-foreground hover:text-foreground",
          }),
        )}
      >
        <span className="flex -translate-x-4 items-center justify-start transition-transform duration-300 group-hover:translate-x-0">
          <Icon className="mr-2 h-4 w-4 text-accent-foreground" />
          {label}
        </span>
      </Link>
    </SheetClose>
  );
};
