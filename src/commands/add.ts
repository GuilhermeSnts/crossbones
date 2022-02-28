import { Command } from "commander";
import { green, red } from "kolorist";
import { copySync, ensureDirSync } from "fs-extra";
import { HOME_PATH, EXTENSIONS_DIRNAME } from "../constants";
import path from "path";
const log = console.log;

export interface IAddArgs {
  directory: string;
}

function init(program: Command) {
  program
    .command("add <templateName>")
    .option("-d, --directory <dir>")
    .action(addCommand);
}

export const addCommand = async (templateName: string, options: IAddArgs) => {
  try {
    const sourcePath = path.join(
      HOME_PATH,
      EXTENSIONS_DIRNAME,
      "add",
      templateName
    );
    const destinyPath = path.join(options.directory, 'Teste');
    
    ensureDirSync(destinyPath)
    copySync(sourcePath, destinyPath, {overwrite: true});
    
    log(green(`✅ ${templateName} was created! \n`));
  
  } catch (error) {
    log(red(JSON.stringify(error)))
  }
};

export default init;
