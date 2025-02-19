import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import Page from './page'

describe('Page', () => {
  it('SHOULD render', () => {
    render(<Page />)
    expect(screen.getByText('New Hello World')).toBeInTheDocument()
  })
})
