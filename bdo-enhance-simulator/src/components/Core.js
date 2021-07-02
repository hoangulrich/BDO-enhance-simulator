// TODO:
// CONSTRAINT: Failstack min = 0; Percent max = 100
// REPLACE BUTTON GROUP or CHANGE TOGGLE FUNCTION
// FAIL STACK PASS SOFTCAP
//
// STYLE:
// LOG (fail, success) tab, OPTION (sound, animation) tab, INVENTORY tab
// BACKGROUND + ANIMATION + UI
// SPLIT INTO SMALLER COMPONENTS/FILEs

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
import fail1 from "../assets/fail.PNG";
import fail2 from "../assets/fail2.PNG";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Core = () => {
  let successmp3 = new Audio("/success.mp3");
  let progressmp3 = new Audio("/progress.mp3");
  let failmp3 = new Audio("/fail.mp3");

  //enhance lv and failstack state
  const [eL, setEl] = useState(0);
  const [fs, setFs] = useState(0);

  //percent state
  const [percent, setPercent] = useState(0);

  //img state
  const [item, setItem] = useState(fail1);
  const [itemUp, setItemUp] = useState(fail2);

  //cron checked state
  const [cron, setCron] = useState(false);

  //status state
  const [status, setStatus] = useState("Status");
  const [statusColor, setStatusColor] = useState("info");

  //GET CHANCE FUNCTION FOR ACCESSORIES (softcap)
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
  };

  //PLAY ENHANCE SOUND
  const playSuccess = () => {
    successmp3.play();
  };

  const playProgress = () => {
    progressmp3.play();
  };

  const playFail = () => {
    failmp3.play();
  };

  //ENHANCE BUTTON
  const onClick = async () => {
    //USE CRON, NO ENHANCE DROP, NO FS++
    if (cron) {
      let chance = getChance(eL, fs);
      let rng = Math.random() * 100;

      //success
      if (rng < chance) {
        setStatus("Enhancement Successful!!");
        setStatusColor("success");

        playSuccess();
      }
      //fail
      else {
        setStatus("Enhancement Failed");
        setStatusColor("danger");

        playFail();
      }
    } else {
      //DEFAULT; RAW TAP NO CRON; FAIL = ENHANCE to 0, FS+1; SUCCESS = ENHANCE +1, FS = 0

      let chance = getChance(eL, fs);
      let rng = Math.random() * 100;

      if (itemUp === fail2) {
        alert("insert an item");
      } else {
        //success
        if (rng < chance) {
          setStatus("Enhancement Successful!!");
          setStatusColor("success");
          setFs(0);
          setEl(eL + 1);

          setPercent(getChance(eL + 1, 0));

          switch (itemUp) {
            case ogre0:
              setItemUp(ogre1);
              break;
            case ogre1:
              setItemUp(ogre2);
              break;
            case ogre2:
              setItemUp(ogre3);
              break;
            case ogre3:
              setItemUp(ogre4);
              break;
            case ogre4:
              setItemUp(ogre5);
              break;
            default:
              break;
          }

          playSuccess();
        }
        //fail
        else {
          setStatus("Enhancement Failed - Item Destroyed");
          setStatusColor("danger");
          setFs(fs + 1);
          setEl(0);
          setItem(fail1);
          setItemUp(fail2);
          setPercent(0);

          playFail();
        }
      }
    }
  };

  //RENDER FUNCTION
  return (
    <>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Media>
            <img
              width={64}
              height={64}
              className="ml-3"
              src={item}
              alt="Generic placeholder"
            />
          </Media>
        </Col>
        <Col
          style={{
            marginTop: "21px",
          }}
        >
          <ProgressBar animated="true" variant="warning" now={100} />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Media>
            <img
              width={64}
              height={64}
              className="ml-3"
              src={itemUp}
              alt="Generic placeholder"
            />
          </Media>
        </Col>
      </Row>

      <h2>{percent}%</h2>

      <div className="containerOptions">
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
          <ToggleButton
            variant="secondary"
            value={0}
            onClick={() => {
              setEl(0);
              setItem(ogre0);
              setItemUp(ogre0);
              setPercent(getChance(eL, fs));
            }}
          >
            base - PRI
          </ToggleButton>
          <ToggleButton
            variant="secondary"
            value={1}
            onClick={() => {
              setEl(1);
              setItem(ogre0);
              setItemUp(ogre1);
              setPercent(getChance(eL, fs));
            }}
          >
            PRI - DUO
          </ToggleButton>
          <ToggleButton
            variant="secondary"
            value={2}
            onClick={() => {
              setEl(2);
              setItem(ogre0);
              setItemUp(ogre2);
              setPercent(getChance(eL, fs));
            }}
          >
            DUO -TRI
          </ToggleButton>
          <ToggleButton
            variant="secondary"
            value={3}
            onClick={() => {
              setEl(3);
              setItem(ogre0);
              setItemUp(ogre3);
              setPercent(getChance(eL, fs));
            }}
          >
            TRI - TET
          </ToggleButton>
          <ToggleButton
            variant="secondary"
            value={4}
            onClick={() => {
              setEl(4);
              setItem(ogre0);
              setItemUp(ogre4);
              setPercent(getChance(eL, fs));
            }}
          >
            TET - PEN
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <h1>Enhance Level</h1>

      <Elint elint={eL} />

      <h1>Failstack</h1>

      <Fsint fsint={fs} />

      <div className="containerOptions">
        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 25);
              if (itemUp !== fail2) setPercent(getChance(eL, fs - 25));
            }}
          >
            -25
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 10);
              if (itemUp !== fail2) setPercent(getChance(eL, fs - 10));
            }}
          >
            -10
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 1);
              if (itemUp !== fail2) setPercent(getChance(eL, fs - 1));
            }}
          >
            -1
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 1);
              if (itemUp !== fail2) setPercent(getChance(eL, fs + 1));
            }}
          >
            +1
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 10);
              if (itemUp !== fail2) setPercent(getChance(eL, fs + 10));
            }}
          >
            +10
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 25);
              if (itemUp !== fail2) setPercent(getChance(eL, fs + 25));
            }}
          >
            +25
          </Button>
        </ButtonGroup>
      </div>

      <div className="containerOptions">
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="secondary"
              onClick={() => {
                setFs(0);
                if (itemUp !== fail2) setPercent(getChance(eL, 0));
              }}
            >
              Reset
            </Button>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup toggle>
              <ToggleButton
                variant="outline-info"
                type="checkbox"
                checked={cron}
                onChange={(e) => {
                  setCron(e.currentTarget.checked);
                }}
              >
                Crons
              </ToggleButton>
            </ButtonGroup>
          </Col>
        </Row>
      </div>

      <div className="containerOptions">
        <Button
          className="mt-2 mb-2"
          variant="outline-info"
          size="lg"
          onClick={onClick}
          block
        >
          Enhance
        </Button>
      </div>

      <Alert style={{ textAlign: "center" }} variant={statusColor}>
        {status}
      </Alert>
    </>
  );
};
