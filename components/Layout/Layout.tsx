import React, { FC, ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "./Navbar";

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <div>
      <header className="bg-gray-100">
        <ScrollToTop />
        <Navbar />
      </header>
      {/* <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main> */}
      <main className="min-h-full">{children}</main>
      <footer className="relative bottom-0 w-full p-4 bg-gradient-to-r from-indigo-700 to-blue-500 text-center text-white uppercase">
        Annonce 45
      </footer>
    </div>
  );
};
