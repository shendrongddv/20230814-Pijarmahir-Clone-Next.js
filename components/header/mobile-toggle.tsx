import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SiteLogo } from "../site-logo";

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
            <Button variant="outline">Daftar</Button>
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
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
      </ul>
      <span className="text-sm font-medium text-muted-foreground">
        Kategori
      </span>
      <ul className="mt-2 grid grid-cols-2 gap-2">
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Daftar
            </Button>
          </SheetClose>
        </li>
      </ul>
    </nav>
  );
};
