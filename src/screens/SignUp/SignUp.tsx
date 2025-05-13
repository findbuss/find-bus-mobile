import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationProp } from '../../navigation/AuthStackParamList'

export function SignUpScreen() {
	const navigation = useNavigation<AuthNavigationProp>()

	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registerUser = () => {}

	function handleRegister() {
		navigation.navigate('SignIn')
	}

	return (
		<Wrapper>
			<View style={styles.container}>
				<Text style={styles.title}>Fazer cadastro</Text>
				<Input placeholder='Nome' value={displayName} onChangeText={setDisplayName} />
				<Input placeholder='E-mail' value={email} onChangeText={setEmail} />
				<Input placeholder='Senha' value={password} onChangeText={setPassword} secureTextEntry={true} autoCorrect={false} autoCapitalize='none' />
				<Button onPress={handleRegister}>Cadastrar</Button>
				<Text style={styles.paragraph}>
					Já tem uma conta? <Link to='SignIn'>Entrar na conta</Link>
				</Text>
			</View>
		</Wrapper>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 12,
		justifyContent: 'center',
		padding: 12
	},
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
