import type { ComponentProps } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type IoniconsName = ComponentProps<typeof Ionicons>['name']

type IconProps = {
	name: IoniconsName
	size?: number
	color?: string
	style?: StyleProp<TextStyle>
}

export function Icon({ name, size = 24, color = '#000', style }: IconProps) {
	return <Ionicons name={name} size={size} color={color} style={style} />
}
