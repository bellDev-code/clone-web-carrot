import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter 추가
import Header from "./index";

describe("Header Component", () => {
  it("renders logo text", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoTextElement = screen.getByText("당근");
    expect(logoTextElement).toBeInTheDocument();
  });

  it("renders header links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerLinks = screen.getAllByRole("link");

    const expectedLinks = [
      { name: "중고거래", url: "/fleamarket" },
      { name: "동네가게", url: "/nearby-stores" },
      { name: "알바", url: "/jobs" },
    ];

    // 검사
    headerLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(expectedLinks[index].name);
      expect(link).toHaveAttribute("href", expectedLinks[index].url);
    });
  });

  it("renders search input", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });
});

