import type { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './styles/SectionWrapper.css'

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
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 })
  
  const wrapperClassName = className
    ? `section-wrapper ${className} ${isVisible ? 'is-visible' : ''}`
    : `section-wrapper ${isVisible ? 'is-visible' : ''}`

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      className={wrapperClassName} 
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
