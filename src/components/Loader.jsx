import React from "react";
import { RotatingLines } from "react-loader-spinner";

export function Loader() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
}
