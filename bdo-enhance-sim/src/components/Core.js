import React from "react";
import { useState } from "react";
import { Elint } from "./Elint";
import { Fsint } from "./Fsint";
import ogre0 from "../assets/ogreBase.PNG";
import ogre1 from "../assets/ogrePRI.PNG";
import ogre2 from "../assets/ogreDUO.PNG";
import ogre3 from "../assets/ogreTRI.PNG";
import ogre4 from "../assets/ogreTET.PNG";
import ogre5 from "../assets/ogrePEN.PNG";

export const Core = () => {
  const [eL, setEl] = useState(0);
  const [fs, setFs] = useState(0);
  const [status, setStatus] = useState("");
  const [item, setItem] = useState(ogre0);

  const getChance = (level, fail) => {
    switch (level) {
      case 0:
        return 25 + 2.5 * fail;
      case 1:
        return 10 + 1 * fail;
      case 2:
        return 7.5 + 0.75 * fail;
      case 3:
        return 2.5 + 0.25 * fail;
      case 4:
        return 0.5 + 0.05 * fail;
      default:
        break;
    }

    return level + fail;
  };

  const onClick = () => {
    const chance = getChance(eL, fs);
    let rng = Math.random() * 100;

    console.log("myrng (need < chance): " + rng);
    console.log("mychance: " + chance);

    //success
    if (rng < chance) {
      setStatus("Success");
    }
    //fail
    else {
      setStatus("Fail");
    }
  };

  return (
    <>
      <img src={item} alt="ogre"></img>
      <h1>Enhancement Level</h1>
      <Elint elint={eL} />
      <button
        onClick={() => {
          setEl(0);
          setItem(ogre0);
        }}
      >
        base - PRI
      </button>
      <button
        onClick={() => {
          setEl(1);
          setItem(ogre1);
        }}
      >
        PRI - DUO
      </button>
      <button
        onClick={() => {
          setEl(2);
          setItem(ogre2);
        }}
      >
        DUO - TRI
      </button>
      <button
        onClick={() => {
          setEl(3);
          setItem(ogre3);
        }}
      >
        TRI - TET
      </button>
      <button
        onClick={() => {
          setEl(4);
          setItem(ogre4);
        }}
      >
        TET - PEN
      </button>

      <h1>Failstack</h1>
      <Fsint fsint={fs} />
      <button
        onClick={() => {
          setFs(fs - 25);
        }}
      >
        -25
      </button>
      <button
        onClick={() => {
          setFs(fs - 10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          setFs(fs - 1);
        }}
      >
        -1
      </button>
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
      <button
        onClick={() => {
          setFs(0);
        }}
      >
        Reset
      </button>

      <button style={{ marginLeft: "30px" }} onClick={onClick}>
        Enhance
      </button>

      <p>{status}</p>
    </>
  );
};
