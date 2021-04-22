import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: ${props => (props.decor ? "none" : "grid")};
  grid-template-columns: repeat(19, 17px);
  grid-template-rows: repeat(5, 17px);
  justify-content: center;
  margin-top: 20px;
  gap: 4px;
  width: 320px;
  height: 100px;

  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 550px) {
    width: 100%;
    display: grid;
    grid-template-rows: ${props =>
      props.decor ? "repeat(6, 17px)" : "repeat(4, 17px)"};
    max-width: 1000px;
    height: ${props => (props.decor ? "125px" : "80px;")};
    position: ${props => (props.decor ? "absolute" : "relative")};
    margin-left: ${props => (props.decor ? "230px" : null)};
    margin-top: ${props => (props.decor ? "30px" : null)};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(25, 17px);
    grid-template-rows: ${props =>
      props.desktop ? "repeat(6, 17px)" : "repeat(4, 17px)"};
    max-width: 1000px;
    height: ${props => (props.desktop ? "125px" : "80px;")};
    position: ${props => (props.desktop ? "absolute" : "relative")};
    margin-left: ${props => (props.desktop ? "230px" : null)};
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
