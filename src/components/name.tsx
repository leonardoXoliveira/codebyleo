import { unstable_ViewTransition as ViewTransition } from 'react'

type NameTransitionProps = {
  isHomePage?: boolean
}

export function NameTransition({ isHomePage }: NameTransitionProps) {
  return (
    <ViewTransition>
      {isHomePage && <h1 className="sr-only">codebyleo</h1>}
      <div
        aria-hidden="true"
        className="group relative w-36 overflow-hidden text-2xl"
      >
        <span className="inline-block whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'codebyleo'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>

        <span className="absolute left-0 top-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
          {'Leo Oliveira'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      </div>
    </ViewTransition>
  )
}
