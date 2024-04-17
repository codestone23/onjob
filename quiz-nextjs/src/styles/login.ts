import styled from "styled-components";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { device } from "./breakpoints";
import Image from "next/image";

export const Container = styled.div`
  width: 50%;
  float: right;
  @media ${device.md} {
    width: 100%;
    float: none;
    background-image: url(background2);
  }
`;

export const ImageBackground = styled(Image)`
  object-fit: cover;
  object-position: top;
  z-index: -1;
  @media ${device.md} {
    display: none;
  }
`;

export const ImageBackgroundTwo = styled(Image)`
  display: none;
  object-fit: contain;
  object-position: top;
  z-index: -1;
  background-color: black;
  @media ${device.md} {
    display: block;
    object-fit: cover;
  }
  @media ${device.sm} {
    display: block;
    object-fit: contain;
  }
`;

  export const CircleCamera = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  position: absolute;
  top: 4rem;
  background-color: #999595;
  border: 3px solid #fbbc1a;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    width: 4rem;
    height: 4rem;
    top: 12rem;
  }
  @media ${device.sm} {
    top: 18rem;
  }
`;

export const ImageCamera = styled(Image)`
  font-size: 6rem;
  height: 6rem;
  width: 7rem;
  @media ${device.md} {
    width: 3rem;
    height: 3rem;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #999595;
  border: 3px solid #fbbc1a;
  width: 80%;
  height: 36rem;
  margin-top: 8rem;
  gap: 0px;
  border-radius: 6px;
  border: 3px 0px 0px 0px;
  max-width: 90%;
  @media ${device.md} {
    margin-top: 14rem;
    height: 28rem;
  }
  @media ${device.sm} {
    margin-top: 20rem;
    height: 22rem;
    width: 95%;
    padding-top: 2rem;
    max-width: 100%;
  }
`;

export const FormStyles = styled(Form)`
  background: #999595;
`;

export const InputForm = styled(Input)`
  width: 20rem;
  padding: 0;
  height: 5.944rem;
  border-radius: 0;
  border: none;
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  background: #f3f1f1;
  @media ${device.xl} {
    /* height: 4.5rem; */
    width: 13.6rem;
  }
  @media ${device.lg} {
    height: 4.5rem;
    width: 10rem;
  }
  @media ${device.sm} {
    height: 3rem;
    width: 10rem;
    max-width: 100%;
  }
`;
export const InputFormPassword = styled(Input.Password)`
  width: fit-content;
  width: 20rem;
  padding: 0;
  height: 5.944rem;
  border-radius: 0;
  border: none;
  border-radius: 4px;
  padding-left: 1rem;
  background: #f3f1f1;
  @media ${device.xl} {
    /* height: 4.5rem; */
    width: 13.6rem;
  }
  @media ${device.lg} {
    height: 4.5rem;
    width: 10rem;
  }
  @media ${device.sm} {
    height: 3rem;
    width: 10rem;
    max-width: 100%;
  }
`;

export const ContainInput = styled.div`
  display: flex;
  width: max-content;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: #f3f1f1;
  border-radius: 4px;
  @media ${device.lg} {
    height: 4.5rem;
  }

  @media ${device.sm} {
    height: 3rem;
    width: 13rem;
    max-width: 100%;
  }
`;

export const CheckboxLogin = styled(Checkbox)`
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ButtonLogin = styled(Button)`
  background: #d9d9d9;
  color: black;
  margin: 0;
  width: 27rem;
  padding: 0;
  height: 3rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.xl} {
    height: 4.5rem;
    width: 20.5rem;
  }
  @media ${device.lg} {
    height: 4rem;
    width: 15rem;
  }
  @media ${device.sm} {
    height: 2.5rem;
    width: 13rem;
    max-width: 100%;
  }
`;

export const ImagePersonal = styled(Image)`
  font-size: 6rem;
  width: 7rem;
  top: 0;
  @media ${device.lg} {
    width: 5rem;
    /* height: 5rem; */
  }
  @media ${device.sm} {
    height: 3rem;
    width: auto;
  }
`;
export const ImagePassword = styled(Image)`
  font-size: 2rem;
  width: 7rem;
  height: 6rem;
  padding: 1rem;
  top: 0;
  background-color: white;
  border-radius: 4px;
  @media ${device.lg} {
    width: 5rem;
    height: 4.5rem;
  }
  @media ${device.sm} {
    height: 3rem;
    width: 3.8rem;
  }
`;

// npm install "module_name"
