import AuthFormSignup, { SignupFormData } from "../../Components/AuthComponent/AuthFormSignUp";

const CreateAccountPage = () => {
    const handleCreateAccountSubmit = (data: SignupFormData) => {
        console.log(data);
      };
    
    return (
        <AuthFormSignup
            formTitle="회원가입"
            submitButtonText="회원가입"
            onSubmit={handleCreateAccountSubmit}
            linkText="로그인"
            linkTo="/login"
        />
    )
}

export default CreateAccountPage