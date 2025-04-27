import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { ChipBarProps } from './ChipBar.types'

export function ChipBar({ selectedOption = 0, data, onChangeTab }: ChipBarProps) {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    {data.map((item, i) => (
                        <TouchableOpacity
                            style={selectedOption === i ? styles.activedChip : styles.chip}
                            onPress={() => onChangeTab(i)}
                            key={i}
                        >
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
        backgroundColor: colors.highlight,
        borderRadius: 24,
        display: 'flex',
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    chip: {
        backgroundColor: 'transparent',
        borderColor: colors.border,
        borderRadius: 24,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    activedText: {
        color: colors.secondaryBackground
    },
    text: {
        color: colors.primaryText
    }
})
