import React from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Container } from "postcss";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
