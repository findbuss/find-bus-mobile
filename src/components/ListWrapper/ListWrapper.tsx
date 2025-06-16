import { Text, ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native'
import { Bus } from '../Bus'
import { Card } from '../Card'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'
import { colors } from '../../styles/colors'
import { RouteProp, useRoute } from '@react-navigation/native'
import { TabsParamList } from '../../navigation/TabsParamList'
import { useItems } from '../../hooks/useData'

export function ListWrapper() {
	const route = useRoute<RouteProp<TabsParamList>>()
	const tabType = route.params?.tabType

	const { items: data, loading, error } = tabType === 'recents' ? useItems('/history') : useItems('/favorites')

	if (loading) return <ActivityIndicator />

	return (
		<Wrapper>
			<Header />
			<Card title={tabType === 'recents' ? 'Recentes' : 'Salvos'}>
				<ScrollView>
					<View style={styles.itemArea}>
						{error && <Text style={styles.paragraph}>{error.message || 'Erro ao carregar os dados.'}</Text>}
						{data.length === 0 && <Text style={styles.paragraph}>Nenhum item.</Text>}
						{data.map(trip => (
							<Bus key={trip.id} data={trip} onPress={() => null} saved={false} onToggleSave={() => {}} />
						))}
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
