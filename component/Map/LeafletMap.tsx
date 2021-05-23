import Head from "next/head";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

/**
 * when exporting this component, use dynamic imports because SSR in nextjs will break this code
 *
 * // import dynamic from "next/dynamic";
 * // const Map = dynamic(() => import("../component/Map/LeafletMap"), {
 * //   ssr: false,
 * // });
 */
export default () => {
  return (
    <div className="w-full h-full">
      <Head>
        {/* leaflet map. remove if only using google maps */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script>
        {/* end of leaflet map */}
      </Head>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
