import { Command } from "commander";
import { blue } from "kolorist";
import add from "./commands/add.js";
import init from "./commands/init.js";

const log = console.log;
const program = new Command();

program.enablePositionalOptions();

// START
log(blue("\n 🦴 Crossbones: A deadly simple cli for scaffolding files \n \n"));

// COMMANDS
add(program)
init(program)

// END
program.parse()
log("");
