import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { WrapperProps } from './Wrapper.types'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Wrapper({ children }: WrapperProps) {
	return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBackground,
		flex: 1
	}
})
