export type BusType = {
	id: string
	tagColor: string
	textColor: string
	longName: string
	nextTime?: string
}

export interface BusProps {
	data: BusType
	saved: boolean
	onPress: () => void
	onToggleSave: () => void
}
