import React from "react";
import Head from "next/head";
import { TWGrayColors } from "../component/Neumorphic/utils";
import { Searchbar } from "../component/Listing/Searchbar";
import { Results } from "../component/Listing/Results";
import { SheetsDB } from "../component/ConnectDB/sheets";
import { Map } from "../component/Map";

const Home = () => {
  const bgClass: TWGrayColors = "bg-gray-200";
  return (
    <div className={`h-screen ${bgClass}`}>
      <Head>
        <title>Dippies Map</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Poppins:wght@200;300;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col h-full gap-4 sm:flex-row">
        <Map bgClass={bgClass} />

        <div className="flex flex-col items-center h-full pr-4 sm:w-1/4 min-w-listing">
          <Searchbar bgClass={bgClass} />
          <Results />

          <SheetsDB />
        </div>
      </main>
    </div>
  );
};

export default Home;
