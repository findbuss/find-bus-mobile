import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useAuthContext } from '../../contexts/AuthContext'

export function ProfileScreen() {
	const { user, signOut } = useAuthContext()

	const handleLogout = async () => {
		signOut()
	}

	return (
		<Wrapper>
			<View style={styles.contentArea}>
				<Avatar username={user?.name} size={96} />
				<Text style={styles.title}>{user?.name}</Text>
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
