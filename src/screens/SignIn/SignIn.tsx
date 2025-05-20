import { useState } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useAuthContext } from '../../contexts/AuthContext'

export function SignInScreen() {
	const { user, loading, signIn } = useAuthContext()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function handleLogin() {
		await signIn({ username, password })
	}

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	if (user) {
		return (
			<View style={{ padding: 20 }}>
				<Text>Welcome, {user.name}!</Text>
			</View>
		)
	}

	return (
		<Wrapper>
			<Text style={styles.title}>Fazer entrada</Text>
			<Input placeholder='E-mail' value={username} onChangeText={setUsername} />
			<Input placeholder='Senha' value={password} onChangeText={setPassword} secureTextEntry={true} autoCorrect={false} autoCapitalize='none' />
			<Button onPress={handleLogin}>Entrar</Button>
			<Text style={styles.paragraph}>
				Ainda não tem uma conta? <Link to='SignUp'>Criar uma nova conta</Link>
			</Text>
		</Wrapper>
	)
}

const styles = StyleSheet.create({
	title: {
		color: colors.primaryText,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	paragraph: {
		color: colors.secondaryText,
		fontSize: 14,
		textAlign: 'center'
	}
})
