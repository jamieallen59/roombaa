import React, { Component } from 'react'

import fileUploader from '../utils/fileUploader/fileUploader'
import inputProcessor from '../utils/inputProcessor/inputProcessor'

import Grid from '../components/Grid/Grid'

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
		const { processedInputs } = this.state
		const { roomDimensions } = processedInputs

		return (
			<div>
				<input type="file" ref={input => (this.fileInput = input)} />
				<Grid roomDimensions={roomDimensions} />
			</div>
		)
	}
}
