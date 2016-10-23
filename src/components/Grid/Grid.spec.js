/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Grid from './Grid'

describe('components/Grid:', () => {
	let component

	beforeEach(() => {
		const roomDimensions = [ 7, 7 ]

		component = shallow(<Grid roomDimensions={roomDimensions} />)
	})

	it('Should instantiate with a grid of cells', () => {

	})
})
