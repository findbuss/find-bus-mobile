import { Text, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from '../components/Link'
import colors from '../styles/colors'

export default function SignIn() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Fazer entrada</Text>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha'/>
        <Button>Entrar</Button>
        <Link to={{ screen: 'SignUp' }}>
          Criar uma nova conta
        </Link>
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
  }
})