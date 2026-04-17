import { Trash2, Layers, LayoutGrid, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SelectionBar() {
  return (
    <div className="flex h-10 items-center justify-between border-t border-border bg-surface px-4">
      <div className="flex items-center gap-3">
        <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span className="text-foreground tabular">3</span> de <span className="tabular">1.284</span> selecionados
        </span>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-1">
          <Button variant="toolbar" size="sm">
            <Trash2 className="h-3.5 w-3.5" />
            Marcar como lixo
          </Button>
          <Button variant="toolbar" size="sm">
            <Layers className="h-3.5 w-3.5" />
            Compatibilidade
          </Button>
          <Button variant="toolbar" size="sm">
            <LayoutGrid className="h-3.5 w-3.5" />
            Novo produto
          </Button>
        </div>
        <Button variant="ghost" size="icon-sm">
          <X className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <span className="mono text-[11px] text-muted-foreground tabular">1–12 / 1.284</span>
        <div className="flex items-center">
          <Button variant="toolbar" size="icon-sm">
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button variant="toolbar" size="icon-sm">
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
