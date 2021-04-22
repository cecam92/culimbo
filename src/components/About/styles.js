import styled from "styled-components";
import { Title, Button } from "../../styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1100px;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  @media (min-width: 550px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 320px auto;
    grid-template-rows: 150px 190px 75px 100px auto;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    padding-top: 150px;
    margin-bottom: 40px;
  }
  & ${Title} {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  & ${Button} {
    grid-row-start: 4;
    grid-row-end: 5;
    margin: 0px auto;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 3;
    margin: 0px auto;
  }
`;

export const ContainerParagraph = styled.div`
  @media (min-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 6;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  min-width: 288px;
  max-width: 320px;
  margin-top: 40px;
  @media (min-width: 1024px) {
    grid-row-start: 3;
    grid-row-end: 4;
    margin: 0px auto;
    width: 320px;
  }
`;

export const Icon = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;
