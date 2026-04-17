import { Trash2, Layers, LayoutGrid, X, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SelectionBar() {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between border-t border-border bg-surface px-3">
      {/* Selection cluster — elevated when active */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-sm border border-accent/30 bg-accent-soft px-2 py-1">
          <span className="mono text-[11px] font-semibold uppercase tracking-wider text-accent tabular">
            3 selecionados
          </span>
          <button className="text-accent/70 hover:text-accent" aria-label="Limpar seleção">
            <X className="h-3 w-3 stroke-[2]" />
          </button>
        </div>

        <div className="h-5 w-px bg-border" />

        <div className="flex items-center gap-0.5">
          <Button variant="toolbar" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive-soft hover:border-destructive/20">
            <Trash2 className="h-3.5 w-3.5" />
            Lixo
            <kbd className="mono ml-1 rounded-sm border border-border bg-surface px-1 text-[9px] text-muted-foreground">L</kbd>
          </Button>
          <Button variant="toolbar" size="sm">
            <Layers className="h-3.5 w-3.5" />
            Compatibilidade
            <kbd className="mono ml-1 rounded-sm border border-border bg-surface px-1 text-[9px] text-muted-foreground">C</kbd>
          </Button>
          <Button variant="toolbar" size="sm">
            <LayoutGrid className="h-3.5 w-3.5" />
            Novo produto
            <kbd className="mono ml-1 rounded-sm border border-border bg-surface px-1 text-[9px] text-muted-foreground">N</kbd>
          </Button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-3">
        <span className="mono text-[11px] text-muted-foreground tabular">
          <span className="text-foreground">1–12</span> de <span className="text-foreground">1.284</span>
        </span>
        <div className="h-5 w-px bg-border" />
        <div className="flex items-center gap-px rounded-sm border border-border bg-surface">
          <Button variant="ghost" size="icon-sm" className="rounded-none rounded-l-sm h-7 w-7" aria-label="Primeira">
            <ChevronsLeft className="h-3.5 w-3.5" />
          </Button>
          <div className="h-5 w-px bg-border" />
          <Button variant="ghost" size="icon-sm" className="rounded-none h-7 w-7" aria-label="Anterior">
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <div className="h-5 w-px bg-border" />
          <span className="mono px-2 text-[11px] text-foreground tabular">1 / 107</span>
          <div className="h-5 w-px bg-border" />
          <Button variant="ghost" size="icon-sm" className="rounded-none h-7 w-7" aria-label="Próxima">
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <div className="h-5 w-px bg-border" />
          <Button variant="ghost" size="icon-sm" className="rounded-none rounded-r-sm h-7 w-7" aria-label="Última">
            <ChevronsRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
