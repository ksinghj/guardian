import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  margin: 1em 0;
  padding: 0.3em 0.6em;
  background: #00528c;
  color: white;
  outline: 1px solid white;
  max-width: 150px;
  text-align: center;
`;

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;
