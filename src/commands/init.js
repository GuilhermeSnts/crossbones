import prompts from 'prompts'
import download from 'github-directory-downloader'
import { green, red } from 'kolorist'

import path from 'path'
import fs from 'fs-extra'

import { HOME_PATH, EXTENSIONS_DIRNAME } from '../constants.js'
import templateMap from '../templateMap.js'
const log = console.log

function init (program) {
  program.command('init').action(initCommand)
}

export const initCommand = async (templateName, options) => {
  try {
    const destinyPath = path.join(HOME_PATH, EXTENSIONS_DIRNAME, 'add')

    const languages = Object.keys(templateMap)

    const selectedLanguage = await prompts({
      type: 'select',
      name: 'language',
      message: 'Pick a language:',
      choices: [
        ...languages.map(language => ({
          title: templateMap[language].config.color(
            `${templateMap[language].config.extension} - ${language}`
          ),
          value: language
        }))
      ]
    })

    const frameworks = Object.keys(
      templateMap[selectedLanguage.language].frameworks
    )

    const selectedFramework = await prompts({
      type: 'select',
      name: 'framework',
      message: 'Pick a framework:',
      choices: [
        ...frameworks.map(framework => ({
          title: templateMap[selectedLanguage.language].frameworks[
            framework
          ].config.color(framework),
          value: framework
        }))
      ]
    })

    fs.ensureDirSync(destinyPath)

    const templates =
      templateMap[selectedLanguage.language].frameworks[
        selectedFramework.framework
      ].templates

    for (let index = 0; index < templates.length; index++) {
      const template = templates[index]
      await download(
        template.repository,
        destinyPath
      )
    }

    log(
      green(
        `✅ ${green(selectedLanguage.language)} ${green(
          selectedFramework.framework
        )} templates was added! \n`
      )
    )

    // log(green(`✅ ${templateName} was created! \n`));
  } catch (error) {
    log(error)
  }
}

export default init
