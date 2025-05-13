import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

interface UserProps {
	displayName: string
}

export function ProfileScreen() {
	const { logout } = useAuth()

	const [data, setData] = useState<UserProps>()

	const handleLogout = async () => {
		logout()
	}

	return (
		<Wrapper>
			<View style={styles.contentArea}>
				<Avatar username={data?.displayName} size={96} />
				<Text style={styles.title}>{data?.displayName}</Text>
			</View>
			<Card title='Configurações'>
				<View style={styles.cardContentArea}>
					<Button variant='negative' onPress={handleLogout}>
						Sair
					</Button>
				</View>
			</Card>
		</Wrapper>
	)
}

const styles = StyleSheet.create({
	contentArea: {
		alignItems: 'center',
		display: 'flex',
		gap: 8
	},
	title: {
		color: colors.primaryText,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	cardContentArea: {
		flex: 1,
		justifyContent: 'space-between'
	}
})
