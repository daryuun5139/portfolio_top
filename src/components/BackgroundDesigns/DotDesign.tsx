"use client";

import { useEffect, useState } from "react";

type Props = {
  designName: string;
};

const DotDesign = ({ designName }: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  // ellipseをランダムで動かす
  useEffect(() => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    const elems = document.getElementsByTagName("ellipse");
    [...elems].forEach((v) => {
      const vcx: number = v.cx.animVal.value;
      const vcy: number = v.cy.animVal.value;
      const x: number = width - vcx - 50;
      const y: number = height - vcy - 50;
      const keyframe = [
        { transform: `translate(${vcx}, ${vcy})` },
        { transform: `translate(${x}px, ${y}px)` },
        { transform: `translate(-${vcx}px, 50px)` },
        { transform: `translate(${x}px, 50px)` },
        { transform: `translate(50px, -${vcy}px)` },
        { transform: `translate(50px, ${y}px)` },
        { transform: `translate(-${vcx}px, -${vcy}px)` },
      ];

      const randomNum: number = Math.floor(Math.random() * keyframe.length - 1) + 1;

      v.animate([keyframe[0], keyframe[randomNum]], {
        duration: 20000,
        iterations: Infinity,
        direction: "alternate",
      });
    });
  });

  // 背景色をアニメーションで変更
  useEffect(() => {
    const sectionWindow = document.getElementById("top");
    const sectionWindowDesign = document.getElementById(designName);

    if (sectionWindow && sectionWindowDesign) {
      sectionWindow.animate(
        [
          { backgroundColor: "#4169e1" },
          { backgroundColor: "#66ccff" },
          { backgroundColor: "#1e2ccf" },
          { backgroundColor: "#D81159" },
        ],
        {
          duration: 10000,
          iterations: Infinity,
          direction: "alternate",
        }
      );

      sectionWindowDesign.animate(
        [{ fill: "#218380" }, { fill: "#95d5c7" }, { fill: "#E63946" }, { fill: "#FFCC40" }],
        {
          duration: 10000,
          iterations: Infinity,
          direction: "alternate",
        }
      );
    }

    // if (sectionWindow && sectionWindowDesign) {
    // クリックすると背景色を変更する
    //   sectionWindow.addEventListener("click", () => {
    //     const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    //     sectionWindow.style.background = selectedColor[1];
    //     sectionWindowDesign.style.fill = selectedColor[0];
    //   });
    // setIntervalで背景色を変更する
    // https://stackoverflow.com/questions/61986358/react-add-event-domcontentloaded-with-useeffect
    //   // setInterval(() => {
    //   //   const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    //   //   sectionWindow.style.background = selectedColor[1];
    //   //   sectionWindowDesign.style.fill = selectedColor[0];
    //   // }, 5000);
    // }
  }, []);

  return (
    <>
      <svg
        id={designName}
        className="absolute left-0 top-0 h-full w-full duration-1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        // viewBox={`0 0 ${width} ${height}`}
      >
        <g id="Layer_1">
          <title>Layer 1</title>
          <ellipse
            ry="100"
            rx="104"
            id="svg_1"
            cy="45.98101"
            cx="51.97099"
            // stroke="#000"
            // fill="#000000"
            // transform={`translate(${tx} ${ty})`}
          />
          <ellipse
            ry="100"
            rx="104"
            id="svg_2"
            cy="501.99559"
            cx="519.98594"
            // stroke="#000"
            // fill="#000000"
          />
          <ellipse
            ry="100"
            rx="104"
            id="svg_3"
            cy="666.00083"
            cx="27.97021"
            // stroke="#000"
            // fill="#000000"
          />
          <ellipse
            ry="100"
            rx="104"
            id="svg_4"
            cy="710.00223"
            cx="751.99333"
            // stroke="#000"
            // fill="#000000"
          />

          <ellipse
            ry="100"
            rx="104"
            id="svg_6"
            cy="425.99317"
            cx="947.99959"
            // stroke="#000"
            // fill="#000000"
          />

          <ellipse
            ry="100"
            rx="104"
            id="svg_8"
            cy="730.00287"
            cx="1140.00573"
            // stroke="#000"
            // fill="#000000"
          />
          <ellipse
            ry="100"
            rx="104"
            id="svg_9"
            cy="237.98716"
            cx="707.99189"
            // stroke="#000"
            // fill="#000000"
          />

          <ellipse
            ry="100"
            rx="104"
            id="svg_16"
            cy="165.98481"
            cx="1176.00692"
            // stroke="#000"
            // fill="#000000"
          />

          <ellipse
            ry="100"
            rx="104"
            id="svg_18"
            cy="337.99035"
            cx="207.97598"
            // stroke="#000"
            // fill="#000000"
          />

          <ellipse
            ry="100"
            rx="104"
            id="svg_20"
            cy="778.00438"
            cx="323.97966"
            // stroke="#000"
            // fill="#000000"
          />
          <ellipse
            ry="100"
            rx="104"
            id="svg_25"
            cy="-2.02051"
            cx="851.9965"
            // stroke="#000"
            // fill="#000000"
          />
        </g>
      </svg>
    </>
  );
};

export default DotDesign;
