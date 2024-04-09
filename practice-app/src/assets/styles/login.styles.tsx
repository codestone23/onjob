import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

// export const Form = styled.form`
//     margin-top: 20px;
//     max-width: 75%;
//     width: fit-content;
// `;

export const Title = styled.h1`
    font-size: 3.125rem;
    // font-family: Inter;
    font-weight: 700;
    line-height: 3.782rem;
    text-align: left;
    margin-bottom: 1rem;
`;

export const SmallTitle = styled.h3`
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    color:#818181;
    margin-top: 0;
`;

export const Input = styled.input`
    width: 26.375rem;
    height: 3.75rem;
    top: 12.563rem;
    border: 0.063rem solid #D1D1D1;
    gap: 0px;
    border-radius: 0.625rem;
    // opacity: 0rem;
    margin-bottom: 1.875rem;
    // font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    padding-left: 1rem;
    color: #818181;


`;

export const InputCheckbox = styled.input`
    width: 1.875rem;
    height: 1.875rem;
    gap: 0px;
    border-radius: 0.25rem;
    opacity: 0px;
    background-color: #7754F6;
    accent-color: #7754F6;
`;

export const FormDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
`;

export const ImageBackground = styled.img`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    object-fit: cover;
    height: 100%;
`;

export const RememberMe = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ForgotPassword = styled.div`
    // font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: left;
    color:#7754F6;
`;

export const TextRemember = styled.div`
    // font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    color: #818181;
`;

export const Button = styled.button`

    border: 0.063rem solid #D1D1D1;
    width: 26.375rem;
    height: 3.75rem;
    gap: 0px;
    border-radius: 0.625rem;
    background: #7754F6;
    box-shadow: 0px 15px 30px -10px #7754F645;
    // font-family: Inter;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.21rem;
    text-align: center;
    color: #fff;
    margin-top: 1rem;
`;


export const CreateAccount = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;


`;

export const ButtonSignUp = styled.div`
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    color: #7754F6;
    margin-left: 0.5rem;
`;

export const TextItem = styled.div`
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    color: #818181;
`;

export const ContinueWith = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:1.5rem;
`;

export const ContinueWithText = styled.div`
    gap: 0px;
    border: 1px;
    opacity: 0.5px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.21rem;
    text-align: left;
    color:#818181;

`;

export const Horizontal = styled.div`
    border: 0.2px solid #D1D1D1;
    height: 0.03rem;
    width: 30%;
`;

export const FooterSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;


export const ImageLogo = styled.img`
    width: 4.25rem;
    height: 4.063rem;
    gap: 0px;
    border-radius: 0.63rem;
    border: 0.063rem;
    // opacity: 0;
    margin:0 0.5rem 0 0.5rem;

`;