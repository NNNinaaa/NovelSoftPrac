import React from "react";
import logoPath from "./assets/logoPath";

export default function Home() {
  return (
    <div>
      <div>
        <img src={logoPath.ns} style={{ width: "300px", height: "48px", objectFit: "cover" }} alt="Logo" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
