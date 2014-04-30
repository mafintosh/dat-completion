#!/usr/bin/env node

var tab = require('tabalot');
var noop = function() {};

tab('cat')
	(noop)

tab('dump')
	(noop)

tab('import')
	('--json')
	('--csv')
	('--primary')
	('--newline')
	('@file')
	(noop)

tab('serve')
	('--port')
	(noop)

tab('push')
	(noop)

tab('pull')
	('--live')
	(noop)

tab('clone')
	(noop)

tab('backend')
	(noop)

tab('help')
	(noop)

tab()
	(function(opts) {
		tab.completion({
			bin: 'dat',
			save: opts.save,
			install: 'dat-completion',
			completion: 'dat-completion'
		});
	})

tab.parse();