import { expect } from 'chai'
import fileUploader from './fileUploader'

describe('utils/fileUploader:', () => {
	it('Should return a promise', () => {
		expect(fileUploader()).to.be.instanceOf(Promise)
	})
})
