import Navbar from "@/components/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default CommonLayout;
