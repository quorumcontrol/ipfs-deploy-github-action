'use strict';

const inspectWithKind = require('inspect-with-kind');
const termSize = require('term-size');
const stringWidth = require('string-width');
const wrapAnsi = require('wrap-ansi');
const mergeOptions = require('merge-options');

const defaultWrapAnsiOption = {hard: true};

module.exports = function neatFrame(str, options) {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string to be framed with box-drawing characters, but got ${
			inspectWithKind(str)
		}.`);
	}

	// '  ┌'.length + '┐  '.length === 6
	const contentWidth = termSize().columns - 6;

	const padding = `  │${' '.repeat(contentWidth)}│`;
	const verticalBar = '─'.repeat(contentWidth);

	const wrapAnsiOption = mergeOptions(defaultWrapAnsiOption, options);

	return `  ┌${verticalBar}┐
${padding}
${wrapAnsi(str, contentWidth - 2, wrapAnsiOption).split(/\r?\n/u).map(line => `  │ ${line}${
		' '.repeat(Math.max(contentWidth - 2 - stringWidth(line), 0))
	} │`).join('\n')}
${padding}
  └${verticalBar}┘`;
};
