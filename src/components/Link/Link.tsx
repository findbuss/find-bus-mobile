import { Pressable, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../styles/colors'
import { LinkType, LinkProps } from './Link.types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function Link({ children, to }: LinkProps) {
	const navigation = useNavigation<NativeStackNavigationProp<LinkType>>()

	const handlePress = () => {
		navigation.navigate(to)
	}

	return (
		<Pressable onPress={handlePress}>
			<Text style={styles.linkText}>{children}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	linkText: {
		color: colors.highlight,
		fontSize: 14
	}
})
