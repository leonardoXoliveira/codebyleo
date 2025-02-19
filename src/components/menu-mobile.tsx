'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'

type MenuMobileProps = {
  onNavigate: () => void
}

export function MenuMobile({ onNavigate }: MenuMobileProps) {
  const { setTheme, theme } = useTheme()

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 top-[68px] z-20 min-h-screen w-full bg-background"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <Navigation variant="mobile" onNavigate={onNavigate} />

      <div
        className="flex items-center justify-between border-b border-t p-8"
        role="region"
        aria-label="Theme selection"
      >
        <div className="font-light">Theme</div>

        <div
          className="flex gap-2 rounded-lg border border-border p-1"
          role="group"
          aria-label="Theme options"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('system')}
            aria-label="Use system theme"
            aria-pressed={theme === 'system'}
            className={`rounded-md transition-colors ${
              theme === 'system' ? 'bg-accent' : 'hover:bg-accent/50'
            }`}
          >
            <Laptop aria-hidden="true" className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('light')}
            aria-label="Use light theme"
            aria-pressed={theme === 'light'}
            className={`rounded-md transition-colors ${
              theme === 'light' ? 'bg-accent' : 'hover:bg-accent/50'
            }`}
          >
            <Sun aria-hidden="true" className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('dark')}
            aria-label="Use dark theme"
            aria-pressed={theme === 'dark'}
            className={`rounded-md transition-colors ${
              theme === 'dark' ? 'bg-accent' : 'hover:bg-accent/50'
            }`}
          >
            <Moon aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
