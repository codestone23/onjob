import React, { useState } from "react";
import avatar from "../assets/images/avatar.jpg";
import Image from "next/image";
import {
  SiderStyles,
  ImageAvatar,
  TextProfile,
  ButtonLogout,
  ButtonDashboard,
  ContainImage,
  CloudUploadOutlinedStyles,
} from "@/styles/dashboard";
import { useRouter } from "next/navigation";
import { User } from "@/data/contants";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import { UserLogin } from "@/types/user";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined } from "@ant-design/icons";
import { AppState } from "@/stores/store";
import { setUserLogin } from "@/stores/slices/account";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
interface Props {
  user?: UserLogin;
}

const SiderDashboard: React.FC<Props> = ({ user }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const logout = () => {
    localStorage.removeItem("user");
    deleteCookie("token");
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    dispatch(setUserLogin(undefined));
    router.push("/login", { scroll: false });
  };
  const editProfile = () => {
    setOpenEdit(!openEdit);
  };
  console.log(user);
  return !openEdit ? (
    <SiderStyles>
      <ImageAvatar
        src={user?.image || avatar}
        width={120}
        height={120}
        alt="Avatar"
      />
      <TextProfile>Username: {user?.username}</TextProfile>
      <TextProfile>FirstName: {user?.firstName}</TextProfile>
      <TextProfile>LastName: {user?.lastName}</TextProfile>
      <TextProfile>Email: {user?.email}</TextProfile>
      <TextProfile>Gender: {user?.gender}</TextProfile>
      <ButtonDashboard>
        <ButtonLogout onClick={logout}>Logout</ButtonLogout>
        <ButtonLogout onClick={editProfile}>Edit profile</ButtonLogout>
      </ButtonDashboard>
    </SiderStyles>
  ) : (
    <SiderStyles>
      <ContainImage>
        <ImageAvatar
          src={user?.image || avatar}
          width={120}
          height={120}
          alt="Avatar"
        />
        <CloudUploadOutlinedStyles />
        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-circle"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </ContainImage>

      <TextProfile>Username: {user?.username}</TextProfile>
      <TextProfile>FirstName: {user?.firstName}</TextProfile>
      <TextProfile>LastName: {user?.lastName}</TextProfile>
      <TextProfile>Email: {user?.email}</TextProfile>
      <TextProfile>Gender: {user?.gender}</TextProfile>
      <ButtonDashboard>
        {/* <ButtonLogout onClick={logout}>Logout</ButtonLogout> */}
        <ButtonLogout onClick={editProfile}>Save</ButtonLogout>
      </ButtonDashboard>
    </SiderStyles>
  );
};

export default SiderDashboard;
