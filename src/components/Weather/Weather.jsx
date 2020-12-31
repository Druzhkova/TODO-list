import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export function Weather() {
  const { data, loading, errorMessage } = useSelector((state) => state.weather);
  const { city, temperature } = data;

  return (
    <div>
        {
          loading ? <Inner>Loading...</Inner>
           : errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage>
           : <Inner>{city}, {temperature}°C</Inner>
        }
    </div>
  );
}

const Inner = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  font-size: 1.6rem;
  color: red;
`;


