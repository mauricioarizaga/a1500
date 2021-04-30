const { Router } = require('express');
const {  createString,getAllStrings  } = require('../controllers/str');
const { postRequestValidations } = require('../middlewares/str');
const request = require('supertest');

const router = Router();

router.get('/iecho', postRequestValidations, createString);
request(router)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

router.get('/iecho/all',getAllStrings);
request(router)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

module.exports = router;