import React from "react";
import { cn } from "../utils/cn";

function PageLayout({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: string;
}) {
  return <div className={cn("bg-dark h-screen", css)}>{children}</div>;
}

export default PageLayout;
