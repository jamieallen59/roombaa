import { expect } from 'chai'
import inputProcessor from './inputProcessor'

describe('utils/inputProcessor:', () => {
	it('Should throw an error if the input is not a string', () => {
		expect(() => inputProcessor(10)).to.throw(Error)
	})

	context('When a valid input string is received', () => {
		it('Should return an object of values', () => {
			const inputValues = '5 5 1 2 1 0 2 2 2 3 NNESEESWNWW'
			const expectedValues = {
				roomDimensions: [ '5', '5' ],
				hooverPosition: [ '1', '2' ],
				dirtPatches: [
					[ '1', '0' ],
					[ '2', '2' ],
					[ '2', '3' ]
				],
				instructions: [
					'N', 'N', 'E', 'S',
					'E', 'E', 'S', 'W',
					'N', 'W', 'W'
				]
			}

			const result = inputProcessor(inputValues)

			expect(result).to.deep.equal(expectedValues)
		})
	})
})
