import { Text, View, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: '0.75rem',
    padding: '0.75rem'
  }
})