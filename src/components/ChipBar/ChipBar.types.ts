type DataType = {
    title: string
}

export interface ChipBarProps {
    selectedOption: number
    data: DataType[]
    onChangeTab: (i: number) => void
}
