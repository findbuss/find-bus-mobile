import { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { InputProps } from './Input.types'

export function Input({ placeholder, value, onChangeText, secureTextEntry, autoCorrect, autoCapitalize }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.secondaryBackground,
        borderColor: colors.border,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: 14,
        padding: 12
    },
    inputFocused: {
        borderColor: colors.highlight
    }
})
