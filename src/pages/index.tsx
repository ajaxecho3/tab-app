import Image from 'next/image'
import { Sofia_Sans_Condensed } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import SocialResponsibility from '@/components/SocialResponsibility'
import Careers from '@/components/Carrers'
import News from '@/components/News'
import Grants from '@/components/Grants'
import Footer from '@/components/Footer'
import { Fragment } from 'react'
import Head from 'next/head'

const sofia = Sofia_Sans_Condensed({
  subsets: ['latin']
})

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Tab</title>
      </Head>
      <main className={`min-h-screen flex flex-col overflow-x-hidden bg-[#FFFFF] ${sofia.className}`}>
        <Header />
        <Hero />
        <AboutUs />
        <SocialResponsibility />
        <Careers />
        <News />
        <Grants />
        <Footer />
      </main>
    </Fragment>
  )
}
