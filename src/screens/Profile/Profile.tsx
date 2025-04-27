import { Alert, View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Wrapper } from '../../components'
import * as SecureStore from 'expo-secure-store'
import { colors } from '../../styles'
import { useEffect, useState } from 'react'
import { getUser } from '../../services/backend-api/api.services'
import { useAuth } from '../../contexts/AuthContext'

interface UserProps {
    displayName: string
}

export function ProfileScreen() {
    const { logout } = useAuth()

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

    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('user_id')
            Alert.alert('Logout', 'Você foi desconectado.')
            logout()
        } catch (error) {
            console.error('Erro ao limpar os dados de login', error)
            Alert.alert('Erro', 'Houve um problema ao tentar fazer logout.')
        }
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={styles.contentArea}>
                    <Avatar username={data?.displayName} size={96} />
                    <Text style={styles.title}>{data?.displayName}</Text>
                </View>
                <Card title='Configurações'>
                    <View style={styles.cardContentArea}>
                        <Button variant='negative' onPress={handleLogout}>
                            Sair
                        </Button>
                    </View>
                </Card>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cardContentArea: {
        flex: 1,
        justifyContent: 'space-between'
    }
})
