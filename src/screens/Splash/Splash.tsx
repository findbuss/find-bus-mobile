import { ActivityIndicator } from 'react-native'
import { Wrapper } from '../../components'
import { colors } from '../../styles'

export const Splash = () => {
	return (
		<Wrapper>
			<ActivityIndicator size='large' color={colors.highlight} />
		</Wrapper>
	)
}
