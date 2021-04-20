import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const IconsContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media (min-width: 1024px) {
    padding: 20px 25px;
  }
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
export const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;
