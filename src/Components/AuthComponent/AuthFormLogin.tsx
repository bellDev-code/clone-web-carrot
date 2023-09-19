import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";

export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthProps {
  formTitle: string;
  submitButtonText: string;
  onSubmit: SubmitHandler<AuthFormData>;
  linkText: string;
  linkTo: string;
}

const handleFormSubmit = async (data: AuthFormData) => {
  
  try {
    const url = `${process.env.API_KEY}/user/login`
    const response = await axios.post(url, data);
    
    // 로그인 요청이 성공하면 서버로부터 받은 응답을 출력합니다.
    console.log('로그인 성공:', response.data);
  } catch (error) {
    // 로그인 요청이 실패하면 에러를 출력합니다.
    console.error('로그인 실패:', error);
  }
};

const AuthFormComponent = ({ formTitle, submitButtonText, onSubmit, linkText, linkTo }: AuthProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  return (
    <Container>
      <TextBox>
        <LoginText>
          <span>당근</span> {formTitle}
        </LoginText>
      </TextBox>
      <AuthForm onSubmit={handleSubmit(handleFormSubmit)}>
        <AuthWrap>
          <AuthLable id="emailLabel">이메일</AuthLable>
          <AuthInput type="email" aria-labelledby="emailLabel" {...register("email", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="passwordLabel">비밀번호</AuthLable>
          <AuthInput type="password" aria-labelledby="passwordLabel" {...register("password", { required: true })} />
        </AuthWrap>
        <button type="submit">{submitButtonText}</button>
        <Link to={linkTo}>{linkText}</Link>
      </AuthForm>
    </Container>
  );
};

export default AuthFormComponent;