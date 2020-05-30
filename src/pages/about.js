import React from 'react';
import { Link } from "gatsby"

const AboutPage = () => (
    <>
        <h1>About</h1>
        <ul>
            <li>
                <Link to="/" activeStyle={{ color: '#ff5555' }}>Home</Link>
            </li>
            <li>
                <Link to="/about" activeStyle={{ color: '#ff5555' }}>About</Link>
            </li>
        </ul>
    </>
)

export default AboutPage;