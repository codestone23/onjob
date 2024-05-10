import styled from "styled-components";
import { device } from "../breakpoint";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

// export const Form = styled.form`
//     margin-top: 20px;
//     max-width: 75%;
//     width: fit-content;
// `;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: Inter;
  font-weight: 700;
  line-height: 3.782rem;
  text-align: left;
  margin-bottom: 1rem;
  @media ${device.lg} {
    font-size: 2.5rem;
  }
`;

export const SmallTitle = styled.h3`
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  margin-bottom: 1rem;
  color: black;
  margin-top: 0;
`;

export const Input = styled.input`
  height: 3.75rem;
  top: 12.563rem;
  border: 0.063rem solid #d1d1d1;
  gap: 0px;
  border-radius: 0.625rem;
  // opacity: 0rem;
  margin-bottom: 1rem;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  padding-left: 1rem;
  color: black;
  width: 100%;
  @media ${device.lg} {
    width: 20.375rem;
    height: 3rem;
    font-size: 0.875rem;
    width: 100%;
  }
  @media ${device.md} {
    font-size: 0.875rem;
  }
  &:focus-visible {
    border-color: #7754f6;
  }
`;

export const HeaderBackground = styled.div`
  width: 100%;
  height: 100vh;
  @media ${device.md} {
    display: none;
  }
`;

export const InputCheckbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  gap: 0px;
  border-radius: 0.25rem;
  opacity: 0px;
  background-color: #7754f6;
  accent-color: #7754f6;
  margin-right: 4px;
  cursor: pointer;
  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
`;

export const FormDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageBackground = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 100%;
  object-position: 0 0;
`;

export const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ForgotPassword = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: #7754f6;
  cursor: pointer;
  @media ${device.lg} {
    font-size: 0.875rem;
  }
  @media ${device.md} {
    font-size: 0.875rem;
  }
`;

export const TextRemember = styled.div`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  color: #000;
  @media ${device.lg} {
    font-size: 0.875rem;
  }
  @media ${device.md} {
    font-size: 0.875rem;
  }
`;

export const Button = styled.button`
  border: 0.063rem solid #d1d1d1;
  width: 26.375rem;
  height: 3.75rem;
  gap: 0px;
  border-radius: 0.625rem;
  background: #7754f6;
  box-shadow: 0px 15px 30px -10px #7754f645;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.21rem;
  text-align: center;
  color: #fff;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
  @media ${device.lg} {
    width: 20.375rem;
    height: 3rem;
    font-size: 1rem;
    width: 100%;
  }
  &:hover{
    background-color: #876deb;
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
`;

export const ButtonSignUp = styled.div`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  color: #7754f6;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const TextItem = styled.div`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  color: #000;
`;

export const ContinueWith = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

export const ContinueWithText = styled.div`
  gap: 0px;
  border: 1px;
  opacity: 0.5px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.21rem;
  text-align: left;
  color: #000;
  cursor: pointer;
  @media ${device.lg} {
    font-size: 0.875rem;
  }
  @media ${device.md} {
    font-size: 0.875rem;
  }
`;

export const Horizontal = styled.div`
  border: 0.2px solid #d1d1d1;
  height: 0.03rem;
  width: 30%;
`;

export const HorizontalForgot = styled.div`
  border: 0.2px solid #d1d1d1;
  height: 0.03rem;
  width: 40%;
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ImageLogo = styled(Image)`
  width: 4.25rem;
  height: 4.063rem;
  gap: 0px;
  border-radius: 0.63rem;
  border: 0.063rem;
  // opacity: 0;
  margin: 0 0.5rem 0 0.5rem;
  cursor: pointer;
  @media ${device.lg} {
    width: 3.25rem;
    height: 3.063rem;
  }
  @media ${device.lg} {
    width: 3rem;
    height: 2.85rem;
  }
`;

export const FormStylesLogin = styled.div`
  margin-top: 20px;
  width: fit-content;
  max-width: 75%;
  width: 90%;
  height: fit-content;
  margin: auto;
`;

export const FormStyles = styled.div`
  margin-top: 20px;
  width: fit-content;
  max-width: 75%;
  width: 90%;
  height: fit-content;
  margin: auto;
  margin-bottom: 200px;
`;


export const ImageCompany = styled(Image)`
  width: 240px;
  height: auto;
  display: flex;
  margin: auto;
`;
