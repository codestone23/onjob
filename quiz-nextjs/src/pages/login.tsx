import {
  ButtonLogin,
  CheckboxLogin,
  CircleCamera,
  Container,
  ContainerForm,
  ContainInput,
  ImageBackground,
  ImageBackgroundTwo,
  ImageCamera,
  ImagePassword,
  ImagePersonal,
  InputForm,
  InputFormPassword,
} from "@/styles/login";
import { Form, type FormProps } from "antd";
import React, { useState, useEffect } from "react";
import background from "../assets/images/background.jpg";
import background2 from "../assets/images/background2.svg";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import camera from "../assets/images/camera.svg";
import pass from "../assets/images/password.svg";
import personal from "../assets/images/personal.svg";
import { ShowToast } from "@/components/notify/ShowToast";
import "react-toastify/dist/ReactToastify.css";
import { LoginSample } from "../services/user.service";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
      async function fetchData() {
          const token = getCookie("token");
          if (token) {
            router.push("/dashboard", { scroll: false });
          } else{
            setOpen(true);
          }
      }
      fetchData();
    }, []);
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;
    LoginSample(username, password).then((response) => {
      console.log(response);
      if (response?.token) {
        // localStorage.setItem("token", JSON.stringify(response?.token));
        setCookie("token", JSON.stringify(response?.token));
        localStorage.setItem("user", JSON.stringify(response));
      }
      if (response) {
        ShowToast("success", "Login successful!! ");
        router.push("/dashboard", { scroll: false });
      } else {
        ShowToast("error", "Email or Password do not correct");
      }
      return response;
    });
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    ShowToast("error", "Email or Password do not correct");
  };
  return !open ? (null) : (
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
          <ImageCamera alt="Camera" src={camera} sizes="9rem" />
        </CircleCamera>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            maxWidth: "100%",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form__styles"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <ContainInput>
              <ImagePersonal
                alt="Camera"
                src={personal}
                // sizes="9rem"
              />
              <InputForm
                placeholder="Username"
                name="username"
                defaultValue={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </ContainInput>
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <ContainInput>
              <ImagePassword
                alt="Camera"
                src={pass}
                // sizes="9rem"
              />
              <InputFormPassword
                placeholder="Password"
                name="username"
                defaultValue={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
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
      <ToastContainer />
    </Container>
  );
};

export default Login;
