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

  @media (min-width: 1024px) {
    height: 78px;

    & a {
      height: 56px;
    }
  }
`;
export const Label = styled.h4`
  color: rgba(255, 255, 255, 0.79);
  margin: 10px;
  margin-left: ${props => props.marginleft};
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
  z-index: 100;
`;
export const Logo = styled.h5`
  width: 147px;
  height: 25px;

  @media (min-width: 1024px) {
    width: 296px;
    height: 56px;
  }
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 23px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
`;

export const ContainerCV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
