export type StopType = {
	id: string
	tagColor: string
	textColor: string
	longName: string
}

export interface StopProps {
	data: StopType
	saved: boolean
	onPress: () => void
	onToggleSave: () => void
}
