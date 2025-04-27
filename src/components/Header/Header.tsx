import { Alert, View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Icon } from '../../components'
import * as SecureStore from 'expo-secure-store'
import { colors } from '../../styles'
import { useEffect, useState } from 'react'
import { getUser } from '../../services/backend-api/api.services'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../../navigation/AppStackParamList'

interface UserProps {
    displayName: string
}

export function Header() {
    const navigation = useNavigation<AppNavigationProp>()

    const [data, setData] = useState<UserProps>()
    
        useEffect(() => {
            async function fetchUser() {
                const userId = await SecureStore.getItemAsync('user_id')
    
                if (userId) {
                    setData(await getUser(parseInt(userId)))
                } else {
                    Alert.alert('Erro', 'Não foi possível encontrar o usuário.')
                }
            }
    
            fetchUser()
        }, [])

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Avatar username={data?.displayName} size={96} />
                <Text style={styles.title}>Olá, {data?.displayName}</Text>
            </View>
            <Button variant='ghost' onPress={() => navigation.navigate('Search')}>
                <Icon name='search-outline' />
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        gap: 12,
        justifyContent: 'space-between',
        padding: 12
    },
    contentArea: {
        alignItems: 'center',
        display: 'flex',
        gap: 8
    },
    title: {
        color: colors.primaryText,
        fontSize: 24,
        fontWeight: 'bold'
    },
})