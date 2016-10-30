import React, { Component, PropTypes } from 'react'
import Cell from '../Cell/Cell'
import Hoover from '../Hoover/Hoover'

export default class Grid extends Component {
	static propTypes = {
		roomDimensions: PropTypes.arrayOf(PropTypes.number),
		hooverPosition: PropTypes.arrayOf(PropTypes.number),
		dirtyPatches: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		instructions: PropTypes.arrayOf(PropTypes.number)
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
			instructions
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
		})
	}

	getHooverPath = () => {
		const { hooverPosition, instructions } = this.state
		const hooverPath = [ hooverPosition ]

		instructions.forEach(instruction => {
			const lastInstructionPosition = hooverPath.length - 1
			const lastInstruction = hooverPath[lastInstructionPosition]
			const xCoord = lastInstruction[0]
			const yCoord = lastInstruction[1]

			switch (instruction) {
			case 'N': {
				const currentSquare = [
					xCoord, yCoord + 1
				]
				hooverPath.push(currentSquare)
				break
			}
			case 'S': {
				const currentSquare = [
					xCoord, yCoord - 1
				]
				hooverPath.push(currentSquare)
				break
			}
			case 'E': {
				const currentSquare = [
					xCoord - 1, yCoord
				]
				hooverPath.push(currentSquare)
				break
			}
			case 'W': {
				const currentSquare = [
					xCoord + 1, yCoord
				]
				hooverPath.push(currentSquare)
				break
			}
			default: {
				return
			} }
		})

		this.setState({
			hooverPath
		})
	}

	render() {
		const { roomDimensions, hooverPosition } = this.state
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

		const hasHooverPosition = hooverPosition.length

		return (
			<div>
				{
					grid.map(row => (
						row.map(element => element)
					))
				}
				{
					hasHooverPosition && <Hoover />
				}
			</div>
		)
	}
}
