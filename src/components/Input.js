import { TextInput, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Input({ ...rest }) {
  return (
    <TextInput style={styles.input} {...rest}/>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: 12,
    fontSize: 14,
    outlineColor: colors.highlightColor,
    placeholderTextColor: colors.secondaryTextColor,
    padding: 12
  }
})