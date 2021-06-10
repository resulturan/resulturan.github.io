import React, { useEffect, useRef } from "react";
import useDencrypt from "use-dencrypt-effect";
import { naviInfo } from "../../constants/pageInfo";

const values = naviInfo.skills;

export default function PersonelInfo() {
  const { result, dencrypt } = useDencrypt();
  const color = useRef("text-black");

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      color.current = naviInfo.colors[i];

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2500);

    return () => clearInterval(action);
  }, [dencrypt]);
  return (
    <>
      <div className="p-4">{naviInfo.main}</div>
      <div className="p-4">
        "I'm a full-stack" <span className={color.current}>{result}</span>{" "}
        "developer"
      </div>
    </>
  );
}
