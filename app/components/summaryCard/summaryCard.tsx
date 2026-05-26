import React from "react"

type SummaryCardProps = {
  title: string
  value: number
  variant?: 'out' | 'success' | 'default'
  icon?: React.ReactNode
}

const variantStyles = {
  default: {
    card: 'bg-zinc-800',
    title: 'text-zinc-400',
    value: 'text-zinc-100',
    icon: 'text-zinc-400',
  },
  success: {
    card: 'bg-emerald-700',
    title: 'text-emerald-100',
    value: 'text-white',
    icon: 'text-emerald-100',
  },
  out: {
    card: 'bg-rose-700',
    title: 'text-rose-100',
    value: 'text-white',
    icon: 'text-rose-100',
  },
}

export function SummaryCard({
  title,
  value,
  variant = 'default',
  icon,
}: SummaryCardProps) {
  const styles = variantStyles[variant]

  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div
      className={`
        rounded-lg p-6 shadow-sm transition
        ${styles.card}
      `}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-sm font-medium ${styles.title}`}>
          {title}
        </span>

        {icon && (
          <div className={`text-xl ${styles.icon}`}>
            {icon}
          </div>
        )}
      </div>

      <strong className={`block text-2xl font-semibold tracking-tight ${styles.value}`}>
        {formattedValue}
      </strong>
    </div>
  )
}