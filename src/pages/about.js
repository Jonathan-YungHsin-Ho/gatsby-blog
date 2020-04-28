import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text="About Me" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
      dignissimos aspernatur corrupti obcaecati totam asperiores fuga harum
      soluta quod adipisci et, deleniti esse eum laudantium amet vero corporis
      dolore.
    </p>
  </Layout>
)
