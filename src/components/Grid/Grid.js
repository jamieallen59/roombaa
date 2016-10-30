import React, { Component, PropTypes } from 'react'
import Cell from '../Cell/Cell'
import Hoover from '../Hoover/Hoover'

export default class Grid extends Component {
	static propTypes = {
		roomDimensions: PropTypes.arrayOf(PropTypes.number)
	}

	constructor(props) {
		super(props)
		const { roomDimensions = [] } = props

		this.state = {
			roomDimensions
		}
	}

	componentWillReceiveProps(newProps) {
		const { roomDimensions } = newProps

		this.setState({ roomDimensions })
	}

	render() {
		const { roomDimensions } = this.state
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

		return (
			<div>
				{
					grid.map(row => (
						row.map(element => element)
					))
				}
				<Hoover />
			</div>
		)
	}
}
