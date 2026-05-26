
interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems/ itemsPerPage)
  
  function goToPreviousPage() {
    if(currentPage > 1){
      onPageChange(currentPage - 1)
    }
  }
  
  function goToNextPage () {
    if(currentPage < totalPages){
      onPageChange(currentPage + 1)
    }
  }

  if(totalPages <= 1){
    return null
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button className="text-emerald-500 hover:text-emerald-400"
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      >
        ‹
      </button>
      {Array.from({length: totalPages}).map((_, index) => {
        const page = index + 1
        return (
          <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={
              page === currentPage
                ? "h-8 w-8 rounded bg-emerald-700 text-sm text-white"
                : "h-8 w-8 rounded bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700"}
        >
          {page}
        </button>
      
        )
      })}
      
        
      <button className="text-emerald-500 hover:text-emerald-400"  onClick={goToNextPage} disabled={currentPage === totalPages}
>
        ›
      </button>
    </div>
  )
}