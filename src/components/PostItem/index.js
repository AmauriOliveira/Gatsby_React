import React from 'react';

import * as S from './styles';

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650B">
                AAO
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    15 de Novembro
                </S.PostItemDate>
                <S.PostItemTitle>
                    Amauri Oliveira
                </S.PostItemTitle>
                <S.PostItemDescription>
                    Informação generica
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem;