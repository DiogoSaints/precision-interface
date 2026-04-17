import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import {
  Search,
  Trash2,
  Layers,
  LayoutGrid,
  Inbox,
  Send,
  Upload,
  Settings,
  History,
  BarChart3,
  ArrowRight,
  CornerDownLeft,
  Sparkles,
  GitBranch,
  Package,
  Tag,
  CheckSquare,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: typeof Inbox;
  shortcut?: string;
  keywords?: string;
  tone?: "default" | "destructive" | "accent" | "success";
  onRun: () => void;
};

type Group = {
  heading: string;
  items: Item[];
};

const numberFmt = (n: number) => n.toLocaleString("pt-BR");

function buildGroups(close: () => void): Group[] {
  const fire = (msg: string, desc?: string, tone: "info" | "success" | "warning" = "success") => {
    toast[tone === "info" ? "message" : tone === "warning" ? "warning" : "success"](msg, {
      description: desc,
    });
    close();
  };

  return [
    {
      heading: "Ações rápidas — seleção atual (3 termos)",
      items: [
        {
          id: "act-trash",
          label: "Marcar como Lixo",
          hint: "Remove da fila e move para arquivo",
          icon: Trash2,
          shortcut: "L",
          tone: "destructive",
          keywords: "lixo descartar remover trash",
          onRun: () => fire("3 termos marcados como Lixo", "Movidos para arquivo · desfazer disponível", "warning"),
        },
        {
          id: "act-compat",
          label: "Classificar como Compatibilidade",
          hint: "Vincula ao grupo de compatibilidades",
          icon: Layers,
          shortcut: "C",
          tone: "accent",
          keywords: "compatibilidade compativel grupo",
          onRun: () => fire("3 termos enviados para Compatibilidades", "Aguardando vinculação a grupo"),
        },
        {
          id: "act-novo",
          label: "Marcar como Novo Produto",
          hint: "Encaminha para fila de Novos Produtos",
          icon: LayoutGrid,
          shortcut: "N",
          tone: "success",
          keywords: "novo produto criar cadastro",
          onRun: () => fire("3 termos enviados para Novos Produtos", "Próximo passo: cotação"),
        },
      ],
    },
    {
      heading: "Termos",
      items: [
        {
          id: "trm-48201",
          label: "filtro oleo bosch 0451103316",
          hint: "TRM-48201 · Bosch · 4.820/mês",
          icon: Sparkles,
          keywords: "filtro oleo bosch 0451103316 trm-48201",
          onRun: () => fire("Termo aberto no inspetor", "TRM-48201 · filtro oleo bosch"),
        },
        {
          id: "trm-48202",
          label: "vela ngk iridium bkr6eix-11",
          hint: "TRM-48202 · NGK · 3.120/mês",
          icon: Sparkles,
          keywords: "vela ngk iridium bkr6eix trm-48202",
          onRun: () => fire("Termo aberto no inspetor", "TRM-48202 · vela ngk iridium"),
        },
        {
          id: "trm-48204",
          label: "amortecedor traseiro corolla xei",
          hint: "TRM-48204 · Toyota · 1.980/mês · Novo Produto",
          icon: Sparkles,
          keywords: "amortecedor toyota corolla xei trm-48204",
          onRun: () => fire("Termo aberto no inspetor", "TRM-48204 · amortecedor traseiro"),
        },
        {
          id: "trm-48208",
          label: "bateria moura 60ah m60gd",
          hint: "TRM-48208 · Moura · 6.700/mês · Compatibilidade",
          icon: Sparkles,
          keywords: "bateria moura 60ah m60gd trm-48208",
          onRun: () => fire("Termo aberto no inspetor", "TRM-48208 · bateria moura"),
        },
      ],
    },
    {
      heading: "Grupos",
      items: [
        {
          id: "grp-0931",
          label: "GRP-0931 · Filtros de óleo Bosch",
          hint: `12 termos · ${numberFmt(48210)} buscas/mês`,
          icon: GitBranch,
          keywords: "grupo grp-0931 bosch filtros",
          onRun: () => fire("Grupo aberto", "GRP-0931 · 12 termos vinculados"),
        },
        {
          id: "grp-1024",
          label: "GRP-1024 · Suspensão Corolla",
          hint: "3 termos · Novo Produto",
          icon: GitBranch,
          keywords: "grupo grp-1024 corolla suspensao",
          onRun: () => fire("Grupo aberto", "GRP-1024 · suspensão corolla"),
        },
        {
          id: "grp-0701",
          label: "GRP-0701 · Baterias Moura",
          hint: "8 termos · Compatibilidade",
          icon: GitBranch,
          keywords: "grupo grp-0701 moura baterias",
          onRun: () => fire("Grupo aberto", "GRP-0701 · baterias moura"),
        },
      ],
    },
    {
      heading: "Lotes de importação",
      items: [
        {
          id: "imp-003",
          label: "IMP-2024-04-12-003",
          hint: "Semrush · 4.820 termos · 12/04 14:22",
          icon: Package,
          keywords: "lote imp 2024 04 12 003 semrush",
          onRun: () => fire("Lote aberto", "IMP-2024-04-12-003 · 4.820 termos"),
        },
        {
          id: "imp-002",
          label: "IMP-2024-04-12-002",
          hint: "CSV · 1.204 termos · 12/04 09:11",
          icon: Package,
          keywords: "lote imp 2024 04 12 002 csv",
          onRun: () => fire("Lote aberto", "IMP-2024-04-12-002 · 1.204 termos"),
        },
        {
          id: "imp-001",
          label: "IMP-2024-04-11-007",
          hint: "Scrape · 892 termos · 11/04 22:48",
          icon: Package,
          keywords: "lote imp 2024 04 11 007 scrape",
          onRun: () => fire("Lote aberto", "IMP-2024-04-11-007 · 892 termos"),
        },
      ],
    },
    {
      heading: "Marcas",
      items: [
        { id: "br-bosch", label: "Bosch · Linha Auto", hint: "1.284 termos pendentes", icon: Tag, keywords: "marca bosch", onRun: () => fire("Marca selecionada", "Bosch · Linha Auto") },
        { id: "br-ngk", label: "NGK", hint: "412 termos pendentes", icon: Tag, keywords: "marca ngk", onRun: () => fire("Marca selecionada", "NGK") },
        { id: "br-toyota", label: "Toyota OEM", hint: "238 termos pendentes", icon: Tag, keywords: "marca toyota", onRun: () => fire("Marca selecionada", "Toyota OEM") },
      ],
    },
    {
      heading: "Navegação",
      items: [
        { id: "nav-triagem", label: "Ir para Triagem", icon: Inbox, shortcut: "G T", keywords: "triagem inbox fila", onRun: () => fire("Navegando", "Operação › Triagem", "info") },
        { id: "nav-compat", label: "Ir para Compatibilidades", icon: Layers, shortcut: "G C", keywords: "compatibilidades", onRun: () => fire("Navegando", "Operação › Compatibilidades", "info") },
        { id: "nav-novos", label: "Ir para Novos Produtos", icon: LayoutGrid, shortcut: "G N", keywords: "novos produtos", onRun: () => fire("Navegando", "Operação › Novos Produtos", "info") },
        { id: "nav-rev", label: "Ir para Revisão", icon: CheckSquare, shortcut: "G R", keywords: "revisao revisão", onRun: () => fire("Navegando", "Operação › Revisão", "info") },
        { id: "nav-int", label: "Ir para Integração", icon: Send, shortcut: "G I", keywords: "integracao integração erp", onRun: () => fire("Navegando", "Operação › Integração", "info") },
        { id: "nav-imp", label: "Ir para Importações", icon: Upload, keywords: "importacoes importações upload", onRun: () => fire("Navegando", "Catálogo › Importações", "info") },
        { id: "nav-hist", label: "Ir para Alterações pós-cadastro", icon: History, keywords: "alteracoes historico", onRun: () => fire("Navegando", "Catálogo › Alterações", "info") },
        { id: "nav-met", label: "Ir para Métricas", icon: BarChart3, keywords: "metricas metrics", onRun: () => fire("Navegando", "Sistema › Métricas", "info") },
        { id: "nav-cfg", label: "Configurações", icon: Settings, keywords: "configuracoes settings", onRun: () => fire("Navegando", "Sistema › Configurações", "info") },
      ],
    },
  ];
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = React.useState("");
  const groups = React.useMemo(() => buildGroups(() => onOpenChange(false)), [onOpenChange]);

  React.useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  // Single-key shortcuts L / C / N when palette is open and input is empty
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (query.length > 0) return;
      const k = e.key.toLowerCase();
      const map: Record<string, string> = { l: "act-trash", c: "act-compat", n: "act-novo" };
      const id = map[k];
      if (!id) return;
      const item = groups[0].items.find((i) => i.id === id);
      if (item) {
        e.preventDefault();
        item.onRun();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, query, groups]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-[14%] z-50 w-[calc(100vw-1.5rem)] max-w-[640px] -translate-x-1/2",
            "overflow-hidden rounded-md border border-border-strong bg-surface shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=closed]:zoom-out-95",
          )}
        >
          <DialogPrimitive.Title className="sr-only">Command palette</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Busque termos, grupos, lotes e execute ações rápidas.
          </DialogPrimitive.Description>

          <CommandPrimitive
            label="Command palette"
            className="flex h-full w-full flex-col"
            filter={(value, search, keywords) => {
              const haystack = (value + " " + (keywords?.join(" ") ?? "")).toLowerCase();
              const needle = search.toLowerCase().trim();
              if (!needle) return 1;
              return haystack.includes(needle) ? 1 : 0;
            }}
          >
            {/* Input */}
            <div className="flex items-center gap-2 border-b border-border bg-surface px-3" cmdk-input-wrapper="">
              <Search className="h-4 w-4 stroke-[1.5] text-muted-foreground" />
              <CommandPrimitive.Input
                value={query}
                onValueChange={setQuery}
                placeholder="Buscar termos, grupos, lotes, marcas… ou digite L / C / N"
                className="flex h-12 w-full bg-transparent text-[13.5px] outline-none placeholder:text-muted-foreground"
              />
              <kbd className="mono hidden h-5 items-center gap-1 rounded-sm border border-border bg-surface-sunken px-1.5 text-[10px] text-muted-foreground sm:inline-flex">
                ESC
              </kbd>
            </div>

            <CommandPrimitive.List className="scroll-precision max-h-[420px] overflow-y-auto overflow-x-hidden p-1">
              <CommandPrimitive.Empty className="flex flex-col items-center gap-2 py-10 text-center">
                <div className="grid h-9 w-9 place-items-center rounded-sm border border-border bg-surface-sunken">
                  <Search className="h-4 w-4 stroke-[1.5] text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">Nenhum resultado</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Tente outro termo ou ID (TRM-, GRP-, IMP-)
                  </p>
                </div>
              </CommandPrimitive.Empty>

              {groups.map((g, gi) => (
                <CommandPrimitive.Group
                  key={g.heading}
                  heading={g.heading}
                  className={cn(
                    "overflow-hidden px-1 pb-1 text-foreground",
                    "[&_[cmdk-group-heading]]:label-eyebrow [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3",
                    gi === 0 && "[&_[cmdk-group-heading]]:pt-2",
                  )}
                >
                  {g.items.map((it) => {
                    const Icon = it.icon;
                    const toneIcon =
                      it.tone === "destructive"
                        ? "text-destructive"
                        : it.tone === "accent"
                        ? "text-accent"
                        : it.tone === "success"
                        ? "text-success"
                        : "text-muted-foreground";
                    return (
                      <CommandPrimitive.Item
                        key={it.id}
                        value={it.label}
                        keywords={it.keywords ? it.keywords.split(/\s+/) : undefined}
                        onSelect={() => it.onRun()}
                        className={cn(
                          "group relative flex h-9 cursor-pointer select-none items-center gap-2.5 rounded-sm px-2 text-[13px] outline-none",
                          "data-[selected=true]:bg-accent-soft data-[selected=true]:text-foreground",
                          "data-[selected=true]:before:absolute data-[selected=true]:before:left-0 data-[selected=true]:before:top-1/2 data-[selected=true]:before:h-4 data-[selected=true]:before:w-[2px] data-[selected=true]:before:-translate-y-1/2 data-[selected=true]:before:rounded-r data-[selected=true]:before:bg-accent",
                        )}
                      >
                        <Icon className={cn("h-3.5 w-3.5 shrink-0 stroke-[1.5]", toneIcon)} />
                        <span className="flex-1 truncate font-medium">{it.label}</span>
                        {it.hint && (
                          <span className="mono truncate text-[10.5px] text-muted-foreground tabular">
                            {it.hint}
                          </span>
                        )}
                        {it.shortcut && (
                          <kbd className="mono ml-1 inline-flex h-5 items-center rounded-sm border border-border bg-surface px-1.5 text-[10px] font-semibold text-muted-foreground group-data-[selected=true]:border-accent/30 group-data-[selected=true]:text-accent">
                            {it.shortcut}
                          </kbd>
                        )}
                      </CommandPrimitive.Item>
                    );
                  })}
                </CommandPrimitive.Group>
              ))}
            </CommandPrimitive.List>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3 border-t border-border bg-surface-sunken/60 px-3 py-2">
              <div className="flex items-center gap-3 text-[10.5px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <kbd className="mono inline-flex h-4 items-center rounded-sm border border-border bg-surface px-1 text-[10px]">↑↓</kbd>
                  navegar
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="mono inline-flex h-4 items-center gap-0.5 rounded-sm border border-border bg-surface px-1 text-[10px]">
                    <CornerDownLeft className="h-2.5 w-2.5" />
                  </kbd>
                  executar
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="mono inline-flex h-4 items-center rounded-sm border border-border bg-surface px-1 text-[10px]">L C N</kbd>
                  classificar seleção
                </span>
              </div>
              <span className="mono inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                <ArrowRight className="h-3 w-3 stroke-[1.5]" />
                Keyword Ops
              </span>
            </div>
          </CommandPrimitive>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
