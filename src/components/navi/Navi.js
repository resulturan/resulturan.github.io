import React from "react";
import BackgroundNavi from "./BackgroundNavi";
import PersonelInfo from "./PersonelInfo";

export default function Navi() {
  return (
    <header className="h-screen flex justify-center items-center text-6xl flex-col relative">
      <BackgroundNavi />
      <PersonelInfo />
    </header>
  );
}
