import styled from "styled-components";

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 100vh;
  height: 80vh;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
