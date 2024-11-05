import { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import ProfileButton from './ProfileButton'

export default function SearchBar({ children, navigation }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <View style={isClicked ? styles.selectedContainer : styles.container}>
        <Ionicons style={styles.icon} name="search-outline"/>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          onFocus={() => setIsClicked(true)}
        />
        <ProfileButton navigation={navigation}/>
      </View>
      {isClicked && <View style={styles.search}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setIsClicked(false)}>
            <Ionicons style={styles.icon} name="arrow-back-outline"/>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            autoFocus={true}
          />
        </View>
        {children}
      </View>}
    </>
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
    paddingHorizontal: 12,
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
    paddingHorizontal: 12,
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
  },
  search: {
    backgroundColor: colors.primaryBackgroundColor,
    flex: 1,
    gap: 12,
    height: '100%',
    left: 0,
    padding: 12,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1
  }
})
