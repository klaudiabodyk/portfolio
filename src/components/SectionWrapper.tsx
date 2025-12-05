import type { ReactNode } from 'react'

interface SectionWrapperProps {
  readonly children?: ReactNode
  readonly ariaLabel?: string
  readonly className?: string
}

const SectionWrapper = ({
  children,
  ariaLabel,
  className,
}: SectionWrapperProps) => {
  const wrapperClassName = className
    ? `section-wrapper ${className}`
    : 'section-wrapper'

  return (
    <section className={wrapperClassName} aria-label={ariaLabel}>
      {children}
    </section>
  )
}

export default SectionWrapper

