const transactions = [
  {
    description: 'Desenvolvimento de site',
    price: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/2022',
    type: 'income',
  },
  {
    description: 'Hambúrguer',
    price: '- R$ 59,00',
    category: 'Alimentação',
    date: '10/04/2022',
    type: 'outcome',
  },
  {
    description: 'Aluguel do apartamento',
    price: '- R$ 1.200,00',
    category: 'Casa',
    date: '27/03/2022',
    type: 'outcome',
  },
  {
    description: 'Computador',
    price: 'R$ 5.400,00',
    category: 'Venda',
    date: '15/03/2022',
    type: 'income',
  },
  {
    description: 'Desenvolvimento de site',
    price: 'R$ 8.000,00',
    category: 'Venda',
    date: '13/03/2022',
    type: 'income',
  },
]

export function TransactionsTable() {
  return (
    <div className="overflow-hidden">
      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {transactions.map((transaction, index) => (
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
  )
}