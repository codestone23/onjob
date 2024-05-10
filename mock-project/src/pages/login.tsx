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
  FormStylesLogin,
} from "../styles/login/login";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login: React.FC = () => {
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
          <FormStylesLogin>
            <ImageCompany
              src={require("../assets/images/logo_black.png")}
              alt="logo company"
            />
            <SmallTitle>Login</SmallTitle>
            <Input type="text" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
            <FormDetails>
              <RememberMe>
                <InputCheckbox type="checkbox" name="" id="" />
                <TextRemember>Keep me logged in</TextRemember>
              </RememberMe>
              <ForgotPassword onClick={() => {
                router.push('forgot-password', {scroll: false});
            }}>Forget password?</ForgotPassword>
            </FormDetails>
            <Button onClick={() => {
                router.push('index', {scroll: false});
            }}>Log in</Button>
            {/* <CreateAccount>
              <TextItem>Don&apos;t have an account?</TextItem>
              <ButtonSignUp> Sign Up</ButtonSignUp>
            </CreateAccount> */}
            <ContinueWith>
              <Horizontal></Horizontal>
              <ContinueWithText>Or continue with</ContinueWithText>
              <Horizontal></Horizontal>
            </ContinueWith>
            <FooterSocialMedia>
              <ImageLogo src={require("../assets/images/Google.png")} alt="" />
              <ImageLogo
                src={require("../assets/images/github-logo.png")}
                alt=""
              />
            </FooterSocialMedia>
          </FormStylesLogin>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
