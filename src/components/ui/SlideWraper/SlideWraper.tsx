"use client";

import { Slide } from "react-awesome-reveal";

const SlideWrapper = ({ direction, children }) => {
  return <Slide direction={direction}>{children}</Slide>;
};

export default SlideWrapper;
