var nconf = require('nconf')
nconf.env();

console.log('os의 정보 확인: %s',nconf.get('OS'))