import { useState, useCallback } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Bus, Card, SearchBar, Wrapper } from '../../components'
import { colors } from '../../styles/colors'
import { BusType } from '../../components/Bus/Bus.types'
import { loadBuses, toggleBusSaved } from '../../services/busStorage'

export function SearchScreen() {
	const [query, setQuery] = useState<string>('')

	const [buses, setBuses] = useState<BusType[]>([])
	const [loading, setLoading] = useState(true)

	const fetchData = async () => {
		const data = await loadBuses()
		setBuses(data)
		setLoading(false)
	}

	useFocusEffect(
		useCallback(() => {
			let isActive = true

			const load = async () => {
				const data = await loadBuses()
				if (isActive) {
					setBuses(data)
					setLoading(false)
				}
			}

			load()

			return () => {
				isActive = false
			}
		}, [])
	)

	const handleToggleSave = async (id: string) => {
		await toggleBusSaved(id)
		await fetchData()
	}

	const filtered =
		query.length > 0
			? buses.filter(
					bus =>
						bus.route_id.toLowerCase().includes(query.toLowerCase()) ||
						bus.route_long_name.toLowerCase().includes(query.toLowerCase())
			  )
			: buses

	return (
		<Wrapper>
			<SearchBar value={query} onChangeText={value => setQuery(value)} />
			<Card title='Pesquisa'>
				<ScrollView>
					<View style={styles.itemArea}>
						{loading ? (
							<Text style={styles.paragraph}>Carregando...</Text>
						) : filtered.length > 0 ? (
							filtered.map((bus, i) => (
								<Bus
									key={i}
									data={bus}
									saved={bus.saved}
									onToggleSave={() => handleToggleSave(bus.route_id)}
									onPress={() => null}
								/>
							))
						) : (
							<Text style={styles.paragraph}>Nenhum ônibus encontrado.</Text>
						)}
					</View>
				</ScrollView>
			</Card>
		</Wrapper>
	)
}

const styles = StyleSheet.create({
	itemArea: {
		display: 'flex',
		gap: 8
	},
	paragraph: {
		color: colors.secondaryText,
		fontSize: 14,
		textAlign: 'center'
	}
})
