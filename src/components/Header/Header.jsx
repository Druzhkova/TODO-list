
import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <StyledNavLink style={{color: "deepskyblue"}} activeStyle={{ color: "#28A745" }} to="/all">All</StyledNavLink>
      <StyledNavLink style={{color: "deepskyblue"}} activeStyle={{ color: "#28A745" }} to="/active">Active</StyledNavLink>
      <StyledNavLink style={{color: "deepskyblue"}} activeStyle={{ color: "#28A745" }} to="/done">Done</StyledNavLink>
    </header>
  );
}

const StyledNavLink = styled(NavLink)`
  margin: 20px;
  text-decoration: none;
`