import styled from "styled-components";

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
export const Image = styled.img`
  height: 500px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconsContainer = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 18px;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
