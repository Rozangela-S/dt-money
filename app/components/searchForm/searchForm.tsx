import { useState } from "react"

interface SearchProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
  onSearch: () => void
}

export function SearchForm({ searchTerm, setSearchTerm, onSearch}: SearchProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch()
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   const searchParams = new URLSearchParams()
  //   searchParams.set('query', seachTerm)
    
  //   const url = `/search?${searchParams.toString()}`
  //   window.location.href = url
  //   console.log('Search term:', seachTerm)
  // }
  
  return (
    <form className="flex gap-2" onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Busque uma transação"
        className="flex-1 rounded bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-transparent transition focus:ring-emerald-600"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        type="submit"
        className="rounded border border-emerald-600 px-6 cursor-pointer py-3 text-sm font-semibold text-emerald-500 transition hover:bg-emerald-600 hover:text-white"
      >
        Buscar
      </button>
    </form>
  )
}