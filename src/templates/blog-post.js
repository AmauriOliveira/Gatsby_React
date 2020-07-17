import React from 'react';
import { graphql } from "gatsby";// useStaticQuery,

const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </>
    )
}
export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                date
                category
            }
                html
        }
    }`;

export default BlogPost;

/*
query Post($slug: String!) {
 markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      description
      date
      category
    }
    html
  }
}

*/