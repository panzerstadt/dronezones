import React from "react";
import { Container } from "../Neumorphic/Container";
import { GMap } from "./GoogleMap";

export const Map = ({ bgClass }) => {
  return (
    <div className="flex items-center w-full h-full p-8">
      <Container
        distance={12}
        bordered
        inset
        bgColor={bgClass}
        roundedClass="rounded-2xl"
      >
        <GMap />
      </Container>
    </div>
  );
};
