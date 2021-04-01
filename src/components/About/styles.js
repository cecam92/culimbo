import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
`;
export const Pic = styled.img`
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

export const Title = styled.h2`
  font-size: 48px;
  margin-top: 20px;
`;

export const Information = styled.p`
  font-size: 14px;
  margin-top: 20px;
  width: 80vw;
`;

export const ResumeButton = styled.button`
  width: 159.22px;
  height: 54.9px;
  background: #fff;
  color: #ffb800;
  font-size: 20px;
  border-radius: 4px;
  margin: 10px 0px;
  border: none;
  font-weight: bold;
`;
