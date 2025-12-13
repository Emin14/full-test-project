import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        data: [
          {
            id: 1,
            name: 'Париж',
            location: 'Франция',
            price: 1000,
            rating: 5,
            description: '',
            image: '',
            category: '',
          },
        ],
      }),
    } as any)
  })

  afterEach(() => {
    fetchSpy.mockRestore()
  })

  it('renders tours from API', async () => {
    render(<App />)

    expect(await screen.findByText('Париж')).toBeInTheDocument()
    expect(screen.getByText('Франция')).toBeInTheDocument()

    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(fetchSpy).toHaveBeenCalledWith('/api/tours')
  })
})
