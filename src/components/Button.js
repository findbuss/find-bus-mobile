import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Button({ children, ...rest }) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.highlightColor,
    borderRadius: 12,
    justifyContent: 'center',
    padding: 12
  },
  title: {
    color: colors.secondaryBackgroundColor,
    fontSize: 14,
    fontWeight: 'bold'
  }
})