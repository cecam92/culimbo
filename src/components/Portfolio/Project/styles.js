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

export const ContainerDescription = styled.div`
  width: 90%;
`;

export const TechContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  width: 90%;
  max-width: 1000px;
  margin-top: 50px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 400px 500px;
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
    grid-template-columns: 500px 400px;
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
  width: 90%;
  min-width: 270px;
  height: 100px;
  top: 25%;
  justify-self: center;
  justify-content: space-around;
  position: absolute;

  @media (min-width: 374px) {
    top: 20px;
    max-width: 390px;
  }

  @media (min-width: 1024px) {
    top: 20%;
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
