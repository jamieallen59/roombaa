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

	it('Should instantiate with a Hoover, if a position is given', () => {
		const hooverPosition = [ 1, 2 ]
		component = mount(
			<Grid hooverPosition={hooverPosition} />
		)
		const hooverComponent = component.find(Hoover)

		expect(hooverComponent.length).to.equal(1)
	})

	it('Should know the Hoovers initial position', () => {
		const hooverPosition = [ 1, 2 ]
		component = mount(
			<Grid hooverPosition={hooverPosition} />
		)
		const componentState = component.state()

		expect(componentState.hooverPosition).to.equal(hooverPosition)
	})

	it('Should know where the dirty patches are', () => {
		const dirtyPatches = [[ 1, 2 ], [ 3, 5 ]]
		component = mount(
			<Grid dirtyPatches={dirtyPatches} />
		)
		const componentState = component.state()

		expect(componentState.dirtyPatches).to.equal(dirtyPatches)
	})

	it('Should know what the instructions are for the hoover', () => {
		const instructions = ['N', 'E', 'W', 'N', 'S', 'E']
		component = mount(
			<Grid instructions={instructions} />
		)
		const componentState = component.state()

		expect(componentState.instructions).to.equal(instructions)
	})

	it('Should interpret the instructions into the path the hoover will take', () => {
		const hooverPosition = [ 1, 2 ]
		const instructions = [ 'N', 'E', 'N', 'W', 'S' ]
		component = mount(
			<Grid
				instructions={instructions}
				hooverPosition={hooverPosition}
				roomDimensions={roomDimensions}
			/>
		)
		component.instance().getHooverPath()
		const expectedResults = [
			[ 1, 2 ], [ 1, 3 ], [ 0, 3 ], [ 0, 4 ],
			[ 1, 4 ], [ 1, 3 ]
		]
		const componentState = component.state()

		expect(componentState.hooverPath).to.deep.equal(expectedResults)
	})
})
