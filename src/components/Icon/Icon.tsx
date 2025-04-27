import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleProp, TextStyle } from 'react-native'

type IconProps = {
    name: string
    size?: number
    color?: string
    style?: StyleProp<TextStyle>
}

export function Icon({ name, size = 24, color = '#000', style }: IconProps) {
    return <Ionicons name={name} size={size} color={color} style={style} />
}
