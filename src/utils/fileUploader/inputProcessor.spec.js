import { expect } from 'chai'
import inputProcessor from './inputProcessor'

describe('utils/inputProcessor:', () => {
	it('Should throw an error if the input is not a string', () => {
		expect(() => inputProcessor(10)).to.throw(Error)
	})
})
