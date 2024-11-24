import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import { isAuth, username } from '../utils/index'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Avatar({ navigation }) {
  return (
    isAuth ? (
      <TouchableOpacity style={styles.background} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.defaultText}>{username[0]}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SignIn')}>
        <Ionicons style={styles.icon} name="person" />
      </TouchableOpacity>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    aspectRatio: '1/1',
    backgroundColor: colors.tertiaryBackgroundColor,
    borderRadius: '50%',
    display: 'flex',
    height: 32,
    justifyContent: 'center'
  },
  background: {
    alignItems: 'center',
    aspectRatio: '1/1',
    backgroundColor: colors.highlightColor,
    borderRadius: '50%',
    display: 'flex',
    height: 32,
    justifyContent: 'center'
  },
  defaultText: {
    color: colors.secondaryBackgroundColor,
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    color: colors.secondaryTextColor,
    fontSize: 16
  }
})