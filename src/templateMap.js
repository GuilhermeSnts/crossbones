import { green, yellow, lightBlue } from 'kolorist'

export default {
  javascript: {
    config: {
      extension: 'JS',
      color: yellow
    },
    frameworks: {
      react: {
        config: {
          color: lightBlue
        },
        templates: [
          {
            title: 'Modular DDD',
            folderName: 'modular',
            repository:
              'https://github.com/GuilhermeSnts/crossbones-react-templates/tree/master/templates/js'
          }
        ]
      }
    }
  },
  typescript: {
    config: {
      extension: 'TS',
      color: lightBlue
    },
    frameworks: {
      react: {
        config: {
          color: lightBlue
        },
        templates: [
          {
            title: 'Modular DDD',
            folderName: 'modular',
            repository:
              'https://github.com/GuilhermeSnts/crossbones-react-templates/tree/master/templates/ts'
          }
        ]
      }
    }
  },
}
