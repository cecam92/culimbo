import styled from "styled-components";

export const Container = styled.div`
  background-color: #060708;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  @media (min-width: 1024px) {
    font-size: 36px;
    height: 40px;
  }
`;
