import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome My Website 👋 !!</title>  </Head>

      <main>
        <Header title="Hello User" />
        <p className="description">
          Hello User Welcome My Website My Discord "The Plague Doctor#1337"
        </p>
      </main>

      <Footer />
    </div>
  )
}
