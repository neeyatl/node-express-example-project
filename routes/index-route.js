/* eslint-disable no-undef */
const router = require('express').Router() // create an express router

// Create all your routes here
router.get('/send', (req, res) => { // Handle the get http request for the home page
    res.send('I am alive! Out of scratch, baby!<br><br><hr><br>routed from routes folder') // Send response  
})

router.get('/', (req, res) => {
    const data = {
        img_metadata: {
            profile_image: 'https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg',
            credit_link: 'https://www.britannica.com/biography/Elon-Musk',
            credit_text: 'Creator: Bryan Mitchell | Copyright: 2010 Getty Images'
        },
        greeting: 'Welcome to my first node page!',
        intro: 'Node js - Express example project',
        languages: [
            {name: 'Java', profeciency: 'Intermediate'},
            {name: 'Kotlin', profeciency: 'High'},
            {name: 'JavaScript', profeciency: 'Intermediate'},
            {name: 'Python', profeciency: 'Intermediate'},
            {name: 'C++', profeciency: 'beginner'}
        ]
    }
    
    res.render('home', data)
})

router.get('/query',(req, res) => { // A page whose data is dynamically updated based on the query inputs
    const data = {
        name: req.query.name,
        age: req.query.age,
        type: req.query.type
    }
    
    res.render('profile', data)
})

module.exports = router // export the router