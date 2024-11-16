import React, { Component, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { getBusShape } from "../../services/gtfs-api/api.services";

export default function ShapeMap({ shapeId }) {
  const [mapRegion, setMapRegion] = useState(null);
  const [busResponse, setBusResponse] = useState();

  function convertCoordinates(coordinates) {
    const arr = [];

    coordinates.map((shape, index) => {
      arr.push(
        shape.map(([longitude, latitude]) => ({
          latitude,
          longitude,
        }))
      );
    });

    return arr;
  }

  useEffect(async () => {
    if (mapRegion === null) {
      setMapRegion({
        latitude: -23.550164466,
        longitude: -46.633664132,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
    const response = await getBusShape(shapeId);

    const shapes = convertCoordinates(
      response.features[0].geometry.coordinates
    );
    setBusResponse({
      shapes: shapes,
      props: response.features[0].properties,
    });
  }, []);

  console.log(busResponse);

  return (
    <MapView region={mapRegion} style={styles.map}>
      {busResponse &&
        busResponse.shapes.map((polyline, index) => {
          return (
            <Polyline
              key={index}
              coordinates={polyline}
              strokeColor={busResponse.props.route_color || "#000"}
              strokeWidth={6}
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
