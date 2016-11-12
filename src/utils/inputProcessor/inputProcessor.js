
export const isMultipleOfTwo = num => num % 2 === 0

export const dirtPatchInputProcessor = inputs => {
	// Input must come in as an even number as the coords are in pairs
	const isInputValid = isMultipleOfTwo(inputs.length)

	if (!isInputValid) {
		throw new Error('Each dirt patch must have an x and a y coordinate')
	}

	const formattedInputs = []

	// Maps through all the dirt patches given and puts them in their own array
	// which is then places in a parent array
	inputs.map((input, index) => {
		const shouldCreateNewArray = isMultipleOfTwo(index)
		// Depending whether it is the first or second element of the coord pairs either:
		// 1) Create a new array with the first coord
		if (shouldCreateNewArray) {
			const newArray = [ input ]

			return formattedInputs.push(newArray)
		}
		// 2) Add the second coord to the latest inner array to form the pair
		const targetIndex = formattedInputs.length - 1

		return formattedInputs[targetIndex].push(input)
	})

	return formattedInputs
}

export const parsedArrayToInts = array => (
	array.map(element => parseInt(element, 10))
)

// Takes in a string as input and:
export default input => {
	if (typeof input !== 'string') {
		throw new Error('The input type must be a string')
	}
	// removes surrounding whitespace and splits by spaces
	const formattedInputs = input.trim().split(/\s+/)
	// takes the final input as the hoovers instructions
	const lastInput = formattedInputs.pop()
	// splits the hoovers instructions by letter resulting in an array of letters
	const instructions = lastInput.split('')
	// turns the remaining inputs into an array of numbers
	const inputsParsedToInts = parsedArrayToInts(formattedInputs)
	// takes the first two inputs as the room dimensions
	const roomDimensions = inputsParsedToInts.slice(0, 2)
	// takes the first third and fourth inputs as the hoovers position
	const hooverPosition = inputsParsedToInts.slice(2, 4)
	// takes the remaining elements as the patches of dirt
	const remainingElements = inputsParsedToInts.slice(4)
	const dirtyPatches = dirtPatchInputProcessor(remainingElements)

	return {
		roomDimensions,
		hooverPosition,
		dirtyPatches,
		instructions
	}
}
