import { unstable_ViewTransition as ViewTransition } from 'react'

export function NameTransition() {
  return (
    <ViewTransition>
      <div className="font-medium">
        <span className="sr-only">codebyleo</span>
        <span
          aria-hidden="true"
          className="group relative block w-36 overflow-hidden"
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
        </span>
      </div>
    </ViewTransition>
  )
}
