#!/usr/bin/env node

require('leveldown').repair(process.cwd(), function (err) {
	if (err) {
		console.log('failed repairing db')
		console.log(err)
	} else
		console.log('database repaired')
})