export function Pagination() {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button className="text-emerald-500 hover:text-emerald-400">
        ‹
      </button>

      <button className="h-8 w-8 rounded bg-emerald-700 text-sm text-white">
        1
      </button>

      <button className="h-8 w-8 rounded bg-zinc-800 text-sm text-zinc-400 hover:bg-zinc-700">
        2
      </button>

      <button className="h-8 w-8 rounded bg-zinc-800 text-sm text-zinc-400 hover:bg-zinc-700">
        3
      </button>

      <button className="text-emerald-500 hover:text-emerald-400">
        ›
      </button>
    </div>
  )
}