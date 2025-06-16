export type BusType = {
	route_id: string
	route_long_name: string
	route_color: string
	route_text_color: string
	next_bus: string
	saved: boolean
}

export interface BusProps {
	data: BusType
	saved: boolean
	onPress?: () => void
	onToggleSave: () => void
}
