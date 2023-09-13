import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox } from "./styles";
import { Link } from "react-router-dom";

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
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
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