export function NewTransactionModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded bg-zinc-800 p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-100">
            Nova transação
          </h2>

          <button className="text-zinc-500 transition hover:text-zinc-300">
            ×
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Descrição"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
          />

          <input
            type="text"
            placeholder="Preço"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
          />

          <input
            type="text"
            placeholder="Categoria"
            className="w-full rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent focus:ring-emerald-600"
          />

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded bg-zinc-700 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-600"
            >
              <span className="text-emerald-500">⊕</span>
              Entrada
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded bg-zinc-700 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-600"
            >
              <span className="text-rose-500">⊖</span>
              Saída
            </button>
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}