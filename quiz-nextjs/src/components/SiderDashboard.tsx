import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import Image from 'next/image'
import { SiderStyles, ImageAvatar, TextProfile, ButtonLogout, ButtonDashboard } from "@/styles/dashboard";
import { useRouter } from 'next/navigation';
import { User } from "@/data/contants";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
interface Props{
    user?: User | Object;
}


const SiderDashboard:React.FC<Props> = ({user}) => {
    const router = useRouter();
      const logout = () => {
        localStorage.removeItem('user');
        deleteCookie("token");
        router.push('/login', { scroll: false })
      };
      console.log(user)
  return (
    <SiderStyles>
        <ImageAvatar
            src={avatar}
            width={120}
            height={120}
            alt="Avatar"
        />
        <TextProfile>User: {user?.email}</TextProfile>
        <TextProfile>Point: {user?.points}</TextProfile>
        <ButtonDashboard>
          <ButtonLogout onClick={logout}>LOGOUT</ButtonLogout>
        </ButtonDashboard>
    </SiderStyles>
  )
}

export default SiderDashboard;