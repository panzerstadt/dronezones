import { DBData } from "../../pages/api/sheet-db";

const DUMMY_TEXT =
  "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip";

interface Props {
  data: DBData[];
}

export const Results: React.FC<Props> = ({ data }) => {
  const Fee = ({ label, value }) => (
    <div>
      <span>{value}</span>
      <span className="ml-1 leading-none text-xxs">{label}</span>
    </div>
  );
  return (
    <ul className="flex flex-col w-full px-4 divide-y-2 divide-gray-400">
      {data.map((row) => {
        return (
          <li className="flex flex-col justify-center h-40 p-2 text-gray-700 hover:text-black">
            <div className="cursor-default">
              <h1 className="leading-none">{row.name}</h1>
              <small className="leading-none">{row.altName}</small>
            </div>

            <div className="grid grid-cols-2 cursor-default">
              <Fee label="drone fee" value={row.droneFee} />
              <Fee label="entry fee" value={row.entryFee} />
            </div>

            <p className="overflow-hidden text-xs font-light max-h-28 ">
              {row.address}
            </p>
            <a
              className="mt-2 text-xs text-right text-gray-500 hover:text-blue-600"
              href={row.url}
              target="__blank"
              rel="noreferrer noopener"
            >
              go to website
            </a>
          </li>
        );
      })}
    </ul>
  );
};
