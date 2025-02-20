import Link from 'next/link'

export type NavigationItem = {
  href: string
  label: string
  text: string
}

const navigationItems: NavigationItem[] = [
  {
    href: '/about',
    label: 'Go to about page',
    text: 'About Me'
  },
  {
    href: '/writing',
    label: 'Go to writing page',
    text: 'Writing'
  },
  {
    href: '/code',
    label: 'Go to code page',
    text: 'Code'
  }
]

type NavigationProps = {
  variant: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export function Navigation({ variant, onNavigate }: NavigationProps) {
  return (
    <nav
      className={
        variant === 'desktop'
          ? 'hidden gap-8 md:flex'
          : 'flex flex-col gap-4 p-8'
      }
      role="navigation"
      aria-label={`${variant} navigation`}
    >
      {navigationItems.map(({ href, label, text }) => (
        <Link
          key={href}
          href={href}
          className={'font-light'}
          aria-label={label}
          onClick={() => onNavigate?.()}
        >
          {text}
        </Link>
      ))}
    </nav>
  )
}
