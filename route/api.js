const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const DL = require('../model/DL');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/create', (req, res) => {
  const adminUser = req.body.user;
  const adminKey = Math.random().toString(36).substring(7);
  
  const name = req.body.dlName;
  const descr = req.body.descrip;
  const mailAddr = req.body.addr;
  const private = req.body.privat;

});


router.post('/join/:listId', (req, res) => {
  const listId = req.params.listId;

  const userName = req.body.user;
  const userMail = req.body.mail;
  const userPrivate = req.body.private;
  const userKey = Math.random().toString(36).substring(7);
  
});

router.get('/leave/:listId/:key/:user', (req, res) => {
  const listId = req.params.listId;
  const key = req.params.key;
  const user = req.params.user;

});

router.get('/:listId/users', (req, res) => {
  const listId = req.params.listId;
});

module.exports = router;