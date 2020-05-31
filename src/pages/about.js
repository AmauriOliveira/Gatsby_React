import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <ul>
            <li>
                <Link to="/" activeStyle={{ color: '#ff5555' }}>Home</Link>
            </li>
            <li>
                <Link to="/about" activeStyle={{ color: '#ff5555' }}>About</Link>
            </li>
        </ul>
    </Layout>
)
export default AboutPage;