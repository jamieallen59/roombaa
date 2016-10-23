import React, { Component, PropTypes } from 'react'

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

		return (
			<div>Cell</div>
		)
	}
}
