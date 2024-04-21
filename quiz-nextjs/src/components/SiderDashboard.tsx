import React, { useState } from "react";
import avatar from "../assets/images/avatar.jpg";
// import Image from "next/image";
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
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import { UserLogin } from "@/types/user";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "@/stores/slices/account";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
interface Props {
  user?: UserLogin;
}

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const SiderDashboard: React.FC<Props> = ({ user }) => {
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      console.log("okela");
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
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
        <Flex gap="middle" wrap="wrap">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Flex>
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
