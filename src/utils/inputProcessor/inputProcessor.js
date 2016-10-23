

export const isMultipleOfTwo = num => num % 2 === 0

export const dirtPatchInputProcessor = inputs => {
	const isInputValid = isMultipleOfTwo(inputs.length)

	if (!isInputValid) {
		throw new Error('Each dirt patch must have an x and a y coordinate')
	}

	const formattedInputs = []

	inputs.map((input, index) => {
		const shouldCreateNewArray = isMultipleOfTwo(index)

		if (shouldCreateNewArray) {
			const newArray = [ input ]

			return formattedInputs.push(newArray)
		}
		// minus one because of zero-index
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
	const dirtyPatches = dirtPatchInputProcessor(remainingElements)

	return {
		roomDimensions,
		hooverPosition,
		dirtyPatches,
		instructions
	}
}
