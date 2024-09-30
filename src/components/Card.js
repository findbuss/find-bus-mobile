import { View, StyleSheet } from 'react-native'

import colors from '../styles/colors'

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: '0.75rem',
    display: 'flex',
    gap: '0.5rem',
    padding: '0.75rem'
  }
})