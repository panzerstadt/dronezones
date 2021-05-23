import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 35.683470204356645, lng: 139.750344734758 };

export const GMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
