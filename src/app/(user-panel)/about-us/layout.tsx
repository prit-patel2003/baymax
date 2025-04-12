'use client'
import React, { ReactNode } from "react";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  );


export default layout;
