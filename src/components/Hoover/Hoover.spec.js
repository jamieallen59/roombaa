/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Hoover, { className } from '../Hoover/Hoover'

describe('components/Hoover:', () => {
	let component

	beforeEach(() => {
		component = shallow(<Hoover />)
	})

	it('Should instantiate with a Hoover', () => {
		const hooverComponent = component.find(`.${className}`)

		expect(hooverComponent.length).to.equal(1)
	})
})
