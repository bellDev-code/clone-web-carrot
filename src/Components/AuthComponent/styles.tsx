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
export const AuthForm = styled.form``

export const AuthWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
`

export const AuthLable = styled.label`
    padding: 0 10px;
    font-size: 16px;
    font-weight: 500;
`
export const AuthInput = styled.input`
    height: 25px;
    background-color: #f4f6fc;
    border: 1px solid #dfe0e4;
    border-radius: 0.3rem;
`

export const AddressWrap = styled.div``

export const AddressBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
`

export const AuthButton = styled.button`
    cursor: pointer;
    padding: 0.4rem 1.4rem;
    background-color: #ffffff;
    border: 1px solid #dfe0e4;
    border-radius: 0.3rem;
    font-weight: 700;
`

export const AuthBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0
`