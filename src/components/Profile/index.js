import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

const Profile = () => {
    const {
        site: {
            siteMetadata: {
                title,
                description,
                author }
        }
    } = useStaticQuery(graphql`
    query MyQuery {
                site {
                    siteMetadata {
                    title
                    description
                    author
                    }
                }
            }

        `)
    return (
        <div className="Profile-wrapper">
            <Avatar />
            <h1>
                {title}
            </h1>
            <h2>
                {author}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Profile;