import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'

export default function Bus({ color, code, destination, distance }) {
  const [saved, setSaved] = useState(false)

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.tertiaryBackgroundColor,
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      padding: 8
    },
    code: {
      backgroundColor: color,
      borderRadius: 8,
      color: colors.primaryTextColor,
      paddingHorizontal: 8,
      paddingVertical: 4
    },
    text: {
      fontWeight: 'bold'
    },
    title: {
      fontWeight: 'bold',
      width: '100%'
    },
    highlightText: {
      color: colors.highlightColor,
      whiteSpace: 'nowrap'
    },
    button: {
      borderRadius: '50%',
      display: 'flex',
      padding: 8
    },
    icon: {
      color: colors.secondaryTextColor,
      fontSize: 24
    },
    activedIcon: {
      color: colors.highlightColor,
      fontSize: 24
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.code}>
        <Text style={styles.text}>
          {code}
        </Text>
      </View>
      <Text style={styles.title}>
        {destination}
      </Text>
      <Text style={styles.highlightText}>
        {distance}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setSaved(!saved)}>
        {saved ? (
          <Ionicons style={styles.activedIcon} name={'bookmark'} />
        ) : (
          <Ionicons style={styles.icon} name={'bookmark-outline'} />
        )}
      </TouchableOpacity>
    </View>
  )
}

