import { View, Text, TouchableOpacity, Pressable, GestureResponderEvent, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../styles/colors'
import { BusProps } from './Bus.types'

export function Bus({ data, saved, onPress, onToggleSave }: BusProps) {
    const handleSave = (e: GestureResponderEvent) => {
        e.stopPropagation()

        onToggleSave?.()
    }

    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <View style={[styles.code, { backgroundColor: data.route_color }]}>
                <Text style={[styles.text, { color: data.route_text_color }]}>{data.route_id}</Text>
            </View>
            <Text style={styles.title}>{data.route_long_name}</Text>
            <Text style={styles.highlightText}>{data.next_bus}</Text>
            <Pressable style={styles.button} onPress={handleSave}>
                {saved ? (
                    <Ionicons style={styles.activedIcon} name='bookmark' />
                ) : (
                    <Ionicons style={styles.icon} name='bookmark-outline' />
                )}
            </Pressable>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.tertiaryBackground,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        padding: 8
    },
    code: {
        borderRadius: 8,
        color: colors.primaryText,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    text: {
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        flex: 1
    },
    highlightText: {
        color: colors.highlight
    },
    button: {
        borderRadius: 50,
        display: 'flex',
        padding: 8
    },
    icon: {
        color: colors.secondaryText,
        fontSize: 24
    },
    activedIcon: {
        color: colors.highlight,
        fontSize: 24
    }
})
