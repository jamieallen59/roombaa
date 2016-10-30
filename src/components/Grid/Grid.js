import React, { Component, PropTypes } from 'react'
import isEqual from 'lodash/isEqual'
import Cell from '../Cell/Cell'
// import Hoover from '../Hoover/Hoover'

export const className = 'grid'

export default class Grid extends Component {
	static propTypes = {
		roomDimensions: PropTypes.arrayOf(PropTypes.number),
		hooverPosition: PropTypes.arrayOf(PropTypes.number),
		dirtyPatches: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		instructions: PropTypes.arrayOf(PropTypes.string)
	}

	constructor(props) {
		super(props)
		const {
			roomDimensions = [], hooverPosition = [],
			dirtyPatches = [], instructions = []
		} = props

		this.state = {
			roomDimensions,
			hooverPosition,
			dirtyPatches,
			instructions,
			hooverPath: [],
			cleanedPatches: 0
		}
	}

	componentWillReceiveProps(newProps) {
		const {
			roomDimensions, hooverPosition,
			dirtyPatches, instructions
		} = newProps

		this.setState({
			roomDimensions,
			hooverPosition,
			dirtyPatches,
			instructions
		}, this.getHooverPath)
	}

	getHooverPath = () => {
		const { hooverPosition, instructions, roomDimensions } = this.state
		const hooverPath = [ hooverPosition ]

		instructions.forEach(instruction => {
			const lastInstructionPosition = hooverPath.length - 1
			const lastInstruction = hooverPath[lastInstructionPosition]
			const xCoord = lastInstruction[0]
			const yCoord = lastInstruction[1]
			const xLimit = roomDimensions[0]
			const yLimit = roomDimensions[1]
			let currentSquare

			switch (instruction) {
			case 'N': {
				if (yCoord === yLimit) {
					currentSquare = lastInstruction
				} else {
					currentSquare = [ xCoord, yCoord + 1 ]
				}

				hooverPath.push(currentSquare)
				break
			}
			case 'S': {
				if (yCoord === 0) {
					currentSquare = lastInstruction
				} else {
					currentSquare = [ xCoord, yCoord - 1 ]
				}

				hooverPath.push(currentSquare)
				break
			}
			case 'E': {
				if (xCoord === 0) {
					currentSquare = lastInstruction
				} else {
					currentSquare = [ xCoord - 1, yCoord ]
				}

				hooverPath.push(currentSquare)
				break
			}
			case 'W': {
				if (xCoord === xLimit) {
					currentSquare = lastInstruction
				} else {
					currentSquare = [ xCoord + 1, yCoord ]
				}

				hooverPath.push(currentSquare)
				break
			}
			default: {
				return
			} }
		})

		this.setState({
			hooverPath
		}, this.calculateCleanPatches)
	}

	calculateCleanPatches = () => {
		const { hooverPath, dirtyPatches } = this.state
		let tally = 0

		hooverPath.forEach(cell => {
			dirtyPatches.forEach(dirtyPatch => {
				if (isEqual(cell, dirtyPatch)) {
					tally = tally += 1
				}
			})
		})

		this.setState({
			cleanedPatches: tally
		})
	}

	render() {
		const { roomDimensions, hooverPath } = this.state
		const xLength = roomDimensions[0]
		const yLength = roomDimensions[1]
		const rowContainer = []
		const grid = []

		// Build row full of Cells
		for (let i = 0; i < xLength; i += 1) {
			rowContainer.push(<Cell />)
		}

		// Build grid full of rows
		for (let i = 0; i < yLength; i += 1) {
			grid.push(rowContainer)
		}

		// const hasHooverPosition = hooverPosition.length
		const hooverPathFinalIndex = hooverPath.length - 1
		const finalHooverPosition = hooverPath[hooverPathFinalIndex] || []

		return (
			<div>
				{/* {
					grid.map(row => (
						row.map(element => element)
					))
				}
				{
					hasHooverPosition ? <Hoover /> : null
				} */}
				{
					finalHooverPosition.length ?
						<div className="finalPositions">
							Hoover final position.
							<div className="finalXPosition">X: { finalHooverPosition[0] }</div>
							<div className="finalYPosition">Y: { finalHooverPosition[1] }</div>
						</div>
						: null
				}
				{
					<div className="cleanedPatches">
						Cleaned patches: { this.state.cleanedPatches }
					</div>
				}
			</div>
		)
	}
}
