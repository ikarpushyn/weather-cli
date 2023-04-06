#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess('token saved');
	} catch (e) {
		printError(e.message);
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);
	console.log("initCLI ~ process.argv:", process.argv)

	if (args.h) {
		printHelp();
	}

	if (args.s) {
	}

	if (args.t) {
		return saveToken('token', args.t);
	}
	// Вывести погоду
};
initCLI();
