import { GoogleSpreadsheet } from "google-spreadsheet";

type GSheetsKeys =
  | "Location"
  | "alternative names"
  | "google map address"
  | "Website URL"
  | "Entry Fee"
  | "Drone Shooting Fee";

export type DBKeys =
  | "name"
  | "altName"
  | "address"
  | "url"
  | "entryFee"
  | "droneFee";

const headerToKey: { [key in GSheetsKeys]: DBKeys } = {
  Location: "name",
  "alternative names": "altName",
  "google map address": "address",
  "Website URL": "url",
  "Entry Fee": "entryFee",
  "Drone Shooting Fee": "droneFee",
};

export type DBData = { [key in DBKeys]: string };
const formatRows = (headers, rowInstance): DBData[] => {
  const rowLength = rowInstance.length;

  return Array.from(Array(rowLength)).map((_, i) => {
    return headers.reduce((acc, header) => {
      const key = headerToKey[header];
      if (!key) throw new Error("db key not found!");

      return {
        ...acc,
        [key]: rowInstance[i][header],
      };
    }, {});
  });
};

export default async (req, res) => {
  const doc = new GoogleSpreadsheet(process.env.DIPPIES_DB);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();
  const title = doc.title;
  const sheet = doc.sheetsById[process.env.DIPPIES_COLLECTION];

  await sheet.loadHeaderRow();
  const rows = await sheet.getRows();

  const headers = sheet.headerValues;
  const result = formatRows(headers, rows);

  res.status(200).json({ dbName: title, rows: rows.length, data: result });
};
