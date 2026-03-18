import { useEffect, useMemo, useState } from 'react'
import './App.css'

const DEFAULT_SYMBOL = 'IBM'
const QUICK_SYMBOLS = ['IBM', 'AAPL', 'MSFT', 'TSLA', 'NVDA', 'GOOGL']

function formatCurrency(value) {
  const amount = Number(value)

  if (Number.isNaN(amount)) return '--'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(amount)
}

function formatNumber(value) {
  const amount = Number(value)

  if (Number.isNaN(amount)) return '--'

  return amount.toFixed(2)
}

function formatDate(value) {
  if (!value) return 'Unknown'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(value))
}

function getChangeTone(change) {
  const amount = Number(change)

  if (Number.isNaN(amount) || amount === 0) return 'neutral'
  return amount > 0 ? 'positive' : 'negative'
}

function App() {
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL)
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [installPrompt, setInstallPrompt] = useState(null)

  const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
  const changeTone = useMemo(
    () => getChangeTone(quote?.['09. change']),
    [quote]
  )

  async function fetchQuote(nextSymbol = symbol) {
    const trimmedSymbol = nextSymbol.trim().toUpperCase()

    if (!trimmedSymbol) {
      setError('Enter a stock symbol like IBM or AAPL.')
      return
    }

    if (!apiKey) {
      setError('Missing API key. Add VITE_ALPHA_VANTAGE_API_KEY to your .env file.')
      setLoading(false)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${trimmedSymbol}&apikey=${apiKey}`
      )
      const data = await response.json()
      const nextQuote = data['Global Quote']

      if (!nextQuote || !nextQuote['01. symbol']) {
        throw new Error('No stock data found for that symbol.')
      }

      setQuote(nextQuote)
      setSymbol(trimmedSymbol)
    } catch (fetchError) {
      setError(fetchError.message || 'Unable to fetch stock data right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote(DEFAULT_SYMBOL)
    // We only want a first-load fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    function handleBeforeInstallPrompt(event) {
      event.preventDefault()
      setInstallPrompt(event)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  async function handleInstallClick() {
    if (!installPrompt) return

    await installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetchQuote(symbol)
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">React + Vite + PWA</p>
          <h1>StockWave</h1>
          <p className="hero-text">
            A mobile-first stock tracker that can be installed on your phone like
            an app.
          </p>
        </div>

        <div className="hero-actions">
          <button
            className="install-button"
            onClick={handleInstallClick}
            disabled={!installPrompt}
          >
            {installPrompt ? 'Install App' : 'Install Ready After Deploy'}
          </button>
          <p className="install-hint">
            Open the deployed link on mobile and choose Add to Home Screen.
          </p>
        </div>
      </section>

      <section className="search-card">
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="symbol" className="field-label">
            Search stock symbol
          </label>
          <div className="search-row">
            <input
              id="symbol"
              value={symbol}
              onChange={(event) => setSymbol(event.target.value.toUpperCase())}
              placeholder="Enter symbol"
              autoComplete="off"
            />
            <button type="submit">{loading ? 'Loading...' : 'Track'}</button>
          </div>
        </form>

        <div className="quick-picks">
          {QUICK_SYMBOLS.map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              onClick={() => fetchQuote(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {error ? <p className="status error">{error}</p> : null}
      {!error && loading ? <p className="status">Fetching live market snapshot...</p> : null}

      {quote ? (
        <>
          <section className={`spotlight-card ${changeTone}`}>
            <div>
              <p className="spotlight-label">Live snapshot</p>
              <h2>{quote['01. symbol']}</h2>
              <p className="spotlight-price">{formatCurrency(quote['05. price'])}</p>
            </div>

            <div className={`change-pill ${changeTone}`}>
              {formatNumber(quote['09. change'])} ({quote['10. change percent']})
            </div>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <p>Open</p>
              <h3>{formatCurrency(quote['02. open'])}</h3>
            </article>
            <article className="stat-card">
              <p>High</p>
              <h3>{formatCurrency(quote['03. high'])}</h3>
            </article>
            <article className="stat-card">
              <p>Low</p>
              <h3>{formatCurrency(quote['04. low'])}</h3>
            </article>
            <article className="stat-card">
              <p>Previous Close</p>
              <h3>{formatCurrency(quote['08. previous close'])}</h3>
            </article>
          </section>

          <section className="detail-card">
            <div>
              <p className="detail-label">Trading volume</p>
              <strong>{Number(quote['06. volume']).toLocaleString('en-US')}</strong>
            </div>
            <div>
              <p className="detail-label">Latest trading day</p>
              <strong>{formatDate(quote['07. latest trading day'])}</strong>
            </div>
            <div>
              <p className="detail-label">Offline support</p>
              <strong>Shell cached for repeat visits</strong>
            </div>
          </section>
        </>
      ) : null}
    </main>
  )
}

export default App
