import { useState, useEffect } from 'react'

export const SampleComponent = () => {
	const [state, updateState] = useState()

	useEffect(() => {
		(async () => {
			try {
				const response = await Promise.resolve()
				updateState(response)
			} catch (e) {
				console.error(e)
			}
		})()
	}, [])

	return (
		<>
			<div>{state}</div>
		</>
	)

}

