type SummaryCardProps = {
  title: string
  value: string
  variant?: 'default' | 'success'
  icon?: React.ReactNode
}

export function SummaryCard({ title, value, variant = 'default', icon }: SummaryCardProps) {
  return (
    <div
      className={
        variant === 'success'
          ? 'rounded bg-emerald-700 p-6'
          : 'rounded bg-zinc-800 p-6'
      }
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-zinc-400">{title}</span>
        {icon && <div>{icon}</div>}
      </div>

      <strong className="text-2xl font-semibold text-zinc-100">
        {value}
      </strong>
    </div>
  )
}