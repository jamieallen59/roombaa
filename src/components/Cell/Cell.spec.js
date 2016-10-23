/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Cell, { className } from './Cell'

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

	it('By default, should render a clean cell', () => {
		const cleanCell = component.find(`.${className}`)

		expect(cleanCell).to.exist
	})

	context('When passed a prop to signify the cell being dirty', () => {
		it('Should have dirty state', () => {
			component = shallow(<Cell isDirty />)

			const componentState = component.state()
			const isDirty = componentState.isDirty

			expect(isDirty).to.be.true
		})

		it('Should render a dirty cell', () => {
			component = shallow(<Cell isDirty />)

			const dirtyCell = component.find(`.${className}__dirty`)

			expect(dirtyCell).to.exist
		})
	})
})
