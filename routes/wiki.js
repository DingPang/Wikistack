const express = require('express');
const router = express.Router();
const {Page} = require('../views')
const {addPage} = require('../views')

router.get('/', (req, res, next) => {
    
    res.send();
});

router.post('/', (req, res, next) => {
    res.json(req.body)
    //res.send();
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
});



module.exports= router;