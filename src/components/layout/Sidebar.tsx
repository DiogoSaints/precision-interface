import {
  Inbox,
  LayoutGrid,
  Layers,
  CheckSquare,
  Send,
  History,
  Wrench,
  BarChart3,
  Settings,
  Upload,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  icon: typeof Inbox;
  count?: number;
  active?: boolean;
};

type Group = { label: string; items: Item[] };

const groups: Group[] = [
  {
    label: "Operação",
    items: [
      { label: "Triagem", icon: Inbox, count: 1284, active: true },
      { label: "Compatibilidades", icon: Layers, count: 47 },
      { label: "Novos Produtos", icon: LayoutGrid, count: 23 },
      { label: "Revisão", icon: CheckSquare, count: 12 },
      { label: "Integração", icon: Send, count: 8 },
    ],
  },
  {
    label: "Catálogo",
    items: [
      { label: "Importações", icon: Upload },
      { label: "Alterações pós-cadastro", icon: History },
      { label: "Buscar termos", icon: Search },
    ],
  },
  {
    label: "Sistema",
    items: [
      { label: "Métricas", icon: BarChart3 },
      { label: "Recuperação", icon: Wrench },
      { label: "Configurações", icon: Settings },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Brand */}
      <div className="flex h-12 items-center gap-2.5 border-b border-sidebar-border px-4">
        <div className="grid h-6 w-6 place-items-center rounded-sm bg-primary text-primary-foreground">
          <span className="mono text-[11px] font-semibold">K</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold tracking-tight text-sidebar-foreground">Keyword Ops</span>
          <span className="mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">v1.0 · prod</span>
        </div>
      </div>

      {/* Brand selector */}
      <div className="border-b border-sidebar-border p-3">
        <button className="group flex w-full items-center justify-between rounded-sm border border-border bg-surface px-2.5 py-1.5 text-left transition-colors hover:border-border-strong">
          <div className="flex flex-col leading-tight">
            <span className="label-eyebrow">Marca</span>
            <span className="text-[13px] font-medium text-foreground">Bosch · Linha Auto</span>
          </div>
          <span className="mono text-[10px] text-muted-foreground">⌘B</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {groups.map((g) => (
          <div key={g.label} className="mb-4">
            <div className="px-2 pb-1.5">
              <span className="label-eyebrow">{g.label}</span>
            </div>
            <ul className="space-y-px">
              {g.items.map((it) => (
                <li key={it.label}>
                  <a
                    href="#"
                    className={cn(
                      "group flex h-8 items-center gap-2.5 rounded-sm px-2 text-[13px] transition-colors",
                      it.active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/60",
                    )}
                  >
                    <it.icon className="h-3.5 w-3.5 shrink-0 stroke-[1.5]" />
                    <span className="flex-1 truncate">{it.label}</span>
                    {typeof it.count === "number" && (
                      <span className="mono text-[10px] tabular text-muted-foreground">
                        {it.count.toLocaleString("pt-BR")}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-sm bg-secondary text-[11px] font-semibold text-foreground">
            MA
          </div>
          <div className="flex min-w-0 flex-1 flex-col leading-tight">
            <span className="truncate text-[12px] font-medium text-foreground">Marina Aragão</span>
            <span className="mono text-[10px] text-muted-foreground">analista_catalogo</span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-label="online" />
        </div>
      </div>
    </aside>
  );
}
