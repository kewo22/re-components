import { render, screen } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import App from './App'

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true)
  })

  it('false to be false', () => {
    expect(false).toBe(false)
  })
})

describe('App', () => {
  it('renders App component', () => {
    render(<App />)

    // screen.debug()
    const textEl = screen.getByText('Vite + React');
    expect(textEl).toBeInTheDocument();
  })
})
