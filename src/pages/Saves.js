import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import BusItem from '../components/BusItem'

export default function Home() {
  const buses = [
    {
      color: 'yellow',
      code: '233C-10',
      destination: 'CERET',
      distance: '5 min'
    },
    {
      color: 'red',
      code: '407L-10',
      destination: 'Metro Guilhermina',
      distance: '5 min'
    }
  ]

  return (
    <View style={styles.container}>
      <SearchBar/>
      <Card>
        <Text style={styles.title}>Salvos</Text>
        <View>
          {buses.map((item) => (
            <BusItem color={item.color} code={item.code} destination={item.destination} distance={item.distance}/>
          ))}
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: '0.75rem',
    padding: '0.75rem'
  },
  title: {
    fontWeight: 'bold'
  }
})