"use client";

import { useEffect, useState } from "react";

type Props = {
  designName: string;
};

const TartanCheckDesign = ({ designName }: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const [st1, setSt1] = useState("#7F272D");
  const [st2, setSt2] = useState("#1A6282");
  const [st3, setSt3] = useState("#C69C6D");
  const [st4, setSt4] = useState("#977A00");
  const [st5, setSt5] = useState("#003E5B");

  // 背景デザイン変更
  useEffect(() => {
    const sectionWindow = document.getElementById("portfolio1");
    const sectionWindowDesign = document.getElementById(designName);
    const st1Elems = document.getElementById("st1");
    const st2Elems = document.getElementById("st2");
    const st3Elems = document.getElementById("st3");
    const st4Elems = document.getElementById("st4");
    const st5Elems = document.getElementById("st5");

    if (st1Elems && st2Elems && st3Elems && st4Elems) {
      st1Elems.animate(
        [{ fill: "#D81159" }, { fill: "#D00000" }, { fill: "#136F63" }, { fill: "#003049" }],
        {
          iterations: Infinity,
          direction: "alternate",
        }
      );
      st2Elems.animate(
        [{ fill: "#218380" }, { fill: "#032B43" }, { fill: "#032B43" }, { fill: "#F77F00" }],
        {
          iterations: Infinity,
          direction: "alternate",
        }
      );
      st3Elems.animate(
        [{ fill: "#8F2D56" }, { fill: "#3F88C5" }, { fill: "#D00000" }, { fill: "#FCBF49" }],
        {
          iterations: Infinity,
          direction: "alternate",
        }
      );
      st4Elems.animate(
        [{ fill: "#FFBC42" }, { fill: "#FFBA08" }, { fill: "#FFBA08" }, { fill: "#D62828" }],
        {
          iterations: Infinity,
          direction: "alternate",
        }
      );
    }

    if (sectionWindow && sectionWindowDesign) {
      // sectionWindow.addEventListener("click", () => {
      //   setSt1(colors.st1[Math.floor(Math.random() * colors.st1.length)]);
      //   setSt2(colors.st2[Math.floor(Math.random() * colors.st2.length)]);
      //   setSt3(colors.st3[Math.floor(Math.random() * colors.st3.length)]);
      //   setSt4(colors.st4[Math.floor(Math.random() * colors.st4.length)]);
      //   setSt5(colors.st5[Math.floor(Math.random() * colors.st5.length)]);
      // });
    }
  });

  return (
    <>
      <svg
        id={designName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        className="duration-1000"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="_新規パターンスウォッチ"
            data-name="新規パターンスウォッチ"
            x="0"
            y="0"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            viewBox={`0 0 ${width} ${height}`}
          >
            <g>
              <rect
                width={width}
                height={height}
                fill="none"
                strokeWidth="0"
                className="duration-1000"
              />
              <g>
                <rect
                  x="253.85"
                  width="46.79"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="339.1"
                  width="26.28"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="136.54"
                  width="48.08"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="0"
                  width="13.46"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="388.46"
                  width="26.44"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="476.44"
                  width="23.56"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="55.77"
                  width="38.46"
                  height="500"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="40.38"
                  width="15.38"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="13.46"
                  width="15.38"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="28.85"
                  width="11.54"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="236.54"
                  width="17.31"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="184.62"
                  width="17.31"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="201.92"
                  width="11.54"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="225"
                  width="11.54"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="380.77"
                  width="7.69"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="365.38"
                  width="7.69"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="373.08"
                  width="7.69"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="300.64"
                  width="5.77"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="333.33"
                  width="5.77"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="323.72"
                  width="9.62"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="306.41"
                  width="9.62"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="414.9"
                  width="7.69"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="468.75"
                  width="7.69"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="459.13"
                  width="9.62"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="422.6"
                  width="9.62"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="449.52"
                  width="9.62"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="432.21"
                  width="9.62"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="213.46"
                  width="11.54"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="121.15"
                  width="15.38"
                  height="500"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="94.23"
                  width="15.38"
                  height="500"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="316.03"
                  width="7.69"
                  height="500"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="441.83"
                  width="7.69"
                  height="500"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <rect
                  x="109.62"
                  width="11.54"
                  height="500"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
              </g>
              <g>
                <polygon
                  points="118.08 199.36 92.88 246.15 98.2 246.15 123.4 199.36 118.08 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="42.9 199.36 37.58 199.36 12.38 246.15 17.7 246.15 42.9 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="87.62 199.36 82.3 199.36 57.1 246.15 62.42 246.15 87.62 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="28.63 199.36 3.44 246.15 8.76 246.15 33.95 199.36 28.63 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="375.48 246.15 400.68 199.36 395.36 199.36 370.16 246.15 375.48 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="384.43 246.15 409.62 199.36 404.3 199.36 379.11 246.15 384.43 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="207.53 199.36 182.33 246.15 187.65 246.15 212.84 199.36 207.53 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="73.36 199.36 48.16 246.15 53.48 246.15 78.68 199.36 73.36 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="141.29 199.36 135.97 199.36 110.77 246.15 116.09 246.15 141.29 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="447.04 246.15 472.24 199.36 466.92 199.36 441.72 246.15 447.04 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="357.59 246.15 382.79 199.36 377.47 199.36 352.27 246.15 357.59 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="177.07 199.36 171.75 199.36 146.55 246.15 151.87 246.15 177.07 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="464.93 246.15 490.12 199.36 484.81 199.36 459.61 246.15 464.93 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.91 199.36 119.72 246.15 125.03 246.15 150.23 199.36 144.91 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.76 246.15 500 230.85 500 220.98 486.44 246.15 491.76 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.82 246.15 500 214.24 500 204.36 477.5 246.15 482.82 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 246.15 500 237.59 495.39 246.15 500 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.47 199.36 191.27 246.15 196.59 246.15 221.79 199.36 216.47 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="270.14 199.36 244.94 246.15 250.26 246.15 275.46 199.36 270.14 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="279.08 199.36 253.88 246.15 259.2 246.15 284.4 199.36 279.08 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="455.98 246.15 481.18 199.36 475.86 199.36 450.66 246.15 455.98 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="261.19 199.36 236 246.15 241.31 246.15 266.51 199.36 261.19 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="243.3 199.36 218.11 246.15 223.42 246.15 248.62 199.36 243.3 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="225.41 199.36 200.22 246.15 205.54 246.15 230.73 199.36 225.41 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="252.25 199.36 227.05 246.15 232.37 246.15 257.57 199.36 252.25 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.86 199.36 289.66 246.15 294.98 246.15 320.18 199.36 314.86 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.75 199.36 307.55 246.15 312.87 246.15 338.07 199.36 332.75 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.69 199.36 316.5 246.15 321.81 246.15 347.01 199.36 341.69 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="288.03 199.36 262.83 246.15 268.15 246.15 293.34 199.36 288.03 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.8 199.36 298.61 246.15 303.93 246.15 329.12 199.36 323.8 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.64 199.36 325.44 246.15 330.76 246.15 355.96 199.36 350.64 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.97 199.36 271.77 246.15 277.09 246.15 302.29 199.36 296.97 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="234.36 199.36 209.16 246.15 214.48 246.15 239.68 199.36 234.36 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.91 199.36 280.72 246.15 286.04 246.15 311.23 199.36 305.91 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.58 199.36 334.39 246.15 339.7 246.15 364.9 199.36 359.58 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="393.37 246.15 418.57 199.36 413.25 199.36 388.05 246.15 393.37 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="429.15 246.15 454.35 199.36 449.03 199.36 423.83 246.15 429.15 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="100.19 199.36 74.99 246.15 80.31 246.15 105.51 199.36 100.19 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="55.47 199.36 30.27 246.15 35.59 246.15 60.79 199.36 55.47 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="420.2 246.15 445.4 199.36 440.08 199.36 414.89 246.15 420.2 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="91.25 199.36 66.05 246.15 71.37 246.15 96.56 199.36 91.25 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="109.14 199.36 83.94 246.15 89.26 246.15 114.45 199.36 109.14 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="402.32 246.15 427.51 199.36 422.19 199.36 397 246.15 402.32 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.84 199.36 46.52 199.36 21.33 246.15 26.64 246.15 51.84 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="64.41 199.36 39.22 246.15 44.53 246.15 69.73 199.36 64.41 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="438.09 246.15 463.29 199.36 457.97 199.36 432.78 246.15 438.09 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="411.26 246.15 436.46 199.36 431.14 199.36 405.94 246.15 411.26 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.69 199.36 155.49 246.15 160.81 246.15 186.01 199.36 180.69 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.8 199.36 137.61 246.15 142.92 246.15 168.12 199.36 162.8 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="153.86 199.36 128.66 246.15 133.98 246.15 159.18 199.36 153.86 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="1.8 199.36 0 202.7 0 212.58 7.12 199.36 1.8 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="10.75 199.36 0 219.31 0 229.19 16.06 199.36 10.75 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="348.65 246.15 373.85 199.36 368.53 199.36 343.33 246.15 348.65 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="366.54 246.15 391.73 199.36 386.42 199.36 361.22 246.15 366.54 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="19.69 199.36 0 235.93 0 245.8 25.01 199.36 19.69 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="132.34 199.36 127.02 199.36 101.83 246.15 107.15 246.15 132.34 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.9 199.36 198.58 199.36 173.38 246.15 178.7 246.15 203.9 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.87 246.15 499.07 199.36 493.75 199.36 468.55 246.15 473.87 246.15"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="189.64 199.36 164.44 246.15 169.76 246.15 194.95 199.36 189.64 199.36"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.44 160.9 426.6 134.62 421.28 134.62 407.13 160.9 412.44 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.5 160.9 417.65 134.62 412.33 134.62 398.18 160.9 403.5 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.15 134.62 9.83 134.62 0 152.87 0 160.9 1 160.9 15.15 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.56 160.9 408.71 134.62 403.39 134.62 389.24 160.9 394.56 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points=".88 134.62 0 136.26 0 146.13 6.2 134.62 .88 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="170.83 134.62 156.68 160.9 162 160.9 176.15 134.62 170.83 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="161.89 134.62 147.73 160.9 153.05 160.9 167.2 134.62 161.89 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.32 134.62 144 134.62 129.85 160.9 135.16 160.9 149.32 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 160.9 500 154.53 496.57 160.9 500 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.39 160.9 435.54 134.62 430.22 134.62 416.07 160.9 421.39 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.95 160.9 500 147.8 500 137.92 487.63 160.9 492.95 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="81.39 134.62 67.23 160.9 72.55 160.9 86.7 134.62 81.39 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="63.5 134.62 49.34 160.9 54.66 160.9 68.81 134.62 63.5 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="72.44 134.62 58.29 160.9 63.61 160.9 77.76 134.62 72.44 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="152.94 134.62 138.79 160.9 144.11 160.9 158.26 134.62 152.94 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.05 134.62 120.9 160.9 126.22 160.9 140.37 134.62 135.05 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.06 160.9 489.21 134.62 483.89 134.62 469.74 160.9 475.06 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.04 134.62 27.72 134.62 13.57 160.9 18.88 160.9 33.04 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="380.29 160.9 385.61 160.9 399.76 134.62 394.44 134.62 380.29 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.11 160.9 480.26 134.62 474.95 134.62 460.79 160.9 466.11 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="41.98 134.62 36.66 134.62 22.51 160.9 27.83 160.9 41.98 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.28 160.9 453.43 134.62 448.11 134.62 433.96 160.9 439.28 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="170.94 160.9 185.09 134.62 179.78 134.62 165.62 160.9 170.94 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="260.39 160.9 274.54 134.62 269.22 134.62 255.07 160.9 260.39 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.33 160.9 283.48 134.62 278.17 134.62 264.01 160.9 269.33 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.28 160.9 292.43 134.62 287.11 134.62 272.96 160.9 278.28 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="251.44 160.9 265.59 134.62 260.28 134.62 246.12 160.9 251.44 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="224.61 160.9 238.76 134.62 233.44 134.62 219.29 160.9 224.61 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="367.72 160.9 381.87 134.62 376.56 134.62 362.4 160.9 367.72 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="242.5 160.9 256.65 134.62 251.33 134.62 237.18 160.9 242.5 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="215.66 160.9 229.82 134.62 224.5 134.62 210.35 160.9 215.66 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="233.55 160.9 247.71 134.62 242.39 134.62 228.24 160.9 233.55 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="50.93 134.62 45.61 134.62 31.46 160.9 36.77 160.9 50.93 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="340.89 160.9 355.04 134.62 349.72 134.62 335.57 160.9 340.89 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="376.67 160.9 390.82 134.62 385.5 134.62 371.35 160.9 376.67 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="349.83 160.9 363.98 134.62 358.67 134.62 344.51 160.9 349.83 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323 160.9 337.15 134.62 331.83 134.62 317.68 160.9 323 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="331.94 160.9 346.1 134.62 340.78 134.62 326.63 160.9 331.94 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.05 160.9 328.21 134.62 322.89 134.62 308.74 160.9 314.05 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="287.22 160.9 301.37 134.62 296.05 134.62 281.9 160.9 287.22 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.17 160.9 310.32 134.62 305 134.62 290.85 160.9 296.17 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="358.78 160.9 372.93 134.62 367.61 134.62 353.46 160.9 358.78 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.11 160.9 319.26 134.62 313.94 134.62 299.79 160.9 305.11 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="206.72 160.9 220.87 134.62 215.55 134.62 201.4 160.9 206.72 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.17 160.9 471.32 134.62 466 134.62 451.85 160.9 457.17 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="179.89 160.9 194.04 134.62 188.72 134.62 174.57 160.9 179.89 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484 160.9 498.15 134.62 492.83 134.62 478.68 160.9 484 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.22 160.9 462.37 134.62 457.06 134.62 442.9 160.9 448.22 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="90.33 134.62 76.18 160.9 81.5 160.9 95.65 134.62 90.33 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.59 134.62 99.27 134.62 85.12 160.9 90.44 160.9 104.59 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="126.11 134.62 111.96 160.9 117.27 160.9 131.43 134.62 126.11 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="59.87 134.62 54.55 134.62 40.4 160.9 45.72 160.9 59.87 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.16 134.62 103.01 160.9 108.33 160.9 122.48 134.62 117.16 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="113.54 134.62 108.22 134.62 94.07 160.9 99.39 160.9 113.54 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.09 134.62 18.77 134.62 4.62 160.9 9.94 160.9 24.09 134.62"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.33 160.9 444.49 134.62 439.17 134.62 425.02 160.9 430.33 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="197.78 160.9 211.93 134.62 206.61 134.62 192.46 160.9 197.78 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="188.83 160.9 202.98 134.62 197.66 134.62 183.51 160.9 188.83 160.9"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="55.6 315.38 29.72 363.46 35.03 363.46 60.92 315.38 55.6 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.89 315.38 307 363.46 312.32 363.46 338.2 315.38 332.89 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.66 315.38 342.78 363.46 348.09 363.46 373.98 315.38 368.66 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="419.65 363.46 445.54 315.38 440.22 315.38 414.33 363.46 419.65 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.5 315.38 369.61 363.46 374.93 363.46 400.82 315.38 395.5 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.55 315.38 360.66 363.46 365.98 363.46 391.87 315.38 386.55 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.98 315.38 46.66 315.38 20.77 363.46 26.09 363.46 51.98 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.77 315.38 324.89 363.46 330.2 363.46 356.09 315.38 350.77 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.32 363.46 499.21 315.38 493.89 315.38 468 363.46 473.32 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.61 315.38 351.72 363.46 357.04 363.46 382.93 315.38 377.61 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.72 315.38 333.83 363.46 339.15 363.46 365.04 315.38 359.72 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.05 363.46 464.37 363.46 490.26 315.38 484.94 315.38 459.05 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="87.76 315.38 82.44 315.38 56.55 363.46 61.87 363.46 87.76 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="261.33 315.38 235.44 363.46 240.76 363.46 266.65 315.38 261.33 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="127.16 315.38 101.27 363.46 106.59 363.46 132.48 315.38 127.16 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="455.43 363.46 481.32 315.38 476 315.38 450.11 363.46 455.43 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="136.11 315.38 110.22 363.46 115.54 363.46 141.42 315.38 136.11 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="437.54 363.46 463.43 315.38 458.11 315.38 432.22 363.46 437.54 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="171.88 315.38 146 363.46 151.31 363.46 177.2 315.38 171.88 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.94 315.38 137.05 363.46 142.37 363.46 168.26 315.38 162.94 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="145.05 315.38 119.16 363.46 124.48 363.46 150.37 315.38 145.05 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="153.99 315.38 128.11 363.46 133.42 363.46 159.31 315.38 153.99 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.28 363.46 428.59 363.46 454.48 315.38 449.16 315.38 423.28 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.21 363.46 500 347.13 500 337.25 485.89 363.46 491.21 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.26 363.46 500 330.52 500 320.64 476.94 363.46 482.26 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 363.46 500 353.87 494.83 363.46 500 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="43.03 315.38 37.72 315.38 11.83 363.46 17.15 363.46 43.03 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="446.48 363.46 472.37 315.38 467.05 315.38 441.17 363.46 446.48 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="28.77 315.38 2.88 363.46 8.2 363.46 34.09 315.38 28.77 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="91.38 315.38 65.49 363.46 70.81 363.46 96.7 315.38 91.38 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="297.11 315.38 271.22 363.46 276.54 363.46 302.43 315.38 297.11 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="279.22 315.38 253.33 363.46 258.65 363.46 284.54 315.38 279.22 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="288.16 315.38 262.27 363.46 267.59 363.46 293.48 315.38 288.16 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="270.27 315.38 244.39 363.46 249.7 363.46 275.59 315.38 270.27 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="252.38 315.38 226.5 363.46 231.81 363.46 257.7 315.38 252.38 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.94 315.38 298.05 363.46 303.37 363.46 329.26 315.38 323.94 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="315 315.38 289.11 363.46 294.43 363.46 320.31 315.38 315 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="306.05 315.38 280.16 363.46 285.48 363.46 311.37 315.38 306.05 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.83 315.38 154.94 363.46 160.26 363.46 186.15 315.38 180.83 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="207.66 315.38 181.77 363.46 187.09 363.46 212.98 315.38 207.66 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="243.44 315.38 217.55 363.46 222.87 363.46 248.76 315.38 243.44 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="189.77 315.38 163.88 363.46 169.2 363.46 195.09 315.38 189.77 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="198.72 315.38 172.83 363.46 178.15 363.46 204.04 315.38 198.72 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.61 315.38 190.72 363.46 196.04 363.46 221.92 315.38 216.61 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="234.5 315.38 208.61 363.46 213.93 363.46 239.81 315.38 234.5 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="225.55 315.38 199.66 363.46 204.98 363.46 230.87 315.38 225.55 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.83 315.38 315.94 363.46 321.26 363.46 347.15 315.38 341.83 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="100.33 315.38 74.44 363.46 79.76 363.46 105.65 315.38 100.33 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="114.59 315.38 109.27 315.38 83.38 363.46 88.7 363.46 114.59 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="64.55 315.38 38.66 363.46 43.98 363.46 69.87 315.38 64.55 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="73.49 315.38 47.61 363.46 52.92 363.46 78.81 315.38 73.49 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="1.94 315.38 0 318.98 0 328.86 7.26 315.38 1.94 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="10.88 315.38 0 335.59 0 345.47 16.2 315.38 10.88 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="383.87 363.46 409.76 315.38 404.44 315.38 378.55 363.46 383.87 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="19.83 315.38 0 352.2 0 362.08 25.14 315.38 19.83 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="118.22 315.38 92.33 363.46 97.65 363.46 123.53 315.38 118.22 315.38"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="401.76 363.46 427.65 315.38 422.33 315.38 396.44 363.46 401.76 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="392.82 363.46 418.7 315.38 413.39 315.38 387.5 363.46 392.82 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.71 363.46 436.59 315.38 431.28 315.38 405.39 363.46 410.71 363.46"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 486.76 492.87 500 498.19 500 500 496.63 500 486.76"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="88.67 486.54 81.42 500 86.74 500 93.99 486.54 88.67 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="79.72 486.54 72.47 500 77.79 500 85.04 486.54 79.72 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="204.95 486.54 197.7 500 203.02 500 210.27 486.54 204.95 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="196 486.54 188.75 500 194.07 500 201.32 486.54 196 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="312.28 486.54 305.03 500 310.35 500 317.6 486.54 312.28 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="97.61 486.54 90.36 500 95.68 500 102.93 486.54 97.61 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="61.83 486.54 54.59 500 59.9 500 67.15 486.54 61.83 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="187.06 486.54 179.81 500 185.13 500 192.38 486.54 187.06 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="169.17 486.54 161.92 500 167.24 500 174.49 486.54 169.17 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="52.89 486.54 45.64 500 50.96 500 58.21 486.54 52.89 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="178.11 486.54 170.86 500 176.18 500 183.43 486.54 178.11 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="70.78 486.54 63.53 500 68.85 500 76.1 486.54 70.78 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="222.84 486.54 215.59 500 220.91 500 228.15 486.54 222.84 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="258.61 486.54 251.37 500 256.68 500 263.93 486.54 258.61 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="267.56 486.54 260.31 500 265.63 500 272.88 486.54 267.56 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="249.67 486.54 242.42 500 247.74 500 254.99 486.54 249.67 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="276.5 486.54 269.25 500 274.57 500 281.82 486.54 276.5 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="240.73 486.54 233.48 500 238.8 500 246.04 486.54 240.73 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="231.78 486.54 224.53 500 229.85 500 237.1 486.54 231.78 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="106.56 486.54 99.31 500 104.63 500 111.88 486.54 106.56 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="213.89 486.54 206.64 500 211.96 500 219.21 486.54 213.89 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="142.34 486.54 135.09 500 140.41 500 147.65 486.54 142.34 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="115.5 486.54 108.25 500 113.57 500 120.82 486.54 115.5 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="303.34 486.54 296.09 500 301.41 500 308.66 486.54 303.34 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="285.45 486.54 278.2 500 283.52 500 290.77 486.54 285.45 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="294.39 486.54 287.14 500 292.46 500 299.71 486.54 294.39 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="160.22 486.54 152.98 500 158.29 500 165.54 486.54 160.22 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="446.45 486.54 439.2 500 444.52 500 451.77 486.54 446.45 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.67 486.54 403.42 500 408.74 500 415.99 486.54 410.67 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="26.06 486.54 18.81 500 24.13 500 31.37 486.54 26.06 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="437.51 486.54 430.26 500 435.58 500 442.82 486.54 437.51 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="419.62 486.54 412.37 500 417.69 500 424.93 486.54 419.62 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="455.39 486.54 448.15 500 453.46 500 460.71 486.54 455.39 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="428.56 486.54 421.31 500 426.63 500 433.88 486.54 428.56 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="35 486.54 27.75 500 33.07 500 40.32 486.54 35 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.28 486.54 466.03 500 471.35 500 478.6 486.54 473.28 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.17 486.54 483.92 500 489.24 500 496.49 486.54 491.17 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.23 486.54 474.98 500 480.3 500 487.55 486.54 482.23 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="17.11 486.54 9.86 500 15.18 500 22.43 486.54 17.11 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="464.34 486.54 457.09 500 462.41 500 469.66 486.54 464.34 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="8.17 486.54 .92 500 6.24 500 13.49 486.54 8.17 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="392.78 486.54 385.53 500 390.85 500 398.1 486.54 392.78 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="330.17 486.54 322.92 500 328.24 500 335.49 486.54 330.17 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="339.12 486.54 331.87 500 337.19 500 344.43 486.54 339.12 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="133.39 486.54 126.14 500 131.46 500 138.71 486.54 133.39 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="124.45 486.54 117.2 500 122.52 500 129.76 486.54 124.45 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="43.95 486.54 36.7 500 42.02 500 49.26 486.54 43.95 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 486.54 0 494.97 4.54 486.54 0 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="151.28 486.54 144.03 500 149.35 500 156.6 486.54 151.28 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="348.06 486.54 340.81 500 346.13 500 353.38 486.54 348.06 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="321.23 486.54 313.98 500 319.3 500 326.54 486.54 321.23 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="401.73 486.54 394.48 500 399.8 500 407.05 486.54 401.73 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="383.84 486.54 376.59 500 381.91 500 389.16 486.54 383.84 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="357 486.54 349.76 500 355.07 500 362.32 486.54 357 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="365.95 486.54 358.7 500 364.02 500 371.27 486.54 365.95 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="374.89 486.54 367.64 500 372.96 500 380.21 486.54 374.89 486.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="474.8 111.54 489.04 85.1 483.72 85.1 469.48 111.54 474.8 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.69 111.54 500 97.96 500 88.08 487.37 111.54 492.69 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 111.54 500 104.7 496.32 111.54 500 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="45.44 85.1 31.2 111.54 36.52 111.54 50.76 85.1 45.44 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="340.63 111.54 354.87 85.1 349.55 85.1 335.31 111.54 340.63 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.59 85.1 72.27 85.1 58.03 111.54 63.35 111.54 77.59 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="349.58 111.54 363.81 85.1 358.5 85.1 344.26 111.54 349.58 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="358.52 111.54 372.76 85.1 367.44 85.1 353.2 111.54 358.52 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="456.91 111.54 471.15 85.1 465.83 85.1 451.59 111.54 456.91 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="86.53 85.1 81.22 85.1 66.98 111.54 72.3 111.54 86.53 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="59.7 85.1 54.38 85.1 40.14 111.54 45.46 111.54 59.7 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="322.74 111.54 336.98 85.1 331.66 85.1 317.42 111.54 322.74 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="68.64 85.1 63.33 85.1 49.09 111.54 54.41 111.54 68.64 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="331.69 111.54 345.93 85.1 340.61 85.1 326.37 111.54 331.69 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="465.86 111.54 480.09 85.1 474.78 85.1 460.54 111.54 465.86 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="233.3 111.54 247.54 85.1 242.22 85.1 227.98 111.54 233.3 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="242.24 111.54 256.48 85.1 251.16 85.1 236.92 111.54 242.24 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="224.35 111.54 238.59 85.1 233.27 85.1 219.03 111.54 224.35 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="313.8 111.54 328.04 85.1 322.72 85.1 308.48 111.54 313.8 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="188.57 111.54 202.81 85.1 197.49 85.1 183.26 111.54 188.57 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="215.41 111.54 229.65 85.1 224.33 85.1 210.09 111.54 215.41 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="197.52 111.54 211.76 85.1 206.44 85.1 192.2 111.54 197.52 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="251.19 111.54 265.42 85.1 260.11 85.1 245.87 111.54 251.19 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="206.46 111.54 220.7 85.1 215.38 85.1 201.15 111.54 206.46 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="295.91 111.54 310.15 85.1 304.83 85.1 290.59 111.54 295.91 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="260.13 111.54 274.37 85.1 269.05 85.1 254.81 111.54 260.13 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="286.96 111.54 301.2 85.1 295.88 85.1 281.65 111.54 286.96 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="304.85 111.54 319.09 85.1 313.77 85.1 299.54 111.54 304.85 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.08 111.54 283.31 85.1 278 85.1 263.76 111.54 269.08 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.02 111.54 292.26 85.1 286.94 85.1 272.7 111.54 278.02 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="483.74 111.54 497.98 85.1 492.66 85.1 478.43 111.54 483.74 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="23.92 85.1 18.6 85.1 4.37 111.54 9.68 111.54 23.92 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="95.48 85.1 90.16 85.1 75.92 111.54 81.24 111.54 95.48 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="179.63 111.54 193.87 85.1 188.55 85.1 174.31 111.54 179.63 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="99.13 111.54 113.37 85.1 108.05 85.1 93.81 111.54 99.13 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="41.81 85.1 36.49 85.1 22.25 111.54 27.57 111.54 41.81 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="108.07 111.54 122.31 85.1 116.99 85.1 102.76 111.54 108.07 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.02 111.54 453.26 85.1 447.94 85.1 433.7 111.54 439.02 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="32.87 85.1 27.55 85.1 13.31 111.54 18.63 111.54 32.87 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="424.76 111.54 430.08 111.54 444.32 85.1 439 85.1 424.76 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="90.18 111.54 104.42 85.1 99.1 85.1 84.87 111.54 90.18 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.02 111.54 131.26 85.1 125.94 85.1 111.7 111.54 117.02 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="152.8 111.54 167.03 85.1 161.72 85.1 147.48 111.54 152.8 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="170.69 111.54 184.92 85.1 179.61 85.1 165.37 111.54 170.69 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="161.74 111.54 175.98 85.1 170.66 85.1 156.42 111.54 161.74 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="125.96 111.54 140.2 85.1 134.88 85.1 120.64 111.54 125.96 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="143.85 111.54 158.09 85.1 152.77 85.1 138.53 111.54 143.85 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="134.91 111.54 149.15 85.1 143.83 85.1 129.59 111.54 134.91 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="367.47 111.54 381.7 85.1 376.39 85.1 362.15 111.54 367.47 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.13 111.54 435.37 85.1 430.05 85.1 415.81 111.54 421.13 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points=".71 85.1 0 86.42 0 96.3 6.03 85.1 .71 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="447.97 111.54 462.2 85.1 456.89 85.1 442.65 111.54 447.97 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.24 111.54 417.48 85.1 412.16 85.1 397.93 111.54 403.24 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="385.35 111.54 399.59 85.1 394.27 85.1 380.04 111.54 385.35 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="376.41 111.54 390.65 85.1 385.33 85.1 371.09 111.54 376.41 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="14.98 85.1 9.66 85.1 0 103.03 0 111.54 .74 111.54 14.98 85.1"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.19 111.54 426.43 85.1 421.11 85.1 406.87 111.54 412.19 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.3 111.54 408.54 85.1 403.22 85.1 388.98 111.54 394.3 111.54"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="477.45 23.56 490.14 0 484.82 0 472.13 23.56 477.45 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.4 23.56 499.08 0 493.76 0 481.08 23.56 486.4 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="468.51 23.56 481.19 0 475.87 0 463.19 23.56 468.51 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.56 23.56 472.25 0 466.93 0 454.24 23.56 459.56 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146.5 23.56 159.19 0 153.87 0 141.19 23.56 146.5 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.78 23.56 275.47 0 270.15 0 257.46 23.56 262.78 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="495.34 23.56 500 14.91 500 5.03 490.02 23.56 495.34 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="48.11 23.56 60.8 0 55.48 0 42.8 23.56 48.11 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.56 23.56 150.24 0 144.93 0 132.24 23.56 137.56 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 23.56 500 21.64 498.97 23.56 500 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="1.81 0 0 3.37 0 13.24 7.13 0 1.81 0"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.73 23.56 284.41 0 279.09 0 266.41 23.56 271.73 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.84 23.56 266.52 0 261.2 0 248.52 23.56 253.84 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="39.17 23.56 51.85 0 46.54 0 33.85 23.56 39.17 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="21.28 23.56 33.97 0 28.65 0 15.96 23.56 21.28 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="209.12 23.56 221.8 0 216.48 0 203.8 23.56 209.12 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="12.34 23.56 25.02 0 19.7 0 7.02 23.56 12.34 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="173.34 23.56 186.02 0 180.7 0 168.02 23.56 173.34 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="182.28 23.56 194.97 0 189.65 0 176.96 23.56 182.28 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="200.17 23.56 212.86 0 207.54 0 194.85 23.56 200.17 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="16.08 0 10.76 0 0 19.98 0 23.56 3.39 23.56 16.08 0"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.89 23.56 257.58 0 252.26 0 239.58 23.56 244.89 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="155.45 23.56 168.13 0 162.81 0 150.13 23.56 155.45 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="227 23.56 239.69 0 234.37 0 221.69 23.56 227 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="218.06 23.56 230.75 0 225.43 0 212.74 23.56 218.06 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="235.95 23.56 248.63 0 243.32 0 230.63 23.56 235.95 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="30.22 23.56 42.91 0 37.59 0 24.91 23.56 30.22 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="164.39 23.56 177.08 0 171.76 0 159.07 23.56 164.39 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="128.61 23.56 141.3 0 135.98 0 123.3 23.56 128.61 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="352.23 23.56 364.91 0 359.59 0 346.91 23.56 352.23 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="66 23.56 78.69 0 73.37 0 60.68 23.56 66 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.95 23.56 87.63 0 82.31 0 69.63 23.56 74.95 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="361.17 23.56 373.86 0 368.54 0 355.85 23.56 361.17 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="343.28 23.56 355.97 0 350.65 0 337.97 23.56 343.28 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="396.95 23.56 409.64 0 404.32 0 391.63 23.56 396.95 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="191.23 23.56 203.91 0 198.59 0 185.91 23.56 191.23 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.73 23.56 123.41 0 118.09 0 105.41 23.56 110.73 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="370.12 23.56 382.8 0 377.48 0 364.8 23.56 370.12 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="379.06 23.56 391.75 0 386.43 0 373.74 23.56 379.06 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="405.9 23.56 418.58 0 413.26 0 400.58 23.56 405.9 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="388.01 23.56 400.69 0 395.37 0 382.69 23.56 388.01 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.62 23.56 302.3 0 296.98 0 284.3 23.56 289.62 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="119.67 23.56 132.36 0 127.04 0 114.35 23.56 119.67 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="334.34 23.56 347.02 0 341.71 0 329.02 23.56 334.34 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.56 23.56 311.25 0 305.93 0 293.24 23.56 298.56 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.78 23.56 114.47 0 109.15 0 96.46 23.56 101.78 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307.51 23.56 320.19 0 314.87 0 302.19 23.56 307.51 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="325.39 23.56 338.08 0 332.76 0 320.08 23.56 325.39 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="83.89 23.56 96.58 0 91.26 0 78.57 23.56 83.89 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="92.84 23.56 105.52 0 100.2 0 87.52 23.56 92.84 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="316.45 23.56 329.14 0 323.82 0 311.13 23.56 316.45 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="57.06 23.56 69.74 0 64.42 0 51.74 23.56 57.06 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.67 23.56 293.36 0 288.04 0 275.35 23.56 280.67 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="450.62 23.56 463.3 0 457.98 0 445.3 23.56 450.62 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="441.67 23.56 454.36 0 449.04 0 436.36 23.56 441.67 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="432.73 23.56 445.41 0 440.1 0 427.41 23.56 432.73 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="414.84 23.56 427.53 0 422.21 0 409.52 23.56 414.84 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.78 23.56 436.47 0 431.15 0 418.47 23.56 423.78 23.56"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.72 405.77 344.01 444.23 349.33 444.23 370.04 405.77 364.72 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.77 405.77 335.06 444.23 340.38 444.23 361.09 405.77 355.77 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.83 405.77 326.12 444.23 331.44 444.23 352.15 405.77 346.83 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="248.44 405.77 227.73 444.23 233.05 444.23 253.76 405.77 248.44 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="239.49 405.77 218.78 444.23 224.1 444.23 244.81 405.77 239.49 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="409.44 405.77 388.73 444.23 394.05 444.23 414.76 405.77 409.44 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="447.72 444.23 468.43 405.77 463.11 405.77 442.4 444.23 447.72 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.66 405.77 30.95 444.23 36.27 444.23 56.98 405.77 51.66 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="373.66 405.77 352.95 444.23 358.27 444.23 378.98 405.77 373.66 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="382.61 405.77 361.9 444.23 367.21 444.23 387.92 405.77 382.61 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="123.21 405.77 102.5 444.23 107.82 444.23 128.53 405.77 123.21 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="257.38 405.77 236.67 444.23 241.99 444.23 262.7 405.77 257.38 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="400.5 405.77 379.79 444.23 385.1 444.23 405.81 405.77 400.5 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.82 405.77 4.11 444.23 9.43 444.23 30.14 405.77 24.82 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="427.33 405.77 406.62 444.23 411.94 444.23 432.65 405.77 427.33 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="445.22 405.77 424.51 444.23 429.83 444.23 450.54 405.77 445.22 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="293.16 405.77 272.45 444.23 277.77 444.23 298.48 405.77 293.16 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.16 405.77 433.45 444.23 438.77 444.23 459.48 405.77 454.16 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="284.22 405.77 263.51 444.23 268.82 444.23 289.53 405.77 284.22 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="302.11 405.77 281.4 444.23 286.71 444.23 307.42 405.77 302.11 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="311.05 405.77 290.34 444.23 295.66 444.23 316.37 405.77 311.05 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="478.18 444.23 483.49 444.23 500 413.58 500 405.77 498.89 405.77 478.18 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.27 405.77 415.56 444.23 420.88 444.23 441.59 405.77 436.27 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 444.23 500 436.92 496.06 444.23 500 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.44 444.23 500 430.19 500 420.31 487.12 444.23 492.44 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="275.27 405.77 254.56 444.23 259.88 444.23 280.59 405.77 275.27 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="418.38 405.77 397.67 444.23 402.99 444.23 423.7 405.77 418.38 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.88 405.77 317.17 444.23 322.49 444.23 343.2 405.77 337.88 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.94 405.77 308.23 444.23 313.55 444.23 334.26 405.77 328.94 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="391.55 405.77 370.84 444.23 376.16 444.23 396.87 405.77 391.55 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.99 405.77 299.28 444.23 304.6 444.23 325.31 405.77 319.99 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="266.33 405.77 245.62 444.23 250.94 444.23 271.65 405.77 266.33 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="451.34 444.23 456.66 444.23 477.37 405.77 472.05 405.77 451.34 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212.66 405.77 191.95 444.23 197.27 444.23 217.98 405.77 212.66 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="150.05 405.77 129.34 444.23 134.66 444.23 155.37 405.77 150.05 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.99 405.77 138.28 444.23 143.6 444.23 164.31 405.77 158.99 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="21.2 405.77 15.88 405.77 0 435.26 0 444.23 .49 444.23 21.2 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="221.6 405.77 200.89 444.23 206.21 444.23 226.92 405.77 221.6 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.77 405.77 13.06 444.23 18.38 444.23 39.09 405.77 33.77 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="141.1 405.77 120.39 444.23 125.71 444.23 146.42 405.77 141.1 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="87.44 405.77 66.73 444.23 72.04 444.23 92.75 405.77 87.44 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="105.33 405.77 84.62 444.23 89.93 444.23 110.64 405.77 105.33 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.88 405.77 156.17 444.23 161.49 444.23 182.2 405.77 176.88 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.94 405.77 147.23 444.23 152.55 444.23 173.26 405.77 167.94 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.77 405.77 174.06 444.23 179.38 444.23 200.09 405.77 194.77 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="465.6 444.23 486.31 405.77 481 405.77 460.29 444.23 465.6 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="48.03 405.77 42.71 405.77 22 444.23 27.32 444.23 48.03 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="60.6 405.77 39.89 444.23 45.21 444.23 65.92 405.77 60.6 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="96.38 405.77 75.67 444.23 80.99 444.23 101.7 405.77 96.38 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.83 405.77 165.12 444.23 170.43 444.23 191.14 405.77 185.83 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="474.55 444.23 495.26 405.77 489.94 405.77 469.23 444.23 474.55 444.23"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 405.77 0 411.92 3.31 405.77 0 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="69.55 405.77 48.84 444.23 54.16 444.23 74.87 405.77 69.55 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="230.55 405.77 209.84 444.23 215.16 444.23 235.87 405.77 230.55 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="132.16 405.77 111.45 444.23 116.77 444.23 137.48 405.77 132.16 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.94 405.77 0 418.65 0 428.53 12.25 405.77 6.94 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="78.49 405.77 57.78 444.23 63.1 444.23 83.81 405.77 78.49 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.72 405.77 183.01 444.23 188.32 444.23 209.03 405.77 203.72 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="114.27 405.77 93.56 444.23 98.88 444.23 119.59 405.77 114.27 405.77"
                  id="st1"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="388.73 444.23 380.45 459.62 385.76 459.62 394.05 444.23 388.73 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="236.67 444.23 228.39 459.62 233.71 459.62 241.99 444.23 236.67 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="397.67 444.23 389.39 459.62 394.71 459.62 402.99 444.23 397.67 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.06 444.23 4.78 459.62 10.09 459.62 18.38 444.23 13.06 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="308.23 444.23 299.95 459.62 305.26 459.62 313.55 444.23 308.23 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.21 459.62 483.49 444.23 478.18 444.23 469.89 459.62 475.21 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="361.9 444.23 353.61 459.62 358.93 459.62 367.21 444.23 361.9 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.15 459.62 492.44 444.23 487.12 444.23 478.84 459.62 484.15 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="317.17 444.23 308.89 459.62 314.21 459.62 322.49 444.23 317.17 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="379.79 444.23 371.5 459.62 376.82 459.62 385.1 444.23 379.79 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="370.84 444.23 362.56 459.62 367.88 459.62 376.16 444.23 370.84 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="75.67 444.23 67.39 459.62 72.71 459.62 80.99 444.23 75.67 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="433.45 444.23 425.17 459.62 430.49 459.62 438.77 444.23 433.45 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="290.34 444.23 282.06 459.62 287.37 459.62 295.66 444.23 290.34 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="120.39 444.23 112.11 459.62 117.43 459.62 125.71 444.23 120.39 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="111.45 444.23 103.17 459.62 108.48 459.62 116.77 444.23 111.45 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="129.34 444.23 121.05 459.62 126.37 459.62 134.66 444.23 129.34 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="147.23 444.23 138.94 459.62 144.26 459.62 152.55 444.23 147.23 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="102.5 444.23 94.22 459.62 99.54 459.62 107.82 444.23 102.5 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="138.28 444.23 130 459.62 135.32 459.62 143.6 444.23 138.28 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="281.4 444.23 273.11 459.62 278.43 459.62 286.71 444.23 281.4 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="57.78 444.23 49.5 459.62 54.82 459.62 63.1 444.23 57.78 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="48.84 444.23 40.55 459.62 45.87 459.62 54.16 444.23 48.84 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="93.56 444.23 85.28 459.62 90.59 459.62 98.88 444.23 93.56 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="66.73 444.23 58.44 459.62 63.76 459.62 72.04 444.23 66.73 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="415.56 444.23 407.28 459.62 412.6 459.62 420.88 444.23 415.56 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="406.62 444.23 398.34 459.62 403.65 459.62 411.94 444.23 406.62 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="84.62 444.23 76.33 459.62 81.65 459.62 89.93 444.23 84.62 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="39.89 444.23 31.61 459.62 36.93 459.62 45.21 444.23 39.89 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="209.84 444.23 201.56 459.62 206.87 459.62 215.16 444.23 209.84 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="200.89 444.23 192.61 459.62 197.93 459.62 206.21 444.23 200.89 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="263.51 444.23 255.22 459.62 260.54 459.62 268.82 444.23 263.51 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="191.95 444.23 183.67 459.62 188.98 459.62 197.27 444.23 191.95 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="218.78 444.23 210.5 459.62 215.82 459.62 224.1 444.23 218.78 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="227.73 444.23 219.44 459.62 224.76 459.62 233.05 444.23 227.73 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="352.95 444.23 344.67 459.62 349.99 459.62 358.27 444.23 352.95 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="174.06 444.23 165.78 459.62 171.1 459.62 179.38 444.23 174.06 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="299.28 444.23 291 459.62 296.32 459.62 304.6 444.23 299.28 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="424.51 444.23 416.22 459.62 421.54 459.62 429.83 444.23 424.51 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="165.12 444.23 156.83 459.62 162.15 459.62 170.43 444.23 165.12 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="156.17 444.23 147.89 459.62 153.21 459.62 161.49 444.23 156.17 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="272.45 444.23 264.17 459.62 269.49 459.62 277.77 444.23 272.45 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="183.01 444.23 174.72 459.62 180.04 459.62 188.32 444.23 183.01 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="442.4 444.23 434.11 459.62 439.43 459.62 447.72 444.23 442.4 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="245.62 444.23 237.33 459.62 242.65 459.62 250.94 444.23 245.62 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="451.34 444.23 443.06 459.62 448.38 459.62 456.66 444.23 451.34 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="254.56 444.23 246.28 459.62 251.6 459.62 259.88 444.23 254.56 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="9.43 444.23 4.11 444.23 0 451.87 0 459.62 1.15 459.62 9.43 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.27 459.62 474.55 444.23 469.23 444.23 460.95 459.62 466.27 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 459.62 500 453.53 496.73 459.62 500 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="487.78 459.62 493.1 459.62 500 446.8 500 444.23 496.06 444.23 487.78 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="326.12 444.23 317.83 459.62 323.15 459.62 331.44 444.23 326.12 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="452 459.62 457.32 459.62 465.6 444.23 460.29 444.23 452 459.62"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22 444.23 13.72 459.62 19.04 459.62 27.32 444.23 22 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="335.06 444.23 326.78 459.62 332.1 459.62 340.38 444.23 335.06 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="344.01 444.23 335.72 459.62 341.04 459.62 349.33 444.23 344.01 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 444.23 0 445.14 .49 444.23 0 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="36.27 444.23 30.95 444.23 22.66 459.62 27.98 459.62 36.27 444.23"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="105.9 471.15 97.61 486.54 102.93 486.54 111.21 471.15 105.9 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="186.4 471.15 178.11 486.54 183.43 486.54 191.72 471.15 186.4 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.73 471.15 446.45 486.54 451.77 486.54 460.05 471.15 454.73 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="88.01 471.15 79.72 486.54 85.04 486.54 93.33 471.15 88.01 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="79.06 471.15 70.78 486.54 76.1 486.54 84.38 471.15 79.06 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="123.79 471.15 115.5 486.54 120.82 486.54 129.1 471.15 123.79 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="96.95 471.15 88.67 486.54 93.99 486.54 102.27 471.15 96.95 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="159.56 471.15 151.28 486.54 156.6 486.54 164.88 471.15 159.56 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="445.79 471.15 437.51 486.54 442.82 486.54 451.11 471.15 445.79 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="177.45 471.15 169.17 486.54 174.49 486.54 182.77 471.15 177.45 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="168.51 471.15 160.22 486.54 165.54 486.54 173.83 471.15 168.51 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="132.73 471.15 124.45 486.54 129.76 486.54 138.05 471.15 132.73 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="141.67 471.15 133.39 486.54 138.71 486.54 146.99 471.15 141.67 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="150.62 471.15 142.34 486.54 147.65 486.54 155.94 471.15 150.62 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="114.84 471.15 106.56 486.54 111.88 486.54 120.16 471.15 114.84 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="16.45 471.15 8.17 486.54 13.49 486.54 21.77 471.15 16.45 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="490.51 471.15 482.23 486.54 487.55 486.54 495.83 471.15 490.51 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="25.4 471.15 17.11 486.54 22.43 486.54 30.71 471.15 25.4 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 471.15 0 478.36 3.88 471.15 0 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="34.34 471.15 26.06 486.54 31.37 486.54 39.66 471.15 34.34 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="12.83 471.15 7.51 471.15 0 485.09 0 486.54 4.54 486.54 12.83 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.17 486.54 496.49 486.54 500 480.02 500 471.15 499.46 471.15 491.17 486.54"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="472.62 471.15 464.34 486.54 469.66 486.54 477.94 471.15 472.62 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="61.17 471.15 52.89 486.54 58.21 486.54 66.49 471.15 61.17 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="70.12 471.15 61.83 486.54 67.15 486.54 75.44 471.15 70.12 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="463.68 471.15 455.39 486.54 460.71 486.54 469 471.15 463.68 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="481.57 471.15 473.28 486.54 478.6 486.54 486.89 471.15 481.57 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="52.23 471.15 43.95 486.54 49.26 486.54 57.55 471.15 52.23 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="43.28 471.15 35 486.54 40.32 486.54 48.6 471.15 43.28 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="427.9 471.15 419.62 486.54 424.93 486.54 433.22 471.15 427.9 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="383.18 471.15 374.89 486.54 380.21 486.54 388.5 471.15 383.18 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.01 471.15 401.73 486.54 407.05 486.54 415.33 471.15 410.01 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="249.01 471.15 240.73 486.54 246.04 486.54 254.33 471.15 249.01 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="240.06 471.15 231.78 486.54 237.1 486.54 245.38 471.15 240.06 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="356.34 471.15 348.06 486.54 353.38 486.54 361.66 471.15 356.34 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="257.95 471.15 249.67 486.54 254.99 486.54 263.27 471.15 257.95 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.84 471.15 428.56 486.54 433.88 486.54 442.16 471.15 436.84 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="392.12 471.15 383.84 486.54 389.16 486.54 397.44 471.15 392.12 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="293.73 471.15 285.45 486.54 290.77 486.54 299.05 471.15 293.73 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="374.23 471.15 365.95 486.54 371.27 486.54 379.55 471.15 374.23 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="311.62 471.15 303.34 486.54 308.66 486.54 316.94 471.15 311.62 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="275.84 471.15 267.56 486.54 272.88 486.54 281.16 471.15 275.84 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="284.79 471.15 276.5 486.54 281.82 486.54 290.11 471.15 284.79 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="338.45 471.15 330.17 486.54 335.49 486.54 343.77 471.15 338.45 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="266.9 471.15 258.61 486.54 263.93 486.54 272.22 471.15 266.9 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="320.57 471.15 312.28 486.54 317.6 486.54 325.88 471.15 320.57 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="401.07 471.15 392.78 486.54 398.1 486.54 406.38 471.15 401.07 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="302.68 471.15 294.39 486.54 299.71 486.54 307.99 471.15 302.68 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="213.23 471.15 204.95 486.54 210.27 486.54 218.55 471.15 213.23 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="329.51 471.15 321.23 486.54 326.54 486.54 334.83 471.15 329.51 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="204.29 471.15 196 486.54 201.32 486.54 209.6 471.15 204.29 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="195.34 471.15 187.06 486.54 192.38 486.54 200.66 471.15 195.34 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="418.96 471.15 410.67 486.54 415.99 486.54 424.27 471.15 418.96 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="365.29 471.15 357 486.54 362.32 486.54 370.61 471.15 365.29 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="222.18 471.15 213.89 486.54 219.21 486.54 227.49 471.15 222.18 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="231.12 471.15 222.84 486.54 228.15 486.54 236.44 471.15 231.12 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="347.4 471.15 339.12 486.54 344.43 486.54 352.72 471.15 347.4 471.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="31.61 459.62 25.4 471.15 30.71 471.15 36.93 459.62 31.61 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="174.72 459.62 168.51 471.15 173.83 471.15 180.04 459.62 174.72 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="183.67 459.62 177.45 471.15 182.77 471.15 188.98 459.62 183.67 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 459.62 0 461.75 1.15 459.62 0 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="67.39 459.62 61.17 471.15 66.49 471.15 72.71 459.62 67.39 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.55 459.62 34.34 471.15 39.66 471.15 45.87 459.62 40.55 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.44 459.62 52.23 471.15 57.55 471.15 63.76 459.62 58.44 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="10.09 459.62 4.78 459.62 0 468.48 0 471.15 3.88 471.15 10.09 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.5 459.62 43.28 471.15 48.6 471.15 54.82 459.62 49.5 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="425.17 459.62 418.96 471.15 424.27 471.15 430.49 459.62 425.17 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="344.67 459.62 338.45 471.15 343.77 471.15 349.99 459.62 344.67 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="380.45 459.62 374.23 471.15 379.55 471.15 385.76 459.62 380.45 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="371.5 459.62 365.29 471.15 370.61 471.15 376.82 459.62 371.5 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="389.39 459.62 383.18 471.15 388.5 471.15 394.71 459.62 389.39 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="362.56 459.62 356.34 471.15 361.66 471.15 367.88 459.62 362.56 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="94.22 459.62 88.01 471.15 93.33 471.15 99.54 459.62 94.22 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="112.11 459.62 105.9 471.15 111.21 471.15 117.43 459.62 112.11 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="398.34 459.62 392.12 471.15 397.44 471.15 403.65 459.62 398.34 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="103.17 459.62 96.95 471.15 102.27 471.15 108.48 459.62 103.17 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="121.05 459.62 114.84 471.15 120.16 471.15 126.37 459.62 121.05 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="407.28 459.62 401.07 471.15 406.38 471.15 412.6 459.62 407.28 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="335.72 459.62 329.51 471.15 334.83 471.15 341.04 459.62 335.72 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="147.89 459.62 141.67 471.15 146.99 471.15 153.21 459.62 147.89 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="156.83 459.62 150.62 471.15 155.94 471.15 162.15 459.62 156.83 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.33 459.62 70.12 471.15 75.44 471.15 81.65 459.62 76.33 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="326.78 459.62 320.57 471.15 325.88 471.15 332.1 459.62 326.78 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="138.94 459.62 132.73 471.15 138.05 471.15 144.26 459.62 138.94 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="130 459.62 123.79 471.15 129.1 471.15 135.32 459.62 130 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="165.78 459.62 159.56 471.15 164.88 471.15 171.1 459.62 165.78 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="353.61 459.62 347.4 471.15 352.72 471.15 358.93 459.62 353.61 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="85.28 459.62 79.06 471.15 84.38 471.15 90.59 459.62 85.28 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.66 459.62 16.45 471.15 21.77 471.15 27.98 459.62 22.66 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="228.39 459.62 222.18 471.15 227.49 471.15 233.71 459.62 228.39 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="255.22 459.62 249.01 471.15 254.33 471.15 260.54 459.62 255.22 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="452 459.62 445.79 471.15 451.11 471.15 457.32 459.62 452 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="478.84 459.62 472.62 471.15 477.94 471.15 484.15 459.62 478.84 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="210.5 459.62 204.29 471.15 209.6 471.15 215.82 459.62 210.5 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.72 459.62 7.51 471.15 12.83 471.15 19.04 459.62 13.72 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="317.83 459.62 311.62 471.15 316.94 471.15 323.15 459.62 317.83 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="219.44 459.62 213.23 471.15 218.55 471.15 224.76 459.62 219.44 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="246.28 459.62 240.06 471.15 245.38 471.15 251.6 459.62 246.28 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.89 471.15 493.1 459.62 487.78 459.62 481.57 471.15 486.89 471.15"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="237.33 459.62 231.12 471.15 236.44 471.15 242.65 459.62 237.33 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="282.06 459.62 275.84 471.15 281.16 471.15 287.37 459.62 282.06 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="469.89 459.62 463.68 471.15 469 471.15 475.21 459.62 469.89 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="434.11 459.62 427.9 471.15 433.22 471.15 439.43 459.62 434.11 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="460.95 459.62 454.73 471.15 460.05 471.15 466.27 459.62 460.95 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="308.89 459.62 302.68 471.15 307.99 471.15 314.21 459.62 308.89 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="264.17 459.62 257.95 471.15 263.27 471.15 269.49 459.62 264.17 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="299.95 459.62 293.73 471.15 299.05 471.15 305.26 459.62 299.95 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="291 459.62 284.79 471.15 290.11 471.15 296.32 459.62 291 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="273.11 459.62 266.9 471.15 272.22 471.15 278.43 459.62 273.11 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="443.06 459.62 436.84 471.15 442.16 471.15 448.38 459.62 443.06 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="490.51 471.15 495.83 471.15 500 463.41 500 459.62 496.73 459.62 490.51 471.15"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="416.22 459.62 410.01 471.15 415.33 471.15 421.54 459.62 416.22 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 471.15 500 470.14 499.46 471.15 500 471.15"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="201.56 459.62 195.34 471.15 200.66 471.15 206.87 459.62 201.56 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="192.61 459.62 186.4 471.15 191.72 471.15 197.93 459.62 192.61 459.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="92.88 246.15 83.56 263.46 88.88 263.46 98.2 246.15 92.88 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.83 246.15 92.51 263.46 97.83 263.46 107.15 246.15 101.83 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="35.59 246.15 30.27 246.15 20.95 263.46 26.27 263.46 35.59 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="21.33 246.15 12.01 263.46 17.32 263.46 26.64 246.15 21.33 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="432.4 263.46 437.72 263.46 447.04 246.15 441.72 246.15 432.4 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="48.16 246.15 38.84 263.46 44.16 263.46 53.48 246.15 48.16 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="378.73 263.46 384.05 263.46 393.37 246.15 388.05 246.15 378.73 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="450.29 263.46 455.61 263.46 464.93 246.15 459.61 246.15 450.29 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="366.16 263.46 375.48 246.15 370.16 246.15 360.84 263.46 366.16 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="414.51 263.46 419.83 263.46 429.15 246.15 423.83 246.15 414.51 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.07 263.46 491.39 263.46 500 247.46 500 246.15 495.39 246.15 486.07 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 263.46 500 254.2 495.01 263.46 500 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="387.68 263.46 393 263.46 402.32 246.15 397 246.15 387.68 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="44.53 246.15 39.22 246.15 29.9 263.46 35.21 263.46 44.53 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.5 263.46 482.82 246.15 477.5 246.15 468.18 263.46 473.5 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="334.39 246.15 325.07 263.46 330.38 263.46 339.7 246.15 334.39 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.77 246.15 262.45 263.46 267.77 263.46 277.09 246.15 271.77 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="164.44 246.15 155.12 263.46 160.44 263.46 169.76 246.15 164.44 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="187.65 246.15 182.33 246.15 173.01 263.46 178.33 263.46 187.65 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="160.81 246.15 155.49 246.15 146.17 263.46 151.49 263.46 160.81 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="325.44 246.15 316.12 263.46 321.44 263.46 330.76 246.15 325.44 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="173.38 246.15 164.06 263.46 169.38 263.46 178.7 246.15 173.38 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.95 263.46 348.27 263.46 357.59 246.15 352.27 246.15 342.95 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="343.33 246.15 334.01 263.46 339.33 263.46 348.65 246.15 343.33 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.44 263.46 491.76 246.15 486.44 246.15 477.12 263.46 482.44 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.66 246.15 280.34 263.46 285.66 263.46 294.98 246.15 289.66 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.23 263.46 464.55 263.46 473.87 246.15 468.55 246.15 459.23 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="3.44 246.15 0 252.54 0 262.41 8.76 246.15 3.44 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.9 263.46 357.22 263.46 366.54 246.15 361.22 246.15 351.9 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.72 246.15 271.4 263.46 276.72 263.46 286.04 246.15 280.72 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146.55 246.15 137.23 263.46 142.55 263.46 151.87 246.15 146.55 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="316.5 246.15 307.18 263.46 312.49 263.46 321.81 246.15 316.5 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307.55 246.15 298.23 263.46 303.55 263.46 312.87 246.15 307.55 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.61 246.15 289.29 263.46 294.61 263.46 303.93 246.15 298.61 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.88 246.15 244.56 263.46 249.88 263.46 259.2 246.15 253.88 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.94 246.15 235.62 263.46 240.94 263.46 250.26 246.15 244.94 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="218.11 246.15 208.79 263.46 214.1 263.46 223.42 246.15 218.11 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.88 263.46 420.2 246.15 414.89 246.15 405.57 263.46 410.88 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="227.05 246.15 217.73 263.46 223.05 263.46 232.37 246.15 227.05 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="57.1 246.15 47.78 263.46 53.1 263.46 62.42 246.15 57.1 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.46 263.46 428.77 263.46 438.09 246.15 432.78 246.15 423.46 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="236 246.15 226.68 263.46 231.99 263.46 241.31 246.15 236 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.83 246.15 253.51 263.46 258.83 263.46 268.15 246.15 262.83 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="66.05 246.15 56.73 263.46 62.05 263.46 71.37 246.15 66.05 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.77 246.15 101.45 263.46 106.77 263.46 116.09 246.15 110.77 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="128.66 246.15 119.34 263.46 124.66 263.46 133.98 246.15 128.66 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="125.03 246.15 119.72 246.15 110.4 263.46 115.71 263.46 125.03 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.99 246.15 65.67 263.46 70.99 263.46 80.31 246.15 74.99 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="89.26 246.15 83.94 246.15 74.62 263.46 79.94 263.46 89.26 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.61 246.15 128.29 263.46 133.6 263.46 142.92 246.15 137.61 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="12.38 246.15 3.06 263.46 8.38 263.46 17.7 246.15 12.38 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="396.62 263.46 401.94 263.46 411.26 246.15 405.94 246.15 396.62 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="209.16 246.15 199.84 263.46 205.16 263.46 214.48 246.15 209.16 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="369.79 263.46 375.11 263.46 384.43 246.15 379.11 246.15 369.79 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="441.34 263.46 446.66 263.46 455.98 246.15 450.66 246.15 441.34 263.46"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="191.27 246.15 181.95 263.46 187.27 263.46 196.59 246.15 191.27 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="200.22 246.15 190.9 263.46 196.22 263.46 205.54 246.15 200.22 246.15"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="306.43 298.08 297.11 315.38 302.43 315.38 311.74 298.08 306.43 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="270.65 298.08 261.33 315.38 266.65 315.38 275.97 298.08 270.65 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.93 298.08 377.61 315.38 382.93 315.38 392.25 298.08 386.93 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="315.37 298.08 306.05 315.38 311.37 315.38 320.69 298.08 315.37 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.15 298.08 341.83 315.38 347.15 315.38 356.47 298.08 351.15 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="369.04 298.08 359.72 315.38 365.04 315.38 374.36 298.08 369.04 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="360.09 298.08 350.77 315.38 356.09 315.38 365.41 298.08 360.09 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="297.48 298.08 288.16 315.38 293.48 315.38 302.8 298.08 297.48 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="324.32 298.08 315 315.38 320.31 315.38 329.63 298.08 324.32 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="91.76 298.08 82.44 315.38 87.76 315.38 97.08 298.08 91.76 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="82.81 298.08 73.49 315.38 78.81 315.38 88.13 298.08 82.81 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="64.92 298.08 55.6 315.38 60.92 315.38 70.24 298.08 64.92 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="163.31 298.08 153.99 315.38 159.31 315.38 168.63 298.08 163.31 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="463.43 315.38 472.75 298.08 467.43 298.08 458.11 315.38 463.43 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="261.7 298.08 252.38 315.38 257.7 315.38 267.02 298.08 261.7 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.5 315.38 400.82 315.38 410.13 298.08 404.82 298.08 395.5 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="467.05 315.38 472.37 315.38 481.69 298.08 476.37 298.08 467.05 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="20.2 298.08 10.88 315.38 16.2 315.38 25.52 298.08 20.2 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="154.37 298.08 145.05 315.38 150.37 315.38 159.69 298.08 154.37 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="11.26 298.08 1.94 315.38 7.26 315.38 16.57 298.08 11.26 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="79.19 298.08 73.87 298.08 64.55 315.38 69.87 315.38 79.19 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="208.04 298.08 198.72 315.38 204.04 315.38 213.35 298.08 208.04 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.98 298.08 207.66 315.38 212.98 315.38 222.3 298.08 216.98 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="199.09 298.08 189.77 315.38 195.09 315.38 204.41 298.08 199.09 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="279.59 298.08 270.27 315.38 275.59 315.38 284.91 298.08 279.59 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="288.54 298.08 279.22 315.38 284.54 315.38 293.86 298.08 288.54 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="172.26 298.08 162.94 315.38 168.26 315.38 177.58 298.08 172.26 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="225.93 298.08 216.61 315.38 221.92 315.38 231.24 298.08 225.93 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="234.87 298.08 225.55 315.38 230.87 315.38 240.19 298.08 234.87 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="190.15 298.08 180.83 315.38 186.15 315.38 195.47 298.08 190.15 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="118.59 298.08 109.27 315.38 114.59 315.38 123.91 298.08 118.59 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="43.41 298.08 38.09 298.08 28.77 315.38 34.09 315.38 43.41 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="476 315.38 481.32 315.38 490.64 298.08 485.32 298.08 476 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="100.7 298.08 91.38 315.38 96.7 315.38 106.02 298.08 100.7 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.98 298.08 368.66 315.38 373.98 315.38 383.3 298.08 377.98 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="29.15 298.08 19.83 315.38 25.14 315.38 34.46 298.08 29.15 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.55 315.38 391.87 315.38 401.19 298.08 395.87 298.08 386.55 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="181.2 298.08 171.88 315.38 177.2 315.38 186.52 298.08 181.2 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="243.81 298.08 234.5 315.38 239.81 315.38 249.13 298.08 243.81 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="333.26 298.08 323.94 315.38 329.26 315.38 338.58 298.08 333.26 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="490.26 315.38 499.58 298.08 494.26 298.08 484.94 315.38 490.26 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="404.44 315.38 409.76 315.38 419.08 298.08 413.76 298.08 404.44 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.2 298.08 332.89 315.38 338.2 315.38 347.52 298.08 342.2 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="114.96 298.08 109.65 298.08 100.33 315.38 105.65 315.38 114.96 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="427.65 315.38 436.97 298.08 431.65 298.08 422.33 315.38 427.65 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="413.39 315.38 418.7 315.38 428.02 298.08 422.71 298.08 413.39 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.59 315.38 445.91 298.08 440.59 298.08 431.28 315.38 436.59 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="499.21 315.38 500 313.91 500 304.03 493.89 315.38 499.21 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="145.42 298.08 136.11 315.38 141.42 315.38 150.74 298.08 145.42 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="252.76 298.08 243.44 315.38 248.76 315.38 258.08 298.08 252.76 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="2.31 298.08 0 302.37 0 312.25 7.63 298.08 2.31 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="127.54 298.08 118.22 315.38 123.53 315.38 132.85 298.08 127.54 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.48 315.38 463.8 298.08 458.48 298.08 449.16 315.38 454.48 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="55.98 298.08 46.66 315.38 51.98 315.38 61.3 298.08 55.98 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="47.03 298.08 37.72 315.38 43.03 315.38 52.35 298.08 47.03 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="440.22 315.38 445.54 315.38 454.86 298.08 449.54 298.08 440.22 315.38"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="141.8 298.08 136.48 298.08 127.16 315.38 132.48 315.38 141.8 298.08"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="267.92 286.54 261.7 298.08 267.02 298.08 273.24 286.54 267.92 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="339.47 286.54 333.26 298.08 338.58 298.08 344.79 286.54 339.47 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="357.36 286.54 351.15 298.08 356.47 298.08 362.68 286.54 357.36 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="294.75 286.54 288.54 298.08 293.86 298.08 300.07 286.54 294.75 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="312.64 286.54 306.43 298.08 311.74 298.08 317.96 286.54 312.64 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="384.2 286.54 377.98 298.08 383.3 298.08 389.51 286.54 384.2 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="97.97 286.54 91.76 298.08 97.08 298.08 103.29 286.54 97.97 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="115.86 286.54 109.65 298.08 114.96 298.08 121.18 286.54 115.86 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="205.3 286.54 199.09 298.08 204.41 298.08 210.62 286.54 205.3 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="214.25 286.54 208.04 298.08 213.35 298.08 219.57 286.54 214.25 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="490.64 298.08 496.85 286.54 491.53 286.54 485.32 298.08 490.64 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.46 286.54 71.14 286.54 64.92 298.08 70.24 298.08 76.46 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="26.41 286.54 20.2 298.08 25.52 298.08 31.73 286.54 26.41 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="419.08 298.08 425.29 286.54 419.97 286.54 413.76 298.08 419.08 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="241.08 286.54 234.87 298.08 240.19 298.08 246.4 286.54 241.08 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="232.14 286.54 225.93 298.08 231.24 298.08 237.46 286.54 232.14 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.97 298.08 443.18 286.54 437.86 286.54 431.65 298.08 436.97 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="250.03 286.54 243.81 298.08 249.13 298.08 255.35 286.54 250.03 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="276.86 286.54 270.65 298.08 275.97 298.08 282.18 286.54 276.86 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.86 298.08 461.07 286.54 455.75 286.54 449.54 298.08 454.86 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="445.91 298.08 452.13 286.54 446.81 286.54 440.59 298.08 445.91 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="223.19 286.54 216.98 298.08 222.3 298.08 228.51 286.54 223.19 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="401.19 298.08 407.4 286.54 402.08 286.54 395.87 298.08 401.19 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="375.25 286.54 369.04 298.08 374.36 298.08 380.57 286.54 375.25 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="44.3 286.54 38.09 298.08 43.41 298.08 49.62 286.54 44.3 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="366.31 286.54 360.09 298.08 365.41 298.08 371.63 286.54 366.31 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="35.36 286.54 29.15 298.08 34.46 298.08 40.68 286.54 35.36 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="112.23 286.54 106.91 286.54 100.7 298.08 106.02 298.08 112.23 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="258.97 286.54 252.76 298.08 258.08 298.08 264.29 286.54 258.97 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="67.51 286.54 62.19 286.54 55.98 298.08 61.3 298.08 67.51 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="178.47 286.54 172.26 298.08 177.58 298.08 183.79 286.54 178.47 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="53.25 286.54 47.03 298.08 52.35 298.08 58.57 286.54 53.25 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="139.07 286.54 133.75 286.54 127.54 298.08 132.85 298.08 139.07 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="8.52 286.54 2.31 298.08 7.63 298.08 13.84 286.54 8.52 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="428.02 298.08 434.24 286.54 428.92 286.54 422.71 298.08 428.02 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="151.64 286.54 145.42 298.08 150.74 298.08 156.96 286.54 151.64 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="481.69 298.08 487.9 286.54 482.59 286.54 476.37 298.08 481.69 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.13 298.08 416.35 286.54 411.03 286.54 404.82 298.08 410.13 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="330.53 286.54 324.32 298.08 329.63 298.08 335.85 286.54 330.53 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="169.53 286.54 163.31 298.08 168.63 298.08 174.85 286.54 169.53 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="160.58 286.54 154.37 298.08 159.69 298.08 165.9 286.54 160.58 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 286.54 0 295.64 4.9 286.54 0 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="80.08 286.54 73.87 298.08 79.19 298.08 85.4 286.54 80.08 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="463.8 298.08 470.02 286.54 464.7 286.54 458.48 298.08 463.8 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="285.81 286.54 279.59 298.08 284.91 298.08 291.12 286.54 285.81 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="499.58 298.08 500 297.3 500 287.42 494.26 298.08 499.58 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="142.69 286.54 136.48 298.08 141.8 298.08 148.01 286.54 142.69 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="348.42 286.54 342.2 298.08 347.52 298.08 353.74 286.54 348.42 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="303.69 286.54 297.48 298.08 302.8 298.08 309.01 286.54 303.69 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="187.42 286.54 181.2 298.08 186.52 298.08 192.73 286.54 187.42 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="89.03 286.54 82.81 298.08 88.13 298.08 94.34 286.54 89.03 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="196.36 286.54 190.15 298.08 195.47 298.08 201.68 286.54 196.36 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="321.58 286.54 315.37 298.08 320.69 298.08 326.9 286.54 321.58 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="124.8 286.54 118.59 298.08 123.91 298.08 130.12 286.54 124.8 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.79 286.54 17.47 286.54 11.26 298.08 16.57 298.08 22.79 286.54"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="467.43 298.08 472.75 298.08 478.96 286.54 473.64 286.54 467.43 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="392.25 298.08 398.46 286.54 393.14 286.54 386.93 298.08 392.25 298.08"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.95 263.46 336.74 275 342.06 275 348.27 263.46 342.95 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.9 263.46 345.69 275 351 275 357.22 263.46 351.9 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="47.78 263.46 41.57 275 46.89 275 53.1 263.46 47.78 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="208.79 263.46 202.57 275 207.89 275 214.1 263.46 208.79 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="217.73 263.46 211.52 275 216.84 275 223.05 263.46 217.73 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="360.84 263.46 354.63 275 359.95 275 366.16 263.46 360.84 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="199.84 263.46 193.63 275 198.95 275 205.16 263.46 199.84 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.56 263.46 238.35 275 243.67 275 249.88 263.46 244.56 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.89 275 375.11 263.46 369.79 263.46 363.58 275 368.89 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="449.39 275 455.61 263.46 450.29 263.46 444.08 275 449.39 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.34 263.46 274.13 275 279.45 275 285.66 263.46 280.34 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.45 263.46 256.24 275 261.56 275 267.77 263.46 262.45 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.78 275 393 263.46 387.68 263.46 381.46 275 386.78 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.29 263.46 283.07 275 288.39 275 294.61 263.46 289.29 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 275 500 270.81 497.74 275 500 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.51 263.46 247.3 275 252.61 275 258.83 263.46 253.51 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="325.07 263.46 318.85 275 324.17 275 330.38 263.46 325.07 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="226.68 263.46 220.46 275 225.78 275 231.99 263.46 226.68 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="235.62 263.46 229.41 275 234.73 275 240.94 263.46 235.62 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="334.01 263.46 327.8 275 333.12 275 339.33 263.46 334.01 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.23 263.46 292.02 275 297.34 275 303.55 263.46 298.23 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="316.12 263.46 309.91 275 315.23 275 321.44 263.46 316.12 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307.18 263.46 300.96 275 306.28 275 312.49 263.46 307.18 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.4 263.46 265.19 275 270.5 275 276.72 263.46 271.4 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="458.34 275 464.55 263.46 459.23 263.46 453.02 275 458.34 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="88.88 263.46 83.56 263.46 77.35 275 82.67 275 88.88 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="97.83 263.46 92.51 263.46 86.29 275 91.61 275 97.83 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="12.01 263.46 5.79 275 11.11 275 17.32 263.46 12.01 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="133.6 263.46 128.29 263.46 122.07 275 127.39 275 133.6 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.23 263.46 131.02 275 136.34 275 142.55 263.46 137.23 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.62 263.46 68.41 275 73.72 275 79.94 263.46 74.62 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="20.95 263.46 14.74 275 20.06 275 26.27 263.46 20.95 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="119.34 263.46 113.13 275 118.45 275 124.66 263.46 119.34 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="160.44 263.46 155.12 263.46 148.91 275 154.22 275 160.44 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="467.28 275 473.5 263.46 468.18 263.46 461.97 275 467.28 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="44.16 263.46 38.84 263.46 32.63 275 37.95 275 44.16 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="476.23 275 482.44 263.46 477.12 263.46 470.91 275 476.23 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="56.73 263.46 50.52 275 55.83 275 62.05 263.46 56.73 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.4 263.46 104.18 275 109.5 275 115.71 263.46 110.4 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146.17 263.46 139.96 275 145.28 275 151.49 263.46 146.17 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="164.06 263.46 157.85 275 163.17 275 169.38 263.46 164.06 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.45 263.46 95.24 275 100.56 275 106.77 263.46 101.45 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.84 275 384.05 263.46 378.73 263.46 372.52 275 377.84 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="440.45 275 446.66 263.46 441.34 263.46 435.13 275 440.45 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="181.95 263.46 175.74 275 181.06 275 187.27 263.46 181.95 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="413.62 275 419.83 263.46 414.51 263.46 408.3 275 413.62 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="488.8 275 494.12 275 500 264.07 500 263.46 495.01 263.46 488.8 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="431.51 275 437.72 263.46 432.4 263.46 426.19 275 431.51 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="173.01 263.46 166.8 275 172.11 275 178.33 263.46 173.01 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="29.9 263.46 23.68 275 29 275 35.21 263.46 29.9 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="485.17 275 491.39 263.46 486.07 263.46 479.85 275 485.17 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="404.67 275 410.88 263.46 405.57 263.46 399.35 275 404.67 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="422.56 275 428.77 263.46 423.46 263.46 417.24 275 422.56 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="8.38 263.46 3.06 263.46 0 269.15 0 275 2.17 275 8.38 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="190.9 263.46 184.68 275 190 275 196.22 263.46 190.9 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.73 275 401.94 263.46 396.62 263.46 390.41 275 395.73 275"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="65.67 263.46 59.46 275 64.78 275 70.99 263.46 65.67 263.46"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="411.67 119.23 416.99 119.23 421.13 111.54 415.81 111.54 411.67 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.31 111.54 9.17 119.23 14.49 119.23 18.63 111.54 13.31 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.14 111.54 36 119.23 41.32 119.23 45.46 111.54 40.14 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="447.45 119.23 452.77 119.23 456.91 111.54 451.59 111.54 447.45 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="336.49 119.23 340.63 111.54 335.31 111.54 331.17 119.23 336.49 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="157.6 119.23 161.74 111.54 156.42 111.54 152.28 119.23 157.6 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="148.65 119.23 152.8 111.54 147.48 111.54 143.34 119.23 148.65 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="139.71 119.23 143.85 111.54 138.53 111.54 134.39 119.23 139.71 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 111.54 0 112.91 .74 111.54 0 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="363.32 119.23 367.47 111.54 362.15 111.54 358.01 119.23 363.32 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="425.94 119.23 430.08 111.54 424.76 111.54 420.62 119.23 425.94 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="354.38 119.23 358.52 111.54 353.2 111.54 349.06 119.23 354.38 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="166.54 119.23 170.69 111.54 165.37 111.54 161.23 119.23 166.54 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="345.43 119.23 349.58 111.54 344.26 111.54 340.12 119.23 345.43 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="372.27 119.23 376.41 111.54 371.09 111.54 366.95 119.23 372.27 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="390.16 119.23 394.3 111.54 388.98 111.54 384.84 119.23 390.16 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="399.1 119.23 403.24 111.54 397.93 111.54 393.78 119.23 399.1 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.02 111.54 111.7 111.54 107.56 119.23 112.88 119.23 117.02 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="408.05 119.23 412.19 111.54 406.87 111.54 402.73 119.23 408.05 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="381.21 119.23 385.35 111.54 380.04 111.54 375.89 119.23 381.21 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="121.82 119.23 125.96 111.54 120.64 111.54 116.5 119.23 121.82 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="130.77 119.23 134.91 111.54 129.59 111.54 125.45 119.23 130.77 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="211.27 119.23 215.41 111.54 210.09 111.54 205.95 119.23 211.27 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.25 111.54 18.11 119.23 23.43 119.23 27.57 111.54 22.25 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="193.38 119.23 197.52 111.54 192.2 111.54 188.06 119.23 193.38 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="202.32 119.23 206.46 111.54 201.15 111.54 197 119.23 202.32 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="184.43 119.23 188.57 111.54 183.26 111.54 179.11 119.23 184.43 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.17 119.23 497.49 119.23 500 114.57 500 111.54 496.32 111.54 492.17 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="318.6 119.23 322.74 111.54 317.42 111.54 313.28 119.23 318.6 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="327.55 119.23 331.69 111.54 326.37 111.54 322.23 119.23 327.55 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="93.81 111.54 89.67 119.23 94.99 119.23 99.13 111.54 93.81 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="465.34 119.23 470.66 119.23 474.8 111.54 469.48 111.54 465.34 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="175.49 119.23 179.63 111.54 174.31 111.54 170.17 119.23 175.49 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="102.76 111.54 98.61 119.23 103.93 119.23 108.07 111.54 102.76 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="220.21 119.23 224.35 111.54 219.03 111.54 214.89 119.23 220.21 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="229.16 119.23 233.3 111.54 227.98 111.54 223.84 119.23 229.16 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.09 111.54 44.95 119.23 50.26 119.23 54.41 111.54 49.09 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="438.51 119.23 443.82 119.23 447.97 111.54 442.65 111.54 438.51 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="291.77 119.23 295.91 111.54 290.59 111.54 286.45 119.23 291.77 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="75.92 111.54 71.78 119.23 77.1 119.23 81.24 111.54 75.92 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="300.71 119.23 304.85 111.54 299.54 111.54 295.39 119.23 300.71 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="4.37 111.54 .22 119.23 5.54 119.23 9.68 111.54 4.37 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="282.82 119.23 286.96 111.54 281.65 111.54 277.5 119.23 282.82 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="255.99 119.23 260.13 111.54 254.81 111.54 250.67 119.23 255.99 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="309.66 119.23 313.8 111.54 308.48 111.54 304.34 119.23 309.66 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="273.88 119.23 278.02 111.54 272.7 111.54 268.56 119.23 273.88 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="31.2 111.54 27.06 119.23 32.38 119.23 36.52 111.54 31.2 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="429.56 119.23 434.88 119.23 439.02 111.54 433.7 111.54 429.56 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="66.98 111.54 62.84 119.23 68.15 119.23 72.3 111.54 66.98 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.1 119.23 242.24 111.54 236.92 111.54 232.78 119.23 238.1 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="264.93 119.23 269.08 111.54 263.76 111.54 259.62 119.23 264.93 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="488.55 119.23 492.69 111.54 487.37 111.54 483.23 119.23 488.55 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="456.4 119.23 461.71 119.23 465.86 111.54 460.54 111.54 456.4 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.04 119.23 251.19 111.54 245.87 111.54 241.73 119.23 247.04 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="474.28 119.23 479.6 119.23 483.74 111.54 478.43 111.54 474.28 119.23"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="84.87 111.54 80.72 119.23 86.04 119.23 90.18 111.54 84.87 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.03 111.54 53.89 119.23 59.21 119.23 63.35 111.54 58.03 111.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.22 134.62 435.54 134.62 439.68 126.92 434.36 126.92 430.22 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.83 134.62 498.15 134.62 500 131.18 500 126.92 496.98 126.92 492.83 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.51 126.92 139.19 126.92 135.05 134.62 140.37 134.62 144.51 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.28 134.62 426.6 134.62 430.74 126.92 425.42 126.92 421.28 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.06 134.62 462.37 134.62 466.52 126.92 461.2 126.92 457.06 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.57 126.92 130.25 126.92 126.11 134.62 131.43 134.62 135.57 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.17 134.62 444.49 134.62 448.63 126.92 443.31 126.92 439.17 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="121.31 126.92 117.16 134.62 122.48 134.62 126.62 126.92 121.31 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="67.64 126.92 63.5 134.62 68.81 134.62 72.96 126.92 67.64 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 126.92 0 129.52 1.4 126.92 0 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="471.32 134.62 475.46 126.92 470.14 126.92 466 134.62 471.32 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="31.86 126.92 27.72 134.62 33.04 134.62 37.18 126.92 31.86 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="408.71 134.62 412.85 126.92 407.53 126.92 403.39 134.62 408.71 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.33 134.62 417.65 134.62 421.79 126.92 416.48 126.92 412.33 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="99.79 126.92 94.47 126.92 90.33 134.62 95.65 134.62 99.79 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.92 126.92 18.77 134.62 24.09 134.62 28.23 126.92 22.92 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="85.53 126.92 81.39 134.62 86.7 134.62 90.85 126.92 85.53 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.58 126.92 72.44 134.62 77.76 134.62 81.9 126.92 76.58 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.8 126.92 36.66 134.62 41.98 134.62 46.12 126.92 40.8 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.69 126.92 54.55 134.62 59.87 134.62 64.01 126.92 58.69 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.32 134.62 314.46 126.92 309.14 126.92 305 134.62 310.32 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.15 134.62 180.29 126.92 174.97 126.92 170.83 134.62 176.15 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.04 134.62 198.18 126.92 192.86 126.92 188.72 134.62 194.04 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.09 134.62 189.24 126.92 183.92 126.92 179.78 134.62 185.09 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="112.36 126.92 108.22 134.62 113.54 134.62 117.68 126.92 112.36 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="202.98 134.62 207.12 126.92 201.81 126.92 197.66 134.62 202.98 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.26 134.62 323.4 126.92 318.09 126.92 313.94 134.62 319.26 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.15 134.62 341.29 126.92 335.97 126.92 331.83 134.62 337.15 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.44 134.62 399.76 134.62 403.9 126.92 398.59 126.92 394.44 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.21 134.62 332.35 126.92 327.03 126.92 322.89 134.62 328.21 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.97 126.92 9.83 134.62 15.15 134.62 19.29 126.92 13.97 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.2 134.62 171.35 126.92 166.03 126.92 161.89 134.62 167.2 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.65 134.62 260.79 126.92 255.47 126.92 251.33 134.62 256.65 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.76 134.62 242.9 126.92 237.58 126.92 233.44 134.62 238.76 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.71 134.62 251.85 126.92 246.53 126.92 242.39 134.62 247.71 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.59 134.62 269.74 126.92 264.42 126.92 260.28 134.62 265.59 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.48 134.62 287.63 126.92 282.31 126.92 278.17 134.62 283.48 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="211.93 134.62 216.07 126.92 210.75 126.92 206.61 134.62 211.93 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="5.03 126.92 .88 134.62 6.2 134.62 10.34 126.92 5.03 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.43 134.62 296.57 126.92 291.25 126.92 287.11 134.62 292.43 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.37 134.62 305.51 126.92 300.2 126.92 296.05 134.62 301.37 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="229.82 134.62 233.96 126.92 228.64 126.92 224.5 134.62 229.82 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="220.87 134.62 225.01 126.92 219.7 126.92 215.55 134.62 220.87 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.75 126.92 45.61 134.62 50.93 134.62 55.07 126.92 49.75 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="483.89 134.62 489.21 134.62 493.35 126.92 488.03 126.92 483.89 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.1 134.62 350.24 126.92 344.92 126.92 340.78 134.62 346.1 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="381.87 134.62 386.02 126.92 380.7 126.92 376.56 134.62 381.87 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.04 134.62 359.18 126.92 353.86 126.92 349.72 134.62 355.04 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="372.93 134.62 377.07 126.92 371.75 126.92 367.61 134.62 372.93 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="103.42 126.92 99.27 134.62 104.59 134.62 108.73 126.92 103.42 126.92"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="363.98 134.62 368.13 126.92 362.81 126.92 358.67 134.62 363.98 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.11 134.62 453.43 134.62 457.57 126.92 452.25 126.92 448.11 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="474.95 134.62 480.26 134.62 484.41 126.92 479.09 126.92 474.95 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="390.82 134.62 394.96 126.92 389.64 126.92 385.5 134.62 390.82 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.54 134.62 278.68 126.92 273.36 126.92 269.22 134.62 274.54 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.26 134.62 162.4 126.92 157.08 126.92 152.94 134.62 158.26 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.32 134.62 153.46 126.92 148.14 126.92 144 134.62 149.32 134.62"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.52 126.92 470.66 119.23 465.34 119.23 461.2 126.92 466.52 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="5.54 119.23 .22 119.23 0 119.65 0 126.92 1.4 126.92 5.54 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.35 126.92 497.49 119.23 492.17 119.23 488.03 126.92 493.35 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.68 126.92 443.82 119.23 438.51 119.23 434.36 126.92 439.68 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="98.61 119.23 94.47 126.92 99.79 126.92 103.93 119.23 98.61 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="80.72 119.23 76.58 126.92 81.9 126.92 86.04 119.23 80.72 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="89.67 119.23 85.53 126.92 90.85 126.92 94.99 119.23 89.67 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="107.56 119.23 103.42 126.92 108.73 126.92 112.88 119.23 107.56 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="14.49 119.23 9.17 119.23 5.03 126.92 10.34 126.92 14.49 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="130.77 119.23 125.45 119.23 121.31 126.92 126.62 126.92 130.77 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.02 126.92 390.16 119.23 384.84 119.23 380.7 126.92 386.02 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.1 119.23 71.78 119.23 67.64 126.92 72.96 126.92 77.1 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.57 126.92 461.71 119.23 456.4 119.23 452.25 126.92 457.57 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="68.15 119.23 62.84 119.23 58.69 126.92 64.01 126.92 68.15 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="32.38 119.23 27.06 119.23 22.92 126.92 28.23 126.92 32.38 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.51 126.92 148.65 119.23 143.34 119.23 139.19 126.92 144.51 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="18.11 119.23 13.97 126.92 19.29 126.92 23.43 119.23 18.11 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.57 126.92 139.71 119.23 134.39 119.23 130.25 126.92 135.57 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="121.82 119.23 116.5 119.23 112.36 126.92 117.68 126.92 121.82 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="50.26 119.23 44.95 119.23 40.8 126.92 46.12 126.92 50.26 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="41.32 119.23 36 119.23 31.86 126.92 37.18 126.92 41.32 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.68 126.92 282.82 119.23 277.5 119.23 273.36 126.92 278.68 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.96 126.92 399.1 119.23 393.78 119.23 389.64 126.92 394.96 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="287.63 126.92 291.77 119.23 286.45 119.23 282.31 126.92 287.63 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.74 126.92 273.88 119.23 268.56 119.23 264.42 126.92 269.74 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 126.92 500 121.31 496.98 126.92 500 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="242.9 126.92 247.04 119.23 241.73 119.23 237.58 126.92 242.9 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.57 126.92 300.71 119.23 295.39 119.23 291.25 126.92 296.57 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.9 126.92 408.05 119.23 402.73 119.23 398.59 126.92 403.9 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="260.79 126.92 264.93 119.23 259.62 119.23 255.47 126.92 260.79 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="251.85 126.92 255.99 119.23 250.67 119.23 246.53 126.92 251.85 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.51 126.92 309.66 119.23 304.34 119.23 300.2 126.92 305.51 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.18 126.92 363.32 119.23 358.01 119.23 353.86 126.92 359.18 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.24 126.92 354.38 119.23 349.06 119.23 344.92 126.92 350.24 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.13 126.92 372.27 119.23 366.95 119.23 362.81 126.92 368.13 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.29 126.92 345.43 119.23 340.12 119.23 335.97 126.92 341.29 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.35 126.92 336.49 119.23 331.17 119.23 327.03 126.92 332.35 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.46 126.92 318.6 119.23 313.28 119.23 309.14 126.92 314.46 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.4 126.92 327.55 119.23 322.23 119.23 318.09 126.92 323.4 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.07 126.92 381.21 119.23 375.89 119.23 371.75 126.92 377.07 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="59.21 119.23 53.89 119.23 49.75 126.92 55.07 126.92 59.21 119.23"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.29 126.92 184.43 119.23 179.11 119.23 174.97 126.92 180.29 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="171.35 126.92 175.49 119.23 170.17 119.23 166.03 126.92 171.35 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.63 126.92 452.77 119.23 447.45 119.23 443.31 126.92 448.63 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.4 126.92 166.54 119.23 161.23 119.23 157.08 126.92 162.4 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.79 126.92 425.94 119.23 420.62 119.23 416.48 126.92 421.79 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="153.46 126.92 157.6 119.23 152.28 119.23 148.14 126.92 153.46 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.74 126.92 434.88 119.23 429.56 119.23 425.42 126.92 430.74 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="407.53 126.92 412.85 126.92 416.99 119.23 411.67 119.23 407.53 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="207.12 126.92 211.27 119.23 205.95 119.23 201.81 126.92 207.12 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.07 126.92 220.21 119.23 214.89 119.23 210.75 126.92 216.07 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.41 126.92 488.55 119.23 483.23 119.23 479.09 126.92 484.41 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="189.24 126.92 193.38 119.23 188.06 119.23 183.92 126.92 189.24 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="225.01 126.92 229.16 119.23 223.84 119.23 219.7 126.92 225.01 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="198.18 126.92 202.32 119.23 197 119.23 192.86 126.92 198.18 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="233.96 126.92 238.1 119.23 232.78 119.23 228.64 126.92 233.96 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.46 126.92 479.6 119.23 474.28 119.23 470.14 126.92 475.46 126.92"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.42 199.36 391.73 199.36 394.84 193.59 389.52 193.59 386.42 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.86 199.36 481.18 199.36 484.29 193.59 478.97 193.59 475.86 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="139.08 193.59 135.97 199.36 141.29 199.36 144.39 193.59 139.08 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.92 199.36 472.24 199.36 475.34 193.59 470.02 193.59 466.92 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="126.5 193.59 121.19 193.59 118.08 199.36 123.4 199.36 126.5 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="344.8 193.59 341.69 199.36 347.01 199.36 350.12 193.59 344.8 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.64 199.36 355.96 199.36 359.06 193.59 353.74 193.59 350.64 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="335.86 193.59 332.75 199.36 338.07 199.36 341.17 193.59 335.86 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="224.89 193.59 219.58 193.59 216.47 199.36 221.79 199.36 224.89 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="210.63 193.59 207.53 199.36 212.84 199.36 215.95 193.59 210.63 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.75 199.36 499.07 199.36 500 197.63 500 193.59 496.86 193.59 493.75 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="309.02 193.59 305.91 199.36 311.23 199.36 314.34 193.59 309.02 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.58 199.36 364.9 199.36 368.01 193.59 362.69 193.59 359.58 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="317.97 193.59 314.86 199.36 320.18 199.36 323.28 193.59 317.97 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="326.91 193.59 323.8 199.36 329.12 199.36 332.23 193.59 326.91 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="300.08 193.59 296.97 199.36 302.29 199.36 305.4 193.59 300.08 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="130.13 193.59 127.02 199.36 132.34 199.36 135.45 193.59 130.13 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.97 199.36 463.29 199.36 466.4 193.59 461.08 193.59 457.97 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="4.91 193.59 1.8 199.36 7.12 199.36 10.23 193.59 4.91 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.53 199.36 373.85 199.36 376.95 193.59 371.63 193.59 368.53 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.28 193.59 156.96 193.59 153.86 199.36 159.18 199.36 162.28 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.8 193.59 19.69 199.36 25.01 199.36 28.11 193.59 22.8 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="37.06 193.59 31.74 193.59 28.63 199.36 33.95 199.36 37.06 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="81.78 193.59 76.46 193.59 73.36 199.36 78.68 199.36 81.78 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.85 193.59 10.75 199.36 16.06 199.36 19.17 193.59 13.85 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="201.69 193.59 198.58 199.36 203.9 199.36 207.01 193.59 201.69 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="237.47 193.59 234.36 199.36 239.68 199.36 242.78 193.59 237.47 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="85.41 193.59 82.3 199.36 87.62 199.36 90.73 193.59 85.41 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="409.62 199.36 412.73 193.59 407.41 193.59 404.3 199.36 409.62 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.63 193.59 46.52 199.36 51.84 199.36 54.95 193.59 49.63 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 193.59 0 195.97 1.28 193.59 0 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.36 199.36 400.68 199.36 403.79 193.59 398.47 193.59 395.36 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="422.19 199.36 427.51 199.36 430.62 193.59 425.3 193.59 422.19 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="431.14 199.36 436.46 199.36 439.56 193.59 434.25 193.59 431.14 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="72.84 193.59 67.52 193.59 64.41 199.36 69.73 199.36 72.84 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="103.3 193.59 100.19 199.36 105.51 199.36 108.62 193.59 103.3 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="94.35 193.59 91.25 199.36 96.56 199.36 99.67 193.59 94.35 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="148.02 193.59 144.91 199.36 150.23 199.36 153.34 193.59 148.02 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="273.24 193.59 270.14 199.36 275.46 199.36 278.56 193.59 273.24 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="264.3 193.59 261.19 199.36 266.51 199.36 269.62 193.59 264.3 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="255.35 193.59 252.25 199.36 257.57 199.36 260.67 193.59 255.35 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="282.19 193.59 279.08 199.36 284.4 199.36 287.51 193.59 282.19 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="228.52 193.59 225.41 199.36 230.73 199.36 233.84 193.59 228.52 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.35 199.36 457.45 193.59 452.13 193.59 449.03 199.36 454.35 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="440.08 199.36 445.4 199.36 448.51 193.59 443.19 193.59 440.08 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="291.13 193.59 288.03 199.36 293.34 199.36 296.45 193.59 291.13 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="246.41 193.59 243.3 199.36 248.62 199.36 251.73 193.59 246.41 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="112.24 193.59 109.14 199.36 114.45 199.36 117.56 193.59 112.24 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="165.91 193.59 162.8 199.36 168.12 199.36 171.23 193.59 165.91 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.81 199.36 490.12 199.36 493.23 193.59 487.91 193.59 484.81 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="198.06 193.59 192.74 193.59 189.64 199.36 194.95 199.36 198.06 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="174.85 193.59 171.75 199.36 177.07 199.36 180.17 193.59 174.85 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="183.8 193.59 180.69 199.36 186.01 199.36 189.12 193.59 183.8 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="413.25 199.36 418.57 199.36 421.67 193.59 416.36 193.59 413.25 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.47 199.36 382.79 199.36 385.9 193.59 380.58 193.59 377.47 199.36"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.69 193.59 37.58 199.36 42.9 199.36 46 193.59 40.69 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.57 193.59 55.47 199.36 60.79 199.36 63.89 193.59 58.57 193.59"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212.56 166.67 215.66 160.9 210.35 160.9 207.24 166.67 212.56 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="275.17 166.67 278.28 160.9 272.96 160.9 269.85 166.67 275.17 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="221.5 166.67 224.61 160.9 219.29 160.9 216.18 166.67 221.5 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="239.39 166.67 242.5 160.9 237.18 160.9 234.07 166.67 239.39 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="266.23 166.67 269.33 160.9 264.01 160.9 260.91 166.67 266.23 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="257.28 166.67 260.39 160.9 255.07 160.9 251.96 166.67 257.28 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="248.34 166.67 251.44 160.9 246.12 160.9 243.02 166.67 248.34 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="230.45 166.67 233.55 160.9 228.24 160.9 225.13 166.67 230.45 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.27 160.9 111.96 160.9 108.85 166.67 114.17 166.67 117.27 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.34 160.9 46.24 166.67 51.56 166.67 54.66 160.9 49.34 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.4 160.9 37.29 166.67 42.61 166.67 45.72 160.9 40.4 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.72 166.67 188.83 160.9 183.51 160.9 180.41 166.67 185.72 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.67 166.67 197.78 160.9 192.46 160.9 189.35 166.67 194.67 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.85 166.67 436.17 166.67 439.28 160.9 433.96 160.9 430.85 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.61 166.67 206.72 160.9 201.4 160.9 198.29 166.67 203.61 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="382.5 166.67 385.61 160.9 380.29 160.9 377.19 166.67 382.5 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.13 166.67 391.45 166.67 394.56 160.9 389.24 160.9 386.13 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.62 166.67 367.72 160.9 362.4 160.9 359.3 166.67 364.62 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="445.12 166.67 448.22 160.9 442.9 160.9 439.8 166.67 445.12 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.46 166.67 498.78 166.67 500 164.41 500 160.9 496.57 160.9 493.46 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.69 166.67 463.01 166.67 466.11 160.9 460.79 160.9 457.69 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="284.11 166.67 287.22 160.9 281.9 160.9 278.8 166.67 284.11 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.67 166.67 358.78 160.9 353.46 160.9 350.35 166.67 355.67 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.74 166.67 454.06 166.67 457.17 160.9 451.85 160.9 448.74 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="302 166.67 305.11 160.9 299.79 160.9 296.68 166.67 302 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="293.06 166.67 296.17 160.9 290.85 160.9 287.74 166.67 293.06 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.73 166.67 349.83 160.9 344.51 160.9 341.41 166.67 346.73 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.95 166.67 314.05 160.9 308.74 160.9 305.63 166.67 310.95 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.78 166.67 340.89 160.9 335.57 160.9 332.46 166.67 337.78 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.84 166.67 331.94 160.9 326.63 160.9 323.52 166.67 328.84 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.89 166.67 323 160.9 317.68 160.9 314.57 166.67 319.89 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="174.57 160.9 171.46 166.67 176.78 166.67 179.89 160.9 174.57 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162 160.9 156.68 160.9 153.57 166.67 158.89 166.67 162 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="4.62 160.9 1.51 166.67 6.83 166.67 9.94 160.9 4.62 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.51 160.9 19.4 166.67 24.72 166.67 27.83 160.9 22.51 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="31.46 160.9 28.35 166.67 33.67 166.67 36.77 160.9 31.46 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.57 160.9 10.46 166.67 15.78 166.67 18.88 160.9 13.57 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="489.84 166.67 492.95 160.9 487.63 160.9 484.52 166.67 489.84 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="129.85 160.9 126.74 166.67 132.06 166.67 135.16 160.9 129.85 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="85.12 160.9 82.02 166.67 87.33 166.67 90.44 160.9 85.12 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="138.79 160.9 135.68 166.67 141 166.67 144.11 160.9 138.79 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="94.07 160.9 90.96 166.67 96.28 166.67 99.39 160.9 94.07 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="108.33 160.9 103.01 160.9 99.9 166.67 105.22 166.67 108.33 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.18 160.9 73.07 166.67 78.39 166.67 81.5 160.9 76.18 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="147.73 160.9 144.63 166.67 149.95 166.67 153.05 160.9 147.73 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.96 166.67 418.28 166.67 421.39 160.9 416.07 160.9 412.96 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.24 166.67 373.56 166.67 376.67 160.9 371.35 160.9 368.24 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="72.55 160.9 67.23 160.9 64.13 166.67 69.45 166.67 72.55 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 160.9 0 162.75 1 160.9 0 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="165.62 160.9 162.52 166.67 167.84 166.67 170.94 160.9 165.62 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.29 160.9 55.18 166.67 60.5 166.67 63.61 160.9 58.29 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.91 166.67 427.23 166.67 430.33 160.9 425.02 160.9 421.91 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="120.9 160.9 117.79 166.67 123.11 166.67 126.22 160.9 120.9 160.9"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.63 166.67 471.95 166.67 475.06 160.9 469.74 160.9 466.63 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.07 166.67 400.39 166.67 403.5 160.9 398.18 160.9 395.07 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.58 166.67 480.89 166.67 484 160.9 478.68 160.9 475.58 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="404.02 166.67 409.34 166.67 412.44 160.9 407.13 160.9 404.02 166.67"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.55 176.28 346.73 166.67 341.41 166.67 336.23 176.28 341.55 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.63 166.67 139.45 176.28 144.77 176.28 149.95 166.67 144.63 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.44 176.28 364.62 166.67 359.3 166.67 354.12 176.28 359.44 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 176.28 500 171.14 497.23 176.28 500 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.49 176.28 355.67 166.67 350.35 166.67 345.17 176.28 350.49 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.66 176.28 489.84 166.67 484.52 166.67 479.34 176.28 484.66 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.84 166.67 162.52 166.67 157.34 176.28 162.66 176.28 167.84 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="153.57 166.67 148.39 176.28 153.71 176.28 158.89 166.67 153.57 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="413.1 176.28 418.28 166.67 412.96 166.67 407.79 176.28 413.1 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="46.24 166.67 41.06 176.28 46.38 176.28 51.56 166.67 46.24 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="90.96 166.67 85.78 176.28 91.1 176.28 96.28 166.67 90.96 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="87.33 166.67 82.02 166.67 76.84 176.28 82.16 176.28 87.33 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.68 166.67 130.51 176.28 135.82 176.28 141 166.67 135.68 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.94 176.28 445.12 166.67 439.8 166.67 434.62 176.28 439.94 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="126.74 166.67 121.56 176.28 126.88 176.28 132.06 166.67 126.74 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.67 166.67 28.35 166.67 23.17 176.28 28.49 176.28 33.67 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.99 176.28 436.17 166.67 430.85 166.67 425.68 176.28 430.99 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="55.18 166.67 50 176.28 55.32 176.28 60.5 166.67 55.18 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.77 176.28 471.95 166.67 466.63 166.67 461.45 176.28 466.77 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="37.29 166.67 32.12 176.28 37.43 176.28 42.61 166.67 37.29 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="422.05 176.28 427.23 166.67 421.91 166.67 416.73 176.28 422.05 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.88 176.28 454.06 166.67 448.74 166.67 443.56 176.28 448.88 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="198.29 166.67 193.12 176.28 198.44 176.28 203.61 166.67 198.29 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="189.35 166.67 184.17 176.28 189.49 176.28 194.67 166.67 189.35 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.83 166.67 1.51 166.67 0 169.48 0 176.28 1.66 176.28 6.83 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.72 166.67 19.4 166.67 14.23 176.28 19.54 176.28 24.72 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="404.16 176.28 409.34 166.67 404.02 166.67 398.84 176.28 404.16 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.78 166.67 171.46 166.67 166.28 176.28 171.6 176.28 176.78 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="386.27 176.28 391.45 166.67 386.13 166.67 380.95 176.28 386.27 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.41 166.67 175.23 176.28 180.55 176.28 185.72 166.67 180.41 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212.56 166.67 207.24 166.67 202.06 176.28 207.38 176.28 212.56 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="108.85 166.67 103.67 176.28 108.99 176.28 114.17 166.67 108.85 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.32 176.28 221.5 166.67 216.18 166.67 211.01 176.28 216.32 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="225.27 176.28 230.45 166.67 225.13 166.67 219.95 176.28 225.27 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="395.22 176.28 400.39 166.67 395.07 166.67 389.9 176.28 395.22 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="123.11 166.67 117.79 166.67 112.62 176.28 117.93 176.28 123.11 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="99.9 166.67 94.73 176.28 100.05 176.28 105.22 166.67 99.9 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="64.13 166.67 58.95 176.28 64.27 176.28 69.45 166.67 64.13 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="363.06 176.28 368.38 176.28 373.56 166.67 368.24 166.67 363.06 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.83 176.28 463.01 166.67 457.69 166.67 452.51 176.28 457.83 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="234.21 176.28 239.39 166.67 234.07 166.67 228.9 176.28 234.21 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="377.33 176.28 382.5 166.67 377.19 166.67 372.01 176.28 377.33 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="78.39 166.67 73.07 166.67 67.89 176.28 73.21 176.28 78.39 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.78 166.67 10.46 166.67 5.28 176.28 10.6 176.28 15.78 166.67"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.61 176.28 498.78 166.67 493.46 166.67 488.29 176.28 493.61 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.99 176.28 275.17 166.67 269.85 166.67 264.67 176.28 269.99 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="287.88 176.28 293.06 166.67 287.74 166.67 282.56 176.28 287.88 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.66 176.28 328.84 166.67 323.52 166.67 318.34 176.28 323.66 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.71 176.28 319.89 166.67 314.57 166.67 309.4 176.28 314.71 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="261.05 176.28 266.23 166.67 260.91 166.67 255.73 176.28 261.05 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.72 176.28 480.89 166.67 475.58 166.67 470.4 176.28 475.72 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.94 176.28 284.11 166.67 278.8 166.67 273.62 176.28 278.94 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.83 176.28 302 166.67 296.68 166.67 291.51 176.28 296.83 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="243.16 176.28 248.34 166.67 243.02 166.67 237.84 176.28 243.16 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="252.1 176.28 257.28 166.67 251.96 166.67 246.78 176.28 252.1 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.77 176.28 310.95 166.67 305.63 166.67 300.45 176.28 305.77 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.6 176.28 337.78 166.67 332.46 166.67 327.29 176.28 332.6 176.28"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="60.13 183.97 54.81 183.97 49.63 193.59 54.95 193.59 60.13 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.4 183.97 10.08 183.97 4.91 193.59 10.23 193.59 15.4 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="45.86 183.97 40.69 193.59 46 193.59 51.18 183.97 45.86 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.79 193.59 408.96 183.97 403.64 183.97 398.47 193.59 403.79 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="72.7 183.97 67.52 193.59 72.84 193.59 78.01 183.97 72.7 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.31 183.97 130.13 193.59 135.45 193.59 140.63 183.97 135.31 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.46 183.97 1.14 183.97 0 186.09 0 193.59 1.28 193.59 6.46 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.06 193.59 364.24 183.97 358.92 183.97 353.74 193.59 359.06 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.57 183.97 144.25 183.97 139.08 193.59 144.39 193.59 149.57 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.23 193.59 498.41 183.97 493.09 183.97 487.91 193.59 493.23 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.29 183.97 188.98 183.97 183.8 193.59 189.12 193.59 194.29 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.34 193.59 480.52 183.97 475.2 183.97 470.02 193.59 475.34 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.45 193.59 462.63 183.97 457.31 183.97 452.13 193.59 457.45 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="376.95 193.59 382.13 183.97 376.81 183.97 371.63 193.59 376.95 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.85 183.97 99.53 183.97 94.35 193.59 99.67 193.59 104.85 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="69.07 183.97 63.75 183.97 58.57 193.59 63.89 193.59 69.07 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.52 183.97 153.2 183.97 148.02 193.59 153.34 193.59 158.52 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="171.09 183.97 165.91 193.59 171.23 193.59 176.4 183.97 171.09 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.56 193.59 444.74 183.97 439.42 183.97 434.25 193.59 439.56 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.29 193.59 489.46 183.97 484.15 183.97 478.97 193.59 484.29 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="108.47 183.97 103.3 193.59 108.62 193.59 113.79 183.97 108.47 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="81.64 183.97 76.46 193.59 81.78 193.59 86.96 183.97 81.64 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.42 183.97 112.24 193.59 117.56 193.59 122.74 183.97 117.42 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.4 193.59 471.57 183.97 466.26 183.97 461.08 193.59 466.4 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="90.59 183.97 85.41 193.59 90.73 193.59 95.9 183.97 90.59 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="126.36 183.97 121.19 193.59 126.5 193.59 131.68 183.97 126.36 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.03 183.97 174.85 193.59 180.17 193.59 185.35 183.97 180.03 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="344.8 193.59 350.12 193.59 355.3 183.97 349.98 183.97 344.8 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.2 183.97 309.02 193.59 314.34 193.59 319.52 183.97 314.2 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.14 183.97 317.97 193.59 323.28 193.59 328.46 183.97 323.14 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.25 183.97 300.08 193.59 305.4 193.59 310.57 183.97 305.25 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.31 183.97 291.13 193.59 296.45 193.59 301.63 183.97 296.31 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.84 193.59 400.02 183.97 394.7 183.97 389.52 193.59 394.84 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="287.37 183.97 282.19 193.59 287.51 193.59 292.68 183.97 287.37 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.09 183.97 326.91 193.59 332.23 193.59 337.41 183.97 332.09 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.62 193.59 435.8 183.97 430.48 183.97 425.3 193.59 430.62 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.73 193.59 417.91 183.97 412.59 183.97 407.41 193.59 412.73 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.42 183.97 273.24 193.59 278.56 193.59 283.74 183.97 278.42 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.03 183.97 335.86 193.59 341.17 193.59 346.35 183.97 341.03 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.14 183.97 156.96 193.59 162.28 193.59 167.46 183.97 162.14 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="224.75 183.97 219.58 193.59 224.89 193.59 230.07 183.97 224.75 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="206.86 183.97 201.69 193.59 207.01 193.59 212.18 183.97 206.86 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.67 193.59 426.85 183.97 421.53 183.97 416.36 193.59 421.67 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.48 183.97 264.3 193.59 269.62 193.59 274.79 183.97 269.48 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="368.01 193.59 373.18 183.97 367.87 183.97 362.69 193.59 368.01 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="385.9 193.59 391.07 183.97 385.76 183.97 380.58 193.59 385.9 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.51 193.59 453.69 183.97 448.37 183.97 443.19 193.59 448.51 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="36.92 183.97 31.74 193.59 37.06 193.59 42.24 183.97 36.92 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="19.03 183.97 13.85 193.59 19.17 193.59 24.35 183.97 19.03 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="27.97 183.97 22.8 193.59 28.11 193.59 33.29 183.97 27.97 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 193.59 500 187.75 496.86 193.59 500 193.59"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="197.92 183.97 192.74 193.59 198.06 193.59 203.24 183.97 197.92 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="251.59 183.97 246.41 193.59 251.73 193.59 256.91 183.97 251.59 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="221.13 183.97 215.81 183.97 210.63 193.59 215.95 193.59 221.13 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="260.53 183.97 255.35 193.59 260.67 193.59 265.85 183.97 260.53 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="242.64 183.97 237.47 193.59 242.78 193.59 247.96 183.97 242.64 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="233.7 183.97 228.52 193.59 233.84 193.59 239.02 183.97 233.7 183.97"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="31.69 77.4 27.55 85.1 32.87 85.1 37.01 77.4 31.69 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="465.83 85.1 471.15 85.1 475.29 77.4 469.97 77.4 465.83 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="49.58 77.4 45.44 85.1 50.76 85.1 54.9 77.4 49.58 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.2 85.1 305.35 77.4 300.03 77.4 295.88 85.1 301.2 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.09 85.1 323.23 77.4 317.92 77.4 313.77 85.1 319.09 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="354.87 85.1 359.01 77.4 353.69 77.4 349.55 85.1 354.87 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.04 85.1 332.18 77.4 326.86 77.4 322.72 85.1 328.04 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="336.98 85.1 341.12 77.4 335.8 77.4 331.66 85.1 336.98 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="345.93 85.1 350.07 77.4 344.75 77.4 340.61 85.1 345.93 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.15 85.1 314.29 77.4 308.97 77.4 304.83 85.1 310.15 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.26 85.1 296.4 77.4 291.08 77.4 286.94 85.1 292.26 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.48 85.1 260.62 77.4 255.3 77.4 251.16 85.1 256.48 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.59 85.1 242.73 77.4 237.41 77.4 233.27 85.1 238.59 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.42 85.1 269.57 77.4 264.25 77.4 260.11 85.1 265.42 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.31 85.1 287.46 77.4 282.14 77.4 278 85.1 283.31 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.37 85.1 278.51 77.4 273.19 77.4 269.05 85.1 274.37 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.54 85.1 251.68 77.4 246.36 77.4 242.22 85.1 247.54 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="13.8 77.4 9.66 85.1 14.98 85.1 19.12 77.4 13.8 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 77.4 0 79.69 1.23 77.4 0 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="426.43 85.1 430.57 77.4 425.25 77.4 421.11 85.1 426.43 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="435.37 85.1 439.51 77.4 434.19 77.4 430.05 85.1 435.37 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.52 77.4 54.38 85.1 59.7 85.1 63.84 77.4 58.52 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="453.26 85.1 457.4 77.4 452.08 77.4 447.94 85.1 453.26 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="390.65 85.1 394.79 77.4 389.47 77.4 385.33 85.1 390.65 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="417.48 85.1 421.62 77.4 416.31 77.4 412.16 85.1 417.48 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="372.76 85.1 376.9 77.4 371.58 77.4 367.44 85.1 372.76 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="363.81 85.1 367.96 77.4 362.64 77.4 358.5 85.1 363.81 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="381.7 85.1 385.85 77.4 380.53 77.4 376.39 85.1 381.7 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="399.59 85.1 403.74 77.4 398.42 77.4 394.27 85.1 399.59 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="408.54 85.1 412.68 77.4 407.36 77.4 403.22 85.1 408.54 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="456.89 85.1 462.2 85.1 466.35 77.4 461.03 77.4 456.89 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="67.47 77.4 63.33 85.1 68.64 85.1 72.79 77.4 67.47 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="95.48 85.1 99.62 77.4 94.3 77.4 90.16 85.1 95.48 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.41 77.4 72.27 85.1 77.59 85.1 81.73 77.4 76.41 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.42 85.1 108.57 77.4 103.25 77.4 99.1 85.1 104.42 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="86.53 85.1 90.68 77.4 85.36 77.4 81.22 85.1 86.53 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="113.37 85.1 117.51 77.4 112.19 77.4 108.05 85.1 113.37 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="22.75 77.4 18.6 85.1 23.92 85.1 28.06 77.4 22.75 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="40.64 77.4 36.49 85.1 41.81 85.1 45.95 77.4 40.64 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="492.66 85.1 497.98 85.1 500 81.35 500 77.4 496.81 77.4 492.66 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="4.86 77.4 .71 85.1 6.03 85.1 10.18 77.4 4.86 77.4"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="122.31 85.1 126.45 77.4 121.14 77.4 116.99 85.1 122.31 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="483.72 85.1 489.04 85.1 493.18 77.4 487.86 77.4 483.72 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439 85.1 444.32 85.1 448.46 77.4 443.14 77.4 439 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="220.7 85.1 224.84 77.4 219.53 77.4 215.38 85.1 220.7 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="202.81 85.1 206.96 77.4 201.64 77.4 197.49 85.1 202.81 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="193.87 85.1 198.01 77.4 192.69 77.4 188.55 85.1 193.87 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="184.92 85.1 189.07 77.4 183.75 77.4 179.61 85.1 184.92 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="211.76 85.1 215.9 77.4 210.58 77.4 206.44 85.1 211.76 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="175.98 85.1 180.12 77.4 174.8 77.4 170.66 85.1 175.98 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="229.65 85.1 233.79 77.4 228.47 77.4 224.33 85.1 229.65 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="131.26 85.1 135.4 77.4 130.08 77.4 125.94 85.1 131.26 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.15 85.1 153.29 77.4 147.97 77.4 143.83 85.1 149.15 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="474.78 85.1 480.09 85.1 484.24 77.4 478.92 77.4 474.78 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="140.2 85.1 144.34 77.4 139.02 77.4 134.88 85.1 140.2 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.09 85.1 162.23 77.4 156.91 77.4 152.77 85.1 158.09 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.03 85.1 171.18 77.4 165.86 77.4 161.72 85.1 167.03 85.1"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="17.14 31.25 21.28 23.56 15.96 23.56 11.82 31.25 17.14 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="494.83 31.25 500 31.25 500 23.56 498.97 23.56 494.83 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="7.02 23.56 2.88 31.25 8.19 31.25 12.34 23.56 7.02 23.56"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 23.56 0 29.86 3.39 23.56 0 23.56"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="365.98 31.25 370.12 23.56 364.8 23.56 360.66 31.25 365.98 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="321.25 31.25 325.39 23.56 320.08 23.56 315.93 31.25 321.25 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="348.09 31.25 352.23 23.56 346.91 23.56 342.77 31.25 348.09 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="330.2 31.25 334.34 23.56 329.02 23.56 324.88 31.25 330.2 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="383.86 31.25 388.01 23.56 382.69 23.56 378.55 31.25 383.86 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="357.03 31.25 361.17 23.56 355.85 23.56 351.71 31.25 357.03 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="374.92 31.25 379.06 23.56 373.74 23.56 369.6 31.25 374.92 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="339.14 31.25 343.28 23.56 337.97 23.56 333.82 31.25 339.14 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="276.53 31.25 280.67 23.56 275.35 23.56 271.21 31.25 276.53 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="285.47 31.25 289.62 23.56 284.3 23.56 280.16 31.25 285.47 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="267.59 31.25 271.73 23.56 266.41 23.56 262.27 31.25 267.59 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="294.42 31.25 298.56 23.56 293.24 23.56 289.1 31.25 294.42 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="312.31 31.25 316.45 23.56 311.13 23.56 306.99 31.25 312.31 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="303.36 31.25 307.51 23.56 302.19 23.56 298.05 31.25 303.36 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.25 31.25 486.4 23.56 481.08 23.56 476.94 31.25 482.25 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="464.37 31.25 468.51 23.56 463.19 23.56 459.05 31.25 464.37 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="455.42 31.25 459.56 23.56 454.24 23.56 450.1 31.25 455.42 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.31 31.25 477.45 23.56 472.13 23.56 467.99 31.25 473.31 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="258.64 31.25 262.78 23.56 257.46 23.56 253.32 31.25 258.64 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="446.48 31.25 450.62 23.56 445.3 23.56 441.16 31.25 446.48 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.2 31.25 495.34 23.56 490.02 23.56 485.88 31.25 491.2 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="419.64 31.25 423.78 23.56 418.47 23.56 414.32 31.25 419.64 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="410.7 31.25 414.84 23.56 409.52 23.56 405.38 31.25 410.7 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="437.53 31.25 441.67 23.56 436.36 23.56 432.21 31.25 437.53 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="401.75 31.25 405.9 23.56 400.58 23.56 396.44 31.25 401.75 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="392.81 31.25 396.95 23.56 391.63 23.56 387.49 31.25 392.81 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="428.59 31.25 432.73 23.56 427.41 23.56 423.27 31.25 428.59 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="106.58 31.25 110.73 23.56 105.41 23.56 101.27 31.25 106.58 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="97.64 31.25 101.78 23.56 96.46 23.56 92.32 31.25 97.64 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="88.69 31.25 92.84 23.56 87.52 23.56 83.38 31.25 88.69 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="26.08 31.25 30.22 23.56 24.91 23.56 20.76 31.25 26.08 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="124.47 31.25 128.61 23.56 123.3 23.56 119.15 31.25 124.47 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="115.53 31.25 119.67 23.56 114.35 23.56 110.21 31.25 115.53 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="133.42 31.25 137.56 23.56 132.24 23.56 128.1 31.25 133.42 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="79.75 31.25 83.89 23.56 78.57 23.56 74.43 31.25 79.75 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="43.97 31.25 48.11 23.56 42.8 23.56 38.65 31.25 43.97 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="70.81 31.25 74.95 23.56 69.63 23.56 65.49 31.25 70.81 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="35.03 31.25 39.17 23.56 33.85 23.56 29.71 31.25 35.03 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="249.7 31.25 253.84 23.56 248.52 23.56 244.38 31.25 249.7 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="61.86 31.25 66 23.56 60.68 23.56 56.54 31.25 61.86 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="52.92 31.25 57.06 23.56 51.74 23.56 47.6 31.25 52.92 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="142.36 31.25 146.5 23.56 141.19 23.56 137.04 31.25 142.36 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="204.97 31.25 209.12 23.56 203.8 23.56 199.66 31.25 204.97 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="222.86 31.25 227 23.56 221.69 23.56 217.54 31.25 222.86 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="213.92 31.25 218.06 23.56 212.74 23.56 208.6 31.25 213.92 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="240.75 31.25 244.89 23.56 239.58 23.56 235.43 31.25 240.75 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="231.81 31.25 235.95 23.56 230.63 23.56 226.49 31.25 231.81 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="196.03 31.25 200.17 23.56 194.85 23.56 190.71 31.25 196.03 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="160.25 31.25 164.39 23.56 159.07 23.56 154.93 31.25 160.25 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="151.31 31.25 155.45 23.56 150.13 23.56 145.99 31.25 151.31 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="178.14 31.25 182.28 23.56 176.96 23.56 172.82 31.25 178.14 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="187.08 31.25 191.23 23.56 185.91 23.56 181.77 31.25 187.08 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="169.2 31.25 173.34 23.56 168.02 23.56 163.88 31.25 169.2 31.25"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.35 40.87 276.53 31.25 271.21 31.25 266.03 40.87 271.35 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.19 40.87 303.36 31.25 298.05 31.25 292.87 40.87 298.19 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.46 40.87 258.64 31.25 253.32 31.25 248.14 40.87 253.46 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.3 40.87 285.47 31.25 280.16 31.25 274.98 40.87 280.3 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.41 40.87 267.59 31.25 262.27 31.25 257.09 40.87 262.41 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.24 40.87 294.42 31.25 289.1 31.25 283.92 40.87 289.24 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307.13 40.87 312.31 31.25 306.99 31.25 301.81 40.87 307.13 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="325.02 40.87 330.2 31.25 324.88 31.25 319.7 40.87 325.02 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="450.24 40.87 455.42 31.25 450.1 31.25 444.92 40.87 450.24 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="181.91 40.87 187.08 31.25 181.77 31.25 176.59 40.87 181.91 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="333.96 40.87 339.14 31.25 333.82 31.25 328.65 40.87 333.96 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="208.74 40.87 213.92 31.25 208.6 31.25 203.42 40.87 208.74 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="190.85 40.87 196.03 31.25 190.71 31.25 185.53 40.87 190.85 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.52 40.87 249.7 31.25 244.38 31.25 239.2 40.87 244.52 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="235.57 40.87 240.75 31.25 235.43 31.25 230.26 40.87 235.57 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="217.69 40.87 222.86 31.25 217.54 31.25 212.37 40.87 217.69 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="226.63 40.87 231.81 31.25 226.49 31.25 221.31 40.87 226.63 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="199.8 40.87 204.97 31.25 199.66 31.25 194.48 40.87 199.8 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.91 40.87 348.09 31.25 342.77 31.25 337.59 40.87 342.91 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="477.08 40.87 482.25 31.25 476.94 31.25 471.76 40.87 477.08 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.02 40.87 491.2 31.25 485.88 31.25 480.7 40.87 486.02 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.41 40.87 428.59 31.25 423.27 31.25 418.09 40.87 423.41 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="468.13 40.87 473.31 31.25 467.99 31.25 462.81 40.87 468.13 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="441.3 40.87 446.48 31.25 441.16 31.25 435.98 40.87 441.3 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.19 40.87 464.37 31.25 459.05 31.25 453.87 40.87 459.19 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="414.47 40.87 419.64 31.25 414.32 31.25 409.15 40.87 414.47 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="432.35 40.87 437.53 31.25 432.21 31.25 427.04 40.87 432.35 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="369.74 40.87 374.92 31.25 369.6 31.25 364.42 40.87 369.74 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="360.8 40.87 365.98 31.25 360.66 31.25 355.48 40.87 360.8 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.85 40.87 357.03 31.25 351.71 31.25 346.53 40.87 351.85 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="405.52 40.87 410.7 31.25 405.38 31.25 400.2 40.87 405.52 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="396.58 40.87 401.75 31.25 396.44 31.25 391.26 40.87 396.58 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="378.69 40.87 383.86 31.25 378.55 31.25 373.37 40.87 378.69 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="387.63 40.87 392.81 31.25 387.49 31.25 382.31 40.87 387.63 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="316.08 40.87 321.25 31.25 315.93 31.25 310.76 40.87 316.08 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="65.63 40.87 70.81 31.25 65.49 31.25 60.31 40.87 65.63 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="56.68 40.87 61.86 31.25 56.54 31.25 51.36 40.87 56.68 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="83.52 40.87 88.69 31.25 83.38 31.25 78.2 40.87 83.52 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="47.74 40.87 52.92 31.25 47.6 31.25 42.42 40.87 47.74 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="172.96 40.87 178.14 31.25 172.82 31.25 167.64 40.87 172.96 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="17.14 31.25 11.82 31.25 6.64 40.87 11.96 40.87 17.14 31.25"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="26.08 31.25 20.76 31.25 15.59 40.87 20.91 40.87 26.08 31.25"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="8.19 31.25 2.88 31.25 0 36.59 0 40.87 3.02 40.87 8.19 31.25"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="38.79 40.87 43.97 31.25 38.65 31.25 33.48 40.87 38.79 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="92.46 40.87 97.64 31.25 92.32 31.25 87.14 40.87 92.46 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="29.85 40.87 35.03 31.25 29.71 31.25 24.53 40.87 29.85 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.57 40.87 79.75 31.25 74.43 31.25 69.25 40.87 74.57 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146.13 40.87 151.31 31.25 145.99 31.25 140.81 40.87 146.13 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 40.87 500 38.25 498.59 40.87 500 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="119.3 40.87 124.47 31.25 119.15 31.25 113.98 40.87 119.3 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="155.07 40.87 160.25 31.25 154.93 31.25 149.75 40.87 155.07 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.18 40.87 142.36 31.25 137.04 31.25 131.87 40.87 137.18 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="128.24 40.87 133.42 31.25 128.1 31.25 122.92 40.87 128.24 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="489.65 40.87 494.97 40.87 500 31.52 500 31.25 494.83 31.25 489.65 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="164.02 40.87 169.2 31.25 163.88 31.25 158.7 40.87 164.02 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.35 40.87 115.53 31.25 110.21 31.25 105.03 40.87 110.35 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.41 40.87 106.58 31.25 101.27 31.25 96.09 40.87 101.41 40.87"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.35 67.79 10.03 67.79 4.86 77.4 10.18 77.4 15.35 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.74 77.4 408.91 67.79 403.59 67.79 398.42 77.4 403.74 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.29 77.4 480.47 67.79 475.15 67.79 469.97 77.4 475.29 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="323.23 77.4 328.41 67.79 323.09 67.79 317.92 77.4 323.23 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="332.18 77.4 337.36 67.79 332.04 67.79 326.86 77.4 332.18 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="385.85 77.4 391.02 67.79 385.71 67.79 380.53 77.4 385.85 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.24 77.4 489.41 67.79 484.1 67.79 478.92 77.4 484.24 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="189.07 77.4 194.24 67.79 188.93 67.79 183.75 77.4 189.07 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.79 77.4 399.97 67.79 394.65 67.79 389.47 77.4 394.79 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="376.9 77.4 382.08 67.79 376.76 67.79 371.58 77.4 376.9 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="367.96 77.4 373.13 67.79 367.82 67.79 362.64 77.4 367.96 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="341.12 77.4 346.3 67.79 340.98 67.79 335.8 77.4 341.12 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="359.01 77.4 364.19 67.79 358.87 67.79 353.69 77.4 359.01 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="350.07 77.4 355.25 67.79 349.93 67.79 344.75 77.4 350.07 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 77.4 500 71.47 496.81 77.4 500 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="117.51 77.4 122.69 67.79 117.37 67.79 112.19 77.4 117.51 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="135.4 77.4 140.58 67.79 135.26 67.79 130.08 77.4 135.4 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="126.45 77.4 131.63 67.79 126.31 67.79 121.14 77.4 126.45 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.34 77.4 149.52 67.79 144.2 67.79 139.02 77.4 144.34 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="153.29 77.4 158.47 67.79 153.15 67.79 147.97 77.4 153.29 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.24 67.79 27.92 67.79 22.75 77.4 28.06 77.4 33.24 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.13 67.79 45.81 67.79 40.64 77.4 45.95 77.4 51.13 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.41 67.79 1.09 67.79 0 69.81 0 77.4 1.23 77.4 6.41 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="18.98 67.79 13.8 77.4 19.12 77.4 24.3 67.79 18.98 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="162.23 77.4 167.41 67.79 162.09 67.79 156.91 77.4 162.23 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.51 77.4 444.69 67.79 439.37 67.79 434.19 77.4 439.51 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="171.18 77.4 176.35 67.79 171.04 67.79 165.86 77.4 171.18 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="421.62 77.4 426.8 67.79 421.48 67.79 416.31 77.4 421.62 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.57 77.4 435.75 67.79 430.43 67.79 425.25 77.4 430.57 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.68 77.4 417.86 67.79 412.54 67.79 407.36 77.4 412.68 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.18 77.4 498.36 67.79 493.04 67.79 487.86 77.4 493.18 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="466.35 77.4 471.52 67.79 466.21 67.79 461.03 77.4 466.35 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.46 77.4 453.64 67.79 448.32 67.79 443.14 77.4 448.46 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.12 77.4 185.3 67.79 179.98 67.79 174.8 77.4 180.12 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="452.08 77.4 457.4 77.4 462.58 67.79 457.26 67.79 452.08 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="242.73 77.4 247.91 67.79 242.59 67.79 237.41 77.4 242.73 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="63.7 67.79 58.52 77.4 63.84 77.4 69.02 67.79 63.7 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="287.46 77.4 292.63 67.79 287.32 67.79 282.14 77.4 287.46 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="278.51 77.4 283.69 67.79 278.37 67.79 273.19 77.4 278.51 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="296.4 77.4 301.58 67.79 296.26 67.79 291.08 77.4 296.4 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="269.57 77.4 274.74 67.79 269.43 67.79 264.25 77.4 269.57 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="81.73 77.4 86.91 67.79 81.59 67.79 76.41 77.4 81.73 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="233.79 77.4 238.97 67.79 233.65 67.79 228.47 77.4 233.79 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="251.68 77.4 256.86 67.79 251.54 67.79 246.36 77.4 251.68 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="206.96 77.4 212.13 67.79 206.81 67.79 201.64 77.4 206.96 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="314.29 77.4 319.47 67.79 314.15 67.79 308.97 77.4 314.29 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="260.62 77.4 265.8 67.79 260.48 67.79 255.3 77.4 260.62 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="198.01 77.4 203.19 67.79 197.87 67.79 192.69 77.4 198.01 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="42.19 67.79 36.87 67.79 31.69 77.4 37.01 77.4 42.19 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="90.68 77.4 95.85 67.79 90.54 67.79 85.36 77.4 90.68 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="305.35 77.4 310.52 67.79 305.2 67.79 300.03 77.4 305.35 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="224.84 77.4 230.02 67.79 224.7 67.79 219.53 77.4 224.84 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="215.9 77.4 221.08 67.79 215.76 67.79 210.58 77.4 215.9 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="99.62 77.4 104.8 67.79 99.48 67.79 94.3 77.4 99.62 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="60.08 67.79 54.76 67.79 49.58 77.4 54.9 77.4 60.08 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="108.57 77.4 113.74 67.79 108.42 67.79 103.25 77.4 108.57 77.4"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.96 67.79 72.65 67.79 67.47 77.4 72.79 77.4 77.96 67.79"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.95 50.48 307.13 40.87 301.81 40.87 296.63 50.48 301.95 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="382.45 50.48 387.63 40.87 382.31 40.87 377.14 50.48 382.45 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.84 50.48 325.02 40.87 319.7 40.87 314.52 50.48 319.84 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.53 50.48 480.84 50.48 486.02 40.87 480.7 40.87 475.53 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="293.01 50.48 298.19 40.87 292.87 40.87 287.69 50.48 293.01 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.79 50.48 333.96 40.87 328.65 40.87 323.47 50.48 328.79 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.9 50.48 316.08 40.87 310.76 40.87 305.58 50.48 310.9 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="489.79 50.48 494.97 40.87 489.65 40.87 484.47 50.48 489.79 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="114.12 50.48 119.3 40.87 113.98 40.87 108.8 50.48 114.12 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="105.17 50.48 110.35 40.87 105.03 40.87 99.85 50.48 105.17 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.78 50.48 172.96 40.87 167.64 40.87 162.47 50.48 167.78 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.73 50.48 181.91 40.87 176.59 40.87 171.41 50.48 176.73 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.67 50.48 190.85 40.87 185.53 40.87 180.36 50.48 185.67 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="239.34 50.48 244.52 40.87 239.2 40.87 234.02 50.48 239.34 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="248.29 50.48 253.46 40.87 248.14 40.87 242.97 50.48 248.29 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.41 50.48 498.73 50.48 500 48.13 500 40.87 498.59 40.87 493.41 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="230.4 50.48 235.57 40.87 230.26 40.87 225.08 50.48 230.4 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.62 50.48 199.8 40.87 194.48 40.87 189.3 50.48 194.62 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212.51 50.48 217.69 40.87 212.37 40.87 207.19 50.48 212.51 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.56 50.48 208.74 40.87 203.42 40.87 198.24 50.48 203.56 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="221.45 50.48 226.63 40.87 221.31 40.87 216.13 50.48 221.45 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="257.23 50.48 262.41 40.87 257.09 40.87 251.91 50.48 257.23 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="132.01 50.48 137.18 40.87 131.87 40.87 126.69 50.48 132.01 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.9 50.48 155.07 40.87 149.75 40.87 144.58 50.48 149.9 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="123.06 50.48 128.24 40.87 122.92 40.87 117.74 50.48 123.06 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="284.06 50.48 289.24 40.87 283.92 40.87 278.75 50.48 284.06 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="140.95 50.48 146.13 40.87 140.81 40.87 135.63 50.48 140.95 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="266.17 50.48 271.35 40.87 266.03 40.87 260.86 50.48 266.17 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.84 50.48 164.02 40.87 158.7 40.87 153.52 50.48 158.84 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.53 40.87 19.35 50.48 24.67 50.48 29.85 40.87 24.53 40.87"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="275.12 50.48 280.3 40.87 274.98 40.87 269.8 50.48 275.12 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.73 50.48 342.91 40.87 337.59 40.87 332.41 50.48 337.73 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="471.9 50.48 477.08 40.87 471.76 40.87 466.58 50.48 471.9 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="462.95 50.48 468.13 40.87 462.81 40.87 457.64 50.48 462.95 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="454.01 50.48 459.19 40.87 453.87 40.87 448.69 50.48 454.01 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.12 50.48 441.3 40.87 435.98 40.87 430.8 50.48 436.12 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="445.07 50.48 450.24 40.87 444.92 40.87 439.75 50.48 445.07 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="373.51 50.48 378.69 40.87 373.37 40.87 368.19 50.48 373.51 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="42.56 50.48 47.74 40.87 42.42 40.87 37.24 50.48 42.56 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.62 50.48 38.79 40.87 33.48 40.87 28.3 50.48 33.62 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 40.87 0 46.47 3.02 40.87 0 40.87"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="409.29 50.48 414.47 40.87 409.15 40.87 403.97 50.48 409.29 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="400.34 50.48 405.52 40.87 400.2 40.87 395.02 50.48 400.34 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="427.18 50.48 432.35 40.87 427.04 40.87 421.86 50.48 427.18 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="391.4 50.48 396.58 40.87 391.26 40.87 386.08 50.48 391.4 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.51 50.48 56.68 40.87 51.36 40.87 46.19 50.48 51.51 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="418.23 50.48 423.41 40.87 418.09 40.87 412.91 50.48 418.23 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.59 40.87 10.41 50.48 15.73 50.48 20.91 40.87 15.59 40.87"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="78.34 50.48 83.52 40.87 78.2 40.87 73.02 50.48 78.34 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.62 50.48 360.8 40.87 355.48 40.87 350.3 50.48 355.62 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="60.45 50.48 65.63 40.87 60.31 40.87 55.13 50.48 60.45 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.56 50.48 369.74 40.87 364.42 40.87 359.25 50.48 364.56 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.68 50.48 351.85 40.87 346.53 40.87 341.36 50.48 346.68 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="87.28 50.48 92.46 40.87 87.14 40.87 81.97 50.48 87.28 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="69.39 50.48 74.57 40.87 69.25 40.87 64.08 50.48 69.39 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="96.23 50.48 101.41 40.87 96.09 40.87 90.91 50.48 96.23 50.48"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.64 40.87 1.46 50.48 6.78 50.48 11.96 40.87 6.64 40.87"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.41 67.79 333.59 58.17 328.27 58.17 323.09 67.79 328.41 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="417.86 67.79 423.03 58.17 417.72 58.17 412.54 67.79 417.86 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.8 67.79 109.98 58.17 104.66 58.17 99.48 67.79 104.8 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="113.74 67.79 118.92 58.17 113.6 58.17 108.42 67.79 113.74 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="408.91 67.79 414.09 58.17 408.77 58.17 403.59 67.79 408.91 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="122.69 67.79 127.86 58.17 122.55 58.17 117.37 67.79 122.69 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 58.17 0 63.08 2.64 58.17 0 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.36 67.79 342.53 58.17 337.22 58.17 332.04 67.79 337.36 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="399.97 67.79 405.15 58.17 399.83 58.17 394.65 67.79 399.97 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.3 67.79 351.48 58.17 346.16 58.17 340.98 67.79 346.3 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="391.02 67.79 396.2 58.17 390.88 58.17 385.71 67.79 391.02 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.04 67.79 498.36 67.79 500 64.74 500 58.17 498.22 58.17 493.04 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="95.85 67.79 101.03 58.17 95.71 58.17 90.54 67.79 95.85 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="69.02 67.79 74.2 58.17 68.88 58.17 63.7 67.79 69.02 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="444.69 67.79 449.87 58.17 444.55 58.17 439.37 67.79 444.69 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.21 58.17 10.03 67.79 15.35 67.79 20.53 58.17 15.21 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="60.08 67.79 65.25 58.17 59.93 58.17 54.76 67.79 60.08 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="373.13 67.79 378.31 58.17 372.99 58.17 367.82 67.79 373.13 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="42.05 58.17 36.87 67.79 42.19 67.79 47.36 58.17 42.05 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.19 67.79 369.37 58.17 364.05 58.17 358.87 67.79 364.19 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="453.64 67.79 458.81 58.17 453.49 58.17 448.32 67.79 453.64 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.16 58.17 18.98 67.79 24.3 67.79 29.47 58.17 24.16 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="435.75 67.79 440.92 58.17 435.61 58.17 430.43 67.79 435.75 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.96 67.79 83.14 58.17 77.82 58.17 72.65 67.79 77.96 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="86.91 67.79 92.09 58.17 86.77 58.17 81.59 67.79 86.91 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.25 67.79 360.42 58.17 355.1 58.17 349.93 67.79 355.25 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="426.8 67.79 431.98 58.17 426.66 58.17 421.48 67.79 426.8 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.1 58.17 27.92 67.79 33.24 67.79 38.42 58.17 33.1 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="382.08 67.79 387.26 58.17 381.94 58.17 376.76 67.79 382.08 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.52 67.79 154.7 58.17 149.38 58.17 144.2 67.79 149.52 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.86 67.79 262.03 58.17 256.71 58.17 251.54 67.79 256.86 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.91 67.79 253.09 58.17 247.77 58.17 242.59 67.79 247.91 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.8 67.79 270.98 58.17 265.66 58.17 260.48 67.79 265.8 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.35 67.79 181.53 58.17 176.21 58.17 171.04 67.79 176.35 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.74 67.79 279.92 58.17 274.6 58.17 269.43 67.79 274.74 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="140.58 67.79 145.75 58.17 140.44 58.17 135.26 67.79 140.58 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.97 67.79 244.14 58.17 238.83 58.17 233.65 67.79 238.97 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.47 67.79 163.64 58.17 158.32 58.17 153.15 67.79 158.47 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.41 67.79 172.59 58.17 167.27 58.17 162.09 67.79 167.41 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.1 67.79 489.41 67.79 494.59 58.17 489.27 58.17 484.1 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="230.02 67.79 235.2 58.17 229.88 58.17 224.7 67.79 230.02 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="50.99 58.17 45.81 67.79 51.13 67.79 56.31 58.17 50.99 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.15 67.79 480.47 67.79 485.65 58.17 480.33 58.17 475.15 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.47 67.79 324.64 58.17 319.33 58.17 314.15 67.79 319.47 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.63 67.79 297.81 58.17 292.49 58.17 287.32 67.79 292.63 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.69 67.79 288.87 58.17 283.55 58.17 278.37 67.79 283.69 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.52 67.79 315.7 58.17 310.38 58.17 305.2 67.79 310.52 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.58 67.79 306.76 58.17 301.44 58.17 296.26 67.79 301.58 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.27 58.17 1.09 67.79 6.41 67.79 11.59 58.17 6.27 58.17"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212.13 67.79 217.31 58.17 211.99 58.17 206.81 67.79 212.13 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.24 67.79 199.42 58.17 194.1 58.17 188.93 67.79 194.24 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.3 67.79 190.48 58.17 185.16 58.17 179.98 67.79 185.3 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.19 67.79 208.37 58.17 203.05 58.17 197.87 67.79 203.19 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.26 67.79 462.58 67.79 467.76 58.17 462.44 58.17 457.26 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="221.08 67.79 226.25 58.17 220.94 58.17 215.76 67.79 221.08 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="471.52 67.79 476.7 58.17 471.38 58.17 466.21 67.79 471.52 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="131.63 67.79 136.81 58.17 131.49 58.17 126.31 67.79 131.63 67.79"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="86.29 275 80.08 286.54 85.4 286.54 91.61 275 86.29 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.35 275 71.14 286.54 76.46 286.54 82.67 275 77.35 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="50.52 275 44.3 286.54 49.62 286.54 55.83 275 50.52 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="20.06 275 14.74 275 8.52 286.54 13.84 286.54 20.06 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="428.92 286.54 434.24 286.54 440.45 275 435.13 275 428.92 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="32.63 275 26.41 286.54 31.73 286.54 37.95 275 32.63 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="478.96 286.54 485.17 275 479.85 275 473.64 286.54 478.96 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="41.57 275 35.36 286.54 40.68 286.54 46.89 275 41.57 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="464.7 286.54 470.02 286.54 476.23 275 470.91 275 464.7 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="491.53 286.54 496.85 286.54 500 280.69 500 275 497.74 275 491.53 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="136.34 275 131.02 275 124.8 286.54 130.12 286.54 136.34 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="163.17 275 157.85 275 151.64 286.54 156.96 286.54 163.17 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="148.91 275 142.69 286.54 148.01 286.54 154.22 275 148.91 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="100.56 275 95.24 275 89.03 286.54 94.34 286.54 100.56 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="64.78 275 59.46 275 53.25 286.54 58.57 286.54 64.78 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="11.11 275 5.79 275 0 285.76 0 286.54 4.9 286.54 11.11 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="122.07 275 115.86 286.54 121.18 286.54 127.39 275 122.07 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="68.41 275 62.19 286.54 67.51 286.54 73.72 275 68.41 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="419.97 286.54 425.29 286.54 431.51 275 426.19 275 419.97 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="402.08 286.54 407.4 286.54 413.62 275 408.3 275 402.08 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="309.91 275 303.69 286.54 309.01 286.54 315.23 275 309.91 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="437.86 286.54 443.18 286.54 449.39 275 444.08 275 437.86 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="211.52 275 205.3 286.54 210.62 286.54 216.84 275 211.52 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="220.46 275 214.25 286.54 219.57 286.54 225.78 275 220.46 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="300.96 275 294.75 286.54 300.07 286.54 306.28 275 300.96 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="336.74 275 330.53 286.54 335.85 286.54 342.06 275 336.74 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="139.96 275 133.75 286.54 139.07 286.54 145.28 275 139.96 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="354.63 275 348.42 286.54 353.74 286.54 359.95 275 354.63 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="193.63 275 187.42 286.54 192.73 286.54 198.95 275 193.63 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="345.69 275 339.47 286.54 344.79 286.54 351 275 345.69 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="202.57 275 196.36 286.54 201.68 286.54 207.89 275 202.57 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.19 275 258.97 286.54 264.29 286.54 270.5 275 265.19 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.24 275 250.03 286.54 255.35 286.54 261.56 275 256.24 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.3 275 241.08 286.54 246.4 286.54 252.61 275 247.3 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="318.85 275 312.64 286.54 317.96 286.54 324.17 275 318.85 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.07 275 276.86 286.54 282.18 286.54 288.39 275 283.07 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="229.41 275 223.19 286.54 228.51 286.54 234.73 275 229.41 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="411.03 286.54 416.35 286.54 422.56 275 417.24 275 411.03 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="327.8 275 321.58 286.54 326.9 286.54 333.12 275 327.8 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.35 275 232.14 286.54 237.46 286.54 243.67 275 238.35 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.02 275 285.81 286.54 291.12 286.54 297.34 275 292.02 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="366.31 286.54 371.63 286.54 377.84 275 372.52 275 366.31 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 275 0 279.02 2.17 275 0 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="23.68 275 17.47 286.54 22.79 286.54 29 275 23.68 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="487.9 286.54 494.12 275 488.8 275 482.59 286.54 487.9 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.18 275 97.97 286.54 103.29 286.54 109.5 275 104.18 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="393.14 286.54 398.46 286.54 404.67 275 399.35 275 393.14 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="452.13 286.54 458.34 275 453.02 275 446.81 286.54 452.13 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="461.07 286.54 467.28 275 461.97 275 455.75 286.54 461.07 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="375.25 286.54 380.57 286.54 386.78 275 381.46 275 375.25 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="166.8 275 160.58 286.54 165.9 286.54 172.11 275 166.8 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="389.51 286.54 395.73 275 390.41 275 384.2 286.54 389.51 286.54"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.13 275 267.92 286.54 273.24 286.54 279.45 275 274.13 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="175.74 275 169.53 286.54 174.85 286.54 181.06 275 175.74 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="184.68 275 178.47 286.54 183.79 286.54 190 275 184.68 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="363.58 275 357.36 286.54 362.68 286.54 368.89 275 363.58 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="113.13 275 106.91 286.54 112.23 286.54 118.45 275 113.13 275"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="411.37 378.85 419.65 363.46 414.33 363.46 406.05 378.85 411.37 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="420.31 378.85 428.59 363.46 423.28 363.46 414.99 378.85 420.31 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.55 378.85 491.87 378.85 500 363.74 500 363.46 494.83 363.46 486.55 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="482.92 378.85 491.21 363.46 485.89 363.46 477.6 378.85 482.92 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.94 378.85 429.26 378.85 437.54 363.46 432.22 363.46 423.94 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="473.98 378.85 482.26 363.46 476.94 363.46 468.66 378.85 473.98 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.72 378.85 465.03 378.85 473.32 363.46 468 363.46 459.72 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="20.77 363.46 12.49 378.85 17.81 378.85 26.09 363.46 20.77 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 378.85 500 370.48 495.49 378.85 500 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="35.03 363.46 29.72 363.46 21.43 378.85 26.75 378.85 35.03 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="11.83 363.46 3.54 378.85 8.86 378.85 17.15 363.46 11.83 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.44 363.46 66.16 378.85 71.47 378.85 79.76 363.46 74.44 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="190.72 363.46 182.43 378.85 187.75 378.85 196.04 363.46 190.72 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="369.61 363.46 361.33 378.85 366.64 378.85 374.93 363.46 369.61 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="154.94 363.46 146.66 378.85 151.97 378.85 160.26 363.46 154.94 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146 363.46 137.71 378.85 143.03 378.85 151.31 363.46 146 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.05 363.46 128.77 378.85 134.09 378.85 142.37 363.46 137.05 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="378.55 363.46 370.27 378.85 375.59 378.85 383.87 363.46 378.55 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="456.09 378.85 464.37 363.46 459.05 363.46 450.77 378.85 456.09 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.78 363.46 334.49 378.85 339.81 378.85 348.09 363.46 342.78 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="172.83 363.46 164.55 378.85 169.86 378.85 178.15 363.46 172.83 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="360.66 363.46 352.38 378.85 357.7 378.85 365.98 363.46 360.66 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.72 363.46 343.44 378.85 348.75 378.85 357.04 363.46 351.72 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="396.44 363.46 388.16 378.85 393.48 378.85 401.76 363.46 396.44 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="387.5 363.46 379.21 378.85 384.53 378.85 392.82 363.46 387.5 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.22 363.46 101.93 378.85 107.25 378.85 115.54 363.46 110.22 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="397.1 378.85 402.42 378.85 410.71 363.46 405.39 363.46 397.1 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.27 363.46 92.99 378.85 98.31 378.85 106.59 363.46 101.27 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.27 363.46 253.99 378.85 259.31 378.85 267.59 363.46 262.27 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="447.14 378.85 455.43 363.46 450.11 363.46 441.83 378.85 447.14 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="432.88 378.85 438.2 378.85 446.48 363.46 441.17 363.46 432.88 378.85"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="181.77 363.46 173.49 378.85 178.81 378.85 187.09 363.46 181.77 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="128.11 363.46 119.82 378.85 125.14 378.85 133.42 363.46 128.11 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="119.16 363.46 110.88 378.85 116.2 378.85 124.48 363.46 119.16 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="324.89 363.46 316.6 378.85 321.92 378.85 330.2 363.46 324.89 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.39 363.46 236.1 378.85 241.42 378.85 249.7 363.46 244.39 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.16 363.46 271.88 378.85 277.2 378.85 285.48 363.46 280.16 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="226.5 363.46 218.21 378.85 223.53 378.85 231.81 363.46 226.5 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.22 363.46 262.94 378.85 268.25 378.85 276.54 363.46 271.22 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.11 363.46 280.82 378.85 286.14 378.85 294.43 363.46 289.11 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="235.44 363.46 227.16 378.85 232.48 378.85 240.76 363.46 235.44 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="2.88 363.46 0 368.82 0 378.69 8.2 363.46 2.88 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.33 363.46 245.05 378.85 250.36 378.85 258.65 363.46 253.33 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="83.38 363.46 75.1 378.85 80.42 378.85 88.7 363.46 83.38 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="97.65 363.46 92.33 363.46 84.04 378.85 89.36 378.85 97.65 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="38.66 363.46 30.38 378.85 35.7 378.85 43.98 363.46 38.66 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="333.83 363.46 325.55 378.85 330.87 378.85 339.15 363.46 333.83 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="70.81 363.46 65.49 363.46 57.21 378.85 62.53 378.85 70.81 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="199.66 363.46 191.38 378.85 196.7 378.85 204.98 363.46 199.66 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="47.61 363.46 39.32 378.85 44.64 378.85 52.92 363.46 47.61 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307 363.46 298.71 378.85 304.03 378.85 312.32 363.46 307 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.05 363.46 289.77 378.85 295.09 378.85 303.37 363.46 298.05 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="217.55 363.46 209.27 378.85 214.59 378.85 222.87 363.46 217.55 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="315.94 363.46 307.66 378.85 312.98 378.85 321.26 363.46 315.94 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="208.61 363.46 200.32 378.85 205.64 378.85 213.93 363.46 208.61 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="163.88 363.46 155.6 378.85 160.92 378.85 169.2 363.46 163.88 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="56.55 363.46 48.27 378.85 53.58 378.85 61.87 363.46 56.55 363.46"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.5 390.38 284.22 405.77 289.53 405.77 297.82 390.38 292.5 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.67 390.38 257.38 405.77 262.7 405.77 270.99 390.38 265.67 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.44 390.38 293.16 405.77 298.48 405.77 306.76 390.38 301.44 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.56 390.38 275.27 405.77 280.59 405.77 288.87 390.38 283.56 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.22 390.38 328.94 405.77 334.26 405.77 342.54 390.38 337.22 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.28 390.38 319.99 405.77 325.31 405.77 333.6 390.38 328.28 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.33 390.38 311.05 405.77 316.37 405.77 324.65 390.38 319.33 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.39 390.38 302.11 405.77 307.42 405.77 315.71 390.38 310.39 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.16 390.38 15.88 405.77 21.2 405.77 29.48 390.38 24.16 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51 390.38 42.71 405.77 48.03 405.77 56.32 390.38 51 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="212 390.38 203.72 405.77 209.03 405.77 217.32 390.38 212 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.72 390.38 248.44 405.77 253.76 405.77 262.04 390.38 256.72 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="203.05 390.38 194.77 405.77 200.09 405.77 208.37 390.38 203.05 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="185.17 390.38 176.88 405.77 182.2 405.77 190.48 390.38 185.17 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="194.11 390.38 185.83 405.77 191.14 405.77 199.43 390.38 194.11 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="220.94 390.38 212.66 405.77 217.98 405.77 226.26 390.38 220.94 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="238.83 390.38 230.55 405.77 235.87 405.77 244.15 390.38 238.83 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.78 390.38 239.49 405.77 244.81 405.77 253.1 390.38 247.78 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="229.89 390.38 221.6 405.77 226.92 405.77 235.21 390.38 229.89 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="381.95 390.38 373.66 405.77 378.98 405.77 387.26 390.38 381.95 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="459.48 405.77 467.77 390.38 462.45 390.38 454.16 405.77 459.48 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="450.54 405.77 458.82 390.38 453.5 390.38 445.22 405.77 450.54 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.11 390.38 24.82 405.77 30.14 405.77 38.43 390.38 33.11 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="436.27 405.77 441.59 405.77 449.88 390.38 444.56 390.38 436.27 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="426.67 390.38 418.38 405.77 423.7 405.77 431.99 390.38 426.67 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="47.37 390.38 42.05 390.38 33.77 405.77 39.09 405.77 47.37 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="463.11 405.77 468.43 405.77 476.71 390.38 471.39 390.38 463.11 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="486.31 405.77 494.6 390.38 489.28 390.38 481 405.77 486.31 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.22 390.38 6.94 405.77 12.25 405.77 20.54 390.38 15.22 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="477.37 405.77 485.65 390.38 480.34 390.38 472.05 405.77 477.37 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="432.65 405.77 440.93 390.38 435.61 390.38 427.33 405.77 432.65 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.06 390.38 355.77 405.77 361.09 405.77 369.38 390.38 364.06 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="373 390.38 364.72 405.77 370.04 405.77 378.32 390.38 373 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 390.38 0 395.3 2.65 390.38 0 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="355.11 390.38 346.83 405.77 352.15 405.77 360.43 390.38 355.11 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.17 390.38 337.88 405.77 343.2 405.77 351.49 390.38 346.17 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="390.89 390.38 382.61 405.77 387.92 405.77 396.21 390.38 390.89 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="408.78 390.38 400.5 405.77 405.81 405.77 414.1 390.38 408.78 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="417.72 390.38 409.44 405.77 414.76 405.77 423.04 390.38 417.72 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="399.83 390.38 391.55 405.77 396.87 405.77 405.15 390.38 399.83 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.61 390.38 266.33 405.77 271.65 405.77 279.93 390.38 274.61 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="59.94 390.38 51.66 405.77 56.98 405.77 65.26 390.38 59.94 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="140.44 390.38 132.16 405.77 137.48 405.77 145.76 390.38 140.44 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="113.61 390.38 105.33 405.77 110.64 405.77 118.93 390.38 113.61 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="77.83 390.38 69.55 405.77 74.87 405.77 83.15 390.38 77.83 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="149.39 390.38 141.1 405.77 146.42 405.77 154.71 390.38 149.39 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="11.59 390.38 6.28 390.38 0 402.04 0 405.77 3.31 405.77 11.59 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="122.55 390.38 114.27 405.77 119.59 405.77 127.87 390.38 122.55 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="131.5 390.38 123.21 405.77 128.53 405.77 136.82 390.38 131.5 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="104.67 390.38 96.38 405.77 101.7 405.77 109.98 390.38 104.67 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="86.78 390.38 78.49 405.77 83.81 405.77 92.09 390.38 86.78 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 405.77 500 403.7 498.89 405.77 500 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="489.94 405.77 495.26 405.77 500 396.97 500 390.38 498.22 390.38 489.94 405.77"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="176.22 390.38 167.94 405.77 173.26 405.77 181.54 390.38 176.22 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.21 390.38 68.89 390.38 60.6 405.77 65.92 405.77 74.21 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="167.28 390.38 158.99 405.77 164.31 405.77 172.6 390.38 167.28 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="95.72 390.38 87.44 405.77 92.75 405.77 101.04 390.38 95.72 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="158.33 390.38 150.05 405.77 155.37 405.77 163.65 390.38 158.33 390.38"
                  id="st5"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="100.05 176.28 94.73 176.28 90.59 183.97 95.9 183.97 100.05 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="230.07 183.97 234.21 176.28 228.9 176.28 224.75 183.97 230.07 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="202.06 176.28 197.92 183.97 203.24 183.97 207.38 176.28 202.06 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="493.09 183.97 498.41 183.97 500 181.02 500 176.28 497.23 176.28 493.09 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="76.84 176.28 72.7 183.97 78.01 183.97 82.16 176.28 76.84 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="157.34 176.28 153.2 183.97 158.52 183.97 162.66 176.28 157.34 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="376.81 183.97 382.13 183.97 386.27 176.28 380.95 176.28 376.81 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="426.85 183.97 430.99 176.28 425.68 176.28 421.53 183.97 426.85 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="412.59 183.97 417.91 183.97 422.05 176.28 416.73 176.28 412.59 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="216.32 176.28 211.01 176.28 206.86 183.97 212.18 183.97 216.32 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="328.46 183.97 332.6 176.28 327.29 176.28 323.14 183.97 328.46 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="439.42 183.97 444.74 183.97 448.88 176.28 443.56 176.28 439.42 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="448.37 183.97 453.69 183.97 457.83 176.28 452.51 176.28 448.37 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="367.87 183.97 373.18 183.97 377.33 176.28 372.01 176.28 367.87 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="265.85 183.97 269.99 176.28 264.67 176.28 260.53 183.97 265.85 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="475.2 183.97 480.52 183.97 484.66 176.28 479.34 176.28 475.2 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="471.57 183.97 475.72 176.28 470.4 176.28 466.26 183.97 471.57 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="274.79 183.97 278.94 176.28 273.62 176.28 269.48 183.97 274.79 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="364.24 183.97 368.38 176.28 363.06 176.28 358.92 183.97 364.24 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="184.17 176.28 180.03 183.97 185.35 183.97 189.49 176.28 184.17 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="256.91 183.97 261.05 176.28 255.73 176.28 251.59 183.97 256.91 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="247.96 183.97 252.1 176.28 246.78 176.28 242.64 183.97 247.96 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="239.02 183.97 243.16 176.28 237.84 176.28 233.7 183.97 239.02 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="484.15 183.97 489.46 183.97 493.61 176.28 488.29 176.28 484.15 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="166.28 176.28 162.14 183.97 167.46 183.97 171.6 176.28 166.28 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="457.31 183.97 462.63 183.97 466.77 176.28 461.45 176.28 457.31 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="180.55 176.28 175.23 176.28 171.09 183.97 176.4 183.97 180.55 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="67.89 176.28 63.75 183.97 69.07 183.97 73.21 176.28 67.89 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="403.64 183.97 408.96 183.97 413.1 176.28 407.79 176.28 403.64 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="103.67 176.28 99.53 183.97 104.85 183.97 108.99 176.28 103.67 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="144.77 176.28 139.45 176.28 135.31 183.97 140.63 183.97 144.77 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="385.76 183.97 391.07 183.97 395.22 176.28 389.9 176.28 385.76 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="130.51 176.28 126.36 183.97 131.68 183.97 135.82 176.28 130.51 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="55.32 176.28 50 176.28 45.86 183.97 51.18 183.97 55.32 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="91.1 176.28 85.78 176.28 81.64 183.97 86.96 183.97 91.1 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="337.41 183.97 341.55 176.28 336.23 176.28 332.09 183.97 337.41 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="310.57 183.97 314.71 176.28 309.4 176.28 305.25 183.97 310.57 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="0 176.28 0 179.36 1.66 176.28 0 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="58.95 176.28 54.81 183.97 60.13 183.97 64.27 176.28 58.95 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="319.52 183.97 323.66 176.28 318.34 176.28 314.2 183.97 319.52 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="301.63 183.97 305.77 176.28 300.45 176.28 296.31 183.97 301.63 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="193.12 176.28 188.98 183.97 194.29 183.97 198.44 176.28 193.12 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="219.95 176.28 215.81 183.97 221.13 183.97 225.27 176.28 219.95 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="394.7 183.97 400.02 183.97 404.16 176.28 398.84 176.28 394.7 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="14.23 176.28 10.08 183.97 15.4 183.97 19.54 176.28 14.23 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="32.12 176.28 27.97 183.97 33.29 183.97 37.43 176.28 32.12 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="346.35 183.97 350.49 176.28 345.17 176.28 341.03 183.97 346.35 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="41.06 176.28 36.92 183.97 42.24 183.97 46.38 176.28 41.06 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="283.74 183.97 287.88 176.28 282.56 176.28 278.42 183.97 283.74 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="23.17 176.28 19.03 183.97 24.35 183.97 28.49 176.28 23.17 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="430.48 183.97 435.8 183.97 439.94 176.28 434.62 176.28 430.48 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="5.28 176.28 1.14 183.97 6.46 183.97 10.6 176.28 5.28 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="121.56 176.28 117.42 183.97 122.74 183.97 126.88 176.28 121.56 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="148.39 176.28 144.25 183.97 149.57 183.97 153.71 176.28 148.39 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="292.68 183.97 296.83 176.28 291.51 176.28 287.37 183.97 292.68 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="112.62 176.28 108.47 183.97 113.79 183.97 117.93 176.28 112.62 176.28"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="349.98 183.97 355.3 183.97 359.44 176.28 354.12 176.28 349.98 183.97"
                  id="st2"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="37.24 50.48 33.1 58.17 38.42 58.17 42.56 50.48 37.24 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="33.62 50.48 28.3 50.48 24.16 58.17 29.47 58.17 33.62 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="24.67 50.48 19.35 50.48 15.21 58.17 20.53 58.17 24.67 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="6.78 50.48 1.46 50.48 0 53.2 0 58.17 2.64 58.17 6.78 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="15.73 50.48 10.41 50.48 6.27 58.17 11.59 58.17 15.73 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="315.7 58.17 319.84 50.48 314.52 50.48 310.38 58.17 315.7 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="431.98 58.17 436.12 50.48 430.8 50.48 426.66 58.17 431.98 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="136.81 58.17 140.95 50.48 135.63 50.48 131.49 58.17 136.81 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="297.81 58.17 301.95 50.48 296.63 50.48 292.49 58.17 297.81 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 58.17 500 54.86 498.22 58.17 500 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.03 58.17 427.18 50.48 421.86 50.48 417.72 58.17 423.03 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="306.76 58.17 310.9 50.48 305.58 50.48 301.44 58.17 306.76 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="145.75 58.17 149.9 50.48 144.58 50.48 140.44 58.17 145.75 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="449.87 58.17 454.01 50.48 448.69 50.48 444.55 58.17 449.87 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="181.53 58.17 185.67 50.48 180.36 50.48 176.21 58.17 181.53 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="279.92 58.17 284.06 50.48 278.75 50.48 274.6 58.17 279.92 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="172.59 58.17 176.73 50.48 171.41 50.48 167.27 58.17 172.59 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="414.09 58.17 418.23 50.48 412.91 50.48 408.77 58.17 414.09 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="440.92 58.17 445.07 50.48 439.75 50.48 435.61 58.17 440.92 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="288.87 58.17 293.01 50.48 287.69 50.48 283.55 58.17 288.87 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="351.48 58.17 355.62 50.48 350.3 50.48 346.16 58.17 351.48 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="333.59 58.17 337.73 50.48 332.41 50.48 328.27 58.17 333.59 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="342.53 58.17 346.68 50.48 341.36 50.48 337.22 58.17 342.53 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="458.81 58.17 462.95 50.48 457.64 50.48 453.49 58.17 458.81 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="56.31 58.17 60.45 50.48 55.13 50.48 50.99 58.17 56.31 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="154.7 58.17 158.84 50.48 153.52 50.48 149.38 58.17 154.7 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="324.64 58.17 328.79 50.48 323.47 50.48 319.33 58.17 324.64 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="360.42 58.17 364.56 50.48 359.25 50.48 355.1 58.17 360.42 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="396.2 58.17 400.34 50.48 395.02 50.48 390.88 58.17 396.2 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="369.37 58.17 373.51 50.48 368.19 50.48 364.05 58.17 369.37 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="405.15 58.17 409.29 50.48 403.97 50.48 399.83 58.17 405.15 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="485.65 58.17 489.79 50.48 484.47 50.48 480.33 58.17 485.65 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="387.26 58.17 391.4 50.48 386.08 50.48 381.94 58.17 387.26 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="378.31 58.17 382.45 50.48 377.14 50.48 372.99 58.17 378.31 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="51.51 50.48 46.19 50.48 42.05 58.17 47.36 58.17 51.51 50.48"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="92.09 58.17 96.23 50.48 90.91 50.48 86.77 58.17 92.09 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="494.59 58.17 498.73 50.48 493.41 50.48 489.27 58.17 494.59 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="235.2 58.17 239.34 50.48 234.02 50.48 229.88 58.17 235.2 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.03 58.17 105.17 50.48 99.85 50.48 95.71 58.17 101.03 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="244.14 58.17 248.29 50.48 242.97 50.48 238.83 58.17 244.14 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="109.98 58.17 114.12 50.48 108.8 50.48 104.66 58.17 109.98 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="226.25 58.17 230.4 50.48 225.08 50.48 220.94 58.17 226.25 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="65.25 58.17 69.39 50.48 64.08 50.48 59.93 58.17 65.25 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="217.31 58.17 221.45 50.48 216.13 50.48 211.99 58.17 217.31 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="471.38 58.17 476.7 58.17 480.84 50.48 475.53 50.48 471.38 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="208.37 58.17 212.51 50.48 207.19 50.48 203.05 58.17 208.37 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="74.2 58.17 78.34 50.48 73.02 50.48 68.88 58.17 74.2 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="83.14 58.17 87.28 50.48 81.97 50.48 77.82 58.17 83.14 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="199.42 58.17 203.56 50.48 198.24 50.48 194.1 58.17 199.42 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.03 58.17 266.17 50.48 260.86 50.48 256.71 58.17 262.03 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="127.86 58.17 132.01 50.48 126.69 50.48 122.55 58.17 127.86 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="190.48 58.17 194.62 50.48 189.3 50.48 185.16 58.17 190.48 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="467.76 58.17 471.9 50.48 466.58 50.48 462.44 58.17 467.76 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="270.98 58.17 275.12 50.48 269.8 50.48 265.66 58.17 270.98 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="163.64 58.17 167.78 50.48 162.47 50.48 158.32 58.17 163.64 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="118.92 58.17 123.06 50.48 117.74 50.48 113.6 58.17 118.92 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.09 58.17 257.23 50.48 251.91 50.48 247.77 58.17 253.09 58.17"
                  id="st3"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="218.21 378.85 212 390.38 217.32 390.38 223.53 378.85 218.21 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="343.44 378.85 337.22 390.38 342.54 390.38 348.75 378.85 343.44 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="316.6 378.85 310.39 390.38 315.71 390.38 321.92 378.85 316.6 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="209.27 378.85 203.05 390.38 208.37 390.38 214.59 378.85 209.27 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="334.49 378.85 328.28 390.38 333.6 390.38 339.81 378.85 334.49 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="236.1 378.85 229.89 390.38 235.21 390.38 241.42 378.85 236.1 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="227.16 378.85 220.94 390.38 226.26 390.38 232.48 378.85 227.16 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="325.55 378.85 319.33 390.38 324.65 390.38 330.87 378.85 325.55 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="8.86 378.85 3.54 378.85 0 385.43 0 390.38 2.65 390.38 8.86 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="489.28 390.38 494.6 390.38 500 380.35 500 378.85 495.49 378.85 489.28 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="92.99 378.85 86.78 390.38 92.09 390.38 98.31 378.85 92.99 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="101.93 378.85 95.72 390.38 101.04 390.38 107.25 378.85 101.93 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="500 390.38 500 387.09 498.22 390.38 500 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="119.82 378.85 113.61 390.38 118.93 390.38 125.14 378.85 119.82 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="110.88 378.85 104.67 390.38 109.98 390.38 116.2 378.85 110.88 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="128.77 378.85 122.55 390.38 127.87 390.38 134.09 378.85 128.77 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="388.16 378.85 381.95 390.38 387.26 390.38 393.48 378.85 388.16 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="12.49 378.85 6.28 390.38 11.59 390.38 17.81 378.85 12.49 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="57.21 378.85 51 390.38 56.32 390.38 62.53 378.85 57.21 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="379.21 378.85 373 390.38 378.32 390.38 384.53 378.85 379.21 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="84.04 378.85 77.83 390.38 83.15 390.38 89.36 378.85 84.04 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="71.47 378.85 66.16 378.85 59.94 390.38 65.26 390.38 71.47 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="191.38 378.85 185.17 390.38 190.48 390.38 196.7 378.85 191.38 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="75.1 378.85 68.89 390.38 74.21 390.38 80.42 378.85 75.1 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="352.38 378.85 346.17 390.38 351.49 390.38 357.7 378.85 352.38 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="173.49 378.85 167.28 390.38 172.6 390.38 178.81 378.85 173.49 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="137.71 378.85 131.5 390.38 136.82 390.38 143.03 378.85 137.71 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="200.32 378.85 194.11 390.38 199.43 390.38 205.64 378.85 200.32 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="361.33 378.85 355.11 390.38 360.43 390.38 366.64 378.85 361.33 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="182.43 378.85 176.22 390.38 181.54 390.38 187.75 378.85 182.43 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="155.6 378.85 149.39 390.38 154.71 390.38 160.92 378.85 155.6 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="146.66 378.85 140.44 390.38 145.76 390.38 151.97 378.85 146.66 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="414.99 378.85 408.78 390.38 414.1 390.38 420.31 378.85 414.99 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="164.55 378.85 158.33 390.38 163.65 390.38 169.86 378.85 164.55 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="370.27 378.85 364.06 390.38 369.38 390.38 375.59 378.85 370.27 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="289.77 378.85 283.56 390.38 288.87 390.38 295.09 378.85 289.77 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="271.88 378.85 265.67 390.38 270.99 390.38 277.2 378.85 271.88 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="262.94 378.85 256.72 390.38 262.04 390.38 268.25 378.85 262.94 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="298.71 378.85 292.5 390.38 297.82 390.38 304.03 378.85 298.71 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="431.99 390.38 438.2 378.85 432.88 378.85 426.67 390.38 431.99 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="397.1 378.85 390.89 390.38 396.21 390.38 402.42 378.85 397.1 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="48.27 378.85 42.05 390.38 47.37 390.38 53.58 378.85 48.27 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="280.82 378.85 274.61 390.38 279.93 390.38 286.14 378.85 280.82 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="21.43 378.85 15.22 390.38 20.54 390.38 26.75 378.85 21.43 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="44.64 378.85 39.32 378.85 33.11 390.38 38.43 390.38 44.64 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="30.38 378.85 24.16 390.38 29.48 390.38 35.7 378.85 30.38 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="449.88 390.38 456.09 378.85 450.77 378.85 444.56 390.38 449.88 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="307.66 378.85 301.44 390.38 306.76 390.38 312.98 378.85 307.66 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="458.82 390.38 465.03 378.85 459.72 378.85 453.5 390.38 458.82 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="467.77 390.38 473.98 378.85 468.66 378.85 462.45 390.38 467.77 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="253.99 378.85 247.78 390.38 253.1 390.38 259.31 378.85 253.99 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="485.65 390.38 491.87 378.85 486.55 378.85 480.34 390.38 485.65 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="245.05 378.85 238.83 390.38 244.15 390.38 250.36 378.85 245.05 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="423.04 390.38 429.26 378.85 423.94 378.85 417.72 390.38 423.04 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="406.05 378.85 399.83 390.38 405.15 390.38 411.37 378.85 406.05 378.85"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="435.61 390.38 440.93 390.38 447.14 378.85 441.83 378.85 435.61 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
                <polygon
                  points="476.71 390.38 482.92 378.85 477.6 378.85 471.39 390.38 476.71 390.38"
                  id="st4"
                  strokeWidth="0"
                  className="duration-1000"
                />
              </g>
            </g>
          </pattern>
        </defs>
        <rect fill="url(#_新規パターンスウォッチ)" strokeWidth="0" />
      </svg>
    </>
  );
};

export default TartanCheckDesign;
