import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter'

test('increments count on button click', async () => {
  render(<Counter />)

  const button = screen.getByText('Increment')
  const countText = screen.getByText('0')

  await userEvent.click(button)

  expect(screen.getByText('1')).toBeInTheDocument()
})