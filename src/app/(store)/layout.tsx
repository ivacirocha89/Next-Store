import { Header } from "@/components/header";
import React from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
