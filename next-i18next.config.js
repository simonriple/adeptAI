module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    localeDetection: false,
    // defaultLocale: 'default',
    defaultLocale: 'nb',
    locales: ['en', 'nb'],
  },
  trailingSlash: true,
};