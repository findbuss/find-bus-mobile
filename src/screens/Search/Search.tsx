import { useState } from 'react'
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Bus, Card, SearchBar, Wrapper } from '../../components'
import { colors } from '../../styles/colors'
import { useSearch } from '../../hooks/useSearch'

export function SearchScreen() {
	const [query, setQuery] = useState('')
	const { results: data, loading, error } = useSearch(query)

	return (
		<Wrapper>
			<SearchBar value={query} onChangeText={setQuery} />
			<Card title='Pesquisa'>
				{loading && <ActivityIndicator />}
				<ScrollView>
					<View style={styles.itemArea}>
						{error && <Text style={styles.paragraph}>{error.message || 'Erro ao carregar os dados.'}</Text>}
						{!loading && data.length === 0 && query.trim() !== '' && (
							<Text style={styles.paragraph}>Nenhum item encontrado.</Text>
						)}
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
