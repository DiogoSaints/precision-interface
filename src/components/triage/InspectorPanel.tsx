import { ExternalLink, GitBranch, Clock, Hash, Pin, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fields: { label: string; value: string; mono?: boolean; accent?: boolean }[] = [
  { label: "ID", value: "TRM-48204", mono: true },
  { label: "Termo original", value: "amortecedor traseiro corolla xei" },
  { label: "Normalizado", value: "amortecedor traseiro corolla xei" },
  { label: "Marca", value: "Toyota" },
  { label: "PN / COD", value: "48531-02L70", mono: true },
  { label: "Volume mensal", value: "1.980", mono: true },
  { label: "Origem", value: "Semrush" },
  { label: "Lote", value: "IMP-2024-04-12-003", mono: true },
];

const timeline = [
  { time: "12/04 14:20", actor: "sistema", event: "Termo importado via Semrush", tone: "neutral" as const },
  { time: "12/04 14:21", actor: "sistema", event: "Normalização aplicada", tone: "neutral" as const },
  { time: "12/04 15:02", actor: "marina.aragão", event: "Classificado como Novo Produto", tone: "accent" as const },
  { time: "12/04 15:02", actor: "sistema", event: "Vinculado ao grupo GRP-1024", tone: "accent" as const },
];

export function InspectorPanel() {
  return (
    <aside className="hidden w-[340px] shrink-0 flex-col border-l border-border bg-surface xl:flex">
      {/* Header */}
      <div className="flex h-12 items-center justify-between border-b border-border bg-surface-sunken/40 px-4">
        <div className="flex items-center gap-2">
          <span className="label-eyebrow">Inspetor</span>
          <span className="mono rounded-sm bg-border-strong/40 px-1 py-0.5 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
            1 de 3
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon-sm" className="h-7 w-7" title="Fixar">
            <Pin className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="h-7 w-7" title="Abrir em nova aba">
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="h-7 w-7">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <div className="scroll-precision flex-1 overflow-y-auto">
        {/* Heading */}
        <div className="border-b border-border px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">TRM-48204</span>
            <Badge variant="accent">Novo Produto</Badge>
          </div>
          <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-foreground">
            amortecedor traseiro corolla xei
          </h3>
          <div className="mt-2.5 flex items-center gap-2 text-[11px]">
            <a href="#" className="mono inline-flex items-center gap-1 rounded-sm border border-accent/20 bg-accent-soft px-1.5 py-0.5 text-accent hover:border-accent/40">
              <GitBranch className="h-3 w-3 stroke-[1.5]" />
              GRP-1024
            </a>
            <span className="text-muted-foreground">3 termos no grupo</span>
          </div>
        </div>

        {/* Fields */}
        <div className="px-4 py-4">
          <div className="label-eyebrow mb-2.5">Dados de análise</div>
          <dl className="overflow-hidden rounded-sm border border-border">
            {fields.map((f, i) => (
              <div
                key={f.label}
                className={
                  "grid grid-cols-[100px_1fr] gap-3 px-3 py-2 " +
                  (i % 2 === 1 ? "bg-surface-sunken/40 " : "bg-surface ") +
                  (i < fields.length - 1 ? "border-b border-subtle" : "")
                }
              >
                <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                <dd
                  className={
                    f.mono
                      ? "mono break-all text-[12px] text-foreground tabular"
                      : "text-[12.5px] text-foreground"
                  }
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Timeline */}
        <div className="border-t border-border px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="label-eyebrow flex items-center gap-1.5">
              <Clock className="h-3 w-3 stroke-[1.5]" />
              Eventos operacionais
            </div>
            <span className="mono text-[10px] text-muted-foreground tabular">4 eventos</span>
          </div>
          <ol className="relative space-y-3 border-l border-border pl-4">
            {timeline.map((e, i) => (
              <li key={i} className="relative">
                <span
                  className={
                    "absolute -left-[19px] top-1 h-2 w-2 rounded-full ring-2 ring-surface " +
                    (e.tone === "accent" ? "bg-accent" : "bg-border-strong")
                  }
                />
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[12px] leading-tight text-foreground">{e.event}</p>
                  <span className="mono text-[10px] shrink-0 text-muted-foreground tabular">{e.time}</span>
                </div>
                <p className="mono mt-0.5 text-[10px] text-muted-foreground">
                  <Hash className="mr-0.5 inline h-2.5 w-2.5 stroke-[1.5]" />
                  {e.actor}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Action footer */}
      <div className="border-t border-border bg-surface-sunken/50 p-3">
        <div className="grid grid-cols-[1fr_auto] gap-1.5">
          <Button size="sm">
            Avançar para grupo
          </Button>
          <Button variant="outline" size="sm">Editar</Button>
        </div>
        <p className="mt-2 text-center text-[10px] text-muted-foreground">
          <kbd className="mono rounded-sm border border-border bg-surface px-1 text-[9px]">⏎</kbd> avançar ·{" "}
          <kbd className="mono rounded-sm border border-border bg-surface px-1 text-[9px]">esc</kbd> fechar
        </p>
      </div>
    </aside>
  );
}
