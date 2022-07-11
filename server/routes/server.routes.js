const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

/*  router.get("/", (req, res) => {
    res.json({status: 'API works'});
})   */

router.get('/', user.getUsers);

router.post('/', user.createUser);

router.get('/username/:id', user.getUser);
/*
router.get('/:id', user.getUser);

router.put('/:id', user.editUser);

router.delete('/:id', user.deleteUser);  */

module.exports = router; 