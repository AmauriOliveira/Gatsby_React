import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styles';

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
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed}/>
}