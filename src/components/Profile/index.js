import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
    <StaticQuery query={graphql`
    query MyQuery {
                site {
                    siteMetadata {
                    title
                    description
                    author
                    }
                }
            }

        `}
        render={({
            site: {
                siteMetadata: {
                    title,
                    description,
                    author }
            }
        }
        ) => (
                <div className="Profile-wrapper">
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
    />
)

export default Profile;