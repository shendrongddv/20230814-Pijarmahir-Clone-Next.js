import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { NavPopover } from "./nav-popover";
import { MobileToggle } from "./mobile-toggle";
import NavLogo from "./nav-logo";
import { NavMobileButtons } from "./nav-buttons";
import NavSearch from "./nav-search";

const HeaderMain = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full gap-2 border-b bg-white px-4 max-md:py-2 md:gap-4">
      <div className="container">
        <div className="flex items-center justify-between gap-2 md:h-20">
          {/* MobileToggle */}
          <div className="flex md:hidden">
            <MobileToggle />
          </div>

          {/* NavLogo */}
          <div className="hidden md:flex">
            <NavLogo />
          </div>

          {/* NavPopover */}
          <div className="hidden md:flex">
            <NavPopover />
          </div>

          {/* NavSearch */}
          <NavSearch />

          {/* NavGroups */}
          <div className="hidden items-center justify-center gap-4 md:flex">
            {/* NavLinks */}
            <div className="flex items-center justify-center gap-0">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "shrink-0",
                  }),
                )}
              >
                Prakerja
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "shrink-0",
                  }),
                )}
              >
                Pijar Camp
              </Link>
            </div>

            {/* NavButtons */}
            <div className="flex items-center justify-center gap-2">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "default",
                    className: "shrink-0 px-6",
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
                    className: "shrink-0 px-6",
                  }),
                )}
              >
                Daftar
              </Link>
            </div>
          </div>

          {/* NavMobileButtons */}
          <div className="flex md:hidden">
            <NavMobileButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
