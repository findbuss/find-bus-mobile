import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { ButtonProps } from './Button.types'

export function Button({ variant = 'filled', children, onPress }: ButtonProps) {
    let buttonBackgroundColor
    let buttonTextColor

    switch (variant) {
        case 'filled':
            buttonBackgroundColor = colors.highlight
            buttonTextColor = colors.secondaryBackground
            break
        case 'outline':
            buttonBackgroundColor = colors.tertiaryBackground
            buttonTextColor = colors.primaryText
            break
        case 'ghost':
            buttonBackgroundColor = 'transparent'
            buttonTextColor = colors.secondaryBackground
            break
        case 'negative':
            buttonBackgroundColor = colors.negative
            buttonTextColor = colors.secondaryBackground
    }

    const buttonStyle = {
        ...styles.button,
        backgroundColor: buttonBackgroundColor
    }

    const textStyle = {
        ...styles.title,
        color: buttonTextColor
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 12,
        justifyContent: 'center',
        padding: 12
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})
