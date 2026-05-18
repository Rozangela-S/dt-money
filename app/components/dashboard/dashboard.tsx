import { Header } from "../header/header";
import { Pagination } from "../pagination/pagination";
import { SearchForm } from "../searchForm/searchForm";
import { Summary } from "../summary/summary";
import { TransactionsTable } from "../transactionsTable/transactionsTable";

export function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <div className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Header />
        </div>
      </div>

      <div className="mx-auto -mt-8 max-w-6xl space-y-8 px-6 pb-10">
        <Summary />

        <section className="space-y-5">
          <SearchForm />
          <TransactionsTable />
          <Pagination />
        </section>
      </div>
    </main>
  )
}