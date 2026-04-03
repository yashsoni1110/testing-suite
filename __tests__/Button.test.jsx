// __tests__/Button.test.jsx

import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

test('renders button text', () => {
  render(<Button label="Click Me" />)
  expect(screen.getByText('Click Me')).toBeInTheDocument()
})