import { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationProp } from '../../navigation/AuthStackParamList'
import { useAuth } from '../../contexts/AuthContext'

export function SignUpScreen() {
	const navigation = useNavigation<AuthNavigationProp>()
	const { register, loading, error } = useAuth()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [localError, setLocalError] = useState<string | null>(null)

	async function handleRegister() {
		setLocalError(null)
		try {
			await register(name, email, password)
			navigation.navigate('SignIn')
		} catch (err) {
			setLocalError((err as Error).message)
		}
	}

	return (
		<Wrapper>
			<Text style={styles.title}>Fazer cadastro</Text>
			<Input placeholder='Nome' value={name} onChangeText={setName} />
			<Input placeholder='E-mail' value={email} onChangeText={setEmail} />
			<Input
				placeholder='Senha'
				value={password}
				onChangeText={setPassword}
				secureTextEntry={true}
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Button onPress={handleRegister} disabled={loading}>
				Cadastrar
			</Button>
			{(localError || error) && <Text style={styles.error}>{localError ?? error?.message}</Text>}
			<Text style={styles.paragraph}>
				Já tem uma conta? <Link to='SignIn'>Entrar na conta</Link>
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
