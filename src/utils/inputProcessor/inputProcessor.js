
export const isMultipleOfTwo = num => num % 2 === 0

export const dirtPatchInputProcessor = inputs => {
	// Input must come in as an even number as the coords are in pairs
	const isInputValid = isMultipleOfTwo(inputs.length)

	if (!isInputValid) {
		throw new Error('Each dirt patch must have an x and a y coordinate')
	}

	const formattedInputs = []

	inputs.map((input, index) => {
		const shouldCreateNewArray = isMultipleOfTwo(index)
		// Depending on first or second pair or the coord pairs
		// Either:
		// 1) Create a new array with the first coord
		if (shouldCreateNewArray) {
			const newArray = [ input ]

			return formattedInputs.push(newArray)
		}
		// 2) Add the second coord to the latest inner array to form a pair
		const targetIndex = formattedInputs.length - 1

		return formattedInputs[targetIndex].push(input)
	})

	return formattedInputs
}

export const parsedArrayToInts = array => (
	array.map(element => parseInt(element, 10))
)

export default input => {
	if (typeof input !== 'string') {
		throw new Error('The input type must be a string')
	}

	const formattedInputs = input.trim().split(/\s+/)
	const lastInput = formattedInputs.pop()
	const instructions = lastInput.split('')
	const inputsParsedToInts = parsedArrayToInts(formattedInputs)
	const roomDimensions = inputsParsedToInts.slice(0, 2)
	const hooverPosition = inputsParsedToInts.slice(2, 4)
	const remainingElements = inputsParsedToInts.slice(4)
	const dirtyPatches = dirtPatchInputProcessor(remainingElements)

	return {
		roomDimensions,
		hooverPosition,
		dirtyPatches,
		instructions
	}
}
