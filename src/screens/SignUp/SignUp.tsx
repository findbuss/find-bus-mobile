import { useState } from 'react'
import { Alert, Text, View, StyleSheet } from 'react-native'
import { Button, Input, Link, Wrapper } from '../../components'
import { colors } from '../../styles'
import { registerUser } from '../../services/backend-api/api.services'
import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationProp } from '../../navigation/AuthStackParamList'

export function SignUpScreen() {
    const navigation = useNavigation<AuthNavigationProp>()

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        console.log(displayName, email, password)
        const userId = await registerUser(displayName, email, password)
        console.log(userId)

        if (userId) {
            try {
                await SecureStore.setItemAsync('user_id', userId.toString())
                console.log('Login bem-sucedido!')
                Alert.alert('Cadastro bem-sucedido!')

                navigation.navigate('SignIn')
            } catch (error) {
                console.error('Erro ao salvar credenciais', error)
                Alert.alert('Erro', 'Houve um problema ao tentar fazer registro.')
            }
        } else {
            Alert.alert('Erro', 'Credenciais inválidas.')
        }
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <Text style={styles.title}>Fazer cadastro</Text>
                <Input placeholder='Nome' value={displayName} onChangeText={setDisplayName} />
                <Input placeholder='E-mail' value={email} onChangeText={setEmail} />
                <Input
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
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
