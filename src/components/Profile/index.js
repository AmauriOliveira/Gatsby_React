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
        position,
        author }
    }
  } = useStaticQuery(graphql`
    query MyQuery {
                site {
                    siteMetadata {
                    title
                    description
                    position
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
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
      <S.ProfileDescription>{author}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile;