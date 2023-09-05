const { basename } = require('path')

function getProgramArgs() {
	const nodeArgv = process.argv
	const scriptArgv = nodeArgv.slice(1)
	const scriptArgs = scriptArgv.slice(1)
	return {
		/** E.g. `your-script.js` */
		scriptName: basename(nodeArgv[1]),
		/** E.g. `arg1 arg2` */
		scriptArgs: scriptArgs,
		/** Length of `scriptArgs` */
		scriptArgCount: scriptArgs.length,

		/** E.g. `your-script.js arg1 arg2` */
		scriptArgv: scriptArgv,
		/** Length of `scriptArgv` */
		scriptArgc: scriptArgv.length,

		/** Typically `node your-script.js arg1 arg2` */
		argv: nodeArgv,
		/** Length of `argv` */
		argc: nodeArgv.length
	}
}

function parseBoolean(boolString) {
	if (typeof boolString !== 'string') {
		return false
	}
	switch (boolString.toLowerCase()) {
		case 'yes':
		case 'true':
			return true
		case 'no':
		case 'false':
			return false
		default:
			throw new Error(`Invalid boolean '${boolString}'`)
	}
}

module.exports = {
	getProgramArgs,
	parseBoolean
}
