import { Text, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'

export default function Profile() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Button onPress={() => {}}>Fazer logout</Button>
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