import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { MapProps } from './Map.types'

export function Map({ latitude, longitude }: MapProps) {
	const initialRegion = {
		latitude: -23.55052,
		longitude: -46.633308,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	}

	return (
		<MapView style={styles.map} initialRegion={initialRegion}>
			<Marker coordinate={{ latitude: latitude, longitude: longitude }} />
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	}
})
