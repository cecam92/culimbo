import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1100px;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  min-width: 288px;
  max-width: 320px;
  margin-top: 40px;
`;

export const Icon = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;
