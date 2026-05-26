import { transactions } from "@/app/mock/data";
import { SummaryCard } from "../summaryCard/summaryCard";
import { useState } from "react";

interface Transaction {
  id?: number
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  date: string
}

interface SummaryProps {
  transactions: Transaction[]
}

export function Summary({transactions}: SummaryProps) {
  const summary = transactions.reduce((acc, trans) => {
    if(trans.type === 'income'){
      acc.income += trans.price
      acc.total += trans.price
    } else {
      acc.outcome += trans.price
      acc.total += trans.price
    }
    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })
 
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      
      <SummaryCard
        title="Entradas"
        value={summary.income}
        variant="default"
      />

      <SummaryCard
        title="Saídas"
        value={summary.outcome}
        variant="out"
      />

      <SummaryCard
        title="Total"
        value={summary.total}
        variant="success"
      />
    </section>
  )
}