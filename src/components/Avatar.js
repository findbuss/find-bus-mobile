import { Image, View, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Avatar({ imageURL, username, size = 32 }) {
    const getInitials = (name) => {
        if (!name) return ''
        const nameParts = name.split(' ')
        return nameParts
            .map((part) => part[0])
            .join('')
            .toUpperCase()
    }

    const initials = getInitials(username)

    return imageURL ? (
        <Image source={{ uri: imageURL }} style={[styles.image, { width: size, height: size }]} />
    ) : (
        <View style={[styles.initialsContainer, { width: size, height: size }]}>
            <Text style={[styles.initials, { fontSize: Math.max(size / 2, 14) }]}>{initials || '?'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    initialsContainer: {
        alignItems: 'center',
        backgroundColor: colors.highlightColor,
        borderRadius: 50,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    initials: {
        color: colors.secondaryBackgroundColor,
        fontWeight: 'bold'
    },
    image: {
        borderRadius: 50,
        resizeMode: 'cover'
    }
})
