import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Metric = {
  label: string;
  value: string;
  unit?: string;
  delta?: number;
  hint: string;
  spark: number[];
  tone?: "neutral" | "accent" | "warning" | "success";
};

const metrics: Metric[] = [
  { label: "Termos importados", value: "12.487", hint: "Últimos 7 dias", delta: 8.4, spark: [3, 4, 3, 5, 4, 6, 7, 6, 8, 9, 8, 10], tone: "neutral" },
  { label: "Pendentes triagem", value: "1.284", hint: "47 marcas ativas", delta: -3.1, spark: [9, 8, 9, 7, 8, 6, 7, 6, 5, 6, 4, 5], tone: "accent" },
  { label: "Tempo médio classif.", value: "0.42", unit: "d", hint: "Meta < 1 dia útil", delta: -12.0, spark: [8, 7, 8, 6, 7, 5, 6, 4, 5, 4, 3, 4], tone: "success" },
  { label: "Lotes para integrar", value: "8", hint: "3 bloqueados por checklist", delta: 0, spark: [5, 6, 5, 6, 5, 5, 6, 5, 5, 5, 5, 5], tone: "warning" },
  { label: "Duplicidade detect.", value: "1.7", unit: "%", hint: "Meta < 2%", delta: -0.3, spark: [4, 5, 4, 5, 4, 4, 3, 4, 3, 3, 3, 2], tone: "success" },
];

function Delta({ delta }: { delta: number }) {
  if (delta === 0) {
    return (
      <span className="mono inline-flex items-center gap-0.5 text-[11px] text-muted-foreground tabular">
        <Minus className="h-3 w-3 stroke-[1.5]" />
        0,0%
      </span>
    );
  }
  const positive = delta > 0;
  return (
    <span
      className={cn(
        "mono inline-flex items-center gap-0.5 text-[11px] tabular font-medium",
        positive ? "text-success" : "text-destructive",
      )}
    >
      {positive ? (
        <ArrowUpRight className="h-3 w-3 stroke-[1.5]" />
      ) : (
        <ArrowDownRight className="h-3 w-3 stroke-[1.5]" />
      )}
      {Math.abs(delta).toFixed(1).replace(".", ",")}%
    </span>
  );
}

function Sparkline({ data, tone }: { data: number[]; tone?: Metric["tone"] }) {
  const max = Math.max(...data);
  const color =
    tone === "success"
      ? "bg-success/70"
      : tone === "warning"
      ? "bg-warning/70"
      : tone === "accent"
      ? "bg-accent/70"
      : "bg-foreground/40";
  return (
    <div className="flex h-6 items-end gap-[2px]">
      {data.map((v, i) => (
        <span
          key={i}
          className={cn("w-[3px] rounded-[1px]", color, i === data.length - 1 && "opacity-100", i < data.length - 1 && "opacity-60")}
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

export function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 divide-x divide-border border-b border-border bg-surface md:grid-cols-3 lg:grid-cols-5">
      {metrics.map((m) => (
        <div key={m.label} className="group flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-surface-sunken/40">
          <div className="flex items-center justify-between">
            <span className="label-eyebrow">{m.label}</span>
            {typeof m.delta === "number" && <Delta delta={m.delta} />}
          </div>
          <div className="flex items-end justify-between gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-[24px] font-semibold tracking-tight text-foreground tabular leading-none">
                {m.value}
              </span>
              {m.unit && <span className="mono text-[11px] text-muted-foreground">{m.unit}</span>}
            </div>
            <Sparkline data={m.spark} tone={m.tone} />
          </div>
          <span className="text-[11px] text-muted-foreground">{m.hint}</span>
        </div>
      ))}
    </div>
  );
}
