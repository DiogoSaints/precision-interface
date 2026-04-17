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
            <div className="flex items-end justify-between border-b border-border bg-surface px-5 pb-3 pt-4">
              <div>
                <h1 className="text-[20px] font-semibold tracking-tight text-foreground">
                  Triagem de termos
                </h1>
                <p className="mt-0.5 text-[12px] text-muted-foreground">
                  Classifique termos importados em{" "}
                  <span className="font-medium text-foreground">Lixo</span>,{" "}
                  <span className="font-medium text-foreground">Compatibilidade</span> ou{" "}
                  <span className="font-medium text-foreground">Novo Produto</span>. Atalhos: L · C · N
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">SLA</span>
                <span className="mono text-[12px] text-foreground tabular">0,42d</span>
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="mono text-[10px] text-success">Dentro da meta</span>
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
