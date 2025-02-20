import { render, screen } from '@testing-library/react'

import Page from './page'

describe('Page', () => {
  it('SHOULD render', () => {
    render(<Page />)
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  })
})
