import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AuthFormComponent, { AuthProps, AuthFormData } from "./AuthFormLogin";
import { MemoryRouter } from "react-router-dom";

const mockSubmit: AuthProps["onSubmit"] = (data) => {
  // 사용자 정의 로직을 추가 예정
  console.log("Form Submitted with data:", data);
};

const defaultProps: AuthProps = {
  formTitle: "Test Form",
  submitButtonText: "로그인",
  onSubmit: mockSubmit,
  linkText: "Link",
  linkTo: "/link",
};

const renderComponent = (props?: Partial<AuthProps>, formData?: AuthFormData) => {
  const mergedProps = { ...defaultProps, ...props };
  return render(
    <MemoryRouter>
      <AuthFormComponent {...mergedProps} />
    </MemoryRouter>
  );
};

describe("AuthFormComponent", () => {
  it("renders with default props", () => {
    renderComponent();
    // 검증 로직을 여기에 추가하세요
    expect(screen.getByText("Test Form")).toBeInTheDocument();
    // 다른 검증을 수행하세요
  });

  it("submits the form with provided data", () => {
    renderComponent();
    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");
    const submitButton = screen.getByText("로그인");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // 이벤트를 트리거한 후, 서버 응답 또는 다른 로직을 기다리는 코드를 여기에 추가하세요
    // 예: await waitFor(() => expect(...).toBe(...));
  });
});