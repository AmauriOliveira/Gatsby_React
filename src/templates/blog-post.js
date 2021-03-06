import React from 'react';
import { graphql } from "gatsby";// useStaticQuery,

import Layout from "../components/Layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Layout>
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