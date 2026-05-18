import { SummaryCard } from "../summaryCard/summaryCard";

export function Summary() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <SummaryCard
        title="Entradas"
        value="R$ 17.400,00"
        icon={<span className="text-emerald-500">⊕</span>}
      />

      <SummaryCard
        title="Saídas"
        value="R$ 1.259,00"
        icon={<span className="text-rose-500">⊖</span>}
      />

      <SummaryCard
        title="Total"
        value="R$ 16.141,00"
        variant="success"
        icon={<span className="text-zinc-100">$</span>}
      />
    </section>
  )
}