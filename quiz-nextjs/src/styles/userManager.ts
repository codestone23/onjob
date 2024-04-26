import { AnswerExam } from './exam';
import styled from "styled-components";
import { device } from "./breakpoints";
import Image from "next/image";
import { Col, Row } from "antd";


export const TextManager = styled.div`
  width: 90%;
  margin: auto;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const TextFrontHeader = styled.div`
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    text-align: left;
    width: 95%;
    margin: auto;
    margin-top: 1rem;


`;
export const HeaderRightManager = styled.div`
  width: 20%;
  background: white;
  border: 1px solid #000000;
  height: 4rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #c9cbcb;
  }
  @media ${device.lg} {
    display: none;
  }
`;

export const ImageAdd = styled(Image)`
    margin-right: 2rem;

`;

export const BodyManager = styled.div`
  width: 100%;
  height: 65vh;
  padding: 2rem;
  @media ${device.lg} {
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media ${device.md} {
    margin-top: 1rem;
    height: 72vh;
  }
`;

export const ColUser = styled(Col)`
    background-color: white;
    width: 100%;
    height: 4rem;
    border-radius: 4px;
    border: 1px;
    opacity: 0px;
    border: 1px solid #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const RowItem = styled(Row)`
`;

export const TextCol = styled.div`
    padding-left: 2rem ;
`;

export const HeaderPCText = styled.div`
    font-size: 2rem;
    width: 95%;
    margin: auto;
    margin-top: 1rem;
    font-weight: 600;

`;

export const FooterUserManager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`;
