import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'

export default function SearchBar() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <View style={isClicked ? styles.selectedContainer : styles.container}>
      <Ionicons style={styles.icon} name="search-outline"/>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        onFocus={() => {
          setIsClicked(true)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  selectedContainer: {
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: '0.75rem',
    display: 'flex',
    flexDirection: 'row',
    outline: 'auto'
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: '0.75rem',
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    fontSize: '1rem',
    padding: '0.75rem'
  },
  input: {
    outline: 'none',
    paddingRight: '0.75rem',
    paddingVertical: '0.75rem',
    width: '100%'
  }
})