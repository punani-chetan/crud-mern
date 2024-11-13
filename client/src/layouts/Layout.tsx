import React, { ReactNode } from "react";
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component

interface LayoutProps {
  children: ReactNode; // Type the children prop as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
