import { Filter, ChevronDown, SlidersHorizontal, Download, RefreshCw, Columns3, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = [
  { label: "Status", value: "Importado, Aguardando" },
  { label: "Origem", value: "Semrush, Scrape" },
  { label: "Volume", value: "≥ 100" },
  { label: "Data", value: "Últimos 30 dias" },
];

export function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2">
      <div className="flex min-w-0 items-center gap-1.5 overflow-x-auto">
        <Button variant="toolbar" size="sm" className="shrink-0">
          <Filter className="h-3.5 w-3.5" />
          Filtros
          <span className="mono ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-sm bg-primary px-1 text-[10px] font-semibold text-primary-foreground tabular">
            {filters.length}
          </span>
        </Button>

        <div className="mx-1 h-5 w-px bg-border shrink-0" />

        {filters.map((f) => (
          <button
            key={f.label}
            className="group flex h-8 shrink-0 items-center gap-1.5 rounded-sm border border-border bg-surface px-2 text-xs transition-all hover:border-border-strong hover:shadow-xs"
          >
            <span className="text-muted-foreground">{f.label}</span>
            <span className="mx-px h-3 w-px bg-border" />
            <span className="font-medium text-foreground">{f.value}</span>
            <ChevronDown className="h-3 w-3 stroke-[1.5] text-muted-foreground" />
          </button>
        ))}

        <button className="group ml-1 hidden h-8 shrink-0 items-center gap-1 rounded-sm border border-dashed border-border-strong px-2 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground sm:inline-flex">
          + Adicionar filtro
        </button>

        <Button variant="ghost" size="sm" className="ml-1 h-8 shrink-0 px-2 text-xs text-muted-foreground hover:text-foreground">
          <X className="h-3 w-3" />
          Limpar
        </Button>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <div className="mr-1 hidden items-center gap-1.5 rounded-sm border border-border bg-surface-sunken px-2 py-1 md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">Sincronizado</span>
          <span className="mono text-[10px] text-muted-foreground tabular">há 12s</span>
        </div>
        <Button variant="toolbar" size="icon-sm" title="Atualizar">
          <RefreshCw className="h-3.5 w-3.5" />
        </Button>
        <Button variant="toolbar" size="icon-sm" title="Colunas">
          <Columns3 className="h-3.5 w-3.5" />
        </Button>
        <Button variant="toolbar" size="icon-sm" title="Densidade">
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </Button>
        <Button variant="toolbar" size="icon-sm" title="Exportar">
          <Download className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
