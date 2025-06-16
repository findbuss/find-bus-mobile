import { useState, useCallback } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useFocusEffect, RouteProp, useRoute } from '@react-navigation/native'
import { Bus } from '../Bus'
import { Card } from '../Card'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'
import { colors } from '../../styles/colors'
import { BusType } from '../Bus/Bus.types'
import { TabsParamList } from '../../navigation/TabsParamList'
import { loadBuses, toggleBusSaved } from '../../services/busStorage'

export function ListWrapper() {
	const route = useRoute<RouteProp<TabsParamList>>()
	const { tabType } = route.params || {}

	const [buses, setBuses] = useState<BusType[]>([])
	const [loading, setLoading] = useState(true)

	useFocusEffect(
		useCallback(() => {
			let isActive = true

			const fetchData = async () => {
				const data = await loadBuses()
				if (isActive) {
					setBuses(data)
					setLoading(false)
				}
			}

			fetchData()

			return () => {
				isActive = false
			}
		}, [])
	)

	const filteredBuses = tabType === 'saved' ? buses.filter(b => b.saved) : buses

	const handleToggleSave = async (id: string) => {
		await toggleBusSaved(id)
		const updated = await loadBuses()
		setBuses(updated)
	}

	return (
		<Wrapper>
			<Header />
			<Card title={tabType === 'recents' ? 'Recentes' : 'Salvos'}>
				<ScrollView>
					<View style={styles.itemArea}>
						{loading ? (
							<Text style={styles.paragraph}>Carregando...</Text>
						) : filteredBuses.length > 0 ? (
							filteredBuses.map((bus, i) => (
								<Bus
									key={i}
									data={bus}
									saved={bus.saved}
									onToggleSave={() => handleToggleSave(bus.route_id)}
								/>
							))
						) : (
							<Text style={styles.paragraph}>
								{tabType === 'saved'
									? 'Nenhum ônibus salvo foi encontrado.'
									: 'Nenhum item recente foi encontrado.'}
							</Text>
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
