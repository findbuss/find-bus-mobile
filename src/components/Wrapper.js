import { View, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Wrapper({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackgroundColor,
    flex: 1
  }
})