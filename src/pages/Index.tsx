import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MetricsStrip } from "@/components/triage/MetricsStrip";
import { FilterBar } from "@/components/triage/FilterBar";
import { TermsTable } from "@/components/triage/TermsTable";
import { SelectionBar } from "@/components/triage/SelectionBar";
import { InspectorPanel } from "@/components/triage/InspectorPanel";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex min-h-0 flex-1">
          <section className="flex min-w-0 flex-1 flex-col">
            {/* Page heading */}
            <div className="flex items-end justify-between gap-4 border-b border-border bg-surface px-5 pb-3.5 pt-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-[19px] font-semibold tracking-tight text-foreground">
                    Triagem de termos
                  </h1>
                  <span className="mono rounded-sm border border-border bg-surface-sunken px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    Fila inicial
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-muted-foreground">
                  Classifique em{" "}
                  <kbd className="mono rounded-sm border border-border bg-surface px-1 text-[10px] text-foreground">L</kbd>{" "}
                  Lixo ·{" "}
                  <kbd className="mono rounded-sm border border-border bg-surface px-1 text-[10px] text-foreground">C</kbd>{" "}
                  Compatibilidade ·{" "}
                  <kbd className="mono rounded-sm border border-border bg-surface px-1 text-[10px] text-foreground">N</kbd>{" "}
                  Novo Produto
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end leading-tight">
                  <span className="label-eyebrow">SLA atual</span>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="mono text-[13px] font-semibold text-foreground tabular">0,42d</span>
                    <span className="text-[10px] text-muted-foreground">/ 1,00d</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex items-center gap-1.5 rounded-sm border border-success/20 bg-success-soft px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span className="mono text-[10px] font-medium uppercase tracking-wider text-success">Dentro da meta</span>
                </div>
              </div>
            </div>

            <MetricsStrip />
            <FilterBar />
            <TermsTable />
            <SelectionBar />
          </section>

          <InspectorPanel />
        </main>
      </div>
    </div>
  );
};

export default Index;
