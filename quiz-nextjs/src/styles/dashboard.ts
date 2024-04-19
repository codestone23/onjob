import styled from "styled-components";
import Image from "next/image";
import { CaretDownOutlined, CloudUploadOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Select } from "antd";
import { Pagination, Drawer, Row } from "antd";
import { device } from "./breakpoints";
import { EditOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
`;

export const SiderStyles = styled.div`
  height: 100vh;
  background: #d9d9d9;
  width: 16rem;
  position: relative;
  border-right: 1px solid #a4a5a5;
  padding-top: 2rem;
  @media ${device.md} {
    width: 100%;
    border: none;
    background: #d9d9d9;
    height: 90vh;
  }
`;

export const BodyStyles = styled.div`
  width: 100%;
  background: #c4c4c4;
  height: 100vh;
`;

export const ImageAvatar = styled(Image)`
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border: 1px solid #000;
  width: fit-content;
`;

export const TextProfile = styled.div`
  width: 90%;
  margin: auto;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: .5rem;
`;

export const ButtonLogout = styled.div`
  /* position: absolute; */
  bottom: 2rem;
  background: #c9cbcb;
  border: 1px solid #a4a5a5;
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #a4a5a5;
  }
`;

export const HeaderDashboard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  @media ${device.md} {
    padding-top: 1rem;
  }
`;

export const InputSearch = styled.input`
  width: 84%;
  height: 4rem;
  border: none;
  padding-left: 2rem;
  outline: none;
`;

export const HeaderItemLeft = styled.div`
  width: 70%;
  height: 4rem;
  gap: 0px;
  border-radius: 4px;
  background: #f3f1f1;
  border: 1px solid #000000;
  display: flex;
  overflow: hidden;
  @media ${device.lg} {
    width: 95%;
  }
`;

export const HeaderItemRight = styled.div`
  width: 20%;
  background: white;
  border: 1px solid #000000;
  height: 4rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #c9cbcb;
  }
  @media ${device.lg} {
    display: none;
  }
`;

export const IconSearch = styled(SearchOutlined)`
  font-size: 3rem;
  cursor: pointer;
`;

export const IconDown = styled(CaretDownOutlined)`
  font-size: 3rem;
  color: #aeabab;
  /* &:hover {
        color: #D9D9D9;
    } */
`;

export const SearchContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16%;
`;

export const BodyDashboard = styled.div`
  width: 95%;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  background: #d9d9d9;
  height: 76vh;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
  @media ${device.lg} {
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media ${device.md} {
    margin-top: 1rem;
    height: 72vh;
  }
`;

export const ItemExam = styled.div`
  /* width: 40%; */
  background: #d9d9d9;
  border: 1px solid #000000;
  height: 10rem;
  border-radius: 4px;
  padding: 1rem;
  align-items: baseline;
  margin: 0.6rem 1rem;
  cursor: pointer;
  @media ${device.lg} {
    width: 95%;
    margin-bottom: 1rem;
  }
  &:hover {
    background-color: #d9d9e1;
  }
`;

export const ColStyles = styled(Col)`
  @media ${device.lg} {
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const FooterDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const DescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionItemSmall = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  width: 45%;
`;

export const ListStar = styled.div`
  margin-top: 1rem;
`;

export const TitleExam = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.2em;
  white-space: nowrap;
`;

export const HeaderMobile = styled.div`
  display: none;
  color: white;
  @media ${device.md} {
    display: flex;
    background: #545151;
    height: 4rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageTab = styled(Image)`
  top: 1rem;
  left: 1rem;
  gap: 0px;
  border-radius: 4px;
  position: absolute;
`;
export const ButtonDashboard = styled.div`
  display: flex;
  justify-content: space-around;
  height: 55vh;
  align-items: flex-end;
  @media ${device.md} {
    height: 50vh;
  }
`;

export const SiderPC = styled.div`
  background: #d9d9d9;
  @media ${device.md} {
    display: none;
  }
`;

export const DifficultQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplaySpin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  background-color: #f3f1f1;
`;

export const DrawerStyles = styled(Drawer)`
  background-color: #d9d9d9;
  border-right: 1px solid #a4a5a5;
  .ant-drawer-body{
    background-color: #d9d9d9;
  }
`;

export const SelectStyles = styled(Select)`
  width: 100%;
  height: 100%;
`;

export const ImageSelect = styled(Image)`
  padding-left: 0.5rem;
`;
export const ImageExam = styled(Image)`
  padding-right: 0.5rem;
`;

export const CloudUploadOutlinedStyles  = styled(CloudUploadOutlined)`
  position: absolute;
  font-size: 1rem;
  bottom:-.5rem ;
  right: 0;
  background-color: white;
  padding:.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #a4a5a5;
    
  }

`;

export const ContainImage = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;

`;
