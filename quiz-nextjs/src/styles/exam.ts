import { Checkbox } from 'antd';
import styled from "styled-components";
import { device } from "./breakpoints";
import Image from 'next/image'
import { Button, Modal } from 'antd';

import { ConfigProvider } from 'antd';

export const ContainerExam = styled.div`
    display: flex;
    height: 100%;
    
`;
export const BodyExam = styled.div`
    width: 70%;
    height: 100vh;
    @media ${device.md}{
        width: 100%;
    }
`;
export const ProgressExam = styled.div`
    width: 100%;
    height: 10rem;
    gap: 0px;
    border: 1px solid #00000080;
    border-right: none;
    background: #D9D9D9;
    padding: 2rem;
    @media ${device.md}{
        background-color: #c4c4c4;
        border: none;
        height: 6rem;
    }
`;
export const TitleProgress = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
    margin-bottom: 1rem;
    @media ${device.md}{
        display: none;
    }


`;
export const TimeProgress = styled.div`
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    text-align: left;

`;
export const ContentProgress = styled.div`
    width: 100%;
    height: 21px;
    top: 122px;
    left: 27px;
    gap: 0px;
    border-radius: 4px;
    background: #BAB7B7;
    margin-top: 1rem;
`;
export const ProgressStyles = styled.div`
    width: 70%;
    height: 21px;
    top: 122px;
    left: 27px;
    gap: 0px;
    border-radius: 4px;
    background: #41C54E;


`;
export const QuestionExam = styled.div`
    background-color: #c4c4c4;
    height: 80%;
    padding: 3rem;
    position: relative;
    @media ${device.md}{
        background-color: #c4c4c4;
        border: none;
        padding:2rem;
        padding-top: 1rem ;
    }

`;
export const TitleExam = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;

`;
export const AnswerExam = styled.div`
    margin-left: 2rem;
    margin-top: 3rem;
    @media ${device.md}{
        margin: 0;
    }
`;
export const ItemAnswer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;

`;
export const CheckboxItem = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
    opacity: 0px;
    border: 1px solid #000000;
    background: #D9D9D9;



`;
export const ContentItem = styled.div`
    margin-left: 1rem;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;

`;
export const ButtonExam = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-bottom: 2rem;
    @media ${device.md} {
        bottom: 4rem;
    }
    

`;
export const ButtonLeft = styled.div`
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    text-align: center;
    background: #EEE7A9;
    padding:.75rem 1.5rem;
    border-radius: 4px;
    width: 10rem;
    border: 1px solid #00000080;



`;
export const ButtonRight = styled.div`
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    text-align: center;
    background: #EEE7A9;
    padding:.75rem 1.5rem;
    border-radius: 4px;
    width: 10rem;
    border: 1px solid #00000080;
`;
export const SiderExam = styled.div`
    width: 30%;
    opacity: 0px;
    background: #D9D9D9;
    border: 1px solid #00000080;
    @media ${device.md}{
        display: none;
    }


`;
export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 3rem;
    width: 100%;
    flex-wrap: wrap;
    

`;
export const QuestionItem = styled.div`
    width: 3rem;
    height: 4rem;
    border-radius: 4px;
    border: 1px solid #000000;
    background: #B6B6B6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    @media ${device.md}{
        width:  2.2rem;
        height: 3rem;
        margin: 0.2rem;
    }

`;
export const SubmitExam = styled.div`
    position: absolute;
    bottom: 2rem;
    width: 238px;
    height: 85px;
    border-radius: 41px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: center;
    background: #9F9D9F;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media ${device.lg}{
        width: 10rem;
        height: 4rem;
    }
`;
export const ButtonTransfer = styled.div`
    position: absolute;
    bottom: 2rem;
    width: 238px;
    height: 85px;
    border-radius: 41px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: center;
    background: #9F9D9F;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media ${device.lg}{
        width: 10rem;
        height: 4rem;
    }
    @media ${device.md}{
        width: 10rem;
        height: 3rem;
    }
`;
export const ButtonSubmit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonMove =styled.div`
    display: none;
    @media ${device.md}{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ContainQuestion = styled.div`
    @media ${device.md}{
        display: none;
    }

`;

export const ImageTabExam = styled(Image)`
    top: 1rem;
    left: 1rem;
    gap: 0px;
    border-radius: 4px;
    position: absolute;
`;

export const HeaderMobileExam = styled.div`
    display: none;
    color: white;
    @media ${device.md}{
        display: flex;
        background: #545151;
        height: 4rem;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

`;

export const ModalExam = styled(Modal)`
    height: 500px;



`;
