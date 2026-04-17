import { ChevronRight, Search, Command, Bell, HelpCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-surface px-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12.5px]">
        <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Operação</span>
        <ChevronRight className="h-3 w-3 text-muted-foreground/50 stroke-[1.5]" />
        <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Triagem</span>
        <ChevronRight className="h-3 w-3 text-muted-foreground/50 stroke-[1.5]" />
        <span className="font-medium text-foreground">Fila inicial</span>
        <span className="mono ml-1.5 inline-flex items-center gap-1 rounded-sm border border-border bg-surface-sunken px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-accent" />
          BCH-2024
        </span>
      </div>

      {/* Search */}
      <div className="mx-6 hidden max-w-md flex-1 lg:flex">
        <div className="group relative flex h-8 w-full items-center rounded-sm border border-border bg-surface-sunken px-2.5 transition-colors focus-within:border-accent focus-within:bg-surface">
          <Search className="h-3.5 w-3.5 stroke-[1.5] text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar termos, grupos, lotes, PN/COD…"
            className="h-full flex-1 bg-transparent px-2 text-[13px] outline-none placeholder:text-muted-foreground"
          />
          <kbd className="mono flex items-center gap-0.5 rounded-sm border border-border bg-surface px-1 py-0.5 text-[10px] text-muted-foreground">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <Button variant="toolbar" size="sm">
          <HelpCircle className="h-3.5 w-3.5" />
          Atalhos
        </Button>
        <Button variant="toolbar" size="icon-sm">
          <Bell className="h-3.5 w-3.5" />
        </Button>
        <div className="mx-1 h-5 w-px bg-border" />
        <Button size="sm">
          <Plus className="h-3.5 w-3.5" />
          Importar lote
        </Button>
      </div>
    </header>
  );
}
