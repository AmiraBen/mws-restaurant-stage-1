module.exports = {
  staticFileGlobs: [
    'img/**.jpg',
    '*.html',
    'css/**.css',
    'js/**.js'
  ],
  stripPrefix: '/',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'networkFirst'
  }]
};
