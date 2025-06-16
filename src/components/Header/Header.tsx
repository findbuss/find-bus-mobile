import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { colors } from '../../styles'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../../navigation/AppStackParamList'

interface UserProps {
	displayName: string
}

export function Header() {
	const navigation = useNavigation<AppNavigationProp>()

	const [data, setData] = useState<UserProps>({
		displayName: 'João Silva'
	})

	return (
		<View style={styles.container}>
			<View style={styles.contentArea}>
				<Avatar username={data?.displayName} />
				{data?.displayName ? (
					<Text style={styles.title}>Olá, {data?.displayName}</Text>
				) : (
					<Text style={styles.title}>Olá</Text>
				)}
			</View>
			<Button variant='ghost' onPress={() => navigation.navigate('Search')}>
				<Icon name='search-outline' />
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		justifyContent: 'space-between'
	},
	contentArea: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		gap: 8
	},
	title: {
		color: colors.primaryText,
		fontSize: 20,
		fontWeight: 'bold'
	}
})
