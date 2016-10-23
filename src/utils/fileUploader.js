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

export default fileUploader
