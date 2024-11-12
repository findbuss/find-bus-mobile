import { Text, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from '../components/Link'
import colors from '../styles/colors'

export default function SignUp() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Fazer cadastro</Text>
        <Input placeholder='Nome'/>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha'/>
        <Button>Cadastrar</Button>
        <Text style={styles.paragraph}>Já tem uma conta? <Link to={{ screen: 'SignIn' }}>Criar uma nova conta</Link></Text>
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