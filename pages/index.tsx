import React from "react";
import Head from "next/head";
import { TWGrayColors } from "../component/Neumorphic/utils";
import { Searchbar } from "../component/Listing/Searchbar";
import { Results } from "../component/Listing/Results";
import { SheetsDB } from "../component/ConnectDB/sheets";
import { Map } from "../component/Map";
import { Listing } from "../component/Listing";

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
      <main className="flex flex-col h-full gap-2 sm:flex-row">
        <Map bgClass={bgClass} />
        <Listing bgClass={bgClass} />

        <SheetsDB />
      </main>
    </div>
  );
};

export default Home;
