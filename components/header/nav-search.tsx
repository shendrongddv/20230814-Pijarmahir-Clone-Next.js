import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div className="flex flex-1 overflow-hidden rounded-md border border-input">
      <Input
        type="email"
        placeholder="Cari kursus..."
        className="rounded-br-none rounded-tr-none border-input/0"
      />
      <Button
        type="submit"
        variant="secondary"
        size="icon"
        className="shrink-0 rounded-none"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavSearch;
