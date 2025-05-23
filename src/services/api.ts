const baseUrl = process.env.API_URL

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
	const response = await fetch(`${baseUrl}${path}`, {
		headers: {
			'Content-Type': 'application/json',
			...(options?.headers || {})
		},
		...options
	})

	if (!response.ok) {
		const error = await response.text()

		throw new Error(error || 'API request failed')
	}

	return response.json()
}
