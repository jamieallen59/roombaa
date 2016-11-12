/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import testdom from 'testdom'
import Grid from './Grid'

testdom('<html><body></body></html>')

describe('components/Grid:', () => {
	let component
	let roomDimensions

	beforeEach(() => {
		roomDimensions = [ 7, 7 ]

		component = mount(<Grid roomDimensions={roomDimensions} />)
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
		const dirtyPatches = [ [ 1, 2 ], [ 3, 5 ] ]
		component = mount(
			<Grid dirtyPatches={dirtyPatches} />
		)
		const componentState = component.state()

		expect(componentState.dirtyPatches).to.equal(dirtyPatches)
	})

	it('Should know what the instructions are for the hoover', () => {
		const instructions = [ 'N', 'E', 'W', 'N', 'S', 'E' ]
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

	it('Should take the constraints of the room into account', () => {
		roomDimensions = [ 3, 3 ]
		const hooverPosition = [ 1, 2 ]
		const instructions = [ 'N', 'E', 'E', 'N', 'S' ]
		component = mount(
			<Grid
				instructions={instructions}
				hooverPosition={hooverPosition}
				roomDimensions={roomDimensions}
			/>
		)
		component.instance().getHooverPath()
		const expectedResults = [
			[ 1, 2 ], [ 1, 3 ], [ 0, 3 ], [ 0, 3 ],
			[ 0, 3 ], [ 0, 2 ]
		]
		const componentState = component.state()

		expect(componentState.hooverPath).to.deep.equal(expectedResults)
	})

	it('Should display the final position of the Hoover', () => {
		roomDimensions = [ 3, 3 ]
		const hooverPosition = [ 1, 2 ]
		const instructions = [ 'N', 'E', 'E', 'N', 'S' ]
		const dirtyPatches = [ [ 1, 3 ], [ 0, 4 ] ]

		component = mount(<Grid />)

		component.instance().componentWillReceiveProps({
			instructions,
			hooverPosition,
			roomDimensions,
			dirtyPatches
		})

		const finalXPositionElement = component.find('.finalXPosition')
		const finalYPositionElement = component.find('.finalYPosition')

		expect(finalXPositionElement.text()).to.equal('X: 0')
		expect(finalYPositionElement.text()).to.equal('Y: 2')
	})

	it('Should display the number of patches of dirt that were cleand', () => {
		const hooverPosition = [ 1, 2 ]
		const instructions = [ 'N', 'E', 'E', 'N', 'S' ]
		const dirtyPatches = [ [ 1, 3 ], [ 0, 4 ] ]
		component = mount(<Grid />)

		component.instance().componentWillReceiveProps({
			instructions,
			hooverPosition,
			roomDimensions,
			dirtyPatches
		})

		const cleanedPatchesElement = component.find('.cleanedPatches')

		expect(cleanedPatchesElement.text()).to.equal('Cleaned patches: 2')
	})
})
