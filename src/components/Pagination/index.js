import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from "./styles";

const Pagination = ({ isFirst, isLast, currentPage, numberPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>
                Página Anterior
            </Link>
        }

        <p>{currentPage} de  {numberPages}</p>

        {!isLast &&
            <Link to={nextPage}>
                Proxima Página
            </Link>
        }
    </S.PaginationWrapper>
)
Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numberPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination;