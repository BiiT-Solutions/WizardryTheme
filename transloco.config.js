module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en', 'es', 'nl', 'de', 'fr'],
  keysManager: {},
  /*
  LOADING LIBRARIES EXAMPLE
    scopedLibs: [
      {
        src: 'biit-ui/filter',
        dist: ['./src/assets/i18n/biit-ui/filter']
      }
    ]
*/
  scopedLibs: [
    {
      src: './projects/biit-ui/login',
      dist: ['./src/assets/i18n/biit-ui']
    },
    {
      src: './projects/biit-ui/table',
      dist: ['./src/assets/i18n/biit-ui']
    },
    {
      src: './projects/biit-ui/inputs',
      dist: ['./src/assets/i18n/biit-ui']
    },
    {
      src: './projects/biit-ui/info',
      dist: ['./src/assets/i18n/biit-ui']
    },
    {
      src: './projects/biit-ui/utils',
      dist: ['./src/assets/i18n/biit-ui']
    },
    {
      src: './projects/biit-ui/charts',
      dist: ['./src/assets/i18n/biit-ui']
    }
  ]
};
