const { parseBoolean } = require('./parse')

function fatal(message, ...args) {
	console.error('fatal: ' + message, ...args)
	process.exit(1)
}

function warn(message, ...args) {
	console.warn('warn: ' + message, ...args)
}

const isDebug = parseBoolean(process.env.DEBUG)
function debug(message, ...args) {
	if (isDebug) {
		console.debug('debug: ' + message, ...args)
	}
}

module.exports = {
	fatal,
	warn,
	debug
}
