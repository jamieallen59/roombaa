import React, { Component } from 'react'

const fileUploader = event => (
	new Promise(resolve => {
		const fr = new window.FileReader()

		fr.onload = file => {
			const { result } = file.target

			resolve(result)
		}
		fr.readAsText(event.target.files[0])
	})
)

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
