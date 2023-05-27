import styled, { css } from "styled-components";

type Theme = "light" | "dark";

type ContainerProps = {
  theme: Theme;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme }) => css`
    background-color: ${theme === "dark" ? "#333" : "#FFF"};
    color: ${theme === "dark" ? "#FFF" : "#333"};
  `}
`;
