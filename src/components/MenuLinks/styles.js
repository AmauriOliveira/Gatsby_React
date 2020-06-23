import styled from 'styled-components';
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
font-weight: 300;
font-size: 1.2rem;
`
export const MenuLinksItem = styled.li`
padding: 0.5rem 0;
.active{
    color: #1FA1F2;
}
`
export const MenuLinksLink = styled(Link)`
text-decoration: none;
color: #8899A6;
transition: color 0.5s;

&:hover {
    color: #1FA1F2;
}
`