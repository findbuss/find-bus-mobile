export interface InputProps {
    placeholder: string
    value: string
    onChangeText: React.Dispatch<React.SetStateAction<string>>
    secureTextEntry?: boolean
    autoCorrect?: boolean
    autoCapitalize?: 'none'
}
