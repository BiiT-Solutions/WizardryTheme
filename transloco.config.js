module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en', 'es', 'nl', 'de', 'fr'],
  keysManager: {},
  /*
  LOADING LIBRARIES EXAMPLE
    scopedLibs: [
      {
        src: 'wyzardry-theme/filter',
        dist: ['./src/assets/i18n/wyzardry-theme/filter']
      }
    ]
*/
  scopedLibs: [
    {
      src: './projects/wyzardry-theme/login',
      dist: ['./src/assets/i18n/wyzardry-theme']
    },
    {
      src: './projects/wyzardry-theme/table',
      dist: ['./src/assets/i18n/wyzardry-theme']
    },
    {
      src: './projects/wyzardry-theme/inputs',
      dist: ['./src/assets/i18n/wyzardry-theme']
    },
    {
      src: './projects/wyzardry-theme/info',
      dist: ['./src/assets/i18n/wyzardry-theme']
    },
    {
      src: './projects/wyzardry-theme/utils',
      dist: ['./src/assets/i18n/wyzardry-theme']
    },
    {
      src: './projects/wyzardry-theme/charts',
      dist: ['./src/assets/i18n/wyzardry-theme']
    }
  ]
};
