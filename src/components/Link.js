import { StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import colors from '../styles/colors'

export default function LinkTo({ children, ...rest }) {
  return (
    <Link style={styles.link} {...rest}>
      {children}
    </Link>
  )
}

const styles = StyleSheet.create({
  link: {
    color: colors.highlightColor,
    textAlign: 'center'
  }
})