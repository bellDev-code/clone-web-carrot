import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox, AuthBtnWrap } from "./styles";
import { Link } from "react-router-dom";
import Postcode from "../postCode";

export interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm?: string;
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
    formState: { errors },
    setError
  } = useForm<SignupFormData>();

  const [region, setRegion] = useState<string>('');

  const password = watch('password');

  const handleAddressChange = (address: string) => {
    setRegion(address);
  };

  // async
  const handleFormSubmit = async(data: SignupFormData) => {
    const combinedRegion = `${region} ${data.region}`;
    const postData = { ...data, region: combinedRegion };

    const { passwordConfirm, ...postSignUp } = postData;

    const url = `${process.env.API_KEY}/user/create`

    try {

      await axios.post(url, postSignUp);
      console.log("폼 데이터가 서버에 성공적으로 전송되었습니다!");
    } catch (error) {
      console.error("폼 데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <Container>
      <TextBox>
        <LoginText>
          <span>당근</span> {formTitle}
        </LoginText>
      </TextBox>
      <AuthForm onSubmit={handleSubmit(handleFormSubmit)}>
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
          <AuthInput type="text" aria-labelledby="regionLable" value={region} {...register("region", { required: true })} />
          <Postcode onAddressChange={handleAddressChange} />
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