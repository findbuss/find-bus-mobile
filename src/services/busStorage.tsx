import AsyncStorage from '@react-native-async-storage/async-storage'
import { BusType } from '../components/Bus/Bus.types'

const STORAGE_KEY = 'BUS_STATE'

const mockData: BusType[] = [
	{
		route_id: '233C-10',
		route_color: '#FFD100',
		route_text_color: '#000000',
		route_long_name: 'Ceret',
		next_bus: '5 min',
		saved: true
	},
	{
		route_id: '407L-10',
		route_color: '#DA291C',
		route_text_color: '#FFFFFF',
		route_long_name: 'Barro Branco',
		next_bus: '5 min',
		saved: false
	}
]

export async function saveBuses(buses: BusType[]) {
	try {
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(buses))
	} catch (err) {
		console.error('Erro ao salvar ônibus:', err)
	}
}

export async function loadBuses(): Promise<BusType[]> {
	try {
		const stored = await AsyncStorage.getItem(STORAGE_KEY)
		if (stored) return JSON.parse(stored)
		await saveBuses(mockData)
		return mockData
	} catch (err) {
		console.error('Erro ao carregar ônibus:', err)
		return []
	}
}

export async function toggleBusSaved(route_id: string): Promise<void> {
	try {
		const buses = await loadBuses()
		const updated = buses.map(bus => (bus.route_id === route_id ? { ...bus, saved: !bus.saved } : bus))
		await saveBuses(updated)
	} catch (err) {
		console.error(`Erro ao alternar status do ônibus ${route_id}:`, err)
	}
}
