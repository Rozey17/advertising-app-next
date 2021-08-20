import React, { FC, ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "./Navbar";

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <header className="min-h-screen bg-gray-100">
      <ScrollToTop />
      <Navbar />
      {children}
    </header>
  );
};
