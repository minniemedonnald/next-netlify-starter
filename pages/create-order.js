export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { product, details, email } = req.body

  // Price example (you can make this dynamic)
  const price = product === 'website' ? 150 : 80

  const invoiceRes = await fetch(
    process.env.BTCPAY_URL + '/api/v1/stores/' + process.env.BTCPAY_STORE_ID + '/invoices',
    {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.BTCPAY_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: price,
        currency: 'USD',
        metadata: { email, product, details },
        checkout: {
          paymentMethods: ['BTC', 'LTC'],
          redirectURL: 'https://yourdomain.com/success'
        }
      })
    }
  )

  const invoice = await invoiceRes.json()

  res.json({ invoiceUrl: invoice.checkoutLink })
}
