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
		const { roomDimensions } = newProps

		this.setState({ roomDimensions })
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
