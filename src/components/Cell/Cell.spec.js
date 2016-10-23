/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Cell from './Cell'

describe('components/Cell:', () => {
	let component

	beforeEach(() => {
		component = shallow(<Cell />)
	})

	it('By default, should instantiate as a clean cell', () => {
		const componentState = component.state()
		const isDirty = componentState.isDirty

		expect(isDirty).to.be.false
	})

	context('When passed a prop to signify the cell being dirty', () => {
		it('Should be dirty', () => {
			component = shallow(<Cell isDirty />)

			const componentState = component.state()
			const isDirty = componentState.isDirty

			expect(isDirty).to.be.true
		})
	})
})
