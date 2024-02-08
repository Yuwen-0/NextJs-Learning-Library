import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <header
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        Dashboard Header
      </header>
      <aside
        style={{ backgroundColor: "#ddd", padding: "1rem", width: "200px" }}
      >
        Sidebar Content
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        Dashboard Footer
      </footer>
    </div>
  );
};

export default DashboardLayout;
