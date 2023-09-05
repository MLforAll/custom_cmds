const { warn } = require('./logger')

function createTrpcHttpInputObject(input) {
	const trpcInput = {}

	input.forEach((value, keyPath) => {
		let baseObject = trpcInput

		const keyPathComponents = keyPath.split('.')
		if (keyPathComponents.length < 1) {
			fatal(`invalid keypath '${keyPath}'`)
		}

		// Create "base" object (e.g. keyPath = foo.bar)
		const basePathComponent = keyPathComponents.slice(0, -1)
		for (const part of basePathComponent) {
			if (!baseObject[part]) {
				baseObject[part] = {}
			} else if (typeof baseObject[part] !== 'object' || baseObject[part] === null) {
				warn('multiple types at the same path; overwriting')
				baseObject[part] = {}
			}
			baseObject = baseObject[part]
		}

		// Set key
		const key = keyPathComponents[keyPathComponents.length - 1]
		baseObject[key] = isNaN(value) ? value : Number(value)
	})

	return {
		json: trpcInput
	}
}

function getTrpcHttpInputBody(input) {
	return JSON.stringify(createTrpcHttpInputObject(input))
}

function getTrpcHttpInputQuery(input) {
	return encodeURIComponent(getTrpcHttpInputBody(input))
}

module.exports = {
	createTrpcHttpInputObject,
	getTrpcHttpInputBody,
	getTrpcHttpInputQuery
}
