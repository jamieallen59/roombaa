export default event => (
	new Promise((resolve, reject) => {
		if (event.target.files.length) {
			const fr = new window.FileReader()

			fr.onload = file => {
				const { result } = file.target

				resolve(result)
			}
			fr.readAsText(event.target.files[0])
		} else {
			reject('There was an error uploading your file')
		}
	})
)
