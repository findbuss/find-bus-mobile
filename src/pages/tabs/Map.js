import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from '../../components/SearchBar'
import StopsMap from '../../components/maps/stops-map'
import Wrapper from '../../components/Wrapper'

export default function Map({ navigation }) {
    const [busLineState, setBusLineState] = useState([])
    const [region, setRegion] = useState([])

    return (
        <Wrapper>
            <View style={styles.container}>
                <StopsMap navigation={navigation} />
                <View style={styles.floatingContent}>
                    <SearchBar navigation={navigation} />
                </View>
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
