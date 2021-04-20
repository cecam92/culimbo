import styled from "styled-components";
export const Title = styled.h3`
  font-size: 40px;
  color: #fff;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerDescription = styled.div``;

export const TechContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  width: 100%;
  max-width: 1000px;
  margin-top: 50px;
  padding: 0px auto;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 450px 450px;
    grid-template-rows: 100px 300px 120px auto auto;
    ${Title} {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    ${ButtonContainer} {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    ${ContainerDescription} {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
      align-self: start;
    }
    ${TechContainer} {
      width: 100%;
      margin: 0 auto;
      grid-row-start: 5;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  &:nth-child(even) {
    ${Title} {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    ${ButtonContainer} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    ${ContainerDescription} {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  max-width: 580px;
  width: 100%;
  min-width: 320px;
  height: 100px;
  top: 20%;
  justify-self: center;
  justify-content: space-around;
  position: absolute;

  @media (max-width: 374px) {
    top: 18px;
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 10244px) {
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
  }
`;
