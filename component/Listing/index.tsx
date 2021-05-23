import React from "react";
import { useGoogleSheets } from "../ConnectDB/useGoogleSheets";
import { TWGrayColors } from "../Neumorphic/utils";
import { OnClickWithLatLng, Results } from "./Results";
import { Searchbar } from "./Searchbar";

interface Props {
  bgClass: TWGrayColors;
  onClick: ({ e, latlng }: OnClickWithLatLng) => void;
}

export const Listing: React.FC<Props> = ({ bgClass, onClick }) => {
  const data = useGoogleSheets();

  // TODO: search filters the data

  return (
    <div className="flex flex-col items-center sm:pr-4 h-2/5 sm:h-full sm:w-1/4 min-w-listing">
      <Searchbar
        onChange={(e) => console.log(e.target.value)}
        bgClass={bgClass}
      />
      <Results data={data} onClick={onClick} />
    </div>
  );
};
