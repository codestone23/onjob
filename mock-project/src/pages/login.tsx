import React from 'react';
import styled from 'styled-components';
import { Button, Container, ForgotPassword, FormContainer, FormDetails, ImageBackground, ImageLogo, Input, InputCheckbox, RememberMe, SmallTitle, TextRemember, Title, CreateAccount, ButtonSignUp, TextItem, ContinueWith, Horizontal, ContinueWithText, FooterSocialMedia, HeaderBackground, FormStyles } from "../styles/login/login";

const Login: React.FC = () => {


    return (
        <>
            <Container>
                <HeaderBackground>
                    <ImageBackground src={require("../assets/images/Rectangle_1.png")} alt="background login" />
                </HeaderBackground>
                <FormContainer>
                    <FormStyles>
                        <Title>Login</Title>
                        <SmallTitle>
                            Login your account in a seconds
                        </SmallTitle>
                        <Input type="text" placeholder="Email Address" />
                        <Input type="password" placeholder="Password" />
                        <FormDetails>
                            <RememberMe>
                                <InputCheckbox type="checkbox" name="" id="" />
                                <TextRemember>Keep me logged in</TextRemember>
                            </RememberMe>
                            <ForgotPassword>Forget password?</ForgotPassword>
                        </FormDetails>
                        <Button>Log in</Button>
                        <CreateAccount>
                            <TextItem>Don&apos;t have an account?</TextItem>
                            <ButtonSignUp> Sign Up</ButtonSignUp>
                        </CreateAccount>
                        <ContinueWith>
                            <Horizontal></Horizontal>
                            <ContinueWithText>Or continue with</ContinueWithText>
                            <Horizontal></Horizontal>
                        </ContinueWith>
                        <FooterSocialMedia>
                        <ImageLogo src={require("../assets/images/Google.png")} alt="" />
                        <ImageLogo src={require("../assets/images/Facebook.png")} alt="" />
                        <ImageLogo src={require("../assets/images/Instagram.png")} alt="" />
                        <ImageLogo src={require("../assets/images/Twitter.png")} alt="" />
                        </FooterSocialMedia>
                    </FormStyles>
                </FormContainer>
            </Container>
        
        </>
    )
};

export default Login;
