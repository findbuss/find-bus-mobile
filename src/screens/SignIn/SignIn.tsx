import { useState } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useAuth } from '../../contexts/AuthContext'

export function SignInScreen() {
	const { isAuthenticated, loading, error, login } = useAuth()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleLogin() {
		await login(email, password)
	}

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	if (isAuthenticated) {
		return (
			<View style={{ padding: 20 }}>
				<Text>Você está logado!</Text>
			</View>
		)
	}

	return (
		<Wrapper>
			<Text style={styles.title}>Fazer entrada</Text>
			<Input placeholder='E-mail' value={email} onChangeText={setEmail} />
			<Input
				placeholder='Senha'
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Button onPress={handleLogin}>Entrar</Button>
			{error && <Text style={styles.error}>{error.message}</Text>}
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
	error: {
		color: colors.negative,
		textAlign: 'center'
	},
	paragraph: {
		color: colors.secondaryText,
		fontSize: 14,
		textAlign: 'center'
	}
})
