/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Grid from './Grid'
import Cell from '../Cell/Cell'
import Hoover from '../Hoover/Hoover'

import testdom from 'testdom'
testdom('<html><body></body></html>')

describe('components/Grid:', () => {
	let component
	let roomDimensions

	beforeEach(() => {
		roomDimensions = [ 7, 7 ]

		component = mount(<Grid roomDimensions={roomDimensions} />)
	})

	it('Should instantiate with a grid of cells', () => {
		const cellComponents = component.find(Cell)
		const expectedNumber = roomDimensions[0] * roomDimensions[1]

		expect(cellComponents.length).to.equal(expectedNumber)
	})

	it('Should instantiate with a Hoover', () => {
		const hooverComponent = component.find(Hoover)

		expect(hooverComponent.length).to.equal(1)
	})
})
