import { useState } from 'react'
import { Text, ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native'
import { Bus } from '../Bus'
import { Card } from '../Card'
import { ChipBar } from '../ChipBar'
import { Header } from '../Header'
import { Stop } from '../Stop'
import { Wrapper } from '../Wrapper'
import { colors } from '../../styles/colors'
import { RouteProp, useRoute } from '@react-navigation/native'
import { TabsParamList } from '../../navigation/TabsParamList'
import { useRecents, useSaved } from '../../hooks/useData'
import { DataType } from '../../services/api.types'

export function ListWrapper() {
	const route = useRoute<RouteProp<TabsParamList>>()
	const tabType = route.params?.tabType
	const [tab, setTab] = useState(0)

	const isTripsTab = tab === 0
	const dataType: DataType = isTripsTab ? 'trips' : 'stops'

	const { data, loading, error } = tabType === 'recents' ? useRecents(dataType) : useSaved(dataType)

	if (loading) return <ActivityIndicator />

	return (
		<Wrapper>
			<Header />
			<Card title={tabType === 'recents' ? 'Recentes' : 'Salvos'}>
				<ChipBar data={[{ title: 'Linhas' }, { title: 'Paradas' }]} selectedOption={tab} onChangeTab={setTab} />
				<ScrollView>
					<View style={styles.itemArea}>
						{error && <Text style={styles.paragraph}>{error.message || 'Erro ao carregar os dados.'}</Text>}
						{data.length === 0 && <Text style={styles.paragraph}>Nenhum item.</Text>}
						{isTripsTab
							? data.map(trip => <Bus key={trip.id} data={trip} onPress={() => null} saved={false} onToggleSave={() => {}} />)
							: data.map(stop => <Stop key={stop.id} data={stop} onPress={() => null} saved={false} onToggleSave={() => {}} />)}
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
