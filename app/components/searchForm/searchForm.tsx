export function SearchForm() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="Busque uma transação"
        className="flex-1 rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent transition focus:ring-emerald-600"
      />

      <button
        type="button"
        className="rounded border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-500 transition hover:bg-emerald-600 hover:text-white"
      >
        Buscar
      </button>
    </form>
  )
}