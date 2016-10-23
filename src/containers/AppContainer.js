import React, { Component } from 'react'

import fileUploader from '../utils/fileUploader'

export default class AppContainer extends Component {
	state = {
		hooverInput: ''
	}

	componentDidMount = () => {
		this.fileInput.addEventListener('change', e => {
			fileUploader(e)
				.then(hooverInput => this.setState({ hooverInput }))
		})
	}

	render() {
		const { hooverInput } = this.state

		return (
			<div>
				<input type="file" ref={input => (this.fileInput = input)} />
				{hooverInput}
			</div>
		)
	}
}
