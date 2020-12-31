import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import imgBackground from "../../assets/background.jpg"

export function Header() {
  return (
    <>
    <CoverImg imgBackground={imgBackground}>
      <Inner>
        <Title>Vacation</Title>
      </Inner>
    </CoverImg>
    <StyledHeader>
      <StyledNavLink style={{color: "#66A7C9"}} activeStyle={{ color: "#F3706C" }} to="/all">All</StyledNavLink>
      <StyledNavLink style={{color: "#66A7C9"}} activeStyle={{ color: "#F3706C" }} to="/active">Active</StyledNavLink>
      <StyledNavLink style={{color: "#66A7C9"}} activeStyle={{ color: "#F3706C" }} to="/done">Done</StyledNavLink>
    </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
  margin: 15px 5px;
  text-decoration: none;
`
const CoverImg = styled.div`
  background-image: url('${(props) => props.imgBackground}');
  height: 190px;
  background-size: cover;
  background-position: 10% 20%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`
const Inner = styled.div`
  &::after{
    background: rgba(0, 0, 0, .3);
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`
const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: 2.8rem;
  z-index: 10;
  font-weight: 700;
`
