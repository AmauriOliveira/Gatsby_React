import React from 'react';
import { graphql } from "gatsby";// useStaticQuery,

import Layout from "../components/Layout";
import SEO from "../components/seo";

import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
        )
      )}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numberPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}
export const query = graphql`
   query PostList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      limit: $limit
      skip: $skip
      ) {
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
}`;

export default BlogList;