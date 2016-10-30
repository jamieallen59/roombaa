/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import inputProcessor, {
	isMultipleOfTwo,
	dirtPatchInputProcessor,
	parsedArrayToInts
} from './inputProcessor'

describe('utils/inputProcessor:', () => {
	it('Should throw an error if the input is not a string', () => {
		expect(() => inputProcessor(10)).to.throw(Error)
	})

	context('When a valid input string is received', () => {
		it('Should return an object of values', () => {
			const inputValues = '5 5 1 2 1 0 2 2 2 3 NNESEESWNWW'
			const expectedValues = {
				roomDimensions: [ 5, 5 ],
				hooverPosition: [ 1, 2 ],
				dirtyPatches: [
					[ 1, 0 ],
					[ 2, 2 ],
					[ 2, 3 ]
				],
				instructions: [
					'N', 'N', 'E', 'S', 'E', 'E',
					'S', 'W', 'N', 'W', 'W'
				]
			}

			const result = inputProcessor(inputValues)

			expect(result).to.deep.equal(expectedValues)
		})
	})

	context('When multipleOfTwo is called', () => {
		it('Should return true if the argument is a multiple of two', () => {
			expect(isMultipleOfTwo(6)).to.be.true
		})

		it('Should return false if the argument is a not multiple of two', () => {
			expect(isMultipleOfTwo(5)).to.be.false
		})
	})

	context('When dirtPatchInputProcessor is called', () => {
		it('Should return an array of arrays, with two inputs in each inner array', () => {
			const inputs = [ '1', '0', '2', '2', '2', '3' ]
			const expectedResult = [ [ '1', '0' ], [ '2', '2' ], [ '2', '3' ] ]
			const result = dirtPatchInputProcessor(inputs)

			expect(result).to.deep.equal(expectedResult)
		})

		it('Should only accept an array with an even number of elements', () => {
			const inputs = [ '1', '0', '2', '2', '2' ]

			expect(() => dirtPatchInputProcessor(inputs)).to.throw(
				'Each dirt patch must have an x and a y coordinate'
			)
		})
	})

	context('When parsedArrayToInts is called with an array of strings', () => {
		it('Should return an array of integers', () => {
			const input = [ '1', '2', '3' ]
			const result = parsedArrayToInts(input)
			const expectedResult = [ 1, 2, 3 ]

			expect(result).to.deep.equal(expectedResult)
		})
	})
})
