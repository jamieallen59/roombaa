import React, { Component, PropTypes } from 'react'

export default class Cell extends Component {
	static propTypes = {
		isDirty: PropTypes.bool
	}

	constructor(props) {
		super(props)
		const { isDirty = false } = props
		console.log(isDirty)
		this.state = {
			isDirty
		}
	}


	render() {
		return (
			<div>Cell</div>
		)
	}
}
