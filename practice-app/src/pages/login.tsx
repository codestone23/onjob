import React from 'react';
import styled from 'styled-components';
import { Button, Container, ForgotPassword, FormContainer, FormDetails, ImageBackground, ImageLogo, Input, InputCheckbox, RememberMe, SmallTitle, TextRemember, Title, CreateAccount, ButtonSignUp, TextItem, ContinueWith, Horizontal, ContinueWithText, FooterSocialMedia } from "../assets/styles/login.styles";

const Form = styled.div`
    margin-top: 20px;
    max-width: 75%;
    width: fit-content;
`;


const Login: React.FC = () => {


    return (
        <>
            <Container>
                <div style={{width:'100%', height: '100vh'}}>
                    <ImageBackground src={require("../assets/images/login/Rectangle_1.png")} alt="background login" />
                </div>
                <FormContainer>
                    <Form>
                        <Title>Login</Title>
                        <SmallTitle>
                            Login your account in a seconds
                        </SmallTitle>
                        <div>
                            <div>
                                <Input type="text" placeholder="Email Address" />
                            </div>
                            <div>
                                <Input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <FormDetails>
                            <RememberMe>
                                <div><InputCheckbox type="checkbox" name="" id="" /></div>
                                <TextRemember>Keep me logged in</TextRemember>
                            </RememberMe>
                            <ForgotPassword>Forget password?</ForgotPassword>
                        </FormDetails>
                        <Button>Log in</Button>
                        <CreateAccount>
                            <TextItem>Don't have an account?</TextItem>
                            <ButtonSignUp> Sign Up</ButtonSignUp>
                        </CreateAccount>
                        <ContinueWith>
                            <Horizontal></Horizontal>
                            <ContinueWithText>Or continue with</ContinueWithText>
                            <Horizontal></Horizontal>
                        </ContinueWith>
                        <FooterSocialMedia>
                            <div>
                                <ImageLogo src={require("../assets/images/login/Google.png")} alt="" />
                            </div>
                            <div>
                                <ImageLogo src={require("../assets/images/login/Facebook.png")} alt="" />
                            </div>
                            <div>
                                <ImageLogo src={require("../assets/images/login//Instagram.png")} alt="" />
                            </div>
                            <div>
                                <ImageLogo src={require("../assets/images/login/Twitter.png")} alt="" />
                            </div>
                        </FooterSocialMedia>
                    </Form>
                </FormContainer>
            </Container>
        
        </>
    )
};

export default Login;
