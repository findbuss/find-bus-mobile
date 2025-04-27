import { View, StyleSheet } from 'react-native'
import { Map, SearchBar, Wrapper } from '../../../components'

export function MapScreen() {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={styles.floatingContent}>
                    <SearchBar />
                </View>
                <Map />
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    floatingContent: {
        display: 'flex',
        gap: 12,
        paddingHorizontal: 12,
        paddingTop: 12,
        position: 'absolute',
        width: '100%',
        zIndex: 1
    }
})
