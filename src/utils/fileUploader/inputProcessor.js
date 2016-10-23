export default input => {
	if (typeof input !== 'string') {
		throw new Error('The input type must be a string')
	}
}
