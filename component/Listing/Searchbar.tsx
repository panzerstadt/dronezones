import React, { ChangeEvent } from "react";
import { Container } from "../Neumorphic/Container";
import { TWGrayColors } from "../Neumorphic/utils";

interface Props {
  bgClass: TWGrayColors;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Searchbar: React.FC<Props> = ({ bgClass, onChange }) => {
  return (
    <div className="w-full px-4 pt-10 pb-4 ">
      <Container distance={8} bgColor={bgClass} roundedClass="rounded-lg">
        <input
          onChange={onChange}
          style={{ caretColor: "white" }}
          className={`w-full h-10 h-full p-2 font-light placeholder-gray-400 transition-colors rounded-lg outline-none focus:text-gray-50 focus:bg-gray-800 focus:placeholder-gray-300 active:rounded-lg ${bgClass}`}
          placeholder="Search for dronezones"
        />
      </Container>
    </div>
  );
};
