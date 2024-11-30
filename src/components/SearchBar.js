import { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import Avatar from './Avatar'
import { getRoute } from '../services/gtfs-api/api.services'
import pDebounce from 'p-debounce'
import Bus from './Bus'

const { width, height } = Dimensions.get('window')

const searchReq = pDebounce(getRoute, 300)

export default function SearchBar({ navigation }) {
    const [isClicked, setIsClicked] = useState(false)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    async function handleSearch(search) {
        setSearch(search)

        const res = await searchReq(search)
        setSearchResult(res)
        console.log(res)
    }

    return (
        <>
            <View style={isClicked ? styles.selectedContainer : styles.container}>
                <Ionicons style={styles.icon} name='search-outline' />
                <TextInput style={styles.input} placeholder='Pesquisar' onFocus={() => setIsClicked(true)} />
                <Avatar navigation={navigation} />
            </View>
            {isClicked && (
                <View style={styles.search}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => setIsClicked(false)}>
                            <Ionicons style={styles.icon} name='arrow-back-outline' />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder='Pesquisar'
                            autoFocus={true}
                            value={search}
                            onChangeText={handleSearch}
                        />
                    </View>
                    {searchResult &&
                        searchResult.map((bus, index) => {
                            return (
                                <Bus
                                    data={{
                                        route_id: bus.route_id,
                                        route_long_name: bus.route_long_name,
                                        route_color: `#${bus.route_color}`,
                                        route_text_color: `#${bus.route_text_color}`
                                    }}
                                    onPress={() =>
                                        navigation.navigate('BusDetails', {
                                            routeId: bus.route_id
                                        })
                                    }
                                    key={index}
                                />
                            )
                        })}
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    selectedContainer: {
        alignItems: 'center',
        backgroundColor: colors.secondaryBackgroundColor,
        borderColor: colors.borderColor,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        outline: 'auto',
        outlineColor: colors.highlightColor,
        paddingHorizontal: 12,
        width: '100%'
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.secondaryBackgroundColor,
        borderColor: colors.borderColor,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 12,
        width: '100%'
    },
    icon: {
        fontSize: 16
    },
    input: {
        outline: 'none',
        paddingRight: 12,
        paddingVertical: 12,
        flex: 1
    },
    search: {
        backgroundColor: colors.primaryBackgroundColor,
        flex: 1,
        gap: 12,
        height: height,
        left: 0,
        padding: 12,
        position: 'absolute',
        top: 0,
        width: width,
        zIndex: 2
    }
})
