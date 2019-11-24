import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const LinkNav = styled(Link)`
  color: #BAB2B5;
  margin-right: 35px;
  transition: color 0.2s ease-out;
  text-decoration: none;
  :hover{
    color: #AC3B61;
    transition: color 0.2s;
  }
  &.active{
    color: #AC3B61;
  }
  @media (max-width: 700px) {
    margin-right: 14px;
    :last-of-type{
      display: flex;
    }
  }
`
const NavLink = ({ info }) => (
    <LinkNav to={info.path} exact={"true"} activeClassName="active">
        {info.label}
    </LinkNav>
);

export default NavLink;
