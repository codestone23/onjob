import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ContainerApp, ImageStyles } from "@/styles/login/login";
import { StaticImageData } from 'next/image';

import background from "@/assets/images/background.jpg";
import { FunctionComponent } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  background: string | StaticImageData;
}

const Home = ()  => {
  return (
      <ContainerApp>
      <Image
        alt="Amela"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
    />
      </ContainerApp>
  );
}


export default Home;
