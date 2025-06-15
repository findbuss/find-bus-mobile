import { useState } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Bus, Card, ChipBar, SearchBar, Stop, Wrapper } from '../../components'
import { colors } from '../../styles/colors'
import { BusType } from '../../components/Bus/Bus.types'
import { StopType } from '../../components/Stop/Stop.types'

export function SearchScreen() {
	const [query, setQuery] = useState<string>('')
	const [selectedTab, setSelectedTab] = useState<number>(0)

	const tabs = [
		{
			title: 'Linhas'
		},
		{
			title: 'Paradas'
		}
	]

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

	const stops: StopType[] = [
		{
			stop_id: '233C-10',
			stop_color: '#FFD100',
			stop_text_color: '#000000',
			stop_long_name: 'Ceret'
		},
		{
			stop_id: '407L-10',
			stop_color: '#DA291C',
			stop_text_color: '#FFFFFF',
			stop_long_name: 'Barro Branco'
		}
	]

	const getItems = () => {
		switch (selectedTab) {
			case 0:
				return buses.map((bus, i) => (
					<Bus key={i} data={bus} onPress={() => null} saved={false} onToggleSave={() => null} />
				))
			case 1:
				return stops.map((stop, i) => (
					<Stop key={i} data={stop} onPress={() => null} saved={false} onToggleSave={() => null} />
				))
		}
	}

	const items = getItems() || []

	return (
		<Wrapper>
			<SearchBar value={query} onChangeText={value => setQuery(value)} />
			<Card title='Pesquisa'>
				<ChipBar data={tabs} selectedOption={selectedTab} onChangeTab={setSelectedTab} />
				<ScrollView>
					<View style={styles.itemArea}>
						{items.length > 0 ? (
							items
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
