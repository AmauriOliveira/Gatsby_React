import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #38444D;
  color: #8899A6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: #8899A6;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1FA1F2;
    }
  }
`