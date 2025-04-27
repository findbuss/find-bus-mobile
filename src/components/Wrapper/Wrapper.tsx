import { SafeAreaView, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { WrapperProps } from './Wrapper.types'

export function Wrapper({ children }: WrapperProps) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBackground,
        flex: 1
    }
})
