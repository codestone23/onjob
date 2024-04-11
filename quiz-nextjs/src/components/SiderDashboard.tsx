import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import Image from 'next/image'
import { SiderStyles, ImageAvatar, TextProfile, ButtonLogout } from "@/styles/dashboard";
import { useRouter } from 'next/navigation';

const SiderDasboard = () => {
    const router = useRouter();
      const logout = () => {
        router.push('/login', { scroll: false })
      };
  return (
    <SiderStyles>
        <ImageAvatar
            src={avatar}
            width={120}
            height={120}
            alt="Avatar"
        />
        <TextProfile>User: thanhnh@gmail.com</TextProfile>
        <TextProfile>Point: 2488</TextProfile>
        <ButtonLogout onClick={logout}>LOGOUT</ButtonLogout>
    </SiderStyles>
  )
}

export default SiderDasboard