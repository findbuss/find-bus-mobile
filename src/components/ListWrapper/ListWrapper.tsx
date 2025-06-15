import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Bus } from '../Bus'
import { Card } from '../Card'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'
import { colors } from '../../styles/colors'
import { BusType } from '../Bus/Bus.types'
import { RouteProp, useRoute } from '@react-navigation/native'
import { TabsParamList } from '../../navigation/TabsParamList'

export function ListWrapper() {
	const route = useRoute<RouteProp<TabsParamList>>()
	const { tabType } = route.params || {}

	const buses: BusType[] = [
		{
			route_id: '233C-10',
			route_color: '#FFD100',
			route_text_color: '#000000',
			route_long_name: 'Ceret',
			next_bus: '5 min'
		},
		{
			route_id: '407L-10',
			route_color: '#DA291C',
			route_text_color: '#FFFFFF',
			route_long_name: 'Barro Branco',
			next_bus: '5 min'
		}
	]

	return (
		<Wrapper>
			<Header />
			<Card title={tabType === 'recents' ? 'Recentes' : 'Salvos'}>
				<ScrollView>
					<View style={styles.itemArea}>
						{buses.length > 0 ? (
							buses.map((bus, i) => (
								<Bus key={i} data={bus} onPress={() => null} saved={false} onToggleSave={() => null} />
							))
						) : (
							<Text style={styles.paragraph}>Nenhum item recente foi encontrado.</Text>
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
