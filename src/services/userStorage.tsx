import AsyncStorage from '@react-native-async-storage/async-storage'

export interface UserProps {
	displayName: string
}

const STORAGE_KEY = 'USER_STATE'

const mockData: UserProps = {
	displayName: 'João Silva'
}

export async function saveUser(user: UserProps) {
	try {
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user))
	} catch (err) {
		console.error('Erro ao salvar usuário:', err)
	}
}

export async function loadUser(): Promise<UserProps | null> {
	try {
		const stored = await AsyncStorage.getItem(STORAGE_KEY)
		if (stored) return JSON.parse(stored)
		await saveUser(mockData)
		return mockData
	} catch (err) {
		console.error('Erro ao carregar usuário:', err)
		return null
	}
}
