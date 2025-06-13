import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Map, SearchBar } from '../../../components'
import { colors } from '../../../styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

export function MapScreen() {
	const [query, setQuery] = useState<string>('')

	const getStops = () => {}
	const saveStop = () => {}
	const getLinesByStopId = () => {}
	const saveLine = () => {}
	const getShapeById = () => {}
	const getBusPositionByLineId = () => {}

	const latitude = -23.55052
	const longitude = -46.633308

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.floatingContent}>
					<SearchBar value={query} onChangeText={value => setQuery(value)} />
				</View>
				<Map latitude={latitude} longitude={longitude} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBackground,
		flex: 1
	},
	content: {
		flex: 1,
		position: 'relative'
	},
	floatingContent: {
		display: 'flex',
		gap: 16,
		paddingHorizontal: 16,
		paddingTop: 16,
		position: 'absolute',
		width: '100%',
		zIndex: 1
	}
})
