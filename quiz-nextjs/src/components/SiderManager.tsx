import React, { useState } from "react";
import avatar from "../assets/images/avatar.jpg";
import Image from "next/image";
import {
  SiderStyles,
  ImageAvatar,
  ButtonLogout,
  ButtonDashboard,
} from "@/styles/dashboard";
import { useRouter } from "next/navigation";
import { User } from "@/data/contants";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import usermanager from "../assets/images/usermanager.png";
import question from "../assets/images/question.png";
import student from "../assets/images/student.png";
import { TextManager } from "@/styles/userManager";

interface Props {
  user?: User | Object;
}

const SiderManager: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    deleteCookie("token");
    router.push("/login", { scroll: false });
  };
  console.log(user);
  return (
    <SiderStyles>
      <ImageAvatar src={avatar} width={130} height={130} alt="Avatar" />
      <TextManager>
        <Image src={usermanager} width={40} height={40} alt="Avatar" />
        User Manager
      </TextManager>
      <TextManager>
        <Image src={question} width={40} height={40} alt="Avatar" />
        User Manager
      </TextManager>
      <TextManager>
        <Image src={student} width={40} height={40} alt="Avatar" />
        User Manager
      </TextManager>
      <ButtonDashboard>
        <ButtonLogout onClick={logout}>LOGOUT</ButtonLogout>
      </ButtonDashboard>
    </SiderStyles>
  );
};

export default SiderManager;
