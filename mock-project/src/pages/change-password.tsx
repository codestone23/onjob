import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  ForgotPassword,
  FormContainer,
  FormDetails,
  ImageBackground,
  ImageLogo,
  Input,
  InputCheckbox,
  RememberMe,
  SmallTitle,
  TextRemember,
  Title,
  CreateAccount,
  ButtonSignUp,
  TextItem,
  ContinueWith,
  Horizontal,
  ContinueWithText,
  FooterSocialMedia,
  HeaderBackground,
  FormStyles,
  ImageCompany,
  HorizontalForgot,
  FormStylesLogin,
} from "../styles/login/login";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
    const router = useRouter();
  return (
    <>
      <Container>
        <HeaderBackground>
          <ImageBackground
            src={require("../assets/images/Rectangle_1.png")}
            alt="background login"
          />
        </HeaderBackground>
        <FormContainer>
          <FormStyles>
            <ImageCompany
              src={require("../assets/images/logo_black.png")}
              alt="logo company"
            />
            <Title>Setup your new password</Title>
            <SmallTitle>Password</SmallTitle>
            <Input type="text" placeholder="Enter your new password" />
            <SmallTitle>RePassword</SmallTitle>
            <Input type="text" placeholder="Re-type your password" />
            <Button onClick={() => {
                router.push('login', {scroll: false});
            }}>Save</Button>
          </FormStyles>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
