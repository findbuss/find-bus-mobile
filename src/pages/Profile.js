import { Alert, View, StyleSheet } from 'react-native'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import * as SecureStore from 'expo-secure-store'

export default function Profile({ navigation }) {
    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('user_id')
            Alert.alert('Logout', 'Você foi desconectado.')
            navigation.navigate('Tabs')
        } catch (error) {
            console.error('Erro ao limpar os dados de login', error)
            Alert.alert('Erro', 'Houve um problema ao tentar fazer logout.')
        }
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <Button onPress={handleLogout}>Fazer logout</Button>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 12,
        padding: 12
    }
})
