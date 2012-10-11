var S = require('string');

module.exports = function vcsurl (url) {
  url = S(url);
  if (url.contains('github.com')) {
    return parseUrl(url, 'github.com');
  } else if (url.contains('bitbucket.org')) {
    return parseUrl(url, 'bitbucket.org')
  } 
} 

function parseUrl(url, site) {
  var pos = url.indexOf(site) + site.length + 1; //+1 => chop either ':' or '/'
  var repo = url.substring(pos);

  if (repo.endsWith('.git'))
    repo = repo.replaceAll('.git', '');

  var data = repo.split('/')

  return 'https://' + site.toString() + '/' + data[0] + '/' + data[1];
}