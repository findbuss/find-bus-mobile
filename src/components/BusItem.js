import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'

export default function BusItem({ color, code, destination, distance }) {
  const [saved, setSaved] = useState(false)

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    paddingBlock: '0.5rem'
  },
  code: {
    backgroundColor: 'yellow',
    borderRadius: '0.75rem',
    color: colors.primaryTextColor,
    padding: '0.5rem'
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
    padding: '0.5rem'
  },
  icon: {
    color: colors.secondaryTextColor,
    fontSize: '1.5rem'
  },
  activedIcon: {
    color: colors.highlightColor,
    fontSize: '1.5rem'
  }
})