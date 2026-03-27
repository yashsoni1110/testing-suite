import { render, screen } from '@testing-library/react'
import Card from '../components/card'

test('renders card title', () => {
  render(<Card title="Hello Card" />)
  expect(screen.getByText('Hello Card')).toBeInTheDocument()
})