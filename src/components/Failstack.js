import { useState } from "react";

export const Failstack = () => {
  const [fs, setFs] = useState(0);

  return (
    <>
      <h1>Failstack</h1>
      <h2>{fs}</h2>
      <button
        onClick={() => {
          setFs(fs + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setFs(fs + 10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          setFs(fs + 25);
        }}
      >
        +25
      </button>
    </>
  );
};
