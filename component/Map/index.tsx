import React from "react";
import { Container } from "../Neumorphic/Container";
import { TWGrayColors } from "../Neumorphic/utils";
import { GMap, LatLng } from "./GoogleMap";

interface Props {
  bgClass: TWGrayColors;
  latlng?: LatLng;
}
export const Map: React.FC<Props> = ({ bgClass, latlng }) => {
  return (
    <div className="flex items-center w-full h-full p-6">
      <Container
        distance={5}
        bordered
        inset
        bgColor={bgClass}
        roundedClass="rounded-2xl"
      >
        <GMap latlng={latlng} />
      </Container>
    </div>
  );
};
