import { Filter, ChevronDown, SlidersHorizontal, Download, RefreshCw, Columns3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filters = [
  { label: "Status", value: "Importado, Aguardando" },
  { label: "Origem", value: "Semrush, Scrape" },
  { label: "Volume", value: "≥ 100" },
  { label: "Data", value: "Últimos 30 dias" },
];

export function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2">
      <div className="flex items-center gap-1.5 overflow-x-auto">
        <Button variant="toolbar" size="sm">
          <Filter className="h-3.5 w-3.5" />
          Filtros
          <Badge variant="solid" className="ml-1 h-4 px-1 text-[10px]">
            {filters.length}
          </Badge>
        </Button>

        <div className="mx-1 h-5 w-px bg-border" />

        {filters.map((f) => (
          <button
            key={f.label}
            className="group flex h-8 items-center gap-1.5 rounded-sm border border-dashed border-border-strong px-2 text-xs transition-colors hover:border-foreground/30 hover:bg-secondary"
          >
            <span className="text-muted-foreground">{f.label}</span>
            <span className="text-foreground">{f.value}</span>
            <ChevronDown className="h-3 w-3 stroke-[1.5] text-muted-foreground" />
          </button>
        ))}

        <Button variant="link" size="sm" className="ml-1 h-8 px-2 text-xs text-muted-foreground hover:text-foreground">
          Limpar
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="toolbar" size="sm">
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="mono text-[10px] text-muted-foreground">há 12s</span>
        </Button>
        <Button variant="toolbar" size="icon-sm">
          <Columns3 className="h-3.5 w-3.5" />
        </Button>
        <Button variant="toolbar" size="icon-sm">
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </Button>
        <Button variant="toolbar" size="icon-sm">
          <Download className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
