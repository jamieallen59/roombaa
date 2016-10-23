import { expect } from 'chai'
import fileUploader from './fileUploader'

describe('utils/fileUploader:', () => {
	it('Should return a promise', () => {
		expect(fileUploader()).to.be.instanceOf(Promise)
	})

	context('When it does not receive an input', () => {
		it('Should reject the promise with an error message', done => {
			fileUploader().catch(result => {
				expect(result).to.equal('There was an error uploading your file')
				done()
			})
		})
	})
})
