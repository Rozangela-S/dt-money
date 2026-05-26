'use client'
import { useState } from "react"
import { NewTransactionModal } from "../modalTransaction/modalTransaction"


interface HeaderProp {
  onAddTransaction: (
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome'
  ) => void
}

export function Header({onAddTransaction}: HeaderProp) {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }
  const handleSubmit = (description: string, price: number, category: string, type: 'income' | 'outcome') => {
    onAddTransaction(description, price, category, type)
    setOpenModal(false)
  }

  return (
    <>
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-emerald-500" />
        <span className="text-sm font-semibold text-zinc-100">
          DT Money
        </span>
      </div>

      <button 
      className="rounded bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition cursor-pointer hover:bg-emerald-500"
      onClick={handleModal}
      >
        Nova transação
      </button>
    </header>
    {openModal && (
      <NewTransactionModal onClose={() => setOpenModal(false)} onSubmit={handleSubmit}/>
    )}
    </>
  )
}