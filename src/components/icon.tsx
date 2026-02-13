import type { LucideProps } from 'lucide-react'

import { icons } from 'lucide-react'

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof icons
  className?: string
  color?: string
}

export function Icon({ name, className, color = 'currentColor', ...props }: IconProps) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={20} className={className} {...props} />
}
