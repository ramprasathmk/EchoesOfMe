import React from 'react'
import styled from 'styled-components'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ImHome } from 'react-icons/im'

const StyledNavBar = styled.nav`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

.container {
    margin: 1rem;
    text-align: center;
}

.nav {
    background-color: #111 !important; 
    height: 2.5em;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch; // center
    gap: 2rem;
    padding: 0 1rem;
    font-size: 1.2rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}

.site-title {
    font-size: 2rem;
    -webkit-text-fill-color: teal !important;
}

.nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
}

.nav li.active {
    background-color: #555;
}

.nav li:hover {
    background-color: #777;
    text-decoration: underline;
    transition: .3s;
}
`

function NavBar() {

  return (
    <>
      <StyledNavBar>
        <nav className="nav">
          <Link to="/" className="site-title">
            <ImHome />
          </Link>
          <ul>
            <CustomLink to="/projects"> Projects </CustomLink>
            <CustomLink to="/about"> About </CustomLink>
          </ul>
        </nav>
      </StyledNavBar>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar