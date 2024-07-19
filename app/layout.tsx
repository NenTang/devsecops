"use client";
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import "styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <html lang="en" data-theme="emerald">
      <head></head>
      <body>
        <div>
          {loading ? <SplashScreen finishLoading={finishLoading} /> : null}
          {children}
        </div>
      </body>
    </html>
  );
}
