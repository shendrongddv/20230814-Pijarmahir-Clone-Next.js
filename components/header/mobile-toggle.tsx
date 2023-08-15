import { Button } from "@/components/ui/button";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLogo from "./nav-logo";

export function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5 p-0">
        {/* Content */}
        <NavMobile />
        {/* Content */}
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

const NavMobile = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="border-b p-4">
        <NavLogo />
      </div>

      {/* Main */}

      {/* Footer */}
    </div>
  );
};
