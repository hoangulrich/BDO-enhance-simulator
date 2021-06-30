import React from "react";
import { useState } from "react";
import { el } from "./el";

export const EnhancementLevel = () => {
  const [eL, setEl] = useState(0);

  return (
    <>
      <el />
      <h1>Enhancement Level</h1>
      <h2>{eL}</h2>
      <el />
      <button
        onClick={() => {
          setEl(1);
        }}
      >
        PRI
      </button>
      <button
        onClick={() => {
          setEl(2);
        }}
      >
        DUO
      </button>
      <button
        onClick={() => {
          setEl(3);
        }}
      >
        TRI
      </button>
    </>
  );
};
