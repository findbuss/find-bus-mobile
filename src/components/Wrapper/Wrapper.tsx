import { View, StyleSheet } from 'react-native'
import { WrapperProps } from './Wrapper.types'
import { colors } from '../../styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Wrapper({ children }: WrapperProps) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>{children}</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBackground,
		flex: 1
	},
	content: {
		flex: 1,
		gap: 16,
		justifyContent: 'center',
		padding: 16
	}
})
