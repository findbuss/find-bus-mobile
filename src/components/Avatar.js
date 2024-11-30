import { useState, useEffect } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as SecureStore from 'expo-secure-store'

export default function Avatar({ navigation }) {
    const username = 'João'

    const [userId, setUserId] = useState(null)

    const loadUserId = async () => {
        try {
            const storedUserId = await SecureStore.getItemAsync('user_id')

            if (storedUserId) {
                setUserId(storedUserId)
            } else {
                console.log('Nenhuma credencial encontrada no Secure Store')
            }
        } catch (error) {
            console.error('Erro ao recuperar o ID do usuário', error)
        }
    }

    useEffect(() => {
        loadUserId()
    }, [])

    return userId ? (
        <TouchableOpacity style={styles.background} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.defaultText}>{username[0]}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SignIn')}>
            <Ionicons style={styles.icon} name='person' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        aspectRatio: '1/1',
        backgroundColor: colors.tertiaryBackgroundColor,
        borderRadius: '50%',
        display: 'flex',
        height: 32,
        justifyContent: 'center'
    },
    background: {
        alignItems: 'center',
        aspectRatio: '1/1',
        backgroundColor: colors.highlightColor,
        borderRadius: '50%',
        display: 'flex',
        height: 32,
        justifyContent: 'center'
    },
    defaultText: {
        color: colors.secondaryBackgroundColor,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        color: colors.secondaryTextColor,
        fontSize: 16
    }
})
