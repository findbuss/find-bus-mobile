import { Text, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'

export default function Profile() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>Perfil</Text>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 12,
    padding: 12
  }
})