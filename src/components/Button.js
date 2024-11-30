import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Button({ children, variant = 'primary', ...rest }) {
    let buttonBackgroundColor
    let buttonTextColor

    switch (variant) {
        case 'primary':
            buttonBackgroundColor = colors.highlightColor
            buttonTextColor = colors.secondaryBackgroundColor
            break
        case 'secondary':
            buttonBackgroundColor = colors.tertiaryBackgroundColor
            buttonTextColor = colors.primaryTextColor
            break
        case 'error':
            buttonBackgroundColor = colors.negativeColor
            buttonTextColor = colors.secondaryBackgroundColor
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
        <TouchableOpacity style={buttonStyle} {...rest}>
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
