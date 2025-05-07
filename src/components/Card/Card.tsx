import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { CardProps } from './Card.types'

export function Card({ title, children }: CardProps) {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>} 
            <View style={styles.contentArea}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryBackground,
        borderColor: colors.border,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        flex: 1,
        gap: 12,
        paddingTop: 12
    },
    title: {
        color: colors.primaryText,
        fontWeight: 'bold',
        paddingHorizontal: 12
    },
    contentArea: {
        flex: 1,
        gap: 12,
        paddingBottom: 12,
        paddingHorizontal: 12
    }
})
