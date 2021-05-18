import type { VFC } from "react"
import { EslintIgnoreTest } from "src/components/EslintIgnoreTest"
import { Layout } from "src/components/Layout"

const About: VFC = () => {
  return (
    <Layout>
      <p>About</p>
      <EslintIgnoreTest />
    </Layout>
  )
}

export default About
