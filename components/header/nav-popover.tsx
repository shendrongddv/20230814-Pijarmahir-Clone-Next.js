import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { ChevronDown, LucideIcon, MonitorCheck } from "lucide-react";
import Link from "next/link";

// Content
const categoryLinks = [
  {
    id: 1,
    label: "Kartu Prakerja",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 2,
    label: "Mahir Teknologi",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 3,
    label: "Mahir Digital",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 4,
    label: "Mahir Marketing",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 5,
    label: "Pengembangan Diri",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 6,
    label: "Mahir Bahasa",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 7,
    label: "UMKM",
    href: "/",
    icon: MonitorCheck,
  },
  {
    id: 8,
    label: "Mahir Telekomunikasi",
    href: "/",
    icon: MonitorCheck,
  },
];

export function NavPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Kategori <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-2">
        <ul>
          {categoryLinks?.map((item) => (
            <li key={item.id}>
              <LinkItemComponent
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

// Components
// LinkItemComponent
interface LinkItemComponentProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

const LinkItemComponent: React.FC<LinkItemComponentProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "default",
          className: "w-full justify-start px-4",
        }),
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Link>
  );
};
