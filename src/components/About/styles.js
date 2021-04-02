import styled from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
`;
export const Pic = styled(Img)`
  width: 248px;
  height: 248px;
  border-radius: 50%;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  margin-top: 40px;
`;

export const Icon = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;
