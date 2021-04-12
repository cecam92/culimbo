import styled from "styled-components";
import "./fonts.css";
import Img from "gatsby-image";

export const Title = styled.h2`
  font-size: 48px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 140px;
  height: 54px;
  background: ${props => (props.git ? "#ffb800" : "#fff")};
  color: ${props => (props.git ? "#fff" : "#ffb800")};
  font-size: 20px;
  border-radius: 4px;
  margin: 20px 10px;
  border: none;
  font-weight: bold;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Information = styled.p`
  font-size: 14px;
  width: 80vw;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin: 0px;
  padding: 0px;
`;

export const ProjectoImage = styled(Img)`
  border-radius: 15px;
  width: 248px;
  margin: 20px auto;
`;
