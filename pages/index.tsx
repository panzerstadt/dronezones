import React, { useState } from "react";
import Head from "next/head";
import { TWGrayColors } from "../component/Neumorphic/utils";
import { Map } from "../component/Map";
import { Listing } from "../component/Listing";
import { LatLng } from "../component/Map/GoogleMap";
import { OnClickWithLatLng } from "../component/Listing/Results";

// 'THEME' lol
const bgClass: TWGrayColors = "bg-gray-200";

const DEFAULT_CENTER = { lat: 35.683470204356645, lng: 139.750344734758 };

const Home = () => {
  const [location, setLocation] = useState<LatLng>(DEFAULT_CENTER);

  const handleSetLocation = ({ e, latlng }: OnClickWithLatLng) => {
    setLocation(latlng);
  };

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
        <Map bgClass={bgClass} latlng={location} />
        <Listing bgClass={bgClass} onClick={handleSetLocation} />
      </main>
    </div>
  );
};

export default Home;
