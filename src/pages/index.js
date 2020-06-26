import React from "react";
//import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
)

export default IndexPage;
