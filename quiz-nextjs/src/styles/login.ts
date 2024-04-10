import styled from "styled-components";
import { Button, Checkbox, Form, type FormProps, Input } from 'antd';


export const Container = styled.div`
    width: 50%;
    float: right;
`;

export const CircleCamera = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: absolute;
    top: 4rem;
    background-color: #999595;
    border: 3px solid #FBBC1A;
    display: flex;
    justify-content: center;
    align-items: center;



`;

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background:#999595;
    border: 3px solid #FBBC1A;
    width: 32rem;
    height:36rem;
    margin-top: 8rem;
    gap: 0px;
    border-radius: 6px;
    border: 3px 0px 0px 0px;


`;

export const FormStyles = styled(Form)`
    background: #999595;

`;

export const InputForm = styled(Input)`
    width: 13.6rem;
    padding: 0;
    height: 5.944rem;
    border-radius: 0;
    border: none;
    border-radius: 4px;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const InputFormPassword = styled(Input.Password)`
    width: fit-content;
    padding: 0;
    height: 5.944rem;
    border-radius: 0;
    border: none;
    border-radius: 4px;
    padding-left: 1rem;
`;

export const ContainInput = styled.div`
    display: flex;
    width: max-content;
    height: 6rem;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;


`;

export const CheckboxLogin =  styled(Checkbox)`
    margin: 0;
`;

export const ButtonLogin = styled(Button)`
    background: #D9D9D9;
    color:black;
    margin:0;
    width: 20.625rem;
    padding: 0;
    height: 3rem;
    border-radius: 4px;

`;