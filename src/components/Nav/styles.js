import styled from "styled-components";

export const ContainerNav = styled.div`
  width: 100vw;
  height: 55px;
  padding: 20px 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
  background-color: #060708;
  & a {
    height: 25px;
  }
`;
export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
export const Logo = styled.h3`
  width: 147px;
  height: 25px;
  font-size: 24px;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 23px;
`;
