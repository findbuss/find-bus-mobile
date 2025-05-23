import { apiFetch } from './api'
import { DataType, DataMap } from './api.types'

export const getRecents = <T extends DataType>(type: T) => apiFetch<DataMap[T]>(`/recents/${type}`)
