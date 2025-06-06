import styled from "styled-components";

export const LoaderOverlay = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999;
  background-color: ${({ theme }) => theme.colors.background};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
