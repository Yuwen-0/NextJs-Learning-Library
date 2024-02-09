import React from "react";

export default function RootLayout({
  children,
  userAnalytics,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{userAnalytics}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    <>{login}</>
  );
}
