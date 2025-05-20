import { View, Text, TouchableOpacity, Pressable, GestureResponderEvent, StyleSheet } from 'react-native'
import { BusProps } from './Bus.types'
import { colors } from '../../styles/colors'
import { Icon } from '../Icon'

export function Bus({ data, saved, onPress, onToggleSave }: BusProps) {
	const handleSave = (e: GestureResponderEvent) => {
		e.stopPropagation()

		onToggleSave?.()
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={[styles.code, { backgroundColor: data.tagColor }]}>
				<Text style={[styles.text, { color: data.textColor }]}>{data.id}</Text>
			</View>
			<Text style={styles.title}>{data.longName}</Text>
			<Text style={styles.highlightText}>{data.nextTime}</Text>
			<Pressable style={styles.button} onPress={handleSave}>
				{saved ? <Icon style={styles.activedIcon} name='bookmark' /> : <Icon style={styles.icon} name='bookmark-outline' />}
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
