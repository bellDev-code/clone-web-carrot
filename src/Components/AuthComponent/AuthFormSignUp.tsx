import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox, AuthBtnWrap } from "./styles";
import { Link } from "react-router-dom";
import NaverMap from "../Maps";

export interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
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
    watch,
  } = useForm<SignupFormData>();

  const [openMap, setOpenMap] = useState(false)

  const openNaverMap = () => {
    setOpenMap(true)
  }

  const password = watch("password");

  return (
    <Container>
      <TextBox>
        <LoginText>
          <span>당근</span> {formTitle}
        </LoginText>
      </TextBox>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthWrap>
          <AuthLable id="emailLable">이메일</AuthLable>
          <AuthInput type="email" aria-labelledby="emailLable" {...register("email", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="nickNameLable">닉네임</AuthLable>
          <AuthInput type="text" aria-labelledby="nickNameLable" {...register("nickName")} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="regionLable">우리 동네</AuthLable>
          <AuthInput type="text" aria-labelledby="regionLable" {...register("region", { required: true })} onClick={openNaverMap} />
        </AuthWrap>
        <AuthWrap>
          {openMap && <NaverMap />} 
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="passwordLable">비밀번호</AuthLable>
          <AuthInput type="password" aria-labelledby="passwordLable" {...register("password", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="passwordConfirmLable">비밀번호 확인</AuthLable>
          <AuthInput
            type="password"
            aria-labelledby="passwordConfirmLable"
            {...register("passwordConfirm", {
              required: true,
              validate: (value) => value === password,
            })}
          />
        </AuthWrap>
        <AuthBtnWrap>
          <button type="submit">{submitButtonText}</button>
          <Link to={linkTo}>{linkText}</Link>
        </AuthBtnWrap>
      </AuthForm>
    </Container>
  );
};

export default AuthFormSignup;