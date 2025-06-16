import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'

export function ProfileScreen() {
	const { user, isAuthenticated, logout } = useAuth()
	const navigation = useNavigation()

	const handleLogout = async () => {
		await logout()
	}

	const handleLogin = () => {
		// Navegar para tela de login - você pode implementar isso como um modal ou nova tela
		console.log('Ir para login')
	}

	return (
		<Wrapper>
			<View style={styles.contentArea}>
				<Avatar username={user?.name || 'Visitante'} size={96} />
				<Text style={styles.title}>{user?.name || 'Visitante'}</Text>
				<Text style={styles.email}>{user?.email || 'Não logado'}</Text>
			</View>
			<Card title={isAuthenticated ? 'Configurações' : 'Entre na sua conta'}>
				<View style={styles.cardContentArea}>
					{isAuthenticated ? (
						<Button variant='negative' onPress={handleLogout}>
							Sair
						</Button>
					) : (
						<View style={styles.loginButtons}>
							<Button onPress={handleLogin}>
								Entrar
							</Button>
							<Text style={styles.guestText}>
								Você pode usar o app como visitante ou fazer login para acessar recursos adicionais.
							</Text>
						</View>
					)}
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
	email: {
		color: colors.secondaryText,
		fontSize: 16,
		textAlign: 'center'
	},
	cardContentArea: {
		flex: 1,
		justifyContent: 'space-between'
	},
	loginButtons: {
		gap: 16
	},
	guestText: {
		color: colors.secondaryText,
		fontSize: 14,
		textAlign: 'center',
		lineHeight: 20
	}
})
