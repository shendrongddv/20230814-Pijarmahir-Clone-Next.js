import Link from "next/link";

import { ChevronDown, LucideIcon, MonitorCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Content
export const categoryLinks = [
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

export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Kategori <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {categoryLinks?.map((item) => (
            <MenuItemComponent
              key={item.id}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Components
// MenuItemComponent
interface MenuItemComponentProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <Link href={href} aria-label={label}>
      <DropdownMenuItem>
        <Icon className="mr-2 h-4 w-4" />
        <span>{label}</span>
      </DropdownMenuItem>
    </Link>
  );
};
