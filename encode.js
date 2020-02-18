const hl = require('hashlink');
var fs = require('fs');

const argv = process.argv.slice(2)
const data = fs.readFileSync(argv[0]);

const url = argv[1]
const codecs = ['mh-sha2-256', 'mb-base58-btc'];
let experimental
const experimentalFile = fs.readFileSync('experimental.json')
if(experimentalFile.length != 0) {
  experimental = JSON.parse(experimentalFile)
}

hl.encode({ data, url, codecs, meta: {experimental} })
  .then(r => console.log(r))
