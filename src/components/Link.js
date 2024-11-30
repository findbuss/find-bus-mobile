import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Link({ children, to, navigation }) {
    return (
        <TouchableWithoutFeedback style={styles.link} onPress={() => navigation.navigate(to)}>
            <Text style={styles.linkText}>{children}</Text>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    linkText: {
        color: colors.highlightColor,
        fontSize: 14,
        textAlign: 'center'
    }
})
