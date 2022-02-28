import { Command } from "commander";
import { blue } from "kolorist";
import add from "./commands/add";

const log = console.log;
const program = new Command();

program.enablePositionalOptions();

// init
log(blue("\n 🦴 Crossbones: A deadly simple cli for scaffolding files \n \n"));

// Commands
add(program)
program.parse()

// end
log("");
