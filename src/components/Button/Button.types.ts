export interface ButtonProps {
	variant?: 'filled' | 'outline' | 'ghost' | 'negative'
	children: React.ReactNode
	onPress: () => void
	disabled: boolean
}
