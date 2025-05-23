import { apiFetch } from './api'
import { DataType, DataMap } from './api.types'

export const getSaved = <T extends DataType>(type: T) => apiFetch<DataMap[T]>(`/saved/${type}`)
