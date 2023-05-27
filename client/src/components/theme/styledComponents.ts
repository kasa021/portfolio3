import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme === "dark" ? "#333" : "#FFF"};
    color: ${theme === "dark" ? "#FFF" : "#333"};
  `}
`;
