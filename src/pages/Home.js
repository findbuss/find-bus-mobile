import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <Card>
        <Text>Bem-vindo de volta!</Text>
      </Card>
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