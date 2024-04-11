import styled from "styled-components"

interface Size {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

const size: Size = {
    xs: '360px', 
    sm: '600px', 
    md: '768px', 
    lg: '1024px',
    xl: '1200px', 
}

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
}