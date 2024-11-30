import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { getStopsByLonLat } from '../../services/gtfs-api/api.services'
import pDebounce from 'p-debounce'
import StopIcon from '../../../assets/icons/stop.png'

const stop = pDebounce(getStopsByLonLat, 300)

export default function StopsMap({ navigation }) {
    const [mapRegion, setMapRegion] = useState(null)
    const [arrStops, setArrStops] = useState()

    async function onRegionChange(region) {
        const zoomLevel = Math.log2(360 / region.longitudeDelta)

        if (zoomLevel >= 14) {
            setArrStops(await stop(region.longitude, region.latitude))
        } else {
            setArrStops(null)
        }
    }

    useEffect(() => {
        if (mapRegion === null) {
            setMapRegion({
                latitude: -23.550164466,
                longitude: -46.633664132,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
        }
    }, [])

    return (
        <MapView onRegionChange={(region) => onRegionChange(region)} region={mapRegion} style={styles.map}>
            {arrStops &&
                arrStops.features.map((marker, index) => {
                    return (
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
                    )
                })}
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
