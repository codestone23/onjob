import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "vn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        username: "Username",
        password: "Password",
        rememberMe: "Remember me",
        login: "Login",
        requireUsername: "Please input your username!",
        requirePassword: "Please input your password!",
        successLogin: "Login successful!!",
        errorLogin: "Email or Password do not correct",
      },
    },
    vn: {
      translation: {
        username: "Tên đăng nhập",
        password: "Mật khẩu",
        rememberMe: "Ghi nhớ tôi?",
        login: "Đăng nhập",
        requireUsername: "Vui lòng nhập tên đăng nhập!",
        requirePassword: "Vui lòng nhập mật khẩu!",
        successLogin: "Đăng nhập thành công!!",
        errorLogin: "Tên tài khoản hoặc mật khẩu không đúng!!",
      },
    },
  },
});

export default i18n;
