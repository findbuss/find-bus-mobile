import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  getBusShape,
  getStopDetails,
} from "../../services/gtfs-api/api.services";

export default function ShapeMap({ shapeId }) {
  const [mapRegion, setMapRegion] = useState({
    latitude: -23.550164466,
    longitude: -46.633664132,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [busResponse, setBusResponse] = useState(null);

  const [stops, setStops] = useState(null);

  async function getLineStops(routeId) {
    const stops = await getStopDetails(routeId);
    setStops(stops);
  }

  useEffect(() => {
    if (busResponse) {
      getLineStops(busResponse.props.route_id);
    }
  }, []);

  // Converte coordenadas do formato da API para o formato esperado pelo MapView
  const convertCoordinates = (coordinates) =>
    coordinates.map((shape) =>
      shape.map(([longitude, latitude]) => ({
        latitude,
        longitude,
      }))
    );

  useEffect(() => {
    let isMounted = true; // Para evitar atualizações em componentes desmontados
    const fetchBusShape = async () => {
      try {
        const response = await getBusShape(shapeId);
        if (!isMounted) return; // Evita setState se o componente foi desmontado
        const shapes = convertCoordinates(
          response.features[0].geometry.coordinates
        );
        setBusResponse({
          shapes,
          props: response.features[0].properties,
        });
      } catch (error) {
        console.error("Erro ao buscar shape:", error);
      }
    };

    fetchBusShape();

    return () => {
      // Cleanup do efeito para evitar problemas de destruição
      isMounted = false;
      setBusResponse(null); // Limpa o estado do mapa para evitar resquícios
    };
  }, [shapeId]);

  return (
    <MapView region={mapRegion} style={styles.map}>
      {busResponse &&
        busResponse.shapes.map((polyline, index) => (
          <Polyline
            key={index}
            coordinates={polyline}
            strokeColor={busResponse.props.route_color || "#000"}
            strokeWidth={6}
          />
        ))}
      {stops &&
        stops.features.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.geometry.coordinates[1],
                longitude: marker.geometry.coordinates[0],
              }}
              title={marker.properties.stop_name}
              image={StopIcon}
              onPress={() => {
                navigation.navigate("StopLines", {
                  stopId: marker.properties.stop_id,
                });
              }}
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
