"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program.option('--teste');
commander_1.program.parse();
const options = commander_1.program.opts();
console.log('options', options);
