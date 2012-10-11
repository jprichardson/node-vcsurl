var vcsurl = require('../lib/vcsurl')
  , testutil = require('testutil');

suite('vcsurl')

test('normalize github', function() {
  T (vcsurl('git@github.com:jprichardson/string.js.git') === 'https://github.com/jprichardson/string.js')
  T (vcsurl('git://github.com/jprichardson/string.js.git') === 'https://github.com/jprichardson/string.js')
  T (vcsurl('https://github.com/jprichardson/string.js.git') === 'https://github.com/jprichardson/string.js')
})

test('normalize bitbucket', function() {
  T (vcsurl('ssh://hg@bitbucket.org/mercurialeclipse/main') === 'https://bitbucket.org/mercurialeclipse/main')
  T (vcsurl('https://bitbucket.org/mercurialeclipse/main') === 'https://bitbucket.org/mercurialeclipse/main')
  T (vcsurl('git@bitbucket.org:mirror/rails.git') === 'https://bitbucket.org/mirror/rails')
  T (vcsurl('https://bitbucket.org/mirror/rails.git') === 'https://bitbucket.org/mirror/rails')
})