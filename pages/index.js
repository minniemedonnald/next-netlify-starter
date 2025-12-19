import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DevForge | Websites & Discord Bots</title>
        <meta
          name="description"
          content="Order custom websites, web tools, and Discord bots built for your needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header title="Custom Websites & Discord Bots" />

        <p className="subtitle">
          We build fast, modern websites and powerful Discord bots — made to order.
        </p>

        <div className="services">
          <div className="card">
            <h2>🌐 Websites & Web Tools</h2>
            <p>
              Custom landing pages, dashboards, tools, and full websites built
              with modern tech.
            </p>
            <ul>
              <li>Next.js / React</li>
              <li>Responsive design</li>
              <li>Fast & secure</li>
            </ul>
          </div>

          <div className="card">
            <h2>🤖 Discord Bots</h2>
            <p>
              Fully custom Discord bots for moderation, automation, payments,
              and community tools.
            </p>
            <ul>
              <li>Slash commands</li>
              <li>Moderation & logging</li>
              <li>Custom features</li>
            </ul>
          </div>
        </div>

        <div className="cta">
          <Link href="/order">
            <button>Order Now</button>
          </Link>

          <Link href="/contact">
            <button className="secondary">Contact Us</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
