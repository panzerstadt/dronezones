import { useEffect, useState } from "react";

export const useGoogleSheets = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/sheet-db")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return data;
};
