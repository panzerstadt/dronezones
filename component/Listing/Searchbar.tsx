import React from "react";
import { Container } from "../Neumorphic/Container";

export const Searchbar = ({ bgClass }) => {
  return (
    <div className="w-full px-4 pt-8 pb-6 ">
      <Container distance={5} bgColor={bgClass} roundedClass="rounded-lg">
        <input
          style={{ caretColor: "white" }}
          className={`w-full h-10 h-full p-2 font-light placeholder-gray-400 transition-colors rounded-lg outline-none focus:text-gray-50 focus:bg-gray-800 focus:placeholder-gray-300 active:rounded-lg ${bgClass}`}
          placeholder="Search for dronezones"
        />
      </Container>
    </div>
  );
};
