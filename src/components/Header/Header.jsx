import React, { useCallback, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import imgBackground from "../../assets/background.jpg"
import { Weather } from "../index.js";

export function Header() {
  let updataData = useMemo(() => {
    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options)
  }, []);
  
  let data = updataData;

  const [currentTime, setCurrentTime] = useState(null);

  const updateTime = useCallback(() => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time)
  }, []);

  useEffect(() => {
    updateTime()
  }, [updateTime])

  setInterval(updateTime, 1000)

  return (
    <>
      <CoverImg imgBackground={imgBackground}>
        <Inner>
          <Title>
            <Weather />
            <StyledData>{data}</StyledData>
            {currentTime}
          </Title>
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
    background: rgba(0, 0, 0, .4);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Nunito', sans-serif;
  font-size: 2.8rem;
  z-index: 10;
`
const StyledData = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
`
