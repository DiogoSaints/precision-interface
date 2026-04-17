import { ArrowUpDown, MoreHorizontal, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "Importado" | "Aguardando" | "Lixo" | "Compatibilidade" | "Novo Produto";
type Origin = "Semrush" | "Scrape" | "Manual" | "CSV";

type Row = {
  id: string;
  term: string;
  normalized: string;
  brand: string;
  volume: number;
  origin: Origin;
  pn: string | null;
  status: Status;
  group: string | null;
  importedAt: string;
};

const rows: Row[] = [
  { id: "TRM-48201", term: "filtro oleo bosch 0451103316", normalized: "filtro óleo bosch 0451103316", brand: "Bosch", volume: 4820, origin: "Semrush", pn: "0451103316", status: "Compatibilidade", group: "GRP-0931", importedAt: "12/04 14:22" },
  { id: "TRM-48202", term: "vela ngk iridium bkr6eix-11", normalized: "vela ngk iridium bkr6eix-11", brand: "NGK", volume: 3120, origin: "Semrush", pn: "BKR6EIX-11", status: "Aguardando", group: null, importedAt: "12/04 14:22" },
  { id: "TRM-48203", term: "pastilha freio dianteira civic 2018", normalized: "pastilha freio dianteira civic 2018", brand: "Honda", volume: 2890, origin: "Scrape", pn: null, status: "Importado", group: null, importedAt: "12/04 14:21" },
  { id: "TRM-48204", term: "amortecedor traseiro corolla xei", normalized: "amortecedor traseiro corolla xei", brand: "Toyota", volume: 1980, origin: "Semrush", pn: "48531-02L70", status: "Novo Produto", group: "GRP-1024", importedAt: "12/04 14:20" },
  { id: "TRM-48205", term: "comprar peça x9 barata urgente", normalized: "comprar peça x9 barata urgente", brand: "—", volume: 12, origin: "Scrape", pn: null, status: "Lixo", group: null, importedAt: "12/04 14:20" },
  { id: "TRM-48206", term: "correia dentada gates t1066", normalized: "correia dentada gates t1066", brand: "Gates", volume: 1540, origin: "CSV", pn: "T1066", status: "Compatibilidade", group: "GRP-0876", importedAt: "12/04 14:18" },
  { id: "TRM-48207", term: "lampada h7 osram night breaker", normalized: "lâmpada h7 osram night breaker", brand: "Osram", volume: 4210, origin: "Semrush", pn: "64210NL", status: "Aguardando", group: null, importedAt: "12/04 14:17" },
  { id: "TRM-48208", term: "bateria moura 60ah m60gd", normalized: "bateria moura 60ah m60gd", brand: "Moura", volume: 6700, origin: "Semrush", pn: "M60GD", status: "Compatibilidade", group: "GRP-0701", importedAt: "12/04 14:15" },
  { id: "TRM-48209", term: "óleo motor 5w30 sintético mobil", normalized: "óleo motor 5w30 sintético mobil", brand: "Mobil", volume: 9120, origin: "Semrush", pn: null, status: "Importado", group: null, importedAt: "12/04 14:12" },
  { id: "TRM-48210", term: "kit embreagem luk hb20 1.0", normalized: "kit embreagem luk hb20 1.0", brand: "LuK", volume: 2210, origin: "Manual", pn: "619302600", status: "Novo Produto", group: "GRP-1025", importedAt: "12/04 14:10" },
  { id: "TRM-48211", term: "sensor abs ford fiesta 2014", normalized: "sensor abs ford fiesta 2014", brand: "Ford", volume: 870, origin: "Scrape", pn: null, status: "Importado", group: null, importedAt: "12/04 14:08" },
  { id: "TRM-48212", term: "junta cabecote vw ap 1.8", normalized: "junta cabeçote vw ap 1.8", brand: "VW", volume: 1320, origin: "Semrush", pn: "026103383K", status: "Aguardando", group: null, importedAt: "12/04 14:05" },
];

const statusVariant: Record<Status, React.ComponentProps<typeof Badge>["variant"]> = {
  Importado: "outline",
  Aguardando: "warning",
  Lixo: "destructive",
  Compatibilidade: "info",
  "Novo Produto": "accent",
};

const originDot: Record<Origin, string> = {
  Semrush: "bg-accent",
  Scrape: "bg-warning",
  Manual: "bg-muted-foreground",
  CSV: "bg-success",
};

function Th({
  children,
  className,
  sortable,
  align = "left",
}: {
  children?: React.ReactNode;
  className?: string;
  sortable?: boolean;
  align?: "left" | "right" | "center";
}) {
  return (
    <th
      className={cn(
        "h-9 border-b border-border bg-surface-sunken px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground shadow-[inset_0_-1px_0_0_hsl(var(--border))]",
        align === "right" && "text-right",
        align === "center" && "text-center",
        align === "left" && "text-left",
        sortable && "cursor-pointer hover:text-foreground transition-colors",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-1",
          align === "right" && "flex-row-reverse",
        )}
      >
        {children}
        {sortable && <ArrowUpDown className="h-2.5 w-2.5 stroke-[1.5] opacity-40" />}
      </div>
    </th>
  );
}

export function TermsTable() {
  return (
    <div className="flex-1 overflow-hidden border-b border-border bg-surface">
      <div className="scroll-precision h-full overflow-auto">
        <table className="w-full border-separate border-spacing-0 text-[13px]">
          <thead className="sticky top-0 z-10">
            <tr>
              <Th className="w-9 pl-4">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 cursor-pointer rounded-sm border-border-strong accent-primary"
                />
              </Th>
              <Th className="w-28" sortable>ID</Th>
              <Th sortable>Termo</Th>
              <Th className="w-24" sortable>Marca</Th>
              <Th className="w-24" align="right" sortable>Volume</Th>
              <Th className="w-28">Origem</Th>
              <Th className="w-32">PN / COD</Th>
              <Th className="w-32">Grupo</Th>
              <Th className="w-32" sortable>Status</Th>
              <Th className="w-28" sortable>Importado</Th>
              <Th className="w-10" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => {
              const selected = idx < 3;
              return (
                <tr
                  key={r.id}
                  className={cn(
                    "group relative transition-colors",
                    selected
                      ? "bg-accent-soft/50 hover:bg-accent-soft/70"
                      : "hover:bg-surface-sunken/60",
                  )}
                >
                  <td className={cn("relative border-b border-subtle pl-4", selected && "before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent")}>
                    <input
                      type="checkbox"
                      defaultChecked={selected}
                      className="h-3.5 w-3.5 cursor-pointer rounded-sm border-border-strong accent-primary"
                    />
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    <span className="mono text-[11px] text-muted-foreground">{r.id}</span>
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-medium text-foreground">{r.term}</span>
                      {r.normalized !== r.term && (
                        <span title={`Normalizado: ${r.normalized}`} className="shrink-0">
                          <Sparkles className="h-3 w-3 stroke-[1.5] text-accent" />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5 text-foreground">{r.brand}</td>
                  <td className="border-b border-subtle px-3 py-2.5 text-right tabular text-foreground">
                    {r.volume.toLocaleString("pt-BR")}
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <span className={cn("h-1.5 w-1.5 rounded-full", originDot[r.origin])} />
                      {r.origin}
                    </span>
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    {r.pn ? (
                      <span className="mono text-[11px] text-foreground">{r.pn}</span>
                    ) : (
                      <span className="mono text-[11px] text-muted-foreground/50">—</span>
                    )}
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    {r.group ? (
                      <a href="#" className="mono text-[11px] text-accent hover:underline">
                        {r.group}
                      </a>
                    ) : (
                      <span className="mono text-[11px] text-muted-foreground/50">—</span>
                    )}
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    <Badge variant={statusVariant[r.status]}>{r.status}</Badge>
                  </td>
                  <td className="border-b border-subtle px-3 py-2.5">
                    <span className="mono text-[11px] text-muted-foreground tabular">{r.importedAt}</span>
                  </td>
                  <td className="border-b border-subtle px-2 py-2.5">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="h-7 w-7 opacity-0 group-hover:opacity-100"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
