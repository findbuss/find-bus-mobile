import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { MapProps } from './Map.types'

export function Map({ latitude, longitude }: MapProps) {
	return (
		<MapView
			style={styles.map}
			region={{
				latitude,
				longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			}}
		>
			<Marker coordinate={{ latitude, longitude }} />
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	}
})
