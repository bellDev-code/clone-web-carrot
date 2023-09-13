import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox } from "./styles";
import { Link } from "react-router-dom";

export interface SignupFormData {
  email: string;
  password: string;
  nickName?: string;
  region: string;
}

interface AuthFormSignupProps {
  formTitle: string;
  submitButtonText: string;
  onSubmit: SubmitHandler<SignupFormData>;
  linkText: string;
  linkTo: string;
}

const AuthFormSignup = ({ formTitle, submitButtonText, onSubmit, linkText, linkTo }: AuthFormSignupProps) => {
  const {
    register,
    handleSubmit,
  } = useForm<SignupFormData>();

  return (
    <Container>
      <TextBox>
        <LoginText>
          <span>당근</span> {formTitle}
        </LoginText>
      </TextBox>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthWrap>
          <AuthLable>이메일</AuthLable>
          <AuthInput type="email" {...register("email", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable>비밀번호</AuthLable>
          <AuthInput type="password" {...register("password", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable>닉네임</AuthLable>
          <AuthInput type="text" {...register("nickName", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable>동네</AuthLable>
          <AuthInput type="text" {...register("region", { required: true })} />
        </AuthWrap>
        <button type="submit">{submitButtonText}</button>
        <Link to={linkTo}>{linkText}</Link>
      </AuthForm>
    </Container>
  );
};

export default AuthFormSignup;