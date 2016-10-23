import React, { Component, PropTypes } from 'react'
import Cell from '../Cell/Cell'

export default class Grid extends Component {
	static propTypes = {
		roomDimensions: PropTypes.arrayOf(PropTypes.number)
	}

	constructor(props) {
		super(props)
		// Defaults to a grid of 5 x 5 cells
		const { roomDimensions = [ 5, 5 ] } = props

		this.state = {
			roomDimensions
		}
	}

	render() {
		const { roomDimensions } = this.state
		const xLength = roomDimensions[0]
		const yLength = roomDimensions[0]
		const rowContainer = []
		const grid = []

		for (let i = 0; i < xLength; i += 1) {
			rowContainer.push(<Cell />)
		}

		for (let i = 0; i < yLength; i += 1) {
			grid.push(rowContainer)
		}

		return (
			<div>
				{
					grid.map(row => (
						row.map(element => (
							element
						))
					))
				}
			</div>
		)
	}
}
