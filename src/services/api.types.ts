export interface TripFromAPI {
	id: string
	tagColor: string
	textColor: string
	longName: string
	nextTime: string
}

export interface StopFromAPI {
	id: string
	tagColor: string
	textColor: string
	longName: string
}

export type DataType = 'trips' | 'stops'

export type DataMap = {
	trips: TripFromAPI[]
	stops: StopFromAPI[]
}
