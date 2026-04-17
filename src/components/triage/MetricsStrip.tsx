import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Metric = {
  label: string;
  value: string;
  unit?: string;
  delta?: number;
  hint: string;
  tone?: "neutral" | "accent" | "warning" | "success";
};

const metrics: Metric[] = [
  { label: "Termos importados", value: "12.487", hint: "Últimos 7 dias", delta: 8.4, tone: "neutral" },
  { label: "Pendentes triagem", value: "1.284", hint: "47 marcas ativas", delta: -3.1, tone: "accent" },
  { label: "Tempo médio classif.", value: "0.42", unit: "d", hint: "Meta < 1 dia útil", delta: -12.0, tone: "success" },
  { label: "Lotes para integrar", value: "8", hint: "3 bloqueados por checklist", delta: 0, tone: "warning" },
  { label: "Duplicidade detect.", value: "1.7", unit: "%", hint: "Meta < 2%", delta: -0.3, tone: "success" },
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
        "mono inline-flex items-center gap-0.5 text-[11px] tabular",
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

export function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 divide-x divide-border border-b border-border bg-surface md:grid-cols-3 lg:grid-cols-5">
      {metrics.map((m, i) => (
        <div key={m.label} className={cn("flex flex-col gap-1.5 px-5 py-3.5", i === 0 && "border-l-0")}>
          <div className="flex items-center justify-between">
            <span className="label-eyebrow">{m.label}</span>
            {typeof m.delta === "number" && <Delta delta={m.delta} />}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[22px] font-semibold tracking-tight text-foreground tabular leading-none">
              {m.value}
            </span>
            {m.unit && <span className="mono text-[11px] text-muted-foreground">{m.unit}</span>}
          </div>
          <span className="text-[11px] text-muted-foreground">{m.hint}</span>
        </div>
      ))}
    </div>
  );
}
