import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    href: '/post',
    label: 'Go to writing page',
    text: 'Writing'
  },
  {
    href: '/projects',
    label: 'Go to code page',
    text: 'Code'
  }
]

type NavigationProps = {
  variant: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export function Navigation({ variant, onNavigate }: NavigationProps) {
  const pathname = usePathname()

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
          className={`font-light transition-colors hover:text-primary focus-visible:text-primary ${
            pathname === href ? 'text-primary' : ''
          }`}
          aria-label={label}
          onClick={() => onNavigate?.()}
        >
          {text}
        </Link>
      ))}
    </nav>
  )
}
