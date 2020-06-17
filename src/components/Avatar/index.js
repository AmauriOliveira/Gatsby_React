import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

export default function Avatar() {
    const { avatarImage } = useStaticQuery(
        graphql`
        query{
            avatarImage:file(relativePath:{eq:"me.jpg"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return <Img fixed={avatarImage.childImageSharp.fixed} className="foo" />
}