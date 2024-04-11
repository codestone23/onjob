import styled from "styled-components";
import Image from 'next/image'
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme,Drawer, Radio, } from 'antd';
import { device } from "./breakpoints";

export const Container = styled.div`
    display: flex;
`;

export const SiderStyles = styled.div`
    height: 100vh;
     background: #D9D9D9;
     width: 16rem;
     position: relative;
    border-right: 1px solid #a4a5a5;
    padding-top: 2rem;
    @media ${device.md} {
        width: 100%;
        border: none;
        background: #D9D9D9;
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
    margin:0 auto;
    display: flex;
    justify-content:center;
    margin-bottom:2rem;

`;

export const TextProfile = styled.div`
    width: 90%;
    margin: auto;
    font-size: 1rem;
    font-weight: 600;


`;

export const ButtonLogout = styled.div`
    position: absolute;
    bottom: 2rem;
    background: #c9cbcb;
    border: 1px solid #a4a5a5;
    width: 7rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 4px;
    left: 25%;


`;

export const HeaderDashboard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 2rem;
    @media ${device.md}{
        padding-top: 1rem;
    }

`;

export const InputSearch = styled.input`
    width: 84%;
    height: 4rem;
    border:none;
    padding-left: 2rem;
    outline:none;


`;

export const HeaderItemLeft = styled.div`
    width: 70%;
    height: 4rem;
    gap: 0px;
    border-radius: 4px;
    background: #F3F1F1;
    border: 1px solid #000000;
    display: flex;
    overflow: hidden;
    @media ${device.lg} {
        width: 95%;
    }


`;

export const HeaderItemRight = styled.div`
    width: 20%;
    background: #D9D9D9;
    border: 1px solid #000000;
    height: 4rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    @media ${device.lg} {
        display: none;
    }
`;

export const IconSearch = styled(SearchOutlined)`
    font-size: 3rem;

`;

export const IconDown = styled(CaretDownOutlined)`
    font-size: 3rem;

`;


export const SearchContain = styled.div`
   display: flex;
    justify-content: center;
    align-items:center;
    width: 16%;

`;

export const BodyDashboard = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #D9D9D9;
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
        margin-top:1rem;
        height: 72vh;
    }
`;

export const ItemExam = styled.div`
    width: 40%;
    background: #D9D9D9;
    border: 1px solid #000000;
    height: 10rem;
    border-radius: 4px;
    padding: 1rem;
    align-items: baseline;
    @media ${device.lg} {
        width: 95%;
        margin-bottom: 1rem;
    }



`;

export const FooterDashboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem

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
    margin-top:1rem;
    width: 45%;


`;

export const ListStar = styled.div`
    margin-top:1rem;


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
    @media ${device.md}{
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

export const SiderPC = styled.div`
    background: #D9D9D9 ;
    @media ${device.md}{
        display: none;
    }


`;