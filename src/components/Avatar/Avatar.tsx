import { Image, View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../styles/colors'
import { AvatarProps } from './Avatar.types'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../../navigation/AppStackParamList'

export function Avatar({ imageURL, username = 'Usuário', size = 40 }: AvatarProps) {
	const navigation = useNavigation<AppNavigationProp>()

	const getInitials = (name: string) => {
		if (!name) return ''

		const nameParts = name.split(' ')

		return nameParts
			.map(part => part[0])
			.join('')
			.toUpperCase()
	}

	const initials = getInitials(username)

	function handleClick() {
		navigation.navigate('Profile')
	}

	return (
		<Pressable onPress={handleClick}>
			{imageURL ? (
				<Image source={{ uri: imageURL }} style={[styles.image, { width: size, height: size }]} />
			) : (
				<View style={[styles.initialsContainer, { width: size, height: size }]}>
					<Text style={[styles.initials, { fontSize: Math.max(size / 2, 14) }]}>{initials || '?'}</Text>
				</View>
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	initialsContainer: {
		alignItems: 'center',
		backgroundColor: colors.highlight,
		borderRadius: 50,
		justifyContent: 'center',
		overflow: 'hidden'
	},
	initials: {
		color: colors.secondaryBackground,
		fontWeight: 'bold'
	},
	image: {
		borderRadius: 50,
		resizeMode: 'cover'
	}
})
