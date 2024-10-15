import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import ProfileButton from '../components/ProfileButton'

export default function SearchBar({ navigation }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <View style={isClicked ? styles.selectedContainer : styles.container}>
      <Ionicons style={styles.icon} name="search-outline"/>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        onFocus={() => {
          
        }}
      />
      <ProfileButton navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  selectedContainer: {
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    outline: 'auto',
    outlineColor: colors.highlightColor,
    paddingInline: 12,
    width: '100%'
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingInline: 12,
    width: '100%'
  },
  icon: {
    fontSize: 16,
  },
  input: {
    outline: 'none',
    paddingRight: 12,
    paddingVertical: 12,
    width: '100%'
  }
})