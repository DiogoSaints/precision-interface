import { ExternalLink, GitBranch, Clock, Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fields: { label: string; value: string; mono?: boolean }[] = [
  { label: "ID", value: "TRM-48204", mono: true },
  { label: "Termo original", value: "amortecedor traseiro corolla xei" },
  { label: "Termo normalizado", value: "amortecedor traseiro corolla xei" },
  { label: "Marca", value: "Toyota" },
  { label: "PN / COD", value: "48531-02L70", mono: true },
  { label: "Volume mensal", value: "1.980", mono: true },
  { label: "Origem", value: "Semrush" },
  { label: "Lote de importação", value: "IMP-2024-04-12-003", mono: true },
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
      <div className="flex h-12 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-2">
          <span className="label-eyebrow">Inspetor</span>
          <Badge variant="accent">Novo Produto</Badge>
        </div>
        <Button variant="toolbar" size="icon-sm">
          <ExternalLink className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Heading */}
        <div className="border-b border-border px-4 py-3">
          <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">TRM-48204</div>
          <h3 className="mt-1 text-[15px] font-semibold leading-tight text-foreground">
            amortecedor traseiro corolla xei
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <a href="#" className="mono inline-flex items-center gap-1 text-[11px] text-accent hover:underline">
              <GitBranch className="h-3 w-3 stroke-[1.5]" />
              GRP-1024
            </a>
            <span className="text-muted-foreground">·</span>
            <span className="mono text-[11px] text-muted-foreground">3 termos no grupo</span>
          </div>
        </div>

        {/* Fields */}
        <div className="px-4 py-3">
          <div className="label-eyebrow mb-2">Dados de análise</div>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {fields.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[110px_1fr] gap-3 bg-surface px-3 py-2"
              >
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                <dd
                  className={
                    f.mono
                      ? "mono text-[12px] text-foreground tabular"
                      : "text-[13px] text-foreground"
                  }
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Timeline */}
        <div className="border-t border-border px-4 py-3">
          <div className="label-eyebrow mb-3 flex items-center gap-1.5">
            <Clock className="h-3 w-3 stroke-[1.5]" />
            Eventos operacionais
          </div>
          <ol className="relative space-y-3 border-l border-border pl-4">
            {timeline.map((e, i) => (
              <li key={i} className="relative">
                <span
                  className={
                    "absolute -left-[19px] top-1 h-2 w-2 rounded-full border border-surface " +
                    (e.tone === "accent" ? "bg-accent" : "bg-border-strong")
                  }
                />
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[12px] text-foreground">{e.event}</p>
                  <span className="mono text-[10px] shrink-0 text-muted-foreground tabular">{e.time}</span>
                </div>
                <p className="mono text-[10px] text-muted-foreground">
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
        <div className="grid grid-cols-2 gap-1.5">
          <Button variant="outline" size="sm">Editar</Button>
          <Button size="sm">Avançar →</Button>
        </div>
      </div>
    </aside>
  );
}
