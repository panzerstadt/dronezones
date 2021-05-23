import React from "react";
import { useGoogleSheets } from "../ConnectDB/useGoogleSheets";
import { Results } from "./Results";
import { Searchbar } from "./Searchbar";

export const Listing = ({ bgClass }) => {
  const data = useGoogleSheets();

  // TODO: search filters the data

  return (
    <div className="flex flex-col items-center h-full pr-4 sm:w-1/4 min-w-listing">
      <Searchbar
        onChange={(e) => console.log(e.target.value)}
        bgClass={bgClass}
      />
      <Results data={data} />
    </div>
  );
};
