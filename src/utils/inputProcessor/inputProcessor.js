

export const isMultipleOfTwo = num => num % 2 === 0

export const dirtPatchInputProcessor = inputs => {
	const formattedInputs = []

	inputs.map((input, index) => {
		const shouldCreateNewArray = isMultipleOfTwo(index)

		if (shouldCreateNewArray) {
			const newArray = [ input ]

			return formattedInputs.push(newArray)
		}
		// minues one because of zero-index
		const targetIndex = formattedInputs.length - 1

		return formattedInputs[targetIndex].push(input)
	})

	return formattedInputs
}

export default input => {
	if (typeof input !== 'string') {
		throw new Error('The input type must be a string')
	}

	const formattedInput = input.trim().split(/\s+/)
	const lastInput = formattedInput.pop()
	const instructions = lastInput.split('')
	const roomDimensions = formattedInput.slice(0, 2)
	const hooverPosition = formattedInput.slice(2, 4)
	const remainingElements = formattedInput.slice(4)
	const dirtPatches = dirtPatchInputProcessor(remainingElements)

	return {
		roomDimensions,
		hooverPosition,
		dirtPatches,
		instructions
	}
}
