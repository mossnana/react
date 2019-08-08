const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error to get users data : + ${err}`))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username})

    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(`Error to add users data : ${err}`))
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error to user data id ${req.params.id}`))
})

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => res.json(`Error to add user : ${req.params.id}`))
})

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username

        user.save()
        .then(() => res.json('Updated !!!'))
        .catch(err => res.json('Error ', err))
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router