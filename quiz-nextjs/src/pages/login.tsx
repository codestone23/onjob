import React from 'react';
import background from '../assets/images/background.jpg';
import background2 from '../assets/images/background2.svg';
import Image from "next/image";
import { Button, Checkbox, ConfigProvider, Form, type FormProps, Input } from 'antd';
import { ButtonLogin, CheckboxLogin, CircleCamera, Container, ContainerForm, ContainInput, ImageBackground, ImageBackgroundTwo, ImageCamera, ImagePassword, ImagePersonal, InputForm, InputFormPassword } from "@/styles/login";

// import "../styles/login.css";
import personal from "../assets/images/personal.svg";
import password from "../assets/images/password.svg";
import camera from "../assets/images/camera.svg";
import Link from 'next/link'
import { useRouter } from 'next/navigation'




type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
    const router = useRouter();
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
        router.push('/dashboard', { scroll: false })
      };
      
      const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <ConfigProvider theme={{hashed: false}}>
        <Container className="container">
                <ImageBackground
                    alt="background"
                    src={background}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                />
                <ImageBackgroundTwo
                    alt="background2"
                    src={background2}
                    // placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                />
                <ContainerForm>
                    <CircleCamera>
                    <ImageCamera
                        alt="Camera"
                        src={camera}
                        sizes="9rem"
                        />
                    </CircleCamera>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: '100%', padding: '0 2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                         }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="form__styles"
                    >
                        <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <ContainInput>
                                <ImagePersonal
                                    alt="Camera"
                                    src={personal}
                                    // sizes="9rem"
                                    />
                                    <InputForm
                                        placeholder="Username"                                        
                                />
                            </ContainInput>
                        
                        </Form.Item>

                        <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <ContainInput>
                                <ImagePassword
                                alt="Camera"
                                src={password}
                                // sizes="9rem"
                                />
                                <InputFormPassword placeholder="Password"/>

                            </ContainInput>
                        </Form.Item>

                        <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                        >
                        <CheckboxLogin className="remember__me">Remember me</CheckboxLogin>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <ButtonLogin type="primary" htmlType="submit">
                            {/* <Link href="/dashboard"> */}
                                LOGIN
                            {/* </Link> */}
                        </ButtonLogin>
                        </Form.Item>
                    </Form>
                </ContainerForm>

        </Container>
    </ConfigProvider>
  )
}

export default Login