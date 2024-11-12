import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import { isAuth, username } from '../utils/index'

export default function Avatar({ navigation, children }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(isAuth ? 'Profile' : 'SignIn')}
    >
      {children ? children : <Text style={styles.defaultText}>{username[0]}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    aspectRatio: '1/1',
    backgroundColor: colors.highlightColor,
    borderRadius: 50,
    display: 'flex',
    height: 32,
    justifyContent: 'center'
  },
  defaultText: {
    color: colors.secondaryBackgroundColor,
    fontWeight: 'bold'
  }
})