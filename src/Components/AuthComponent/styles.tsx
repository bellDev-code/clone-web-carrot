import { styled } from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextBox = styled.div``

export const LoginText = styled.p`
    font-size: 30px;
    font-weight: 700;

    > span {
        color: #fe6f0f;
    }
`

export const AuthWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 5px;
`

export const AuthLable = styled.label`
    padding: 0 10px;
    font-size: 16px;
`
export const AuthInput = styled.input`
    height: 20px;
    background-color: #f4f6fc;
    border: 1px solid #dfe0e4;
    border-radius: 0.3rem;
`

export const AuthForm = styled.form``

export const AuthBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ErrorMessage = styled.p`
    color: red;
`