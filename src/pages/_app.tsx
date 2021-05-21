import "tailwindcss/tailwind.css"

import type { AppProps } from "next/app"
import Head from "next/head"

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>Todo Next.js × TS</title>
      </Head>
      <props.Component {...props.pageProps} />
    </>
  )
}

export default App
