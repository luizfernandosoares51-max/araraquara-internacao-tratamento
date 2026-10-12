import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function TreatmentNavigationItem() {
  return (
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto min-h-11 gap-1 px-0 text-[11px] font-semibold uppercase text-muted-foreground hover:text-secondary">
            Tratamento <ChevronDown className="size-3" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="home-serene w-72 max-w-[calc(100vw-2rem)]">
          <DropdownMenuItem asChild className="min-h-12 whitespace-normal">
            <Link to="/tratamento">Dependência química e alcoolismo</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="min-h-12 whitespace-normal">
            <Link to="/tratamento-jogos-compulsivos-apostas">Orientação sobre jogos e apostas</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}