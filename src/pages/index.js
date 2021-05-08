import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby" />
        <p>What a world.</p>
        <img
          alt="good_one"
          src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
        />
      </div>
    </Layout>
  )
}
