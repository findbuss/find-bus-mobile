import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Wrapper from '../../components/Wrapper'
import SearchBar from '../../components/SearchBar'
import ChipBar from '../../components/ChipBar'
import Card from '../../components/Card'
import Bus from '../../components/Bus'
import Stop from '../../components/Stop'

export default function Home({ navigation }) {
    const [selectedTab, setSelectedTab] = useState(0)

    const tabs = [
        {
            title: 'Linhas'
        },
        {
            title: 'Paradas'
        }
    ]

    const buses = [
        {
            route_id: '233C-10',
            shape_id: 59558,
            route_color: '#FFD100',
            route_text_color: '#000000',
            trip_id: '233C-10-0',
            route_long_name: 'Ceret',
            next_bus: '5 min'
        },
        {
            route_id: '407L-10',
            shape_id: 80728,
            route_color: '#DA291C',
            route_text_color: '#FFFFFF',
            trip_id: '407L-10-0',
            route_long_name: 'Barro Branco',
            next_bus: '5 min'
        }
    ]

    const stops = [
        {
            stop_id: '233C-10',
            shape_id: 59558,
            stop_color: '#FFD100',
            stop_text_color: '#000000',
            trip_id: '233C-10-0',
            stop_long_name: 'Ceret'
        },
        {
            stop_id: '407L-10',
            shape_id: 80728,
            stop_color: '#DA291C',
            stop_text_color: '#FFFFFF',
            trip_id: '407L-10-0',
            stop_long_name: 'Barro Branco'
        }
    ]

    let data

    switch (selectedTab) {
        case 0:
            data = buses
            break
        case 1:
            data = stops
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <SearchBar navigation={navigation} />
                <Card title={`Recentes`}>
                    <View style={styles.itemArea}>
                        <ChipBar data={tabs} selectedOption={selectedTab} onChangeTab={setSelectedTab} />
                        {data &&
                            data.map((item, i) => {
                                switch (selectedTab) {
                                    case 0:
                                        return <Bus key={i} data={item} />
                                    case 1:
                                        return <Stop key={i} data={item} />
                                }
                            })}
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
    itemArea: {
        display: 'flex',
        gap: 12
    }
})
