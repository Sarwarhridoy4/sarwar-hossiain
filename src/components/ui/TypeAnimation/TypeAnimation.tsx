"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ sequences, speed, style, repeat }) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper='span'
      speed={speed}
      style={style}
      repeat={repeat}
    />
  );
};

export default TypingAnimation;
