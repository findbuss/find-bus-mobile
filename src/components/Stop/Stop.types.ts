export type StopType = {
    stop_id: string
    stop_long_name: string
    stop_color: string
    stop_text_color: string
}

export interface StopProps {
    data: StopType
    saved: boolean
    onPress: () => void
    onToggleSave: () => void
}
