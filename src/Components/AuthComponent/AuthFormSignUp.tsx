import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox, AuthBtnWrap } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Postcode from "../postCode";

export interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm?: string;
  username: string;
  region: string;
}

interface AuthFormSignupProps {
  formTitle: string;
  submitButtonText: string;
  onSubmit: SubmitHandler<SignupFormData>;
  linkText: string;
  linkTo: string;
}

const AuthFormSignup = ({ formTitle, submitButtonText, linkText, linkTo }: AuthFormSignupProps) => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<SignupFormData>();

  const [region, setRegion] = useState<string>('');
  const navigate = useNavigate()
  const password = watch('password');

  const handleAddressChange = (address: string) => {
    setRegion(address);
  };

  // async
  const handleFormSubmit = async(data: SignupFormData) => {
    const combinedRegion = `${region} ${data.region}`;
    const postData = { ...data, region: combinedRegion };
    const url = `${process.env.REACT_APP_API_KEY}/user/create`

    try {
      const { passwordConfirm, ...postSignUp } = postData;
      const response = await axios.post(url, postSignUp);
      console.log(response);
      navigate("/login")
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
          <AuthInput 
            type="email" 
            aria-labelledby="emailLable" 
            {...register("email", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="usernameLable">닉네임</AuthLable>
          <AuthInput type="text" aria-labelledby="usernameLable" {...register("username", { required: true })} />
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