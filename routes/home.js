const Express = require('express');
const router = Express.Router();
// 👇 library that can generate all sorts of random data
// https://github.com/marak/Faker.js/
const faker = require('faker');

router.get('/', function (request, response) {
  response.render('home/index');
})

router.get('/about', function (request, response) {
  response.render('home/about', {faker}); // 👈 equivalent to {faker: faker}
})

router.get('/contact', function (request, response) {
  response.render('home/contact');
})

router.get('/grid-demo', function (request, response) {
  response.render('home/grid-demo');
})
module.exports = router;
