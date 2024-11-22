import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function ChipBar({ selectedOption=0, data, onChangeTab }) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, i) => (
            <TouchableOpacity style={selectedOption === i ? styles.activedChip : styles.chip} onPress={() => onChangeTab(i)} key={i}>
              <Text style={selectedOption === i ? styles.activedText : styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  activedChip: {
    backgroundColor: colors.highlightColor,
    borderRadius: 24,
    color: colors.secondaryBackgroundColor,
    display: 'flex',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  chip: {
    backgroundColor: colors.secondaryBackgroundColor,
    border: '1px solid ' + colors.borderColor,
    borderRadius: 24,
    display: 'flex',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  activedText: {
    color: colors.secondaryBackgroundColor
  },
  text: {
    color: colors.primaryTextColor
  }
})