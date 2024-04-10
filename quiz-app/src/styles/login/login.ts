import styled from "styled-components";
import Image, { StaticImageData } from 'next/image';

import background from "../../assets/images/background.jpg"

type ImageProps = {
    background: string | StaticImageData;
}

export const ContainerApp = styled.div`
    min-height: 100vh;

`;

export const ImageStyles = styled.img`
    position: absolute;
    width: 100px;
    height: 100%;



`;