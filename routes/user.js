/* eslint-disable no-undef */
const router = require('express').Router() // create an express router

const users = {
    mattperry: {
        username: 'mattperry',
        img_link: '/images/mattperry.jpg',
        img_credits: 'Copyright Getty Images',
        name: 'Matthew Perry',
        company: 'Friends.org',
        languages: ['Java', 'JS', 'TS']
    },
    jessalba: {
        username: 'jessalba',
        img_link: '/images/jessicaalba.jpg',
        img_credits: 'Copyright KARWAI TANG, GETTY IMAGES',
        name: 'Jessica Alba',
        company: 'The Invisible Franchise',
        languages: ['Kotlin', 'Swift', 'Julia']
    },
    ashk: {
        username: 'ashk',
        img_link: '/images/ashk.jpg',
        img_credits: 'By Jessica Booth; Feb 5, 2019',
        name: 'Ashton Kutcher',
        company: 'Butterfly Effect Pvt. Ltd.',
        languages: ['C', 'go', 'python']
    },
    alexdaddario: {
        username: 'alexdaddario',
        img_link: 'https://cdn1.thr.com/sites/default/files/2020/04/gettyimages-957214798-h_2020.jpg',
        img_credits: 'Creator: Phillip Faraone  |  Credit: WireImage Copyright: 2018 WireImage',
        name: 'Alexandra Daddario',
        company: 'Hollywood',
        languages: ['Go', 'Python', 'Kotlin']
    }
}

router.get('/', (req, res) => {
    const keys = Object.keys(users) // Get all keys from the users object
    const list = []
    keys.forEach(key => { list.push(users[key]) }) // Exract data for each key from users
    const data = { users: list, timestamp: req.timestamp }
    
    res.render('users', data)
})

router.get('/:username',(req, res) => { // A page whose data is dynamically updated based on the param inputs
    const user = users[req.params.username]
    
    if(user == null){
        res.json({
            confirmation: 'failed',
            message: 'Username \'' + req.params.username + '\' not found'
        })
    } else {
        user.timestamp = req.timestamp // using middleware value
        res.render('user', user)
    }
})

router.post('/addprofile',(req, res) => {
    const body = req.body
    body.languages = body.languages.split(', ')
    
    users[body.username] = body
    
    res.redirect('/users/' + body.username)
})

module.exports = router // export the router