import { useState } from 'react'

export default function Order() {
  const [loading, setLoading] = useState(false)

  async function submitOrder(e) {
    e.preventDefault()
    setLoading(true)

    const form = e.target
    const data = {
      product: form.product.value,
      details: form.details.value,
      email: form.email.value
    }

    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const json = await res.json()
    window.location.href = json.invoiceUrl
  }

  return (
    <main className="order">
      <h1>Place an Order</h1>

      <form onSubmit={submitOrder}>
        <select name="product" required>
          <option value="">Select service</option>
          <option value="website">Website / Web Tool</option>
          <option value="discord-bot">Discord Bot</option>
        </select>

        <textarea
          name="details"
          placeholder="Describe what you want..."
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />

        <button disabled={loading}>
          {loading ? 'Creating Invoice...' : 'Continue to Payment'}
        </button>
      </form>
    </main>
  )
}
