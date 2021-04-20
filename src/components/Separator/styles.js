import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(19, 17px);
  grid-template-rows: repeat(5, 17px);
  height: 100px;
  justify-content: center;
  margin-top: 20px;
  width: 320px;

  gap: 4px;

  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(25, 17px);
    grid-template-rows: repeat(4, 17px);
    max-width: 1000px;
    height: 80px;
  }
`;
export const Balls = styled.div`
  width: 7px;
  height: 7px;
  background: rgba(196, 196, 196, 0.17);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-self: center;
  align-self: center;
`;
