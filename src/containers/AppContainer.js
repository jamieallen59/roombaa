import React, { Component } from 'react'

import fileUploader from '../utils/fileUploader/fileUploader'
import inputProcessor from '../utils/inputProcessor/inputProcessor'

export default class AppContainer extends Component {
	state = {
		processedInputs: {}
	}

	componentDidMount = () => {
		this.fileInput.addEventListener('change', e => {
			fileUploader(e)
				.then(userInput => {
					const processedInputs = inputProcessor(userInput)

					this.setState({ processedInputs })
				})
		})
	}

	render() {
		return (
			<div>
				<input type="file" ref={input => (this.fileInput = input)} />
			</div>
		)
	}
}
