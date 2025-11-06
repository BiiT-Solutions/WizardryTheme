module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en', 'es', 'nl', 'de', 'fr'],
  keysManager: {},
  /*
  LOADING LIBRARIES EXAMPLE
    scopedLibs: [
      {
        src: 'wizardry-theme/filter',
        dist: ['./src/assets/i18n/wizardry-theme/filter']
      }
    ]
*/
  scopedLibs: [
    {
      src: './projects/wizardry-theme/login',
      dist: ['./src/assets/i18n/wizardry-theme']
    },
    {
      src: './projects/wizardry-theme/table',
      dist: ['./src/assets/i18n/wizardry-theme']
    },
    {
      src: './projects/wizardry-theme/inputs',
      dist: ['./src/assets/i18n/wizardry-theme']
    },
    {
      src: './projects/wizardry-theme/info',
      dist: ['./src/assets/i18n/wizardry-theme']
    },
    {
      src: './projects/wizardry-theme/utils',
      dist: ['./src/assets/i18n/wizardry-theme']
    },
    {
      src: './projects/wizardry-theme/charts',
      dist: ['./src/assets/i18n/wizardry-theme']
    }
  ]
};
