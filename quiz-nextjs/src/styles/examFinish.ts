import styled from "styled-components";
import { device } from "./breakpoints";

export const ContainerExamFinish = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormFinish = styled.div`
  width: 75%;
  height: 442px;
  border-radius: 6px;
  opacity: 0px;
  border: 1px solid #00000080;
  background: #d9d9d9;
`;
export const TitleForm = styled.div`
  /* width: 40rem; */
  height: 4rem;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  margin: 2rem;
  @media ${device.md} {
    height: 2rem;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  @media ${device.md} {
    flex-direction: column;
  }
`;
export const ContentLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  @media ${device.md} {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentItemTitle = styled.div`
  width: fit-content;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;
export const ContentItemNumber = styled.div`
  width: fit-content;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;
export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  @media ${device.md} {
    width: 100%;
  }
`;
export const ButtonBackDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonBack = styled.div`
  width: 238px;
  height: 85px;
  border-radius: 41px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: center;
  background: #9f9d9f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media ${device.lg} {
    width: 10rem;
    height: 4rem;
  }
  @media ${device.md} {
    width: 10rem;
    height: 3rem;
  }
  &:hover {
    background-color: #b6b6b6;
  }
`;
