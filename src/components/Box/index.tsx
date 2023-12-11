import React from "react";
import "./index.css";

export default function Box({ children }: any) {
  return (
    <div className="codepad-logo">
      <div className="logo">{children}</div>
    </div>
  );
}
