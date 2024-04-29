"use client";

import React, { useEffect, useState } from "react";
import { letterss } from "../../data/data";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:3001')
    //   .then(res => res.json())
    //   .then(json => {
    //     setLetters(json)
    //   })
    setLetters(letterss);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          // console.log({l.key});

          return (
            <div key={l.key} className={color}>
              {l.key}{" "}
            </div>

            //   <div key={l.key} className={color}>{l.key} B</div>
          );
        })}
    </div>
  );
}
