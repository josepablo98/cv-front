import React from "react";


export interface FormValues {
  name: string;
  email: string;
  description: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}