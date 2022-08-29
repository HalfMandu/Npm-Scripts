// some test code...

import http from 'http';

////////////////////////////////////////

console.log('starting up...');

const arr = [1, 2, 3, 4];

for (const num of arr){
	console.log(num);
}

console.log('ddd1111');

const myFunc = () => "hola world";

////////////////////////////////////////
//Server

const server = http.createServer((req, res) => {
	res.end('Helloo from the server');
}).listen(4001);

console.log('Server is up and running');

export default server;

////////////////////////////////////////

/* const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['images/*.jpg'],
      {
        destination: 'dist/img',
        plugins: [imageminMozjpeg({quality: 50})]
      }
  );
  console.log(files);
})();
 */

////////////////////////////////////////

module.exports.someFunction = function () {
	console.log('hi');
	return 55;
};













