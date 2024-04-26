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
import usermanager from "../assets/images/usermanager.svg";
import question from "../assets/images/question.svg";
import student from "../assets/images/student.svg";
import usermanager_color from "../assets/images/usermanager_color.svg";
import question_color from "../assets/images/question_color.svg";
import student_color from "../assets/images/student_color.svg";
import { TextManager } from "@/styles/userManager";

interface Props {
  handleChangeLocationPage?: any;
  locationPage?: number;
  user?: User | Object;
}

export interface ItemComponent {
  topic?: string;
  value?: number;
  pathImage?: any;
  pathImageColor?: any;
}

const listComponents: ItemComponent[] = [
  {
    topic: "User Manager",
    value: 0,
    pathImage: usermanager,
    pathImageColor: usermanager_color,
  },
  {
    topic: "Test Manager",
    value: 1,
    pathImage: question,
    pathImageColor: question_color,

  },
  {
    topic: "Test Quiz",
    value: 2,
    pathImage: student,
    pathImageColor: student_color,

  },
];

const SiderManager: React.FC<Props> = ({ handleChangeLocationPage, locationPage, user }) => {
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
      {listComponents.map((component, index) => (
        <TextManager className={locationPage === component.value ? "active-page" : ""} onClick={() => handleChangeLocationPage(component.value)}>
          <Image src={locationPage === component.value ? component.pathImageColor : component.pathImage} width={40} height={40} alt="Avatar" />
          {component.topic}
        </TextManager>
      ))}
      <ButtonDashboard>
        <ButtonLogout onClick={logout}>LOGOUT</ButtonLogout>
      </ButtonDashboard>
    </SiderStyles>
  );
};

export default SiderManager;
