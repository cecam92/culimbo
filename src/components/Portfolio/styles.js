import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0px auto;
  max-width: 1100px;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;

  @media (min-width: 550px) {
    margin-bottom: 75px;
  }
`;
