import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome My Website 👋 !!</title>  </Head>

      <main>
        <body style="background-color:lightblue;">
         <Header title="Hello User" />
         <p style="color:darkblue;" className="description">
           Hello User Welcome My Website My Discord "The Plague Doctor#1337"
         </p>
        </body>
      </main>

      <Footer />
    </div>
  )
}
