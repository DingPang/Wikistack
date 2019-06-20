const express = require('express');
const router = express.Router();
const {Page} = require('../models');
const {addPage} = require('../views');
const {wikiPage} = require ('../views');

router.get('/', (req, res, next) => {

    res.send();
});

router.post('/', async (req, res, next) => {
    const page = new Page({
        title: req.body.title,
        content: req.body.content
    });

    try {
        await page.save();
        console.log(page);
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) {
        next(error)
    }
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
    try{
        const targetPage = await Page.findOne({where: {slug: `${req.params.slug}`}})
        res.send(wikiPage(targetPage));}
    catch (error) {
        next(error)
    }
  });  


module.exports= router;
