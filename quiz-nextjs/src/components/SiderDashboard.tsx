import React, { useState } from "react";
import avatar from "../assets/images/avatar.jpg";
import {
  SiderStyles,
  ImageAvatar,
  TextProfile,
  ButtonLogout,
  ButtonDashboard,
  ContainImage,
  ButtonDashboardFix,
  UploadImage,
  ImageUpload,
} from "@/styles/dashboard";
import { useRouter } from "next/navigation";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import { UserLogin } from "@/types/user";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "@/stores/slices/account";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Input, Form } from "antd";
import ImgCrop from "antd-img-crop";
import { AppState } from "@/stores/store";
import type { RadioChangeEvent } from "antd";
import type { FormProps } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { GetStaticPropsContext } from "next";
import { Button, message, Upload, Radio } from 'antd';

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
interface Props {
  user?: UserLogin;
}

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type FieldType = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SiderDashboard: React.FC<Props> = ({ user }) => {
  const personal: UserLogin = {
    ...useSelector((state: AppState) => state.account.user),
  };
  console.log(personal);
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const logout = () => {
    deleteCookie("token");
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    dispatch(setUserLogin(undefined));
    router.push("/login", { scroll: false });
  };
  const editProfile = () => {
    setOpenEdit(!openEdit);
  };
  const openExit = () => {
    setFileList([]);
    setPreviewImage("");
    setOpenEdit(!openEdit);
  };

  const saveProfile = () => {
    if (fileList[0]?.thumbUrl) {
      console.log(fileList[0].thumbUrl);
      personal["image"] = fileList[0].thumbUrl;
      dispatch(setUserLogin(personal));
    }
    setFileList([]);
    setPreviewImage("");
    setOpenEdit(!openEdit);
  };
  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg') && (file.size / 1024 / 1024 < 2);
      if (!isPNG) {
        message.error(`${file.name} is not a png/jpg file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  console.log(user);
  console.log(fileList);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    const { email, username, firstName, lastName, gender } = values;
    if (fileList[0]?.thumbUrl) {
      // console.log(fileList[0].thumbUrl);
      personal["image"] = fileList[0].thumbUrl;
    }
    personal["username"] = username || "";
    personal["firstName"] = firstName || "";
    personal["lastName"] = lastName || "";
    personal["gender"] = gender || "";
    personal["email"] = email || "";
    dispatch(setUserLogin(personal));
    setFileList([]);
    setPreviewImage("");
    setOpenEdit(!openEdit);
  };
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
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
      <TextProfile>
        {t("username")}: {user?.username}
      </TextProfile>
      <TextProfile>
        {t("firstName")}: {user?.firstName}
      </TextProfile>
      <TextProfile>
        {t("lastName")}: {user?.lastName}
      </TextProfile>
      <TextProfile>Email: {user?.email}</TextProfile>
      <TextProfile>
        {t("gender")}: {user?.gender === "male" ? t("male") : t("female")}
      </TextProfile>
      <ButtonDashboard>
        <ButtonLogout onClick={logout}>{t("logout")}</ButtonLogout>
        <ButtonLogout onClick={editProfile}>{t("editProfile")}</ButtonLogout>
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
        {/* <CloudUploadOutlinedStyles /> */}
        <ImgCrop rotationSlider>
          <UploadImage
            {...props}
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length === 1 ? null : uploadButton}
          </UploadImage>
        </ImgCrop>
        {previewImage && (
          <ImageUpload
            className="image__upload"
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </ContainImage>
      <Form
        // name="basic"
        labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <TextProfile>
          {t("username")}:{" "}
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            initialValue={user?.username}
          >
            <Input placeholder={t("username")} name="username" disabled />
          </Form.Item>
        </TextProfile>
        <TextProfile>
          {t("firstName")}:{" "}
          <Form.Item<FieldType>
            name="firstName"
            rules={[
              { required: true, message: "Please input your firstName!" },
            ]}
            initialValue={user?.firstName}
          >
            <Input placeholder={t("firstName")} />
          </Form.Item>
        </TextProfile>
        <TextProfile>
          {t("lastName")}:{" "}
          <Form.Item<FieldType>
            name="lastName"
            rules={[{ required: true, message: "Please input your lastName!" }]}
            initialValue={user?.lastName}
          >
            <Input placeholder={t("lastName")} />
          </Form.Item>
        </TextProfile>
        <TextProfile>
          Email:
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email address!",
              },
            ]}
            initialValue={user?.email}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </TextProfile>
        <TextProfile>
          {t("gender")}:
          <Form.Item<FieldType>
            name="gender"
            rules={[{ required: true, message: "Please choose your gender!" }]}
            initialValue={user?.gender}
          >
            <Radio.Group onChange={onChange}>
              <Radio value={"male"}>{t("male")}</Radio>
              <Radio value={"female"}>{t("female")}</Radio>
            </Radio.Group>
          </Form.Item>
        </TextProfile>
        <ButtonDashboardFix>
          <ButtonLogout htmlType="submit">Save</ButtonLogout>
          <ButtonLogout onClick={openExit}>Exit</ButtonLogout>
        </ButtonDashboardFix>
      </Form>
    </SiderStyles>
  );
};

export default SiderDashboard;
