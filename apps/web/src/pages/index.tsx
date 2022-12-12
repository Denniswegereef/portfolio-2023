import { Box } from '@/components/box'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box
      css={{
        backgroundColor: 'black',
      }}>
      <Head>
        <title>Portfolio 2023</title>
        <meta name="description" content="Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        css={{
          color: 'white',
        }}>
        <h1>Portfolio 2023</h1>
      </Box>
    </Box>
  )
}
