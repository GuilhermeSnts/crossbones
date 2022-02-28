import { green, red } from "kolorist";
import fs from "fs-extra";
import { HOME_PATH, EXTENSIONS_DIRNAME } from "../constants.js";
import path from "path";

const log = console.log;

function init(program) {
  program
    .command("add <templateName> <destinyName>")
    .option("-d, --directory <dir>")
    .action(addCommand);
}

export const addCommand = async (templateName, destinyName,options) => {
  try {
    const sourcePath = path.join(
      HOME_PATH,
      EXTENSIONS_DIRNAME,
      "add",
      templateName
    );
    const destinyPath = path.join(options.directory, destinyName);
    
    fs.ensureDirSync(destinyPath)
    fs.copySync(sourcePath, destinyPath, {overwrite: true});
    
    log(green(`✅ ${templateName} was created! \n`));
  
  } catch (error) {
    log(red(JSON.stringify(error)))
  }
};

export default init;
