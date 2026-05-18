export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-emerald-500" />
        <span className="text-sm font-semibold text-zinc-100">
          DT Money
        </span>
      </div>

      <button className="rounded bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500">
        Nova transação
      </button>
    </header>
  )
}