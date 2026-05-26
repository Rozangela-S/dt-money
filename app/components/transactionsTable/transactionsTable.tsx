import { Transaction, transactions } from "@/app/mock/data";
import { SearchForm } from "../searchForm/searchForm";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";
import { Header} from "../header/header";
import { Summary } from "../summary/summary";

export function TransactionsTable() {
  const [listData, setListData] = useState<Transaction[]>(transactions)
  const [seachTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  

  const filtered = listData.filter((f) => {
    return f.description.toLowerCase().includes(query.toLowerCase())
  }).sort((a,b) => a.description.localeCompare(b.description))

  const totalItems = filtered.length

  const indexStart = (currentPage - 1) * itemsPerPage
  const indexEnd = indexStart + itemsPerPage

  const currentItems = filtered.slice(indexStart, indexEnd)

  const handleSearch = () => {
    setQuery(seachTerm)
    setCurrentPage(1)
  }

  const handleAddTransaction = (description: string, price: number, category: string, type: 'income' | 'outcome',) => {
    const newTransations = {
      id: Date.now(),
      description,
      price,
      category,
      type,
      date: new Date().toLocaleDateString('pt-BR')
    }
    setListData(prev => [newTransations, ...prev])
    setCurrentPage(1)
  }


  return (
    <>
     <Header onAddTransaction={handleAddTransaction} />
      <Summary  transactions={listData}/>
     <SearchForm 
      searchTerm={seachTerm} 
      setSearchTerm={setSearchTerm}
      onSearch={handleSearch}
    />
    <div className="overflow-hidden">
      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {currentItems.map((transaction, index) => (
            <tr key={index} className="bg-zinc-800">
              <td className="rounded-l px-5 py-4 text-sm text-zinc-300">
                {transaction.description}
              </td>

              <td
                className={
                  transaction.type === 'income'
                    ? 'px-5 py-4 text-sm text-emerald-500'
                    : 'px-5 py-4 text-sm text-rose-500'
                }
              >
                {transaction.price}
              </td>

              <td className="px-5 py-4 text-sm text-zinc-400">
                {transaction.category}
              </td>

              <td className="rounded-r px-5 py-4 text-sm text-zinc-400">
                {transaction.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Pagination
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalItems={totalItems}
     />

    </>
  )
}