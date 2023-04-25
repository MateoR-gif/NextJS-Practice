import ClickCounter from "@import/components/posts/ClickCounter";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <ClickCounter/>
      {children}
    </div>
  );
}
