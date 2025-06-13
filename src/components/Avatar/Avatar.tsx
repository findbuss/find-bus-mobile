import { Image, View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../styles/colors'
import { AvatarProps } from './Avatar.types'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../../navigation/AppStackParamList'
import { AuthNavigationProp } from '../../navigation/AuthStackParamList'
import { useAuth } from '../../contexts/AuthContext'
import { Icon } from '../Icon'

export function Avatar({ imageURL, username = 'Usuário', size = 40 }: AvatarProps) {
	const appNav = useNavigation<AppNavigationProp>()
	const authNav = useNavigation<AuthNavigationProp>()
	const { isAuthenticated } = useAuth()

	const getInitials = (name: string) => {
		if (!name) return ''
		return name
			.split(' ')
			.map(part => part[0])
			.join('')
			.toUpperCase()
	}

	const initials = getInitials(username)

	function handleClick() {
		if (isAuthenticated) {
			appNav.navigate('Profile')
		} else {
			authNav.navigate('SignIn')
		}
	}

	return (
		<Pressable onPress={handleClick}>
			{isAuthenticated ? (
				imageURL ? (
					<Image source={{ uri: imageURL }} style={[styles.image, { width: size, height: size }]} />
				) : (
					<View style={[styles.initialsContainer, { width: size, height: size }]}>
						<Text style={[styles.initials, { fontSize: Math.max(size / 2, 14) }]}>{initials || '?'}</Text>
					</View>
				)
			) : (
				<View style={[styles.initialsContainer, { width: size, height: size }]}>
					<Icon name='person' size={Math.max(size / 2, 14)} color={colors.secondaryBackground} />
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
