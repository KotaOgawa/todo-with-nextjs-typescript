import type { VFC } from "react"
import { Layout } from "src/components/Layout"

const Home: VFC = () => {
  const handleClick = () => {
    window.alert("Hello, World!")
  }

  return (
    <Layout>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </Layout>
  )
}

export default Home
