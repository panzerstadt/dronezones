import { MouseEvent } from "react";
import { DBData } from "../../pages/api/sheet-db";
import { LatLng } from "../Map/GoogleMap";

export type OnClickWithLatLng = {
  e: MouseEvent<HTMLDivElement>;
  latlng: LatLng;
};

interface Props {
  data: DBData[];
  onClick: ({ e, latlng }: OnClickWithLatLng) => void;
}

export const Results: React.FC<Props> = ({ data, onClick }) => {
  const Fee = ({ label, value }) => (
    <div>
      <span>{value}</span>
      <span className="ml-1 leading-none text-xxs">{label}</span>
    </div>
  );
  return (
    <ul className="flex flex-col w-full px-4 overflow-y-auto divide-y divide-gray-300">
      {data.map((row) => {
        return (
          <li className="flex flex-col justify-center h-40 p-2 text-gray-700 hover:text-black">
            <div
              id="clickable-area"
              onClick={(e) =>
                onClick({ e, latlng: row.latlng as unknown as LatLng })
              }
              className="cursor-pointer hover:text-purple-500"
            >
              <div>
                <h1 className="mt-1 truncate" title={row.name}>
                  {row.name}
                </h1>
                <small className="leading-none" title={row.altName}>
                  {row.altName}
                </small>
              </div>

              <div className="grid grid-cols-2 ">
                <Fee label="drone fee" value={row.droneFee} />
                <Fee label="entry fee" value={row.entryFee} />
              </div>
            </div>

            {/* TODO: add copy function */}
            <p
              className="overflow-hidden text-xs font-light max-h-28"
              title={row.address}
            >
              {row.address}
            </p>

            <a
              className={`
              mt-2 
              text-xs text-right text-gray-500 hover:text-blue-500 
              ${!row.url ? "pointer-events-none" : ""}
              `}
              href={row.url}
              target="__blank"
              rel="noreferrer noopener"
              aria-disabled={!row.url}
            >
              {row.url ? "go to website" : "no website"}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
