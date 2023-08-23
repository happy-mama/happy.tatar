import React, { useEffect, useState } from "react";
import {
  Container,
  Checkbox,
  CheckboxBody,
  Model,
  ModelName,
  CheckboxText,
  Button,
  Password,
  Symbols,
  Select,
  SelOpts,
} from "./styled";
import { Spacer } from "../../../widgets/WindowParts/styled";

export default function PassGen() {
  const [checks, setChecks] = useState({
    numbers: true,
    uppercase: true,
    lowercase: true,
    special: false,
    dots: false,
    lines: false,
  });

  const [length, setLength] = useState(20);
  const [password, setPassword] = useState("");

  const handleCheckClick = (
    type: "numbers" | "uppercase" | "lowercase" | "special" | "dots" | "lines"
  ) => {
    checks[type] = !checks[type];
    setChecks(checks);
  };

  const handleLength = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(e.target.value));
  };

  let templates = [
    "0123456789",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "!%*^()?@#$&~",
    ".,:;'\"`",
    "/\\|-_",
  ];

  const tryGen = (templateMap: string[]) => {
    let attempts = length;
    let pass = "";

    while (attempts > 0) {
      let templateIndex = Math.floor(Math.random() * templateMap.length);
      let templateSymbol = Math.floor(
        Math.random() * templateMap[templateIndex].length
      );

      pass += templateMap[templateIndex][templateSymbol];

      attempts--;
    }

    let st = Math.floor(Math.random() * length);
    let sc = Math.floor(Math.random() * length);

    if (st > sc) {
      pass = pass.slice(sc, st);
    } else {
      pass = pass.slice(st, sc);
    }

    pass = pass.split("").reverse().join("");

    let regen = length - pass.length;

    while (regen > 0) {
      let templateIndex = Math.floor(Math.random() * templateMap.length);
      let templateSymbol = Math.floor(
        Math.random() * templateMap[templateIndex].length
      );

      pass += templateMap[templateIndex][templateSymbol];

      regen--;
    }

    return pass;
  };

  const gen = () => {
    setPassword("Generating...");

    let templateMap: string[] = [];

    Object.values(checks).forEach((v, i) => {
      if (v) {
        templateMap.push(templates[i]);
      }
    });

    if (!templateMap.length) {
      return;
    }

    let attempts = 500;

    while (attempts > 0) {
      let pass = 0;
      let tryPass = tryGen(templateMap);

      templateMap.forEach((temp, i) => {
        let any = false;

        temp.split("").forEach((t, i) => {
          if (tryPass.includes(t)) {
            return (any = true);
          }
        });

        if (any) {
          pass++;
        }
      });

      if (pass >= templateMap.length) {
        setPassword(tryPass);
        attempts = -1;
      }

      attempts--;
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    gen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Model>
        <ModelName>Options</ModelName>
        <Spacer $height="10px" />
        <CheckboxBody>
          <Select value={length} onChange={handleLength}>
            <SelOpts value={8}>8</SelOpts>
            <SelOpts value={12}>12</SelOpts>
            <SelOpts value={16}>16</SelOpts>
            <SelOpts value={20}>20</SelOpts>
            <SelOpts value={24}>24</SelOpts>
            <SelOpts value={28}>28</SelOpts>
            <SelOpts value={32}>32</SelOpts>
          </Select>
          <CheckboxText>length</CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.numbers}
            onChange={() => handleCheckClick("numbers")}
          ></Checkbox>
          <CheckboxText>
            numbers <Symbols>0 - 9</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.uppercase}
            onChange={() => handleCheckClick("uppercase")}
          ></Checkbox>
          <CheckboxText>
            uppercase letters <Symbols>A - Z</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.lowercase}
            onChange={() => handleCheckClick("lowercase")}
          ></Checkbox>
          <CheckboxText>
            lowercase letters <Symbols>a - z</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.special}
            onChange={() => handleCheckClick("special")}
          ></Checkbox>
          <CheckboxText>
            special symbols <Symbols>! % * ^ ( ) ? @ # $ & ~</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.dots}
            onChange={() => handleCheckClick("dots")}
          ></Checkbox>
          <CheckboxText>
            dots <Symbols>. , : ; ' " `</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <CheckboxBody>
          <Checkbox
            type="checkbox"
            defaultChecked={checks.lines}
            onChange={() => handleCheckClick("lines")}
          ></Checkbox>
          <CheckboxText>
            lines <Symbols>/ \ | - _</Symbols>
          </CheckboxText>
        </CheckboxBody>
        <Spacer $height="10px" />
      </Model>
      <Spacer $height="50px" />
      <Model>
        <ModelName>Password</ModelName>
        <Spacer $height="10px" />
        <Password>{password}</Password>
        <Spacer $height="10px" />
        <Button onClick={gen}>Generate</Button>
        <Button onClick={copy}>Copy</Button>
        <Spacer $height="10px" />
      </Model>
    </Container>
  );
}
