import React, { Component, PropTypes } from 'react'

export const className = 'cell'

export default class Cell extends Component {
	static propTypes = {
		isDirty: PropTypes.bool
	}

	constructor(props) {
		super(props)
		const { isDirty = false } = props

		this.state = {
			isDirty
		}
	}

	render() {
		const { isDirty } = this.state

		return isDirty
			? <div className={`${className}__dirty`}>Dirty cell</div>
			: <div className={className}>Cell</div>
	}
}
