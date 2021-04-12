import styled from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-top: 50px;
  padding: 0px auto;
`;
export const Title = styled.h3`
  font-size: 40px;
  color: #fff;
  text-align: center;
`;
export const Image = styled(Img)`
  height: 500px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconsContainer = styled.div`
  display: flex;
  max-width: 687px;
  width: 100%;
  height: 100px;
  top: 25%;
  justify-content: space-evenly;
  position: absolute;
  left: 0px;
  @media (max-width: 374px) {
    top: 18px;
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  /* filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  } */
`;
