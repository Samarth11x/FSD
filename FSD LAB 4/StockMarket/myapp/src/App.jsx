import React, { useState } from 'react';

export default function App() {
  const [symbol, setSymbol] = useState('');
  const [stock, setStock] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = "6QCA72JYS4GCC60R";

  const getStock = async () => {
    if (!symbol) return;

    setError('');
    setStock(null);

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );

      const data = await res.json();

      if (!data["Global Quote"] || !data["Global Quote"]["01. symbol"]) {
        setError("Stock not found");
        return;
      }

      setStock(data["Global Quote"]);

    } catch (err) {
      setError("Error fetching stock data");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>📈 Stock Market App</h2>

      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        placeholder="Enter stock symbol (AAPL, TSLA)"
      />

      <button onClick={getStock} style={{ marginLeft: "10px" }}>
        Show Stock Data
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {stock && (
        <div style={{ marginTop: "15px" }}>
          <h3>{stock["01. symbol"]}</h3>

          <p>
            <strong>Current Price:</strong> ${stock["05. price"]}
          </p>

          <p>
            <strong>Today's High:</strong> ${stock["03. high"]}
          </p>

          <p>
            <strong>Today's Low:</strong> ${stock["04. low"]}
          </p>

          <p>
            <strong>Previous Close:</strong> ${stock["08. previous close"]}
          </p>
        </div>
      )}
    </div>
  );
}
