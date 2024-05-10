import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  FormContainer,
  ImageBackground,
  Input,
  SmallTitle,
  Title,
  ContinueWith,
  ContinueWithText,
  HeaderBackground,
  FormStyles,
  ImageCompany,
  HorizontalForgot,
} from "../styles/login/login";
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
            <Title>Forgot password</Title>
            <SmallTitle>Email</SmallTitle>
            <Input type="text" placeholder="Email Address" />
            <Button>Send me an mail</Button>
            <ContinueWith>
              <HorizontalForgot></HorizontalForgot>
              <ContinueWithText>Or</ContinueWithText>
              <HorizontalForgot></HorizontalForgot>
            </ContinueWith>
            <Button onClick={() => {
                router.push('login', {scroll: false});
            }}>Sig in</Button>
          </FormStyles>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
