/* eslint-disable no-undef */
const router = require('express').Router() // create an express router

router.get('/newsletter',(req, res) => {
    res.render('newsletter')
})

router.post('/post',(req, res) => {
    const body = req.body
    res.json({
        confirmation: 'success',
        data: {
            name: body.name,
            occupation: body.occupation
        }
    })
})

module.exports = router // export the router