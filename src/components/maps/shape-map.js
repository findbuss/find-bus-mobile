import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { getBusShape, getStopsByRouteId } from '../../services/gtfs-api/api.services'
import StopIcon from '../../../assets/icons/stop.png'

export default function ShapeMap({ shapeId, navigation }) {
    const [mapRegion, setMapRegion] = useState({
        latitude: -23.550164466,
        longitude: -46.633664132,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    const [busResponse, setBusResponse] = useState(null)
    const [stops, setStops] = useState(null)
    const [showMarkers, setShowMarkers] = useState(false)

    // Converte coordenadas do formato da API para o formato esperado pelo MapView
    const convertCoordinates = (coordinates) =>
        coordinates.map((shape) =>
            shape.map(([longitude, latitude]) => ({
                latitude,
                longitude
            }))
        )

    async function getLineStops(routeId) {
        const stops = await getStopsByRouteId(routeId)

        setStops(stops)
    }

    useEffect(() => {
        let isMounted = true // Para evitar atualizações em componentes desmontados
        const fetchBusShape = async () => {
            try {
                const response = await getBusShape(shapeId)

                if (!isMounted) return // Evita setState se o componente foi desmontado

                const shapes = convertCoordinates(response.features[0].geometry.coordinates)

                setBusResponse({
                    shapes,
                    props: response.features[0].properties
                })
                getLineStops(response.features[0].properties.route_id)

                // Calcular a região que engloba todas as coordenadas do shape
                const allCoordinates = shapes.flat()
                const minLat = Math.min(...allCoordinates.map((coord) => coord.latitude))
                const maxLat = Math.max(...allCoordinates.map((coord) => coord.latitude))
                const minLon = Math.min(...allCoordinates.map((coord) => coord.longitude))
                const maxLon = Math.max(...allCoordinates.map((coord) => coord.longitude))

                setMapRegion({
                    latitude: (minLat + maxLat) / 2,
                    longitude: (minLon + maxLon) / 2,
                    latitudeDelta: maxLat - minLat + 0.01, // Adiciona um pequeno buffer
                    longitudeDelta: maxLon - minLon + 0.01 // Adiciona um pequeno buffer
                })
            } catch (error) {
                console.error('Erro ao buscar shape:', error)
            }
        }

        fetchBusShape()

        return () => {
            // Cleanup do efeito para evitar problemas de destruição
            isMounted = false
            setBusResponse(null) // Limpa o estado do mapa para evitar resquícios
        }
    }, [shapeId])

    const handleRegionChangeComplete = (region) => {
        setMapRegion(region)

        // Defina o nível de zoom desejado para exibir os marcadores
        const zoomLevel = Math.log2(360 / region.longitudeDelta)

        if (zoomLevel >= 15) {
            setShowMarkers(true)
        } else {
            setShowMarkers(false)
        }
    }

    return (
        <MapView region={mapRegion} style={styles.map} onRegionChangeComplete={handleRegionChangeComplete}>
            {busResponse &&
                busResponse.shapes.map((polyline, index) => (
                    <Polyline
                        key={index}
                        coordinates={polyline}
                        strokeColor={busResponse.props.route_color || '#000'}
                        strokeWidth={6}
                    />
                ))}
            {showMarkers &&
                stops &&
                stops.features.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: marker.geometry.coordinates[1],
                            longitude: marker.geometry.coordinates[0]
                        }}
                        title={marker.properties.stop_name}
                        image={StopIcon}
                        onPress={() => {
                            navigation.navigate('StopLines', {
                                stopId: marker.properties.stop_id
                            })
                        }}
                    />
                ))}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
})
