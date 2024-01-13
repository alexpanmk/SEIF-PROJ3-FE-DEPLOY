import { React, useState, useEffect } from "react";

//Elysio Components
import Frontpage from "./Frontpage/Frontpage";
import Navbar from "./Navbar/Navbar";

//TODO: Daisy UI 30 x Card Array for Frontpage

export default function App() {
  return (
    <>
      <Navbar />
      <Frontpage />
    </>
  );
}
