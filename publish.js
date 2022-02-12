var ghpages = require('gh-pages')

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/for-nastushka/february-14.git',
  },
  function publish() {
    console.log('published')
  }
)
