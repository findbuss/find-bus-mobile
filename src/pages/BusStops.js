import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import BusItem from '../components/BusItem'

export default function BusStop() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <Card>
        <Text style={styles.title}>Paradas</Text>
        <BusItem color={'yellow'} code={'233C'} destination={'Ceret'} distance={'5 min'}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: '0.75rem',
    height: '100%',
    justifyContent: 'space-between',
    padding: '0.75rem'
  },
  title: {
    fontWeight: 'bold'
  }
})