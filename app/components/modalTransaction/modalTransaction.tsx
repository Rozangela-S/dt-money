import { useState } from "react"

interface ModalProp {
  onClose: () => void
  onSubmit: (description: string, price: number, categori: string, type: 'income' | 'outcome') => void
}

export function NewTransactionModal({onClose, onSubmit}: ModalProp) {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState<'income' | 'outcome'>('income')

  const handleClose = () => {
    onClose()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!description || price === 0 || !category) return
    onSubmit(description, price, category, type)
    setDescription('')
    setPrice(0)
    setCategory('')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded bg-zinc-800 p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-100">
            Nova transação
          </h2>

          <button className="text-zinc-500 transition cursor-pointer hover:text-zinc-300" onClick={handleClose}>
            ×
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Descrição"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Preço"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <input
            type="text"
            placeholder="Categoria"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`flex items-center justify-center cursor-pointer gap-2 rounded  px-4 py-3 text-sm text-zinc-300 transition ${
                type === 'income' ? 'bg-emerald-600' : 'bg-zinc-700'
              }`}
              onClick={() => setType('income')}
            >
              <span className={` ${type === 'income'? 'text-white' :'text-emerald-500' }`}>⊕</span>
              Entrada
            </button>

            <button
              type="button"
              className={`flex items-center cursor-pointer justify-center gap-2 roundedpx-4 py-3 text-sm text-zinc-300 transition 
                ${type === 'outcome' ? 'bg-rose-500 ' : 'bg-zinc-600'

                }`}
              onClick={() => setType('outcome')}
            >
              <span className={` ${type === 'outcome'? 'text-white' :'text-rose-500' }`}>⊖</span>
              Saída
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded cursor-pointer bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}