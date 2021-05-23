import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const DEFAULT_CENTER = { lat: 35.683470204356645, lng: 139.750344734758 };
export type LatLng = typeof DEFAULT_CENTER;

// if google maps popover is shitty, try this one: https://www.npmjs.com/package/react-tiny-popover

export const GMap = ({ latlng = DEFAULT_CENTER }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={latlng} zoom={14}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={latlng} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
