import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
  <Layout>
    <Title text="Welcome" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
      dignissimos aspernatur corrupti obcaecati totam asperiores fuga harum
      soluta quod adipisci et, deleniti esse eum laudantium amet vero corporis
      dolore.
    </p>
    <ArticleList />
  </Layout>
)
