import {
  ButtonLanguage,
  ButtonLogin,
  CheckboxLogin,
  CircleCamera,
  Container,
  ContainerForm,
  ContainInput,
  FormLogin,
  ImageBackground,
  ImageBackgroundTwo,
  ImageCamera,
  ImagePassword,
  ImagePersonal,
  InputForm,
  InputFormPassword,
  SwitchLanguage,
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
import { LoginSample } from "./api/user/user.service";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin, getUserLogin } from "@/stores/slices/account";
import { UserLogin } from "@/types/user";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const lngs = [
  { code: "en", native: "English" },
  { code: "vn", native: "Vietnamese" },
];

const Login: React.FC = () => {
  const itemsInAccount: UserLogin | undefined = useSelector(getUserLogin);
  console.log(itemsInAccount);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [active, setActive] = useState<string>(
    localStorage.getItem("preferred_locale") || "vn"
  );
  useEffect(() => {
    async function fetchData() {
      const token = getCookie("token");
      if (token) {
        router.push("/dashboard", { scroll: false });
      } else {
        setOpen(true);
      }
    }
    fetchData();
  }, []);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    const { username, password, remember } = values;
    LoginSample(username, password).then((response) => {
      console.log(response);
      if (response) {
        if (remember) {
          setCookie("token", JSON.stringify(response.token), {
            maxAge: 60 * 10,
          });
        } else {
          setCookie("token", JSON.stringify(response.token));
        }
        // localStorage.setItem("user", JSON.stringify(response));
        dispatch(setUserLogin(response));
        ShowToast("success", t("successLogin"));
        router.push("/dashboard", { scroll: false });
      } else {
        ShowToast("error", t("errorLogin"));
      }
      return response;
    });
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    ShowToast("error", t("errorLogin"));
  };

  const handleTrans = (code: string) => {
    localStorage.setItem("preferred_locale", JSON.stringify(code));
    setActive(code);
    i18n?.changeLanguage(code);
  };
  return !open ? null : (
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
        quality={100}
        fill
        sizes="100vw"
      />
      <ContainerForm>
        <CircleCamera>
          <ImageCamera alt="Camera" src={camera} sizes="9rem" />
        </CircleCamera>
        <FormLogin
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form__styles"
        >
          <FormLogin.Item<FieldType>
            name="username"
            rules={[{ required: true, message: t("requireUsername") }]}
          >
            <ContainInput>
              <ImagePersonal
                alt="Camera"
                src={personal}
                // sizes="9rem"
              />
              <InputForm
                placeholder={t("username")}
                name="username"
                defaultValue={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </ContainInput>
          </FormLogin.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: t("requirePassword") }]}
          >
            <ContainInput>
              <ImagePassword
                alt="Camera"
                src={pass}
                // sizes="9rem"
              />
              <InputFormPassword
                placeholder={t("password")}
                name="password"
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
            <CheckboxLogin className="remember__me">
              {t("rememberMe")}
            </CheckboxLogin>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonLogin type="primary" htmlType="submit">
              {t("login")}
            </ButtonLogin>
          </Form.Item>
        </FormLogin>
      </ContainerForm>
      <ToastContainer />
      <SwitchLanguage>
        {lngs.map((lng, i) => {
          return (
            <ButtonLanguage
              className={
                JSON.parse(localStorage.getItem("preferred_locale") || "vn") ==
                lng.code
                  ? "active-language"
                  : ""
              }
              onClick={() => handleTrans(lng.code)}
            >
              {lng.native}
            </ButtonLanguage>
          );
        })}
      </SwitchLanguage>
    </Container>
  );
};

export default Login;
