// src/components/ui/Layout.tsx
// import QuoteForm from "./quote";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuoteForm from "./quote";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <QuoteForm />
      <Footer />
    </>
  );
};

export default Layout;
