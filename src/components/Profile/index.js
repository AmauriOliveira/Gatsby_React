import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';
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
        <S.ProfileWrapper>
        <S.ProfileLink>
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{author}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    )
}

export default Profile;