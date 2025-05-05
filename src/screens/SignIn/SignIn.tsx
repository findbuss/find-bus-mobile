import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { useAuth } from '../../contexts/AuthContext'

export function SignInScreen() {
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {}

    function handleLogin() {
        login()
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <Text style={styles.title}>Fazer entrada</Text>
                <Input placeholder='E-mail' value={email} onChangeText={setEmail} />
                <Input
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <Button onPress={handleLogin}>Entrar</Button>
                <Text style={styles.paragraph}>
                    Ainda não tem uma conta? <Link to='SignUp'>Criar uma nova conta</Link>
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
