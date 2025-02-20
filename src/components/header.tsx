'use client'

import autoAnimate from '@formkit/auto-animate'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

import { MenuMobile } from '@/components/menu-mobile'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'

import { NameTransition } from './name'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const parent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleCloseMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current, { duration: 100 })
    }
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full backdrop-blur-sm"
        role="banner"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
          <Link
            href="/"
            className="scroll-m-20 text-2xl font-semibold"
            aria-label="Go to home page"
            onClick={handleCloseMenu}
          >
            <NameTransition />
          </Link>

          <Navigation variant="desktop" />

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            variant="outline"
            size="icon"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </Button>
        </div>
      </header>

      <div ref={parent}>
        {isMenuOpen && <MenuMobile onNavigate={handleCloseMenu} />}
      </div>
    </>
  )
}
