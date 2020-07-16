import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            color
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`)
  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: {
            title, background, color, category, date, description, },
          timeToRead,
          fields: { slug },
        },
      }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            color={color}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        ))}
    </Layout>
  )
}

export default IndexPage;