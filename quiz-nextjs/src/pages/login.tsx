import React from 'react';
import background from '../assets/images/background.jpg';
import Image from "next/image";
import { Button, Checkbox, ConfigProvider, Form, type FormProps, Input } from 'antd';
import { ButtonLogin, CheckboxLogin, CircleCamera, Container, ContainerForm, ContainInput, InputForm, InputFormPassword } from "@/styles/login";

// import "../styles/login.css";
import personal from "../assets/images/personal.svg";
import password from "../assets/images/password.svg";


import camera from "../assets/images/camera.svg";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <ConfigProvider theme={{hashed: false}}>
        <Container>
                <Image
                    alt="background"
                    src={background}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: '0 0',
                        zIndex:-1
                    }}
                />
                <ContainerForm>
                    <CircleCamera>
                    <Image
                        alt="Camera"
                        src={camera}
                        sizes="9rem"
                        style={{
                            fontSize: '6rem',
                            height: '6rem',
                            width: '7rem'
                        }}
                        />
                    </CircleCamera>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: '100%', padding: '0 4rem' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="form__styles"
                    >
                        <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{
                            // display: 'flex',
                            width: '100%',
                        }}
                        >
                            <ContainInput>
                                <Image
                                    alt="Camera"
                                    src={personal}
                                    sizes="9rem"
                                    style={{
                                        fontSize: '6rem',
                                        width:' 7rem',
                                        top: 0
                                    }}
                                    />
                                    <InputForm
                                        placeholder="Username"                                        
                                />
                            </ContainInput>
                        
                        </Form.Item>

                        <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        style={{
                            display: 'flex',
                            width: '100%',
                        }}
                        >
                            <ContainInput>
                                <Image
                                alt="Camera"
                                src={password}
                                sizes="9rem"
                                style={{
                                    fontSize: '2rem',
                                    width: '7rem',
                                    height: '6rem',
                                    padding: '1rem',
                                    top: 0,
                                    backgroundColor: 'white',
                                    borderRadius: '4px'
                                }}
                                />
                                <InputFormPassword placeholder="Password"/>

                            </ContainInput>
                        </Form.Item>

                        <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                        >
                        <CheckboxLogin>Remember me</CheckboxLogin>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <ButtonLogin type="primary" htmlType="submit">
                            LOGIN
                        </ButtonLogin>
                        </Form.Item>
                    </Form>
                </ContainerForm>

        </Container>
    </ConfigProvider>
  )
}

export default Login