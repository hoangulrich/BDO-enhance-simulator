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
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Core = () => {
  const [eL, setEl] = useState(0);
  const [fs, setFs] = useState(0);
  const [status, setStatus] = useState("Status");
  const [item, setItem] = useState(ogre0);
  const [itemUp, setItemUp] = useState(ogre1);
  const [checked, setChecked] = useState(false);
  const [statusColor, setStatusColor] = useState("info");
  const [percent, setPercent] = useState(25);

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

  //ENHANCE BUTTON
  const onClick = () => {
    let chance = getChance(eL, fs);
    let rng = Math.random() * 100;

    console.log("myrng (need < chance): " + rng);
    console.log("mychance: " + chance);

    //success
    if (rng < { percent }) {
      setStatus("Success");
      setStatusColor("success");
    }
    //fail
    else {
      setStatus("Fail");
      setStatusColor("danger");
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
              setItemUp(ogre1);
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
              setItem(ogre1);
              setItemUp(ogre2);
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
              setItem(ogre2);
              setItemUp(ogre3);
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
              setItem(ogre3);
              setItemUp(ogre4);
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
              setItem(ogre4);
              setItemUp(ogre5);
              setPercent(getChance(eL, fs));
            }}
          >
            TET - PEN
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <h1>Enhancement Level</h1>

      <Elint elint={eL} />

      <h1>Failstack</h1>

      <Fsint fsint={fs} />

      <div className="containerOptions">
        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 25);
              setPercent(getChance(eL, fs - 25));
            }}
          >
            -25{" "}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 10);
              setPercent(getChance(eL, fs - 10));
            }}
          >
            -10
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs - 1);
              setPercent(getChance(eL, fs - 1));
            }}
          >
            -1
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 1);
              setPercent(getChance(eL, fs + 1));
            }}
          >
            +1
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 10);
              setPercent(getChance(eL, fs + 10));
            }}
          >
            +10
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFs(fs + 25);
              setPercent(getChance(eL, fs + 25));
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
                type="checkbox"
                variant="info"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Cron
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
