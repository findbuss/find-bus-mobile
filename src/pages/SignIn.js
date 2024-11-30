import { useState } from 'react'
import { Alert, Text, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from '../components/Link'
import colors from '../styles/colors'
import * as SecureStore from 'expo-secure-store'

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (email === 'user' && password === 'password123') {
      try {
        const userId = '123456'

        await SecureStore.setItemAsync('user_id', userId)
        console.log('Login bem-sucedido!')
        Alert.alert('Login bem-sucedido!')

        navigation.navigate('Tabs')
      } catch (error) {
        console.error('Erro ao salvar credenciais', error)
        Alert.alert('Erro', 'Houve um problema ao tentar fazer login.')
      }
    } else {
      Alert.alert('Erro', 'Credenciais inválidas.')
    }
  }

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Fazer entrada</Text>
        <Input placeholder='E-mail' value={email} onChangeText={setEmail}/>
        <Input placeholder='Senha' value={password} onChangeText={setPassword}/>
        <Button onPress={handleLogin}>Entrar</Button>
        <Text style={styles.paragraph}>Ainda não tem uma conta? <Link to='SignUp' navigation={navigation}>Criar uma nova conta</Link></Text>
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
    color: colors.primaryTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    textAlign: 'center'
  }
})