import React, { Component, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getStopsByLonLat } from "../../services/gtfs-api/api.services";

export default function StopsMap() {
  const [mapRegion, setMapRegion] = useState(null);
  const [arrStops, setArrStops] = useState();

  async function onRegionChange(region) {
    const stop = await getStopsByLonLat(region.longitude, region.latitude);
    setArrStops(stop);

    // setMapRegion(region);
  }

  useEffect(() => {
    if (mapRegion === null) {
      setMapRegion({
        latitude: -23.550164466,
        longitude: -46.633664132,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  return (
    <MapView
      onRegionChange={onRegionChange}
      region={mapRegion}
      style={styles.map}
    >
      {arrStops &&
        arrStops.features.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.geometry.coordinates[1],
                longitude: marker.geometry.coordinates[0],
              }}
              title={marker.properties.stop_name}
            />
          );
        })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
